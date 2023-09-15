const navtech = document.getElementById('ul-tech')
const li = navtech.querySelectorAll('li')
// content
const title_name = document.getElementById('tech-name')
const desc = document.getElementById('tech-description')
const img = document.getElementById('tech-img')
const desktop = window.matchMedia("(min-width: 1025px)")
li.forEach(item => {
    item.addEventListener('click', (e) => {
        li.forEach(btns => {
            btns.classList.remove('active')
        })
        item.classList.add('active')
    })
})

function showTech(category,name){
    try{
        fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            const res = data[category]
            const index = res.findIndex(item => {
                return item.name === name
            });
            title_name.innerHTML = res[index].name.toUpperCase()
            desc.innerHTML = res[index].description
            if(desktop.matches){
                img.src = res[index].images.portrait
            } else {
                img.src = res[index].images.landscape
            }
        })
    }
    catch(error){
        console.error("Something went wrong...")
    }
}
showTech('technology','Launch vehicle')