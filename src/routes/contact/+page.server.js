import { fail } from "@sveltejs/kit";

// post request for route
export const actions = {
    email: async ({ locals, request }) => {
        if (!locals?.user?.roles?.includes('admin')) {
            return fail(401, {
                error_message: 'Unauthorized!'
            });
        }
        // console.log(request);
        const data = await request.formData();
        // console.log(data);

        const name = data.get('name');
        const email = data.get('email');
        const message = data.get('message');

        console.log(name, email, message);

        return {
            message: 'Email sent'
        }
    },
    test: () => {
        console.log('hit test action')
    }
};
