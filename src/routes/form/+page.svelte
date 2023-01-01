<script>
    import { applyAction, deserialize } from "$app/forms";
    import { invalidateAll} from "$app/navigation";

    export let form;

    $: console.log(form);

    // standard onSubmit event
    async function handleForm(event) {
        // this = form element
        const data = new FormData(this);
        // sending our own fetch post request
        const res = await fetch(this.action, {
            method: 'POST',
            body: data
        });
        // get data by deserializing it
        const result = deserialize(await res.text());
        console.log(result);

        // see if it was a success,
        // is success, reload all loaded data
        if (result.type === 'success') {
            // reloads all data
            await invalidateAll();
        }

        // populating form
        // will redirect if thrown redirect in action
        // show error page if thrown error
        await applyAction(result);
    }
</script>

{#if form?.error_message}
    <p>{form.error_message}</p>
{/if}

{#if form?.message}
    <p>{form.message}</p>
{:else}
    <form action="/contact?/email" on:submit|preventDefault={handleForm}>
        <label>Name: <input type="text" name="name" id="name" required /></label>
        <label>Email: <input type="email" name="email" id="email" required /></label>
        <label>Message: <textarea name="message" id="message" required></textarea></label>

        <button type="submit">Send email</button>
    </form>
{/if}

<style>
    form {
        display: flex;
        gap: 20px;
        flex-direction: column;
        padding: 2rem;
    }

    label {
        display: block;
    }

</style>
