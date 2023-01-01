import { sequence } from "@sveltejs/kit/hooks";
import {auth} from '$db/fake_auth';

// runs first
async function logger({event, resolve}) {
    const startTime = Date.now();
    // wait on response, run other hooks and load
    const response = await resolve(event);

    // console.log(`${Date.now() - startTime}ms - ${event.request.method} ${event.url.pathname}`);

    return response;
}

// run second
function authorize({event, resolve}) {
    // console.log('hi');
    event.locals.user = auth();

    return resolve(event);
}

export const handle = sequence(logger, authorize);

// intercepting fetch
// export const handleFetch = ({request, fetch}) => {
//     // console.log(request);
//     return fetch(request);
// }

// intercepting error
export const handleError = ({ error, event }) => {
    return {
        message: 'Oops, im intercepting in a hook',
        code: error.code
    }
}

// export async function handle({event, resolve}) {
    // event.locals.thisIsJustATest = 'test';
    // event.cookies.set('test', 'test');
    // console.log(event);
    // return resolve(event);
// }
