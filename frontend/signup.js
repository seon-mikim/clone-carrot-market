const formEl = document.querySelector('#signup-form')
const validatePassword = () => {
	const formData = new FormData(formEl)
	const password1 =formData.get('password')
	const password2 = formData.get('password2')
	if (password1 === password2) return true
	else return false
}
const handleSubmit = async(event) => {
	event.preventDefault()
	const formData = new FormData(formEl)
	const sha256Password = sha256(formData.get('password'))
	const infoDivEl = document.querySelector('#info')
	formData.set('password', sha256Password )
	if (validatePassword()) {
	
		const res = await fetch('/signup', {
			method: 'POST',
			body: formData
		})
		const data = await res.json()
		if (data === "200") {
				alert('회원가입에 성공했습니다.')
				window.location.pathname='/login.html'
		}

	} else {
		infoDivEl.innerText = '비밀번호가 같지 않습니다.'
		infoDivEl.style.color = 'red'
	}
}

formEl.addEventListener('submit', handleSubmit)