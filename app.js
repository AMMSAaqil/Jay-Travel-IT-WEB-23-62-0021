
// this is for read more option
const readMore= document.getElementById("Add012");
const readMore1=document.getElementById("Add013");
const readMore2=document.getElementById("Add014");

function add(){

    readMore.innerHTML+="<br><b> this is expended for article 1</b>";
    document.getElementById("r0").innerHTML="para 1 readed";
}

function add1(){

    readMore1.innerHTML+="<br><b>this is expended for article 3<b>";
    document.getElementById("r1").innerHTML="para 2 readed";

}

function add2(){

    readMore2.innerHTML+="<br><b>this is expended for article 3<b>"
    document.getElementById("r2").innerHTML="<p>para 3 readed</p>"
} 

// this is for email validation

const outPut1= document.getElementById("output1");
const savEd2= document.getElementById("saved2");
const email= document.getElementById("exampleFormControlInput1");
let emailValue='';


function emailValidation(){email.addEventListener('input',function(){
    emailValue=email.value;



})}





function saved1(){

    emailValidation();
    console.log(emailValue)
    if(emailValue){
        outPut1.innerHTML= " entered"
    }

    else{

        outPut1.innerHTML+="please enter";
        console.log("printed");
        console.log(emailValue)
    }


}



