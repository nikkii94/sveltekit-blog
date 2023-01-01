<script>
    import '$db/start';
    import { navigating, page, updated, getStores } from '$app/stores';

    export let data;

    $: console.log($navigating, $page);

    let latestEpisode;

    $: ({latestEpisode} = data)
    // this is equivalent to const { latestEpisode, allEpisode } = data;
</script>

<h1>Welcome to {data.hello}</h1>

<p>Latest Syntax Episode:</p>

<h3>{latestEpisode.title}</h3>

<p>{latestEpisode.displayDate}</p>

<style>
    h1 {
        font-size: 2.5rem;
    }

    p {
        text-decoration: underline;
    }
</style>
