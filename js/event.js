let one = document.getElementById('one');
let button = document.getElementById('button');

button.addEventListener('click', function(){
    // one.style.backgroundColor = 'green';
    // one.style.color = 'white';
    // one.style.padding = '50px';

    one.classList.toggle('active')
})

let body = document.querySelector('body');


window.addEventListener('scroll', function(){
    if(window.pageYOffset > 100){
        body.classList.add('active');
    }else{
        body.classList.remove('active')
    }
})