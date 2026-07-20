// =========================
// Professional FAQ Accordion
// =========================

const faqItems = document.querySelectorAll(".faq-item");

// Open first FAQ automatically
const firstItem = document.querySelector(".faq-item.active");

if (firstItem) {

    const answer = firstItem.querySelector(".faq-answer");

    answer.style.maxHeight = answer.scrollHeight + "px";

    firstItem.querySelector(".faq-question span").innerHTML = "−";

}

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    const answer = item.querySelector(".faq-answer");

    const icon = item.querySelector(".faq-question span");

    question.addEventListener("click", () => {

        // Close all other FAQs
        faqItems.forEach(faq => {

            if (faq !== item) {

                faq.classList.remove("active");

                faq.querySelector(".faq-answer").style.maxHeight = null;

                faq.querySelector(".faq-question span").innerHTML = "+";

            }

        });

        // Toggle current FAQ
        if (item.classList.contains("active")) {

            item.classList.remove("active");

            answer.style.maxHeight = null;

            icon.innerHTML = "+";

        }

        else {

            item.classList.add("active");

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.innerHTML = "−";

        }

    });

});


const scrollTopBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollTopBtn.classList.add("active");

    } else {

        scrollTopBtn.classList.remove("active");

    }

});

scrollTopBtn.addEventListener("click", function (e) {

    e.preventDefault();

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});