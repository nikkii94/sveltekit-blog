<script>
    export let episodes;
</script>

<p>All episodes:</p>
<nav>
    <ul>
        {#each episodes as episode}
            <li>
                <a href={`/show/${episode.number}`}>{episode.title}</a>
            </li>
        {/each}
    </ul>
</nav>

<style>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }

    li {
        line-height: 2;
        border-bottom: 1px solid #eee;
    }

    a {
        color: deeppink;
    }
</style>
