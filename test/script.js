const nav = document.querySelector('.navbar')
fetch('/test.html')
.then(res=>res.text())
.then(data=>{
    nav.innerHTML=data
})