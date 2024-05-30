document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('focused');
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.classList.remove('focused');
            }
        });

        if (input.value !== '') {
            input.classList.add('focused');
        }
    });
});
