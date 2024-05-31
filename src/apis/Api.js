import axios from "axios";

// creating backend Config!
const Api = axios.create({
    baseURL : "http://localhost:5000",
    withCredentials : true,
    headers : {
        "Content-Type" : "application/json"
    }
})
// 1. State for all fetched products
const [products, setproducts ] = useState([]) // array

//2. Call API initially (page Load) - set all fetch products to 
   



// Test API
export const testApi = () => Api.get('/test')

// Register Api
export const registerUserApi = (data) => Api.post('/api/user/create', data)

// login api
export const loginUserApi = (data) => Api.post('/api/user/login', data)

//all product api


// http://localhost:5000/test