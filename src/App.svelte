<script>
	import Login from "./pages/Login.svelte";
	import Main from "./pages/Main.svelte";
	import NotFound from "./pages/NotFound.svelte";
	import Signup from "./pages/Signup.svelte";
	import Write from "./pages/Write.svelte";
  import Router from 'svelte-spa-router'
  import './css/style.css'
  import {user$} from './store'
	import { GoogleAuthProvider, getAuth, signInWithCredential } from "firebase/auth";
	import { onMount } from "svelte";
	import Loading from "./pages/Loading.svelte";
	import Mypage from "./pages/Mypage.svelte";
  let isLoading = true
  const auth = getAuth()
  const checkLogin =async() => {
    const accessToken = localStorage.getItem('accessToken')
  if(!accessToken) return (isLoading=false)
    const credential = GoogleAuthProvider.credential(null,accessToken);
    const result= await signInWithCredential(auth, credential)
    const user = result.user
    user$.set(user)
    isLoading = false
  }
  const routes = {
    '/': Main,
    '/signup': Signup,
    '/write': Write,
    '/my': Mypage,
    '*':NotFound
  }
 onMount(()=>checkLogin())
</script>
{#if isLoading}
<Loading/>
{:else if !$user$}
<Login/>
{:else}
<Router {routes}/>
{/if}

