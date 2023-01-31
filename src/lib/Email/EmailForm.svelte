<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    function handleClick(){
        dispatch('close');
    };

    const submitForm = async(event) => {
        const form = event.target;
        const data = new FormData(form);
        await fetch('/api/sendEmail', {
            method:'POST',
            body: data
        });
    }
</script>

    <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
    </div>

    <div class='btnClose absolute'>
        <button on:click={handleClick}>Close</button>
    </div>
    <form class='flexColumn padding' on:submit|preventDefault={submitForm}>
        <label for='mittente'>
            <span>Da:</span>
        </label>
        <input type='text' name='mittente' placeholder='Inserire la propria email'>
        <label for='destinatario'>
            <span>A:</span>
        </label>
        <input type='text' name='destinatario' value='JDpushandpull@gmail.com' readonly>
        <label for='oggetto'>
            <span>Oggetto</span>
        </label>
        <input type='text' name='oggetto'>
        <label for='testoEmail'>
            <span>Scrivere qui il testo dell'email</span>
        </label>
        <textarea name='testoEmail' class='testoEmail' placeholder="Scrivere Qualcosa..."></textarea>
        <button type="submit">Invia</button>
    </form>

<style>
    input,
    textarea{
        margin-bottom: 30px;
    }
    .padding{
        padding: 30px;
    }
    .testoEmail{
        height: 150px;
    }
    .btnClose{
        right: 0;
        margin-right: 30px;
    }
    
</style>