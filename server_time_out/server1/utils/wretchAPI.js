
const wretch = require("wretch")

const wAPI = (url)=>{
    return wretch(url)
    .get()
    .setTimeout(1000)
    .notFound(error => { throw error; })
    .unauthorized(error => { throw error; })
    .error(418, error => { throw error;} )
    .res(response => {
        console.log(response)
        return response
    })
    .timeout(err =>  { throw err;} )
    .catch(error => {  throw error; })
}

module.exports = {
    wAPI
}