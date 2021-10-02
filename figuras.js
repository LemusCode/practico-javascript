//Codigo cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}
function areaCuadrado(lado) {
  return lado * lado;
}

//Codigo del triangulo
function perimetroTriangulo(lado1, lado2, base) {
  var suma = lado1 + lado2 + base;
  return suma;
}
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

//Codigo circulo
const PI = 3.1415; //Otra opcion es Math.PI

function diametroCirculo(radio) {
  return radio * 2;
}
function primertroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
function areaCirculo(radio) {
  return radio * radio * PI;
}

//funciones Cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado").value;

  const perimetro = perimetroCuadrado(input);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado").value;

  const area = areaCuadrado(input);
  alert(area);
}

//funciones triangulo
function calcularPerimetroTriagulo() {
  const lado1 = parseInt(document.getElementById("Lado1").value);
  const lado2 = parseInt(document.getElementById("Lado2").value);
  const base = parseInt(document.getElementById("Base").value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);

  alert(perimetro);
}
function calcularAreaTriangulo() {
  const base = document.getElementById("Base").value;
  const altura = document.getElementById("Altura").value;

  const area = areaTriangulo(base, altura);

  alert(area);
}
//funciones circulo
function calcularPerimetroCirculo() {}
function calcularAreaCirculo() {}
