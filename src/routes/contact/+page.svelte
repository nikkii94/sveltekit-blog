<script>
    import { enhance } from "$app/forms";

    export let form;

    $: console.log(form);
</script>

{#if form?.error_message}
    <p>{form.error_message}</p>
{/if}

{#if form?.message}
    <p>{form.message}</p>
{:else}
    <form use:enhance={({ form, data, action, cancel }) => {
        // form => form element
        // data => FormData object
        // action => url form posts to,
        // cancel => function that cancels form submitting
        console.log(form, data, action)

        return ({ result, update}) => {
            // result => 'ActionResult' - type: success / failure, etc
            // update => function that runs all of the default use:enhance
            update();
        }
    }}
          action="/contact?/email"
          method="POST">
        <!-- Action = route + ?/ + action_name -->
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
