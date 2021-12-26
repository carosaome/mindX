import Login from "./module.js";




let FullName = new Login.Login('FullName', 'text')
let Email = new Login.Login('Email', 'email')
let PassWord = new Login.Login('PassWord', 'password')

let passwordConfirn = new Login.Login('Confirn PassWord', 'password')
let btnRegister = new Login.BtnLogin('Register',"I've a account",'index.html')



let container =document.getElementById('container')



container.append(FullName.render(),Email.render(),PassWord.render(),passwordConfirn.render(),btnRegister.render())


