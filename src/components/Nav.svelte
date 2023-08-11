	<script>
		export let location;
		const moveToHome = () => {
			window.location.hash = '/'
		}
		const moveToMypage =()=> {
			window.location.hash = '/my'
		}
	</script>
	
	<footer>
		<div class="footer-block">
			<button class="footer-icon" on:click={moveToHome}>
				{#if location ==='home'}
				<img src="assets/fill-home.svg" alt="home">
				{:else}
					<img src="assets/home.svg" alt="home">
				{/if}
				<div class="footer-text">홈</div>
			</button>
			<div class="footer-icon">
				<img src="assets/newspaper.svg" alt="동네생활">
				<div class="footer-text">동네생활</div>
			</div>
			<div class="footer-icon">
				<img src="assets/pin.svg" alt="내 근처">
				<div class="footer-text">내 근처</div>
			</div>
			<div class="footer-icon">
				<img src="assets/chat.svg" alt="채팅">
				<div class="footer-text">채팅</div>
			</div>
			<button class="footer-icon" on:click={moveToMypage}>
				{#if location ==='my'}
				<img src="assets/fill-user.svg" alt="나의 당근">
				{:else}
				<img src="assets/user.svg" alt="나의 당근">
				{/if}
				<div class="footer-text">나의 당근</div>
			</button>
		</div>
	</footer>