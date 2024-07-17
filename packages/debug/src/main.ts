import { effect, ref } from '@vue/reactivity'
import './style.css'

const container = document.createElement('div')
const numDiv = document.createElement('div')
const btnElm = document.createElement('button')
numDiv.style.fontSize = '80px'

btnElm.textContent = "+1"


container.appendChild(numDiv)
container.appendChild(btnElm)
document.body.appendChild(container)

const num = ref(0)
btnElm.addEventListener('click', () => num.value = num.value + 1)

console.log(num.value);

effect(() => {
  console.log("effect");
  numDiv.textContent = num.value as unknown as string
})

