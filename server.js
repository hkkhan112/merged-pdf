const express = require('express');
const app = express();
const fs = require('fs')
const port = 3000
const path = require('path')
const multer = require('multer')
const {mergedPDF} = require('./mergedPDF')
const upload = multer({dest: 'uploads/'})
app.use('/static', express.static('public'))
app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "temps/index.html"))
})
app.post('/merge', upload.array('pdfs', 2) ,async(req,res,next)=>{
    console.log(path.join(__dirname, req.files[0].path))
  let date = await mergedPDF(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path))
  res.redirect(`http://localhost:3000/static/${date}.pdf`)
})


app.listen(port, ()=>{
    console.log(`server is running at port ${port}`)
})