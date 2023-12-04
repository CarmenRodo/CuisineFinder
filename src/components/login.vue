<script setup>

</script>

<template>
  <section class="hero is-fullheight">
    <div class="hero-body has-text-centered">
      <div class="login">
        <h2 class="title">Login</h2>
        <form>
          <div class="field">
            <div class="control">
              <input class="input is-medium is-rounded" type="email" placeholder="hello@example.com" autocomplete="username" required />
            </div>
          </div>
          <div class="field">
            <div class="control">
              <input class="input is-medium is-rounded" type="password" placeholder="**********" autocomplete="current-password" required />
            </div>
          </div>
          <br />
          <button class="button is-block is-fullwidth is-warning is-medium is-rounded" type="submit">
            Login
          </button>
        </form>
        <br>
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <a href="#">Forgot Password?</a>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <a href="#">Create an Account</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-body {
  justify-content: center;
}
</style>