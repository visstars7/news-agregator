import root from './conf'
import GET from './GET'

const GET_FILTERED_DATA = (keyword) => GET(root,`everything?q=${keyword}&language=id&apiKey=e190befedbfa49379c43c3d5a77c9eab`)

const GET_NEWS = () => GET(root,`top-headlines?country=id&apiKey=e190befedbfa49379c43c3d5a77c9eab`)

const API = {
    GET_FILTERED_DATA,
    GET_NEWS
}

export default API