const image = document.getElementById('destination-img')
const planetname = document.getElementById('destination_name')
const description = document.getElementById('description')
const distance = document.getElementById('distance')
const traveltime = document.getElementById('travel_time')
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.getElementById('destination-ul')
    const li = nav.querySelectorAll('li')
    li.forEach(item => {
        item.addEventListener('click', (e) => {
            li.forEach(item => {
                item.classList.remove('active')
            });
            item.classList.add('active')
        })
    })
}); 

function showDestination(destination, to){
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        console.log(data[destination])
        const res = data[destination]
         const index =  res.findIndex(item => {
            return item.name === to
        })
        image.src = data[destination][index].images.webp
        planetname.innerHTML = data[destination][index].name.toUpperCase()
        description.innerHTML = data[destination][index].description
        distance.innerHTML = data[destination][index].distance
        traveltime.innerHTML = data[destination][index].travel
    })
}


