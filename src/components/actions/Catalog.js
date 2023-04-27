import axios from 'axios'

export const GetCatalog = () => {
    return axios.get(`http://77.91.78.85/api/v1/categories/sctructures/`)
}

