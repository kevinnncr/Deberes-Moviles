const calculateScore = (x: number, y: number): number => {
  const distance = Math.sqrt(x * x + y * y);
  if (distance > 10) {
    return 0;
  } else if (distance > 5) {
    return 1;
  } else if (distance > 1) {
    return 5;
  } else {
    return 10;
  }
};

Esta función toma las coordenadas x y y de un dardo como entrada y devuelve la puntuación basada en la distancia de ese punto al centro del objetivo, utilizando las reglas del juego de dardos que nos da el exercims.
La función utiliza la función Math.sqrt para calcular la distancia entre los puntos y luego compara esa distancia con los valores de distancia máxima permitidos.


## 
En el componente de función llamado DartGame.
Utiliza el hook useState para definir tres estados locales: x, y y score.
x y y almacenan las coordenadas del dardo, y score almacena la puntuación calculada.
Cuando el usuario cambia las coordenadas x o y en los campos de entrada, se actualizan los estados correspondientes utilizando la función setX y setY.
Cuando se hace clic en el botón "Calcular Puntuación", se llama a handleCalculate, que utiliza las coordenadas actuales del dardo (x e y) para calcular la puntuación utilizando la función calculateDartScore. Luego, establece la puntuación calculada en el estado score utilizando setScore.
Finalmente, el JSX renderiza un formulario simple que permite al usuario ingresar las coordenadas x e y, un botón para calcular la puntuación y un mensaje que muestra la puntuación calculada cuando está disponible.