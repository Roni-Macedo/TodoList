const addTodoList = document.querySelector('.add-todos')
const filterTodoList = document.querySelector('.filter-todo input')
const boxTodo = document.querySelector('.box-todo')
const fieldSetTodo = document.querySelector('.fieldset-todo')

addTodoList.addEventListener('submit', event => {
  event.preventDefault()

  // .trim() remove espaços em brancos da string
  const inputValue = event.target.add.value.trim()

  if (inputValue.length) {
    boxTodo.innerHTML += `
    <fieldset class="fieldset-todo">
      <legend class="far fa-trash-alt delete"></legend>
        <p>${inputValue}</p>
    </fieldset>
  `
  }

  // Limpa o Input
  event.target.reset()

  // Deixa o scroll na parte de baixo
  boxTodo.scrollTop = boxTodo.scrollHeight
})

// Deixa o scroll na parte de baixo
boxTodo.scrollTop = boxTodo.scrollHeight

// Remove os Todos
boxTodo.addEventListener('click', event => {
  const clickElement = event.target
  if (Array.from(clickElement.classList).includes('delete')) {
    clickElement.parentElement.remove()
  }
})

// Filtrar todos
filterTodoList.addEventListener('input', event => {
  const inputValue = event.target.value.trim().toUpperCase()

  // pega todas fieldset filhos do boxTodo
  Array.from(boxTodo.children)
    // Filtra todo texto com o valor passado no input
    .filter(todo => !todo.textContent.toUpperCase().includes(inputValue))
    // add classe para esconder os todos diferentes do valor do input e so fica visivel o valor passado
    .forEach(todo => {
      todo.classList.add('hidden')
    })
  // retira a classe hidden quando o valor do input estiver vazio
  Array.from(boxTodo.children)
    .filter(todo => todo.textContent.includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
    })
})
