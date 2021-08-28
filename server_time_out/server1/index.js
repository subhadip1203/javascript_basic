// const { json } = require('express')
// const express = require('express')
// const timeout = require('connect-timeout');
// const app = express()

// const {API} = require('./utils/apiCalls')

// const haltOnTimedout = (req, res, next) => {
//     if (!req.timedout) {
//       next();
//     }
// }
// app.use(timeout('3s'))
// app.use(haltOnTimedout)
 
// app.get('/', function  (req, res) {
//     opt1= {
//         method: "get",
//         url: 'http://localhost:3001'        
//     }
//     API(opt1)
//     .then(data => {
//         res.send(data)
//     })
//     .catch((err)=>{
//         res.send(err)
//     })
    
// })

// app.get('/async', async function  (req, res) {
//      try {
//         opt1={
//             method: "get",
//             url: 'http://localhost:3001',
//         }
//         const data = await API(opt1,5)
//         res.send(data)
//     } catch (error) {
//         res.send(error)
//     } 
// })

// app.use((err, req, res, next) => {
//     res.status(408).send('timed out');
// })
 
// app.listen(3000, ()=>{ console.log("server running at port http://localhost:3000")})


const express = require('express');
const timeout = require('connect-timeout');
const app = express();
const {axiosAPI} = require('./utils/apiCalls')
const { wAPI } = require('./utils/wretchAPI')

// const haltOnTimedout = (req, res, next) => {
//   if (!req.timedout) {
//     next();
//   }
// }
// app.use(timeout('3s'))
// app.use(haltOnTimedout)


app.get('/', async (req, res, next) => {

    try {
        opt1={
            method: "get",
            url: 'http://localhost:3001',
        }
        const data = await API(opt1,5)
        res.send(data);
        // if (req.timedout) {
        //     next();
        // }
        // else {
        //     res.send(data);
        // }
    } catch (error) {
        res.send(error)
    } 
})

app.get('/to', async (req,res,next)=>{
    axiosAPI({
        method: "get",
        url: 'http://localhost:3001',
        timeout: 6000,
    })
    .then( data => res.send(data) )
    .catch(err => res.send(err))
    
    
})

app.get('/wo', async (req,res,next)=>{
    wAPI('http://localhost:3001')
    .then( data => res.send(data) )
    .catch(err => res.send(err))
    
    
})

// app.use((err, req, res, next) => {
//     res.send('timed out');
// })

app.listen(3000);