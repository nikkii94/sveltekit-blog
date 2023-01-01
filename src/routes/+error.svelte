<script>
    import { page } from '$app/stores';
    import svg from '$img/undraw_page_not_found_re_e9o6.svg';

    $: console.log('page', $page);
</script>

<div class="">
    <h1>Oops!</h1>
    <h3>{$page.status}</h3>
    <p>{$page.error?.message}</p>

    {#if $page.status === 404}
        <img alt="Post not found" src={svg} />
    {/if}
</div>

<style>
    div {
        text-align: center;
    }

    img {
        max-width: 50%;
        padding: 1rem;
    }
</style>
