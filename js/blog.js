const username=localStorage.username 
const title = localStorage.title
const content = localStorage.content
const blogPost = document.getElementById("blog-post") 

const blog = document.createElement("div")
const titleEl= document.createElement("h1")
const contentEl = document.createElement("p")
const userNameEl = document.createElement("h2")

titleEl.textContent=title
contentEl.textContent=content
userNameEl.textContent=username

blog.append(titleEl,contentEl,userNameEl)

blogPost.append(blog)