

let baseUrl = '';

if (process.env.NODE_ENV === 'testing') {
    baseUrl = "http://101.34.234.17:9096/customer"
} else if (process.env.NODE_ENV === 'production') {
    baseUrl = "http://101.34.234.17:9096/customer"

} else {
    baseUrl = "http://101.34.234.17:9096/customer"

}



export { baseUrl } 