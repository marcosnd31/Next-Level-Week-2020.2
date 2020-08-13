// Servidor
const express = require('express')
const server = express()

const {     
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClass
     
} = require('./pages')

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


// Início e configuração do servidor
server

// Receber os dados do req.body
.use(express.urlencoded({ extended: true}))

// configurar arquivos estáticos (css, imagens, scripts)
.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-class", saveClass)

.listen(5500)
