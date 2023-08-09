
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


const renderData = (data) => {
	const mainEl = document.querySelector('main')
		const listEl = data.reverse().map(async(dataList) => {
			const res = await fetch(`/images/${dataList.id}`)
			const imageData = await res.blob()
			const url = URL.createObjectURL(imageData)
			const listItemEl = document.createElement('div')
			listItemEl.classList = 'item-list'
			listItemEl.innerHTML = /*html*/`
				<div class="item-list__img">
					<img src=${url} alt="">
			  </div>
			<div class="item-list__info">
				<div class="item_list__info-title">
					${dataList.title}
				</div>
				<div class="item_list__info-meta">
					${dataList.place} ${calcTime(dataList.insertAt)}
				</div>
				<div class="item_list__info-price">
					${dataList.price}원
				</div>
			</div>
		</div>
			`
		return listItemEl
		})
		
		Promise.all(listEl).then(items => {
        mainEl.append(...items);
    });

}




const fetchData = async () => {
	const res = await fetch('/items')
	const data = await res.json()

	renderData(data)
}

fetchData()