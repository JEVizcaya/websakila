document.getElementById("peliculas").addEventListener("click", function(){
    fetch("http://192.168.100.166/apisakila/peliculas/all")
    .then(response => response.json())
    .then(data => {
        let output = "<h2>Peliculas</h2>";
        data.forEach(function(pelicula){
            output += `
                <div>
                    <h3>${pelicula.title}</h3>
                    <p>${pelicula.description}</p>
                </div>
            `;
        });
        document.getElementById("contenido").innerHTML = output;
    });
});