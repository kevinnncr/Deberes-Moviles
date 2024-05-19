## Los Errores mas comunes en principiantes al momento de usar Hooks

## 1 No importar el Hook que vamos a usar.

import { useState } from 'react';

# 2 No poner el Hook dentrode una función.
Ejemplo

const [count, setCount] = useState(0); 

function MyHook() {

  const [count, setCount] = useState<number>(0);
  return <div>{count}</div>;
}

## 3 Dejar pasar las dependencias del 'useEffect'

function MyExample() {
  useEffect(() => {
    console.log('mas triste que 3 tigres');
  });

  useEffect(() => {
    console.log('triste solo como 1 tigre');
  }, []); 
}

## 4 Mala actualización del estado.

import { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
   
     count += 1; 

    
    setCount(count + 1);
  }

  return <button onClick={handleClick}>{count}</button>;
}

## 5 No limpiar los efectos de manera correcta.

import { useEffect } from 'react';

function MyExample() {
  useEffect(() => {
    const handleResize = () => console.log('Resized');
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
}

## 6 Usar muchos hooks en un solo componente

import React, { useState, useEffect } from 'react';

function MyExample() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [isOnline, setIsOnline] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
  }, []);

  return <div>{count} {name} {isOnline ? 'Online' : 'Offline'} {data}</div>;
}

export default MyExample;


## 7 Un mal manejo de los custom hooks

import React, { useState, useEffect } from 'react';

function MyExample() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <div>{data ? data.message : 'Loading...'}</div>;
}

export default MyExample;

## 8 Metodos de actualizacion de estado

import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState<number>(0);

  function increment() {
    setCount(count + 1); // Esto puede fallar si múltiples actualizaciones se agrupan
  }

  return <button onClick={increment}>{count}</button>;
}

export default MyComponent;

# 9 No manejar de forma correcta los eventos asíncronos.

import React, { useState, useEffect } from 'react';

function MyExample () {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return <div>{data ? data.message : 'Loading...'}</div>;
}

export default MyExample ;

## 10 dependenncias circulares

import { useState, useEffect } from 'react';

function MyExample() {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    setCount(count + 1); 
  }, [count]);

  return <div>{count}</div>;
}
