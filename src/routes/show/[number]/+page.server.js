import {error, redirect} from "@sveltejs/kit";
import { env } from "$env/dynamic/private";
import { LUT_API } from "$env/static/private";

console.log(LUT_API, env.LUT_API);

export async function load({fetch, params, setHeaders, locals}) {
    if (!locals?.user?.id) {
        throw redirect(307, '/');
    }

    const episodeRes = await fetch(`https://syntax.fm/api/shows/${params.number}`);
    const episode = await episodeRes.json();

    if (episode.message) {
        throw error(404, {
            message: episode.message
        })
    }

    setHeaders({
        'Cache-Control': 'max-age=3600' // 1h
    });

    // this will be accessed wit "export let data" in page.svelte
    return {
        episode,
        user: locals.user
    }
}
