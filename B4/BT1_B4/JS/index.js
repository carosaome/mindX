import LoginScreen from "./comtainers/Login/index.js";
import RegisterScreen from "./comtainers/Register/index.js";
const app = document.getElementById('container')

const login = new LoginScreen()

const register = new RegisterScreen()
app.append(register.render())