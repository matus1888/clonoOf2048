let right=(a)=>{
    // console.log("пришло в right()"+a)
    let sumA=0;
    for (let i=0; i<a.length; i++){
        sumA+=a[i]
    }
    let cycle=(x)=>{
    for (let i=0; i<a.length; i++){
        if(a[i]===0&&a[i+1]){
            a[i]=a[i+1]
            a[i+1]=0
            i=0
        }
    }
    return x
    }
    cycle(a)
    while(a[0]===0&&sumA!==0){
       cycle(a)
    }
    // console.log('вышло из right'+ a)
    return a
}
let equals=(a)=>{
    // console.log('пришло   в  equals()'+a)
    for (let i=0; i<a.length; i++){
        if(a[i+1]&&a[i]===a[i+1]){
            a[i]= a[i]+a[i+1]
            a[i+1]=0
        }
    }
    // console.log('вышло из equals'+ a)
    return a
}
export const fullOp=(a)=>right(equals(right(a)))

let getX=(C)=>Math.ceil(Math.random()*C)
export let getNext=(massive)=>{
    let m=massive
    let x=0
    console.log("пришел массив"+m)
    for(let i=0;i<m.length; i++ ){
        if(m[i]===0){
            x=x+1
        }
    }
    console.log('Посчитали что нулей в массиве='+x)
    let rnd=getX(x)
    console.log("rnd="+rnd)
    let count=0
    for (let j=0;j<m.length;j++){

        if(m[j]===0){
            count=count+1
        }
        if(count===rnd){
            m[j]=2
            console.log('заменили m['+j+']')
        }
    }
    return m
}