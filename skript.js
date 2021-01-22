const ulList = document.querySelector('.marks')
const input = document.querySelector('.addInput')
const btn = document.querySelector('.add')
const error = document.querySelector('.errorMessage')
const numbers = /[0-9]/;
let numberI = 0;
const averanges = document.querySelector('.averanges')
const changeInfo = document.querySelector('.changeinfo')
let allValue = 0;
let flag = true;
setInterval(() => {
    if (flag === true) {
        changeInfo.textContent = 'Mark...';
        flag = false;
    }
    else {
        changeInfo.textContent = 'Number';
        flag = true;
    }
}, 5000)

const createMark = () => {
    const liList = document.createElement('li');
    const liMessage = document.createElement('b')
    const remButton = document.createElement('button');
    remButton.classList.add('rem')
    remButton.textContent = 'Remove'
    liMessage.textContent = `${input.value}`
    liList.appendChild(liMessage);
    liList.appendChild(remButton);
    ulList.appendChild(liList);
    console.log(`Stworzono ocene ${input.value}`);
    let intvalue = parseInt(input.value)
    numberI++;
    allValue += intvalue;
    averanges.textContent = (allValue / numberI).toFixed(2)
}

const checkMarkFunction = () => {
    if(input.value === '') {
        error.textContent = 'Wprowadz Liczbe';
        error.style.color = '#bccad6';
    }
    else {
        error.textContent = ''
        if(input.value.match(numbers)) {
            createMark()
        }
        else {
        error.textContent = 'Wprowadz Liczby! 0-9';
        error.style.color = '#bccad6';
        }
    }
}

btn.addEventListener('click', checkMarkFunction);

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('rem')) {
        e.target.closest('li').remove()
        numberI = numberI - 1;
        allValue = allValue - e.target.closest('li').firstChild.textContent
        Math.round(averanges.textContent = allValue / numberI);
    }
})