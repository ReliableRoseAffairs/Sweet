document.addEventListener('DOMContentLoaded', function () {
    // Toggle Navigation Menu
    const menuToggle = document.getElementById('menu-toggle');
    menuToggle.addEventListener('click', function () {
        document.body.classList.toggle('menu-open');
    });

    // Learn More Buttons
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn, .learn-more-link, .learn-more-btn1');
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior of the link/button
            alert("Learn More button clicked!"); // You can replace this with your desired action
        });
    });

    // Sign Up Buttons
    const signUpBtns = document.querySelectorAll('.main-btn');
    signUpBtns.forEach(btn => {
        btn.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior of the link/button
            alert("Sign Up button clicked!"); // You can replace this with your desired action
        });
    });

    // Open Account Button
    const openAccountBtn = document.querySelector('.btn');
    openAccountBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default behavior of the link/button
        alert("Open Account button clicked!"); // You can replace this with your desired action
    });

    // FAQ Accordion
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h3 a');
        const answer = item.querySelector('p');

        question.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior of the link
            const isOpen = item.classList.contains('open');

            faqItems.forEach(item => {
                item.classList.remove('open');
            });

            if (!isOpen) {
                item.classList.add('open');
            }
        });
    });

    // Add any other JavaScript functionality you need for your website here
});