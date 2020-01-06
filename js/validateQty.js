$(function() {
  let range = document.querySelector('.range')
  let input = document.querySelector('#productQuantity')
  let value = input.value

  // Button events
  range.addEventListener('click', e => {
    if (e.target.className === 'add') {
      ;+value++
      input.value = value
    } else if (e.target.className === 'subtract') {
      if (value == 1) return
      value--
      input.value = value
    }
  })

  // Input events
  input.addEventListener('input', function() {
    if (
      isNaN(+input.value) ||
      +input.value == 0 ||
      input.value.startsWith('0')
    ) {
      input.style.borderColor = 'lightcoral'
    } else {
      input.style.borderColor = '#690f69'
    }
  })

  input.addEventListener('blur', function() {
    if (
      input.value == '' ||
      isNaN(+input.value) ||
      +input.value == 0 ||
      input.value.startsWith('0')
    ) {
      input.value = 1
    }
    input.style.borderColor = '#690f69'
  })
})
