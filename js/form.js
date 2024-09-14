// create function to get get all the user input values 
const formEl = document.querySelector(".form")
const userNameEl = document.getElementById("username")
const titleEl = document.getElementById("title")
const contentEl = document.getElementById("content")

function getData(event) {
    event.preventDefault()
    console.log(userNameEl.value)

localStorage.setItem("username",userNameEl.value)
localStorage.setItem("title",titleEl.value)
localStorage.setItem("content",contentEl.value)
window.location.href = 'blog.html';

}

formEl.addEventListener("submit",getData)





