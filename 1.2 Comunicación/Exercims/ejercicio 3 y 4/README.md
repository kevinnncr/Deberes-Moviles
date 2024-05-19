# explicacion exercims numero 3
## resitor duo
#   const [color1, setColor1] = useState<string>('');
  # const [color2, setColor2] = useState<string>('');
  aqui vamos a almacenar lo valores de los colores de las resistencias 
##   const [result, setResult] = useState<number | null>(null);
aqui vamos a almacenar el valor del resultado

##   const getColor = (color: string): number | null => {
en toda esta funcion es para convertir el color en el su respectivo numero, por ejemplo Red va a ser 2

# default:return null;
y aqui es por si es que ponen un color que no esta , va a devolver null.

 ## const calculateResult = () => 
  vamos a calcular el valor de las resistencias

## const value1 = getColor(color1);
## const value2 = getColor(color2);
aqui obtenemos el valur numerico de la restencia 

## if (value1 !== null && value2 !== null) {
   aqui verificamos si cada valor es valido y no es nulo

      
## setResult(value1 * 10 + value2);
lo que hacemos aqui es multiplicar el valor 1 por 10 y le sumamos el valor2 y asi por ejemplo si ponemos red seria 2*10= 20 mas el valor2, quedaria 22 y asi obtenemos lo que nos pide el ejercicio
    } else {
      setResult(null);
    }
  

  