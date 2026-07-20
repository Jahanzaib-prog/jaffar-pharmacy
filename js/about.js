const circles = document.querySelectorAll(".circle");

circles.forEach(circle=>{

let percent = circle.dataset.percent;

let degree = 0;

let target = percent * 3.6;

const number = circle.querySelector("span");

const animate = setInterval(()=>{

degree++;

circle.style.background =
`conic-gradient(#1DBD73 ${degree}deg,#e7eef4 ${degree}deg)`;

number.innerHTML = Math.floor(degree/3.6)+"%";

if(degree>=target){

clearInterval(animate);

}

},15);

});




const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollTopBtn.classList.add("active");

    }else{

        scrollTopBtn.classList.remove("active");

    }

});

scrollTopBtn.addEventListener("click", function(e){

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});