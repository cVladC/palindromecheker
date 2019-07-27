    let str = document.querySelector('#checker');
    const btn = document.querySelector('#btn');
    const linkCheck = document.querySelector('#link-check');
    const result = document.querySelector('#result')


    linkCheck.addEventListener('click', function focusInput(event) {
        document.querySelector('#checker').focus()
            //event.preventDefault()
    });

    btn.onclick = function check() {

        let a = str.value.replace(/_/g).match(/\w/g);
        let b = [];
        let check;

        for (let i = 0; i < a.length; i++) {
            b[i] = a[a.length - i - 1];

            if (a[i] !== b[i]) {
                check = 'false';
                break;
            } else {
                check = 'true';
            }
        }
        console.log(check)
        if (check === 'true') {
            result.textContent = 'Your string: ' + str.value + ' is a palindrome';
            result.style.backgroundColor = 'greenyellow';
        } else {
            result.textContent = 'Your string is not a palindrome';
            result.style.backgroundColor = '#ff7c70';
        }

        str.value = ' ';
    }