
function exibiralerta(){
}


function  outrapagina(){
    window.location.href = 'index.html'
    
}
function mudarcor() {
  
    document.body.style.backgroundColor = '#001c41'
    var formulario = document.getElementById('meuform');
    if (formulario) {
        formulario.style.backgroundColor = '#2c00cc'
   }
  }
  function voltarcor() {

    document.body.style.backgroundColor = '#006eff'
    var formulario = document.getElementById('meuform');
    if (formulario) {
        formulario.style.backgroundColor = '#8442ff'
        }
  }
  function pagina2(){
    var login = document.getElementById("login").value 
    var password= document.getElementById("password").value 
    if(login == 'klaus' && password == '123'){
 window.location.href = "pagina1.html"
 
 }
 else{
    window.location.href = "index.html"
 }
    }
    
  
