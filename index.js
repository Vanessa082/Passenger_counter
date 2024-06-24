const contEl = document.getElementById('count-el');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

let count = 0;

incrementBtn.addEventListener('click', () =>{
   count++
   contEl.innerText = count
})

decrementBtn.addEventListener('click', () =>{
  count--
  contEl.innerText = count
})

console.log(contEl)