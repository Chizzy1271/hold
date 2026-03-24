// DOM - Document Object Model using selector

let one = document.getElementById('one');
one.style.color = "blue";
one.style.backgroundColor = 'black';


// queryselector

let two = document.querySelector('.two');
two.style.color = "green"; 


// multiple element selector
// querySelectorAll

let all = document.querySelectorAll('ul li');
for(variable of all){
    variable.style.color = 'red';
}

// GET ELEMENT BY CLASS NAME

let p = document.getElementsByClassName('paragraph');

/// manipulating text using Javascript
// textContent
// innerText
// innerHtml

one.textContent = 'Aptech Owerri' //to change text content

// to change both the content and element

two.innerHTML = '<h6>ceejay<h6>';

// creating element  using javascript; 

let li = document.createElement('li');
li.textContent = 'Lagos';
let ul = document.querySelector('ul');
ul.appendChild(li) // 

let lagos = document.querySelectorAll('ul li');
for (change of lagos){
    change.style.color = 'red';
}

// adding attributes to an element

li.setAttribute('class', '');

// class list

one.classList.add('active');