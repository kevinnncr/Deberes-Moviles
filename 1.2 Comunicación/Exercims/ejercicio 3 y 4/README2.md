# explicacion exercims numero 3
## resitor three

este ejercicio es basicamente igual solo que agregamos un valor mas que es el value3 y
teniamos que hacer que el valor de ese color se tranforme en ceros por ejemplo si red es 2 , serian dos ceros.
##  const [color3, setColor3] = useState<string>('');
agregamos esto para almacernar el valor de 3

## if (value1 !== null && value2 !== null) {
      const zeros = value3 !== null ? value3 : 0;
      setResult((value1 * 10 + value2) * Math.pow(10,  zeros));
    } else {
      setResult(null);
    }
  };
  y aqui agregamos un const zeros, que basicamente dice que si value3 no es igual a un valor nulo va a seguir con la funcion, pero si es null va a devolver 0

  una vez que seguimos con el mismo proceso que es multiplicar value1 por 10 y sumar el valu2 dos, lo que hacemos es multiplicar este resultado con Math.pow lo que hara que podamos multiplicar en este caso 10 elevado a la cantidad de ceros y tambien usamos esto por que se mueve el valor decimal  hacia la izquierda y agrega ceros segun la cantidad del tercer coolor