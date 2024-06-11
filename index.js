var tablinks = document.getElementsByClassName("tabs-link");
var tabcontents = document.getElementsByClassName("tab-contents");    

function opentab(tabname){
    for (const tablink of tablinks) {
        tablink.classList.remove("active-link")
    }
    for (const tabcontent of tabcontents) {
        tabcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-content');
}

const TextH1 = document.querySelector('#embedit');
const charaterStrings= ["Trust Me", "Have Faith", "Believe Me" ,"I won't"];
let index = 0;
let charaterIndex  = 0;

update();


function update(){
    
charaterIndex++;
TextH1.innerText = `${charaterStrings[index].slice(0,charaterIndex)}`;

if(charaterIndex === charaterStrings[index].length){
    index++;
    charaterIndex = 0;
}
if(index === charaterStrings.length)
{
    index = 0;
}

setTimeout(update, 200);
}

const closeE1 = document.querySelector(".stylee");
const menuE1 = document.querySelector(".menu");
const tabsE1 = document.querySelector(".tabs");

menuE1.addEventListener("click" ,() => {
    tabsE1.style.right = "13px";
});

closeE1.addEventListener("click" , ()=>{
    tabsE1.style.right = "-200px";
}); 

const getimgE1 = document.querySelector("#getimg");
let buttonE1 = document.querySelector(".getrollnumber");
let rollnumber;
buttonE1.addEventListener("click", ()=>{
rollnumber = window.prompt("Type your bsf : roll number last 3 digits");
if(rollnumber == 558 || rollnumber == 559 ||rollnumber == 560 ||rollnumber == 570 ||rollnumber == 571 ||rollnumber == 572 ||rollnumber == 573 ||rollnumber == 574 || rollnumber == 575 || rollnumber == 576 || rollnumber == 577 || rollnumber == 578 || rollnumber == 583 ||rollnumber == 584) {
getimgE1.src = `images/tarki.png`;
} 
else if(rollnumber == NaN || rollnumber == 0){
    getimgE1.src = `images/backprofile.png`;
}else
{
getimgE1.src = `https://ums.uoel.edu.pk/admin_asset/images/student_images/2304/colleges/bsf23008${rollnumber}.jpg`;
}
}); 


