//Inputs
const val1 = document.querySelector('#val1');
const val2 = document.querySelector('#val2');
const val3 = document.querySelector('#val3');
const valX = document.querySelector('#valX');

for(const element of document.getElementsByTagName("input")){
  element.addEventListener('keyup', (e)=>{
    if(val1.value && val2.value && val3.value){
      const a = parseFloat(val1.value);
      const b = parseFloat(val2.value);
      const c = parseFloat(val3.value);

      const x = (c*a)/b;

      valX.value = x;
      valX.classList.add('result');
    } else{
      valX.classList.remove('result');
      valX.value = 'X';
    }
  });
}