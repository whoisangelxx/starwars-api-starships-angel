const starships = async()=>{
    let newShip = await fetch("https://swapi.dev/api/starships")
    let newShipData = await newShip.json();
    let finalData = newShipData.results
    let answer = finalData.map(star => `<li>name:${star.name}---model:${star.model}---films:${star.films}---dateCreated:${star.created}----<br><br>`)
    document.body.innerHTML = answer 
}
starships()



