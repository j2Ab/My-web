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