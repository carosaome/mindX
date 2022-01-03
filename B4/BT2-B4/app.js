import Questions from "./conponents/question.js";


const app = document.getElementById('container')
const ques1 = new Questions(
    "What's your name", "dat"
)

const ques2 = new Questions(
    "How old are you", '18'
)


app.append(ques1.render(), ques2.render() )

