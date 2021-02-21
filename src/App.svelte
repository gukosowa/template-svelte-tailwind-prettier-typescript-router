<div class="App h-screen flex flex-col">
  <Header />
  <div class="mt-16 bg-gray-200 flex-grow p-2">
    <Router {routes} restoreScrollState={true} on:routeLoaded={routeLoaded} />
  </div>
</div>

<script>
  import Header from '~components/Header.svelte'
  import Router from 'svelte-spa-router'
  import '~css/main.css'

  import Main from '~src/pages/Main.svelte'
  import { route } from '~src/store'

  const routes = {
    '/': Main,
  }

  function routeLoaded(event) {
    route.set(event.detail)
  }
</script>

<style>
</style>
