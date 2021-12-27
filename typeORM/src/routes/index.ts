import express = require('express');

const router = express.Router();

router.get('/api/client' , (req,res) => {
  res.send('hello ok')
})

export {router as clientRoutes}