<template>
    <div id="app">
      <h1>AXONRADiO</h1>
      <nav class="nav flex-column">
        <router-link to="/"><a class="nav-link active" href="#">Home</a></router-link>
        <router-link to="/mp3"><a class="nav-link" href="#">MP3 Player</a></router-link>
        <a class="nav-link" href="http://localhost:4000" >Login</a>
        <a class="nav-link" href="http://localhost:4000/logout">Logout</a>
        <a class="nav-link" href="http://localhost:4000/profile">My Profile</a>
      </nav>
    <div>
		<ais-index
			app-id="latency"
			api-key="3d9875e51fbd20c7754e65422f7ce5e1"
			index-name="bestbuy"
		>
			<ais-search-box></ais-search-box>
			<ais-results>
			<template slot-scope="{ result }">
				<h2>
				<ais-highlight :result="result" attribute-name="name"></ais-highlight>
				</h2>
			</template>
			</ais-results>
		</ais-index>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
  margin-top: 60px;
}

nav {
  text-align: left;
}
</style>
