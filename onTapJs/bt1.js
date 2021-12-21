let arr =[]

function findEven(num){
    for(let i = 4 ; i < num ; i++){
        if (i % 2 == 0) {
            arr.push(i)
        }
    }
}

console.log(findEven(10),arr)