const input = document.querySelector('.new-task-input');
const button = document.querySelector('.new-task-button');
const div = document.querySelector('.tasks-container');




button.addEventListener('click', () => {
    const newLi = document.createElement('li');
    const newImg = document.createElement('img')

    if (input.value != '') {
        newImg.setAttribute('src', 'trash-regular-24.png');
        newLi.innerHTML = input.value;
        newLi.classList.add('li-task')
        newImg.classList.add('img-task')

        newImg.addEventListener('click', () => {
            newLi.innerHTML = '';
            newLi.classList.toggle('li-task')
            newImg.style.display = 'none';
        })

        newLi.appendChild(newImg)
        div.appendChild(newLi)
        input.setAttribute('placeholder', ' Tarefa para ser feita...');
        input.classList.replace('error', 'branco')
        input.value = '';

    } else {
        input.setAttribute('placeholder', ' Escreva uma tarefa para ser enviada');
        input.classList.replace('branco', 'error')
    }

})
