import axios from 'axios'

const GET = (root,endpoint) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${root}/${endpoint}`)
        .then(res => resolve(res))
        .catch(err => reject(err))
    }) 
    return promise
}

export default GET