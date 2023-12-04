<template>
        <section class="hero is-fullheight">
            <div class="hero-head has-background-warning">
              <nav class="navbar">
                <div class="container">
                  <div class="navbar-brand">
                    <routerLink to="/" class="navbar-item">
                      <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" alt="Logo">
                    </routerLink>
                    <span class="navbar-burger burger" data-target="navbarMenu" >
                      <span></span>
                      <span></span>
                      <span></span>
                    </span>
                  </div>
                  <div id="navbarMenu" class="navbar-menu">
                    <div class="navbar-end">
                      <span class="navbar-item">
                        <router-link to="/" class="button is-black is-outlined">
                          <span class="icon">
                            <i class="fa fa-home"></i>
                          </span>
                          <span>Home</span>
                        </router-link>
                      </span>
                      <span class="navbar-item">
                        <routerLink to="/about" class="button is-black is-outlined">
                          <span class="icon">
                            <i class="fa fa-superpowers"></i>
                          </span>
                          <span>Example</span>
                        </routerLink>
                      </span>
                      <span class="navbar-item">
                        <routerLink to="/Login">
                        <a href="" class="button is-black is-outlined">
                          <span class="icon">
                            <i class="fa fa-book"></i>
                          </span>
                          <span>Login</span>
                        </a>
                        </routerLink>
                      </span>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          <router-view/>
        </section>
</template>
<script>
export default {
    
}
</script>
<style lang="css">
    
</style>