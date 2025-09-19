const http = require('http')

const servidor = http.createServer(function (req, resp) {resp = '<html><head><title>Minha Api</title></head><body><h1>Meu servidor: Aluno</h1></body></html>'})

console.log('Servidor executando na porta 3000')
servidor.listen(3000)



