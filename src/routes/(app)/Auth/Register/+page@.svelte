<div class="bodyAuth">
  <div class="background">
    <div class="shape" />
    <div class="shape" />
  </div>
  <form action="?/register" method="POST">
    <h2>Registrati</h2>
    <p>Oppure <a href="/Login">fai il login</a></p>
    <div>
      <label for="name">
        <span>Nome</span>
      </label>
      <input type="text" name="name" placeholder="Username" />
    </div>
    <div>
      <label for="email">
        <span>E-mail</span>
      </label>
      <input type="text" name="email" placeholder="Email" />
    </div>
    <div>
      <label for="password">
        <span>Password</span>
      </label>
      <input type="password" name="password" placeholder="Password" />
    </div>
    <div>
      <label for="passwordConfirm">
        <span>Conferma Password</span>
      </label>
      <input
        type="password"
        name="passwordConfirm"
        placeholder="Conferma Password"
      />
    </div>
    <div>
      <button type="submit">Registrati</button>
    </div>
  </form>
</div>

<style>
  .bodyAuth {
    width: 100%;
    height: 100vh;
    background-color: #080710;
  }
  form {
    height: 620px;
    width: 400px;
    background-color: rgba(255, 255, 255, 0.13);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 10px;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
    padding: 0px 35px;
  }
  form * {
    font-family: "Poppins", sans-serif;
    color: #ffffff;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  form h2 {
    font-size: 32px;
    font-weight: 500;
    line-height: 32px;
    text-align: center;
  }
  label {
    display: block;
    margin-top: 20px;
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
    height: 200px;
    width: 200px;
    position: absolute;
    border-radius: 50%;
  }
  .shape:first-child {
    background: linear-gradient(#ff512f, #f09819);
    right: -70px;
    top: -80px;
  }
  .shape:last-child {
    background: linear-gradient(to left, #1845ad, #23a2f6);
    left: -60px;
    bottom: -80px;
  }
</style>
