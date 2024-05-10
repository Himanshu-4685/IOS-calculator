const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelector('.signs');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');
    

let firstvalue = "";
let isFirstvalue = false;
let secondvalue = "";
let isSecondvalue = false;
let sign = "";
let resultvalue = 0;


for(let i=0; i< numbers.length; i++) {
    numbers[i].addEventListener('click', (e) =>{
        let atr = e.target.getAttribute('value');
        if(!isFirstvalue === false){
            getFirstvalue(atr)
    }
    if(isSecondvalue == false){
        getSecondvalue(atr);
    }
})
}

function getFirstvalue(el){
    result.innerhtml = "";
    firstvalue += el;
    result.innerhtml = firstvalue;
    firstvalue = +firstvalue;

}

function getSecondvalue(el){
    if(firstvalue != "" && sign != ""){
        secondvalue +=el;
        result.innerhtml = secondvalue;
        secondvalue = +secondvalue;

    }
}

function getsign() {
    for(let i=0; i< sign.length; i++){
        sign[i].addEventListener('click', (e)=>{
            sign = e.target.getAttribute('value');
            isFirstvalue = true;
    })
}
}

getsign();
 equals.addEventListener('click',()=>{
    result.innerHTML="";
    if(sign=== "+"){
        resultvalue= firstvalue + secondvalue;
        }else if(sign==='-'){
            resultvalue = firstvalue - secondvalue;  
        } else if(sign === '*'){
             resultvalue = firstvalue * secondvalue;
             }  else if(sign ==="/"){
                 if(secondvalue!=0)
                     resultvalue = firstvalue / secondvalue;
                 else alert("Error! Division by zero");
         }
         result.innerHTML=resultvalue;
         firstvalue = resultvalue;
         secondvalue ="";
         checkresultlenght();

    }
) ;

function checkresultlenght(){
    resultvalue = JSON.stringify(resultvalue);
     if(resultvalue.length>=8){
        resultvalue=JSON.parse(resultvalue);
        result.innerHTML=resultvalue.toFixed(5);

     }

}

negative.addEventListener('click',()=>{
    result.innerHTML="";
    if(firstvalue!=""){
        resultvalue= -firstvalue;
        firstvalue= resultvalue;

    }
    if(firstvalue !="" && secondvalue !=""  && sign !=""){
        resultvalue=-resultvalue;
    }

    result.innerHTML=resultvalue;

})

percent.addEventListener('click',()=>{
    result.innerHTML="";
    if(firstvalue!=""){
        resultvalue= firstvalue/100;
        firstvalue= resultvalue;

    }
    if(firstvalue !="" && secondvalue !=""  && sign !=""){
        resultvalue=resultvalue/100;
    }

    result.innerHTML=resultvalue;

})
clear.addEventListener('click',()=>{
    result.innerHTML=0;

    firstvalue = "";
 isFirstvalue = false;
  secondvalue = "";
 isSecondvalue = false;
 sign = "";
 resultvalue = 0;

})
