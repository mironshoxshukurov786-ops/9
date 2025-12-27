let i = 0
let red = document.querySelector('.red')
let yellow = document.querySelector('.yellow')
let green = document.querySelector('.green')
setInterval(() => {
    if (i < 30) {
        console.log('Qizil', i);
        red.style.background = 'red'
        green.style.background = '#cfcfcfd7'
        red.textContent = 30 - i
        green.textContent = ''
    } else if (i < 40) {
        console.log('Sariq', i);
        yellow.style.background = 'yellow'
        red.style.background = '#cfcfcfd7'
        yellow.textContent = 40 - i
        red.textContent = ''
    } else {
        console.log('Yashil', i);
        green.style.background = 'green'
        yellow.style.background = '#cfcfcfd7'
        green.textContent = 70 - i
        yellow.textContent = ''

        if (i == 70) i = 0
    }
    i++
}, 100);