const signUpButton = document.getElementById('signUpButton');
const signUp = document.getElementById('signUp');

signUpButton.addEventListener('click', () => {
    signUp.style.display = 'block';
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});
