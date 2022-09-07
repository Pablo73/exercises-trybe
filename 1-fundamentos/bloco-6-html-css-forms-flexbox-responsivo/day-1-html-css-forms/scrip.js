function clear(event) {
    event.preventDefault();
}

window.onload =function () {
    const button = document.querySelector('#enviar');
    button.addEventListener('click', clear)   
};

function clearFields() {
    const formElements = document.querySelectorAll('input');
    const textArea = document.querySelector('textarea');
    for (let index = 0; index < formElements.length; index += 1) {
      const userInput = formElements[index];
      userInput.value = '';
      userInput.checked = false;
    }
    textArea.value = '';
  }
  window.onload = function () {
    const clearBtn = document.querySelector('#apagar');
    clearBtn.addEventListener('click', clearFields);
    const button = document.querySelector('#enviar');
    button.addEventListener('click', clear);
  };