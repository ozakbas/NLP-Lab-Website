const navSlide = () =>{
    const burger = document.querySelector(".burger")
    const nav = document.querySelector(".nav-element")

    burger.addEventListener('click', () => {

        nav.classList.toggle("nav-clicked")
    });
}
navSlide();