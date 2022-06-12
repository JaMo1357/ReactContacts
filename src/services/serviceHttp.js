export function fetchContactsData() {
	return fetch('http://localhost:3001/contacts', {
		method: 'get',
		headers: {
			'content-type': 'application/json'
		}
	}).then(res => {
		// a non-200 response code
		if (!res.ok){
			// create error instance with HTTP status text
			const error = new Error(res.statusText);
			error.json = res.json();
			throw error;
		}

		return res.json();
	});
}