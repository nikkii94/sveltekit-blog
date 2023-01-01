export async function load({ fetch }) {
    const allRes = await fetch('https://syntax.fm/api/shows');
    const allEpisode = await allRes.json();

    return {
        allEpisode
    }
}
