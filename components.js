const toggleButton = document.getElementsByClassName('toggle-button')[0]       // as toggle button return the array so we want the first element of the array
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click',()=> {
    navbarLinks.classList.toggle('active')
})