import cal from "./cal.js"
class Couter {
    container;
    label;
    btnStart;
    btnStop;
    btnClear;
    counter;
    interval;
    check;
    constructor(id, name) {

        this.counter = 0;
        this.container = document.createElement('div');
        this.container.id = id

        this.label = document.createElement("div");
        this.label.classList.add('label')
        this.label.innerText = '00:00'

        this.btnStart = document.createElement("button");
        this.btnStart.addEventListener('click', this.handleStart)
        this.btnStart.classList.add('btn-primary','btn', 'start')
        this.btnStart.innerText = 'start'

        this.btnStop = document.createElement('button');
        this.btnStop.addEventListener('click', this.handleStop)
        this.btnStop.classList.add('btn-success','btn')
        this.btnStop.innerText = 'stop'

        this.btnClear = document.createElement('button')
        this.btnClear.addEventListener('click',this.handleClear)
        this.btnClear.classList.add('btn-danger','btn', 'stop')
        this.btnClear.innerText = 'Clear'


    }


    handleStart = () => {


        if (this.interval) {
        }
        else {
            this.interval = setInterval(() => {
                this.counter++
                this.label.innerText = cal(this.counter)
            }, 1000)
        }


    }




    handleStop = () => {
        clearInterval(this.interval)
        this.interval = null

    }

    handleClear = ()=>{
        this.handleStop();
        this.label.innerText = '00:00'
        this.counter = 0
    }

    render() {
        this.container.append(this.label, this.btnStart, this.btnStop, this.btnClear)
        return this.container;
    }

}

class stopAll extends Couter{
    btnStopAll;
    constructor(id, name){
    super(id,name)
        this.btnStopAll = document.createElement('button')
        this.btnStopAll.classList.add('btn-success','btn')
        this.btnStopAll.innerText = 'StopALl'
        this.btnStopAll.addEventListener('click',this.handleBtnStopAll)

    }
    handleBtnStopAll=()=>{
       let y = document.querySelectorAll('.stop')
       for(let i = 0; i <y.length; i++){
        y[i].click()
    }

    }
    render(){
        this.container.append(this.btnStopAll)
        return this.container
    }
}

class startAll extends Couter{
    btnStartAll;
    constructor(id, name){
    super(id, name)
        this.btnStartAll = document.createElement('button')
        this.btnStartAll.classList.add('btn-success','btn')
        this.btnStartAll.innerText = 'StartAll'
        this.btnStartAll.addEventListener('click',this.handleBtnStartAll)

    }
    handleBtnStartAll=()=>{
        let start = document.querySelectorAll('.start')
        for(let i = 0; i <start.length; i++){
            start[i].click()
        }
    }
    render(){
        this.container.append(this.btnStartAll)
        return this.container
    }

}

export default {Couter,stopAll,startAll}