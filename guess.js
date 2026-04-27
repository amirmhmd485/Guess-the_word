// name the page
document.title = "Guess The word";
// end name the page

//create Random Password
function GenerateRandomPassword(){
    let res = "";
    let random = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for(let i = 0 ; i< 6 ; i++){
        res += random[Math.floor(Math.random() * random.length)];
    }
    return res;
}
let randomPassword = GenerateRandomPassword();
// end create Random Password
//validate the inputs
const allInputs = document.querySelectorAll("input");
allInputs.forEach((input , i) => {
    input.addEventListener("keydown" , function(e) {
        if(input.value.length < 1){
            if(e.key.match(/[A-Z]/g) || e.key == "Backspace"){
                return e;
            }
            else{
                e.preventDefault();
            }
        }
        else{
            e.preventDefault();
        }
    })
})
allInputs.forEach((input , i) => {
    input.addEventListener("keydown" , function(e) {
        if(e.key == "Backspace"){
            if(i > 0){
                allInputs[i - 1].focus();
            }
        }
    })
})
const checkBtn = document.querySelector(".checkbtn");

allInputs.forEach((input , i) => {
    input.addEventListener("keyup" , function(e) {
        if(input.value.length > 0){
            if(i == 5 || i == 11 || i == 17 || i == 23 || i == 29){
                input.blur();
                checkBtn.click();
            }
            else{
                allInputs[i + 1].focus();
            }
        }
    })
})
//end the inputs


//focus in first Input while  loading page
window.addEventListener("load" , function(e){
    allInputs[0].focus();
})
//End focus in first Input while  loading page


//start validate inputvalues
const try1 = document.querySelectorAll("#t1 input");
const try2 = document.querySelectorAll("#t2 input");
const try3 = document.querySelectorAll("#t3 input");
const try4 = document.querySelectorAll("#t4 input");
const try5 = document.querySelectorAll("#t5 input");


function valdiate(input , i){
    if(input.value != ""){
        if(input.value == randomPassword[i]){
            input.style.backgroundColor = "green";
            input.style.borderColor = "white";
            input.style.color = "white";
        }
        else if(randomPassword.includes(input.value)){
            input.style.backgroundColor = "orange"
            input.style.borderColor = "white";
            input.style.color = "white";
        }
        else{
            input.style.backgroundColor = "gray";
            input.style.borderColor = "white";
            input.style.color = "white";
        }
    }
}
const message = document.querySelector(".message");
function validate1 (){
    let tries = [try1 , try2 , try3 , try4 , try5];
    for(let i= 0 ; i < tries.length ; i++){
        tries[i].forEach((input , i) => {
            valdiate(input , i)
        })
    }
}

checkBtn.addEventListener("click" , validate1);
//End validate inputvalues


//reset button
const resetBtn = document.querySelector(".resetbtn");
function ResetInputs(e){
    allInputs.forEach((input , i) => {
        input.value = "";
        input.style.cssText = "background-color : white; color : black , border: 5px solid black";
    })
    allInputs[0].focus();
}
resetBtn.addEventListener("click" , ResetInputs);
//End reset button