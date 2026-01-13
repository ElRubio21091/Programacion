"use strict"

const sinEspaciosExtra = texto => texto.replace(/\s+/g, " ").trim(); //regex per treure espais a un text

const empiezaPorHola = /^Hola/; //regex per veure si es comença amb un text

const regexFecha = /^(0?[1-9]|[12]\d|3[01])\/(0?[1-9]|1[0-2])\/\d{4}$/; //Regex per dates format dd/mm/YYYY

const numeros = /\d+/g; //Agafar números d'un text

const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúñÑ]+$/; //Verificar si un texto contiene solo letras

const regexPassword = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/; //Validar una contraseña de 8 caracteres con una majuscula, minuscula y un numero

const regexTelefono = /\+^\d{9,10}$/; //Validar numero de telefono

const regexCorreo = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; //Validar un correo

/*

Para pasar una expresión regular a una función en el parámetro ponemos el string de la expresión y hacemos 
rg.=new.RegExp(string) y ya podemos hacer el rg.test("string")

*/