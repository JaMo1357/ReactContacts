export function fetchContactsData() {
	return fetch('http://localhost:3001/contacts', {
		method: 'get',
		headers: {
			'content-type': 'application/json'
		}
	}).then(res => {
		if (!res.ok){
			const error = new Error(res.statusText)
			error.json = res.json()
			throw error
		}

		return res.json()
	})
}