const express = require("express")
const app = express()
const http = require("http").createServer(app)
var readline = require('readline');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

var leitor = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

http.listen(process.env.PORT || "3000", () => {
  console.log("Calcule a disponibilidade do sistema.")
  const horasAno = 8760

  leitor.question("Quantidade de horas que o sistema ficou indisponível: ", function (answer) {
    const horasInd = answer
    const horasDis = horasAno - horasInd
    const disponibilidade = (horasDis / horasAno) * 100
    console.log(`\nA disponibilidade do seu sistema é de ${disponibilidade.toFixed(3)}%.`)
    leitor.close()
  })
})



