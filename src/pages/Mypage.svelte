<script>
	import Nav from "../components/Nav.svelte";
	import { user$ } from "../store";
  const logout =()=>{
		user$.set(null)
		localStorage.removeItem('accessToken')
	}
</script>
<div>My page</div>
<button on:click={logout}>로그아웃</button>
<Nav location='my'/>

<style>
	button{
		cursor: pointer;
		border :1px solid transparent;
		background-color: tomato;
		color: white;
		width: 200px;
		height: 50px;
		font-size: 16px;
		font-weight: 600;
		border-radius: 4px;
	}
</style>