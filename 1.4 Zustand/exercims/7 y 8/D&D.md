### Aqui
function crapsSixFace(): number {
    return Math.ceil(Math.random() * 6);
  }
vamos a simular un lanzamiento de dado, en el que .random nos va a dar un numero al azar entre en el 0 y menor al 1 y al multiplicar por 6 y al usar .ceil que nos ayuda a redondear hacia arriba, el numero que obtendremos siempre sera entre el 1y el 6.
   
   # const results = Array.from({ length: 4 }, () => crapsSixFace());
   aqui creamos un array con 4 elementos usando Array.from()
   y Utilizamos crapsSixFace() para llenar cada elemento con el resultado de un lanzamiento de dado.

  # results.sort((a, b) => b - a); 
Luego, ordenamos los lanzamientos de mayor a menor utilizando el método sort().
   
   # return results.slice(0, 3).reduce((sum, result) => sum + result, 0);

Tomamos los tres primeros elementos del array ordenado usando slice(0, 3), que nos da los tres mayores lanzamientos.y sumamos estos tres lanzamientos usando el método reduce() para obtener el puntaje total.

#
function calculateConstitutionModifier(constitution: number): number {
  return Math.floor((constitution - 10) / 2);
}
 aqui vamos a calcular la constitucion que segun las reglas se resta 10 y se divide entre 2 y el resultado si tiene decimal se lo redondea hacia abajo, eso segun las reglas
#
 function calculateHitpoints(constitution: number): number {
  const constitutionModifier = calculateConstitutionModifier(constitution);
  return 10 + constitutionModifier;
}
aqui vamos a calcular la los puntos de golpe segun la constitucion del personaje, segun la regla se lo calcula sumando 10 a la constitucion