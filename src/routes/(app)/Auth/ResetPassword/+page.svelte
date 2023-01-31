<script>
export let form;
</script>

<div>
    <h2>Reset Your Password</h2>
    <p>Ti invieremo un email con un link per resettare la tua password.</p>
</div>

<form action='?/resetPassword' method='POST'>
    <div>
        <label for='email'>
            <span>Email</span>
        </label>
        <input type='text' name='email'>
    </div>
    <div>
        <button type='submit'>Password Reset</button>
    </div>
    <div>
        <button type='submit'>Login</button>
    </div>
    {#if form?.success}
        <div>Il link è stato inviato</div>
    {/if}
</form>