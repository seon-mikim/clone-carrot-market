
const formEl = document.querySelector('#write-form')

const handleSubmit = async (event) => {
	event.preventDefault();
	const body = new FormData(formEl)
	body.append('insertAt', new Date().getTime())
	try {const response =await fetch('/items', {
		method: 'POST',
		body,
	})
			const res = await response.json()
	if (res === '201') window.location.pathname = '/'
	} catch(e) {
		console.error(e)
	}
  

	
}
formEl.addEventListener('submit', handleSubmit)