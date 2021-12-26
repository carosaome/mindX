class Login {

    containerRight;
    label;
    input;
    button;
    constructor(content, type) {
        this.containerRight = document.createElement('div')
        this.label = document.createElement('label');
        this.label.innerText = content
        this.input = document.createElement('input');
        this.input.type = type;


    }

    render = () => {
        this.containerRight.append(this.label, this.input);

        return this.containerRight
    }

}

class BtnLogin extends Login {
    btnLogin;
    hrefRegister;
    constructor(content,innerText,link) {
        super(content,innerText,link)
        this.btnLogin = document.createElement('button')
        this.btnLogin.innerText = content

        this.hrefRegister = document.createElement('a')
        this.hrefRegister.id = `href`
        this.hrefRegister.href = link
        this.hrefRegister.innerText = innerText
    }
    render = () => {
        this.containerRight.append(this.btnLogin, this.hrefRegister)
        return this.containerRight
    }



}
export default { Login, BtnLogin }
