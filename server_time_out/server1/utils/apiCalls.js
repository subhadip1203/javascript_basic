const axios = require('axios')

const axiosAPI = (options) =>{
    if (!options.timeout) {
        options.timeout = 2*1000
    }
    return axios(options)
    .then(res=> res.data)    
    .catch(function (error) {
        if (error.code === 'ECONNABORTED')
            throw 'connection timeout';
        else
            throw error;       
    })
}

module.exports = {
    axiosAPI
 }


// const requestWithTimeout = async(options, time) => {
//     return new Promise((resolve , reject)=>{  
//         // start setTimeOut for time miliseconds (like 3000 , 5000 , 25000) 
//         // if setTimeout function started before getting any API response , it will close the function     
//         setTimeout(()=>{
//             reject("Api call timeout")
//         },time)

//         //start the request-promise 
//         // if response comes before setTimeout , it will close the function
//         rp(options)
//         .then(function (repos) {
//             resolve(repos);
//         })
//         .catch(function (err) {
//             reject("Api call failed")
//         });
//     }) 
// }