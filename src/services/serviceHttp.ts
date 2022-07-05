export async function fetchContactsData() {
	const res = await fetch('http://localhost:3001/contacts', {
		method: 'get',
		headers: {
		'content-type': 'application/json'
		}
	})
	if (!res.ok) {
		const error = new Error(res.statusText)
		throw error
	}
	return await res.json()
}