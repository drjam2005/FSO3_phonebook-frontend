import axios from 'axios'

// const baseUrl = 'http://localhost:3001/persons'
const baseUrl = '/api/persons'

const getAll = () => {
	const response = axios.get(baseUrl).then( response => response.data)
	return response;
}

const create = (personData) => {
	const response = axios.post(baseUrl, personData).then(response => response.data);
	return response;
}

const deleteData = (personID) => {
	const response = axios.delete(`${baseUrl}/${personID}`).then(response => response.data);
	return response;
}

const updateUser = (personID, personData) => {
	const response = axios.put(`${baseUrl}/${personID}`, personData).then(response => response.data);
	return response;
}

export default {
	getAll,
	create,
	deleteData,
	updateUser
}
