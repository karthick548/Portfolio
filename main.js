var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

(function () {
    emailjs.init("p61WVdAInPg-lc42S");
})();

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    if (!form) {
        console.error("Contact form not found");
        return;
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        emailjs.sendForm(
            "service_ctb8nxd",
            "template_dbiba42",
            this
        ).then(
            function () {
                alert("Message sent successfully!");
                form.reset();
            },
            function (error) {
                console.error("FAILED:", error);
                alert("Failed to send message");
            }
        );
    });
});
