
function ConverterCelsius(){
    let valorElement = document.getElementById("txtCelsius");
    //let valorx = valorElement.value;
    //let valorFahr = parseFloat(valor);
    let valor = Number(valorElement.value);
    
    let vcelsius = (valor * 1.8) + 32; 
    
    let elementoResultCelsius = document.getElementById("result-c");
    let formatvalue = vcelsius.toFixed(1)
    let result = `${valor}°C equivale a ${formatvalue} °F`;
    elementoResultCelsius.innerHTML = result;

    txtCelsius.value = ""
}

function ConverterFa(){
    let valorElement = document.getElementById("txtFa");
    let valor = Number(valorElement.value);

    let vfahr = (valor - 32)  / 1.8;
 
    let elementoResultFahr = document.getElementById("result-fa");
    let formatvalue = vfahr.toFixed(1)
    let result = `${valor}°F equivale a ${formatvalue} °C`;
    elementoResultFahr.innerHTML = result;


    txtFa.value = "";
}

//função resultado

function exibiFa() {
    var x = document.getElementById("result-fa");
    if (x.style.display === "") {
      x.style.display = "block";
    } 
} 

function exibiCelsius() {
  var x = document.getElementById("result-c");
  if (x.style.display === "") {
    x.style.display = "block";
  } 
} 
