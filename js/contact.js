const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const text =
`*New Contact Form Submission*

👤 Name: ${name}

📞 Phone: ${phone}

📧 Email: ${email}

📝 Subject: ${subject}

💬 Message:
${message}`;

    const whatsappNumber = "923075321582";

    const url =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    form.reset();

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