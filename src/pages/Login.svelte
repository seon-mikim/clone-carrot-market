<script>
	import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
	import { user$ } from "../store";
	const provider = new GoogleAuthProvider();
 
	const auth = getAuth();
	const loginWithGoogle= async() => {
		try{
			const result = await signInWithPopup(auth, provider)
			const credential = GoogleAuthProvider.credentialFromResult(result);
    	const token = credential.accessToken;
			const user = result.user
			user$.set(user)
			localStorage.setItem('accessToken', token)
		}catch(error){
			console.log(error)
		}
	
	}
	
</script>

<div>
	<div>{$user$?.displayName}</div>
	<div>로그인하기</div>
	<div>{$user$}</div>
	<button class="login-btn" on:click={loginWithGoogle}>
		<img class="google-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/588px-Google_%22G%22_Logo.svg.png" alt=""/>
		<div>
			Google로 시작하기
		</div>
	</button>
</div>


<style>
	.login-btn{
		width: 200px;
		height: 50px;
		background-color: transparent;
		border: 1px solid gray;
		border-radius: 4px;
		display: flex;
		justify-content: space-around;
		align-items: center;
		margin: 10px 0;
	}

	.google-logo{
		width: 20px;
	}
</style>