const crewnav = document.getElementById('crew-ul')
const li = crewnav.querySelectorAll('li')
const image = document.getElementById('crew-img')
const role = document.getElementById('role')
const crewname = document.getElementById('name')
const details = document.getElementById('details')

    li.forEach(item => {
    item.addEventListener('click', (e) => {
        li.forEach(item => {
            item.classList.remove('active')
        });
        item.classList.add('active')
    })
})

function showCrew(crew, name){
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        const res = data[crew]
        const index = res.findIndex((item) => {
            return item.name === name
        })
        image.src = data[crew][index].images.png
        role.innerHTML = data[crew][index].role
        crewname.innerHTML = data[crew][index].name
        details.innerText = data[crew][index].bio
    }) 
}