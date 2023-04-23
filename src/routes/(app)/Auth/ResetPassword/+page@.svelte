<script>
  export let form;
</script>

<div class="bodyAuth relative">
  <div class=" background">
    <div class="shape" />
    <div class="shape" />
  </div>
  <div>
    <h2>Reset Your Password</h2>
    <p>Ti invieremo un email con un link per resettare la tua password.</p>
  </div>

  <form action="?/resetPassword" method="POST">
    <div class="h-full w-full flex flex-col p-4">
      <div>
        <label for="email">
          <span>Email</span>
        </label>
        <input type="text" name="email" />
      </div>
      <div>
        <button type="submit">Password Reset</button>
      </div>
      <div>
        <button type="button"
          ><a href="/Auth/Login" class="!text-[#080710]">Torna alla Login</a
          ></button
        >
      </div>
      {#if form?.success}
        <div class="mt-2">Il link è stato inviato</div>
      {/if}
    </div>
  </form>
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  :global(body) {
    margin: 0;
    padding: 0;
    height: 100%;
  }
  .bodyAuth {
    width: 100%;
    height: 100vh;
    background-color: #080710;
  }
  form {
    width: 430px;
    height: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  }
  form * {
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  label {
    display: block;
    margin-top: 30px;
    font-size: 16px;
    font-weight: 500;
  }
  input {
    display: block;
    height: 50px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.07);
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;
    font-size: 14px;
    font-weight: 300;
  }
  ::placeholder {
    color: #e5e5e5;
  }
  button {
    margin-top: 50px;
    width: 100%;
    background-color: #ffffff;
    color: #080710;
    padding: 15px 0;
    font-size: 18px;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }
  .background {
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  .background .shape {
    height: 150px;
    width: 150px;
    position: absolute;
    border-radius: 50%;
  }
  .shape:first-child {
    background: linear-gradient(#1845ad, #23a2f6);
    left: -80px;
    top: 0px;
  }
  .shape:last-child {
    background: linear-gradient(to right, #ff512f, #f09819);
    right: -80px;
    bottom: 0px;
  }
</style>
