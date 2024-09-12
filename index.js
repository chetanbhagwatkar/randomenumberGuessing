
let numEl = document.getElementById("Num");

let resultEl = document.getElementById("result");

let RandomNum = Math.ceil(Math.random()*100);

let countNum = document.getElementById("count");

let countEl=0;

function onChange(){
    
    console.log(RandomNum);

    let numValue = parseInt(numEl.value);

    if(RandomNum === numValue){
    

        resultEl.textContent = " Congratulations,Found Exact Number";
        countEl = countEl+1;
        countNum.textContent = "your trying time is --- > "+countEl;
        PageReload();
        
        
    } else if(RandomNum > numValue){
        resultEl.textContent = " Sorry,Number is less";
        countEl = countEl+1;
    }else if(RandomNum < numValue){
        resultEl.textContent = " Sorry,Number is large";
        countEl = countEl+1;
    }else{
        resultEl.textContent = " Sorry,Invalid Num";
        countEl = countEl+1;

    }
}

function PageReload(){
    setTimeout(()=>{
        location.reload(true);
                    
    },5000)
}

