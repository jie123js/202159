
// const fs = require('fs')
// const path = require('path')
// let text = ''
// let textPth = path.join(__dirname,'../','/text.txt')
// console.log(textPth);
// fs.readFile(textPth,'utf-8',(err,data)=>{
// console.log(data);

// text = data
// text+=1
// console.log(__dirname);
// fs.writeFile('./text.css',text,(err)=>{
//     // console.log(err);
//     console.log(text);
//     console.log('ok');
// })
// })



const http = require('http')
const fs = require('fs')
const server = http.createServer()
const path = require('path')
server.on('request',(req,res)=>{
    
    if (req.url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
      } else {
        //     /index.html
        //     /index.css
        //     /index.js
        fpath = path.join(__dirname, '/clock', req.url)
      }
    fs.readFile(fpath,'utf8',(err,dataStr)=>{
        console.log(fpath);
        if(err) console.log(err);
        //C:\Users\ZJcoder\Desktop\git note\Study-notes\学习总结之node\node代码\file\clock\index.html
        //C:\Users\ZJcoder\Desktop\git note\Study-notes\学习总结之node\node代码\file\clock\index.html
        // if(req.url==='/'||req.url==='/index.html'){
        //     content = '<h1>首页</h1>'
        // }else if(req.url==='/about.html'){
        //     content = '<h1>关于</h1>'
        // }
      //  res.setHeader('Content-Type','text/html; charset=utf-8')
        res.end(dataStr)
    })
    let content = '404 not found'
    // if(req.url==='/'||req.url==='/index.html'){
    //     content = '<h1>首页</h1>'
    // }else if(req.url==='/about.html'){
    //     content = '<h1>关于</h1>'
    // }
    
    // res.end(content)
})

server.listen('80',()=>{
    console.log(__dirname);
    console.log('服务器在期待');
})