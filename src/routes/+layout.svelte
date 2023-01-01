<script>
    import Header from "./Header.svelte";
    import Footer from "./Footer.svelte";
    import './global.css';
    import Episodes from "./Episodes.svelte";
    import {navigating} from "$app/stores";
    import {browser, building, dev, version} from "$app/environment";
    import {env} from "$env/dynamic/public";
    import {PUBLIC_LUT_PUB_KEY} from "$env/static/public";
    // lifecycle, afterNavigate, beforeNavigate
    // disableScrollHandling -> disables sveltekit built in scroll handling
    // goto -> programmatically routing
    // invalidate -> load functions on active page re-run
    // invalidateAll -> causes all load functions to re-run
    // preloadCode -> load js code for given routes
    // preloadData -> load data from load functions for given routes
    import {goto} from "$app/navigation";

    // browser -> boolean, if app is running in browser,
    // building -> boolean, true if currently build for production
    // dev -> boolean, if in dev environment
    // version -> config.kit.version.name
    export let data;

    console.log(env, PUBLIC_LUT_PUB_KEY, browser, building, dev, version);

    $: ({allEpisode} = data)
</script>

<Header/>

{#if !!$navigating}
    <div class="loading">Loading...</div>
{:else}
    <main>
        <div>
            <button on:click={() => goto('/contact')}>Change page</button>
            <slot></slot>
        </div>
        <aside>
            <Episodes episodes={allEpisode}/>
        </aside>

    </main>
{/if}

<Footer/>

<style lang="postcss">
    main {
        display: grid;
        grid-template-columns: 30vw 1fr;
        gap: 20px;
    }

    aside {
        /*background: #e0e0e0;*/
        order: -1;
        padding: .5rem;
        /*border: 1px solid #e1e1e1;*/
    }

    .loading {
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dodgerblue;
        color: white;
    }
</style>
