<script>
	import { getDatabase, ref, onValue } from "firebase/database";
	import { onMount } from "svelte";
	import Nav from "../components/Nav.svelte";
	

	let hour = new Date().getHours()
	let min = new Date().getMinutes()

const calcTime = (timeStamp) => {
	const curTime = new Date().getTime() - 9 * 60 * 60 * 1000
	const time = new Date(curTime - timeStamp)
	const hour = time.getHours()
	const minute = time.getMinutes()
	const second = time.getSeconds()
  
	if(hour > 0) return `${hour} 시간 전`
	if(minute > 0) return `${minute} 분 전`
	if (second >= 0) return `${second} 시간 전`
	else '방금전'
}

$: items = []

	const db = getDatabase();
	const itemsRef = ref(db, 'items/');
	onMount(()=>

		onValue(itemsRef, (snapshot) => {
		const data = snapshot.val();
		items = Object.values(data).reverse()
	})
	)
</script>

<header>
		<div class="info-bar">
			<div class="info-bar__time">{hour}:{min}</div>
			<div class="info-bar__icons">
				<img src="assets/cart-bar.svg" alt="cart-bar">
				<img src="assets/wifi.svg" alt="wifi">
				<img src="assets/battery.svg" alt="battery">
			</div>
		</div>
		<div class="menu-bar">
			<div class="menu-bar__location">
				<div>
					역삼1동
				</div>				
				<img src="assets/arrow-down.svg" alt="arrow-down">
			</div>
			<div class="menu-bar__icons">
				<img src="assets/search.svg" alt="search">
				<img src="assets/bar.svg" alt="bar">
				<img src="assets/bell.svg" alt="bell">
			</div>
		</div>
	</header>
	<main>
		{#each items as item}
		<div class="item-list">

			<div class="item-list__img">
						<img src={item.imageUrl} alt={item.title}>
			</div>
				<div class="item-list__info">
					<div class="item_list__info-title">
						{item.title}
					</div>
					<div class="item_list__info-meta">
						{item.place} {calcTime(item.insertAt)}
					</div>
					<div class="item_list__info-price">
						{item.price}원
					</div>
				</div>
		</div>
		{/each}
		<a href="#/write" class="write-btn">+ 글쓰기</a>
	</main>
<Nav location='home'/>

	<style>

	</style>