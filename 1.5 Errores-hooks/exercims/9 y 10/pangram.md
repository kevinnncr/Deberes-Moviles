# inputSentence: Almacena la oración ingresada por el usuario.
# isPangram: Almacena un booleano que indica si la oración es un pangrama o no.

# checkPangram: Esta función toma una oración como entrada y devuelve true si la oración es un pangrama y false si no lo es. Primero, define una cadena que contiene todas las letras del alfabeto. Luego, convierte la oración a minúsculas y elimina cualquier carácter que no sea una letra. Luego, itera sobre cada letra del alfabeto y verifica si todas están presentes en la oración.

# handleChange: Se ejecuta cada vez que el usuario modifica el contenido del campo de entrada. Actualiza el estado inputSentence con el valor del campo de entrada.

# handleSubmit: Se ejecuta cuando se envía el formulario. Previene el comportamiento predeterminado del formulario y llama a la función checkPangram con la oración ingresada por el usuario como argumento. Luego, actualiza el estado isPangram con el resultado de la verificación.