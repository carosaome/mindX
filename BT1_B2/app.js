import cal from "./cal.js"
const $ = document.querySelector.bind(document); let result = $('#result')
const app = {
    handle: function () {
       

        let add = $('#add')
        let sub = $('#sub')
        let multi = $('#multi')
        let divide = $('#divide')
        let clear = $('#clear')

        add.addEventListener('click', () => {
            app.calculate(cal.add)
          
        })
        sub.addEventListener('click', () => {
            app.calculate(cal.sub)
                })
        multi.addEventListener('click', () => {
            app.calculate(cal.multi) 
        })
        divide.addEventListener('click', () => {
            app.calculate(cal.divide)

        })
        clear.addEventListener('click',()=>{
            $('#number-1').value = ''
            $('#number-2').value = ''
            $('#result').innerText =''
        })

        
    },
    calculate: function(callback){
            let num1Value = $('#number-1').value
            let num2Value = $('#number-2').value
            let isNaN1 = !isNaN(num1Value)
            let isNaN2 = !isNaN(num2Value)

            if(isNaN1 && isNaN2){
                  result.innerText = callback(+num1Value, +num2Value)
            }
            else {
                alert('Giá trị nhập vào phải là số')
            }
        }
}

app.handle()