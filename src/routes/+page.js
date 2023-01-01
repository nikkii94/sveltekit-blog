export async function load({ fetch, parent }) {
    // const parentData = await parent();
    // console.log(parentData);

    const latestRes = await fetch('https://syntax.fm/api/shows/latest');
    const latestEpisode = await latestRes.json();

    // console.log(latestEpisode);
    // this will be accessed wit "export let data" in page.svelte
    return {
        hello: 'world',
        latestEpisode,
    }
}
