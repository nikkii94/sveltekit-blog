<script>
    export let data;
</script>


<p>{data.user.email}</p>

<h2>{data.episode.title}</h2>

<section>
    {@html data.episode.html}
</section>

<style>
    section {
        padding: 0;
    }
</style>
