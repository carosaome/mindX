class Questions{
    container;

    answers;
    questions;
    ques;
    addIcon;
    subIcon


    check;
    constructor(questions,answers){
        this.check = true

        this.container = document.createElement('div')
        this.container.classList.add('container')

        this.questions = document.createElement('div')
        
        this.questions.addEventListener('click', this.handleAnswers)
        this.questions.classList.add('container-questions')

        this.ques = document.createElement('span')
        this.ques.innerText = questions
        this.ques.classList.add('ques')
        this.addIcon = document.createElement('img')
        this.addIcon.src ='../assets/add.svg'
        this.subIcon = document.createElement('img')
        this.subIcon.src ='../assets/sub.svg'


        this.answers = document.createElement('div')
        this.answers.innerText = answers
        this.answers.classList.add('anw')
    }

    handleAnswers =()=>{
        
        if(this.check){
            this.addIcon.remove()
            this.questions.append(this.subIcon)
            this.container.append(this.answers)
            this.check = false
        }
     else{
            this.subIcon.remove()
            this.questions.append(this.addIcon)
            
            this.answers.remove()
            
            this.check = true
     }

    }

    render =()=>{
        this.questions.append(this.ques, this.addIcon)
        this.container.append( this.questions);
        return this.container
    }
}

export default Questions