import Login from "./module.js";


let login = new Login.Login('Email', 'text')
let login2 = new Login.Login('PassWord', 'password')
let btnLogin = new Login.BtnLogin('Login','Create Account', 'register.html')



let container =document.getElementById('container')

container.innerHTML =''

container.appendChild(login.render())

container.appendChild(login2.render())
container.appendChild(btnLogin.render())


