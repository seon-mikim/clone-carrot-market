const formEl = document.querySelector('#login-form')
let accessToken
const handleSubmit = async(event) => {
	event.preventDefault()
	const formData = new FormData(formEl)
	const sha256Password = sha256(formData.get('password'))
	
	formData.set('password', sha256Password )
		const res = await fetch('/login', {
			method: 'POST',
			body: formData
		})
	const responseData = await res.json()
	accessToken = responseData.access_token
	window.localStorage.setItem('token', accessToken)
	alert('로그인되었습니다.!!')
  window.location.pathname ='/'
// 	const getItemBtn = document.createElement('button')
// 	getItemBtn.innerText = '상품 가져오기'
// 	getItemBtn.addEventListener('click', async () => {
// 		const res = await fetch('/items', {
// 			headers: {
// 				'Authorization': `Bearer ${accessToken}`
// 			}
// 		})
// 		const data = await res.json()
// 		console.log(data)
// 	})
// 		infoDivEl.appendChild(getItemBtn)
}

formEl.addEventListener('submit', handleSubmit)