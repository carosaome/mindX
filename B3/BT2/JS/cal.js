export default cal

function cal(time){
   let  sec = time % 60;
    let min = Math.floor(time /60)
    if (sec < 10){
        sec = "0" +sec;
    }
    if(min < 10){
        min = "0" +min
    }
    return `${min}:${sec}`
}
