/*
Case sensitive
por Tag: getElementByTagName()
por id: getElementById()
por Nome: getElementsByName()
por classe: getElementsByClassName()
por seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '80%'
email.style.width = '80%'
assunto.style.width = '80%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if(nome.value.length <3) {
        txtNome.innerHTML = 'Por gentileza insira um nome válido'
      txtNome.style.color = 'red'
  }else {
      txtNome.innerHTML = 'Show, nome válido'
      txtNome.style.color = 'green'
      nomeOk = true
}
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'Email inválido'        
    txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'Super, email válido'
        txtEmail.style.color = 'green'
        emailOk = true
    
}
}
function validaAssunto() {
let txtAssunto = document.querySelector('#txtAssunto')
if(assunto.value.length >= 100){
    txtAssunto.innerHTML = 'Tamanho não suportado, por favor digite no máximo 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display = 'block'
}else {
    txtAssunto.style.display = 'none'
    assuntoOk = true
}
}
function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Obrigade, formulário enviado com sucesso')
}else {
    alert('Por favor preencha o formulário corretamente')
}
}
function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'

    }
function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.height = '250px'

}