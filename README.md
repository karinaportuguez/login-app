# Prueba técnica Noktos - Fronted 

Bienvenido a nuestra prueba técnica, el objetivo es evaluar tus conocimientos respecto a React, tu dominio sobre el lenguaje Javascript y el consumo de API's REST con Fetch o Axios. 

## Puntos a considerar: 

● El tiempo de la prueba es de aproximadamente 3 horas, no es necesario que termines todo el ejercicio pero sí es importante que demuestres tus conocimientos.

● Deberás considerar cosas como SOLID y DRY para la realización de tu ejercicio, no es necesario que apliques todo al pie de la letra pero si lo que consideres necesario para mantener la calidad del código y la escalabilidad. 

● Puedes utilizar React bootstrap o alguna otra librería de CSS o componentes que te facilite el diseño. 

● Puedes acceder a documentación para aclarar dudas.

Ruta base: https://desarrollo.api.noktos.com/api 

1. Deberás generar un formulario mediante el cual puedas iniciar sesión y almacenar el token devuelto para utilizarlo más adelante.

**Ruta**
 /login 

**Método HTTP** 
POST 

**Headers**
{ 
“Accept”: “application/json”, 
“Content-Type”: “application/json” 
}

**Body** 
{ 
"email":"string", 
"password":"string", "sistema": 2 
}

**Respuesta**

{ 
"res": bool, 
"token":"string", 
"message":"string" 
}

## Usuario de prueba 

"email":"demosistemas@yopmail.com" 
"password": "Prueba@1" 



2. Consultar un API para obtener una lista de hoteles y mostrarlo en una tabla de HTML, crear un botón para que mediante un evento, se muestre el detalle del hotel en un modal

**Ruta**  
/admin/hosts/50

**Authorization**
Bearer
{token}

**Método**
GET 

**Body**
N/A 

**Respuesta**
{ 
"host": Array, 
}
