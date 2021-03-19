/*-------- SHOW CURRENT PAGE ---------*/
function showCurrent(id){
    var currentPage = document.querySelector(".current") ;
    if(currentPage !==null) {
        currentPage.classList.remove("current");
        document.querySelector(id).classList.add("current");
    }
};

/*-------- VARIABLES ---------*/

const adn1 = document.getElementsByName("adn1");

function adn1Resultado(){
    var adn1_value = adn1[0].value.split("");
    var adn1_array= [];
    var nombreAA=[];
    adn1_value.forEach(letter => {
        if (letter == "A" || letter == "T" || letter == "C" || letter == "G") {
            if (letter == "A") {
                adn1_array.push("U");

            } else if (letter == "T") {
                adn1_array.push("A");

            } else if (letter == "C") {
                adn1_array.push("G");

            } else if (letter == "G") {
                adn1_array.push("C");

            }
        }else{
            adn1_array.push(1);
        }
    });
    var codonNuevo = adn1_array.join("");


    aminoacidos.forEach(amino =>{
        if(amino.codon == codonNuevo){
            nombreAA.push(amino.nombre);
        }
    })
    

    if(codonNuevo.includes(1)){
        alert("Hay letras que no corresponden a un codón, volvé a escribirlo!")

    } else if(codonNuevo==""){
        alert("Por favor escribí un codón")
    } 
    else{
        return document.getElementById("resultado").innerHTML="<h1>"+codonNuevo+"</h1><br> <h3> Este codón forma el aminoacido: "+nombreAA.join("")+"</h3>";
    }

}


const adn2 = document.getElementsByName("adn2");
const arn_m = document.getElementsByName("arn_m");
const arn_t = document.getElementsByName("arn_t");




