const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

const update=()=>{

const target=+counter.dataset.target;

const current=+counter.innerText;

const increment=target/100;

if(current<target){

counter.innerText=Math.ceil(current+increment);

setTimeout(update,20);

}else{

counter.innerText=target+"+";

}

}

update();

});


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-question span");

    question.addEventListener("click", () => {

        // Close all other FAQs
        faqItems.forEach(otherItem => {

            if (otherItem !== item) {

                otherItem.classList.remove("active");

                otherItem.querySelector(".faq-answer").style.maxHeight = null;

                otherItem.querySelector(".faq-question span").textContent = "+";

            }

        });

        // Toggle current FAQ
        if (item.classList.contains("active")) {

            item.classList.remove("active");
            answer.style.maxHeight = null;
            icon.textContent = "+";

        } else {

            item.classList.add("active");
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = "+";

        }

    });

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