import axios from 'axios';

export function getCompanies() {
        return axios.get('http://localhost:3001/companies')
            .then(response => response.data);
}

export function getCompaniesByCity(query) {
    return axios.get('http://localhost:3001/companies?q='+query)
        .then(response => response.data);
}
