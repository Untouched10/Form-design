document.getElementById('Signup-form').addEventListener('submit', function(event){
    event.preventDefault();

    const email = document.getElementById('email');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const confPass = document.getElementById('confPass');
    const address = document.getElementById('address');

    if(password.value != confPass.value){
        alert('passwords donot match.');
        return;
    }

    alert('form submitted sucessfully');
})