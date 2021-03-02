
function calculateIMC(){

    // Get the input values
    let height = parseFloat(document.getElementById("height-val").value);
    let weight = parseFloat(document.getElementById("weight-val").value);

    // Reset the input fields
    // document.getElementById("imc-data").reset();

    if(!height || !weight){
        // Trigger the alert
        document.getElementsByTagName("section")[0].classList.remove("active");
        document.getElementById("alert").style.display="block";
    } else{
        // Calculate the variables
        let imc = weight/(height**2);
        let p = (imc-18.5)/(40-18.5)*100;
        let cat = getCat(imc);

        // Manage the visibility of results or alert
        document.getElementById("alert").style.display="none";
        document.getElementsByTagName("section")[0].classList.add("active");

        // Change the position of the needle
        if (p >= 0 && p <= 100 ) document.getElementById("needle-container").style.width=p+"%";
        else if (p < 0) document.getElementById("needle-container").style.width="0%";
        else if (p > 100) document.getElementById("needle-container").style.width="100%";

        // Set the text
        document.getElementById("imc-num").innerHTML = "Tu IMC es " + imc.toFixed(2);
        document.getElementById("imc-cat").innerHTML = "Eso significa que tu categoría es: " + cat;
    }
    return false;
}

function getCat(imc){
    let cat;
    if(imc < 18.5) cat = "Bajo de Peso"
    else if (imc < 25) cat = "Peso Saludable"
    else if (imc < 30) cat = "Sobrepeso"
    else if(imc < 35) cat = "Obesidad Grado 1"
    else if (imc < 40) cat = "Obesidad Grado 2"
    else cat = "Obesidad Mórbida"
    return cat;
}