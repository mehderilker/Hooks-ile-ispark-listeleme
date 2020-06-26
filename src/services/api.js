import axios from 'axios'

const api = axios.create({
    baseURL: 'https://data.ibb.gov.tr/api/3/action/datastore_search?resource_id=c3eb0d72-1ce4-4983-a3a8-6b0b4b19fcb9&limit=200'
});

export default api
