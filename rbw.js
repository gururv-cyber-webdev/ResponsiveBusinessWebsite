document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let feedback = document.getElementById('formFeedback');

    if (name === "" || email === "" || message === "") {
        feedback.textContent = "Please fill in all fields.";
    } else {
        feedback.textContent = "Thank you for your message!";
    }
});
