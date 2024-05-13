## EJERCICIO 5 LEAP YEAR
const Leapyear = () => {
  const [year, actuYear] = useState<string>("");
  const [isleap, actuLeap] = useState<boolean | null>();

  
Este  componente Leapyear. Utiliza dos estados locales: year, que almacena el año ingresado por el usuario como una cadena, y isleap, que almacena un valor booleano que indica si el año es bisiesto o no.
## 
const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    actuYear(value);
    actuLeap(checkLeap(Number(value)));
  };

  En este vamos a controlar el estado del año ingresado, para determinar si es biciesto o no , actualizando en consecuencia al estado  de isleap

  ##
  const checkLeap = (year: number): boolean => {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};
Esta función llamada checkLeap toma un año como entrada y devuelve un valor booleano indicando si el año es bisiesto o no, siguiendo las reglas estándar de calendario gregoriano.


## EJERCICIO 6 ARN

const ToRna = (sequence: string): string => {
  let rnaSequence = '';

  for (let i = 0; i < sequence.length; i++) {
    const nucleotide = sequence[i];

    if (nucleotide === 'G') {
      rnaSequence += 'C';
    } else if (nucleotide === 'C') {
      rnaSequence += 'G';
    } else if (nucleotide === 'T') {
      rnaSequence += 'A';
    } else if (nucleotide === 'A') {
      rnaSequence += 'U';
    } else {
      throw new Error('Invalid input DNA.');
    }
  }

  return rnaSequence;
};
Esta es una función llamada ToRna que toma una cadena de ADN como entrada y devuelve una cadena de ARN. Recorre cada carácter de la secuencia de ADN y, dependiendo del carácter, lo reemplaza por su correspondiente en ARN (G => C, C => G, T => A, A => U). Si encuentra un carácter que no representa una base de ADN, lanza un error.
##
const RnaConverter: React.FC = () => {
    const [dnaSequence, setDnaSequence] = useState('');
    const [rnaSequence, setRnaSequence] = useState('');
  
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputSequence = event.target.value;
      setDnaSequence(inputSequence);
      const result = ToRna(inputSequence);
      setRnaSequence(result);
    }

    Este es un componente de función llamado RnaConverter. Utiliza dos estados locales (dnaSequence y rnaSequence) para almacenar la secuencia de ADN ingresada por el usuario y la secuencia de ARN resultante después de la conversión