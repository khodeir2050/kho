const btns = document.querySelectorAll('.btn');
btns.forEach((item) => {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.classList.toggle('change')
    })
})



// the navbar
const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee']
let i = 0
Array.from(document.querySelectorAll('.nav-link')).forEach(item => {
    item.style.cssText = `background-color:${colors[i++]}`
})



const container = document.querySelector('.container')
const openNav = document.querySelector('.open-navbar-icon')
const closeNav = document.querySelector('.close-navbar-icon')

openNav.addEventListener('click',()=>{
    container.classList.add('change')
})

closeNav.addEventListener('click',()=>{
    container.classList.remove('change')
})