# Validate-lib

Validaciones utiles para formularios
- RUN o Rut Chileno


Instalar libreria
~~~
npm i validate-lib
~~~


Importar la libreria
~~~
import { validateRut, deleteDots, deleteDash } from 'validate-lib';
~~~

Validar Rut
~~~
const rut = '98.336.313-k';
const isValid = validateRut(rut);

if(isValid){
  //Si
} else {
  //No
}
~~~

Limpiar rut
~~~
import { deleteDots, deleteDash } from 'validate-lib';
~~~
~~~
const rut = '98.336.313-k';
deleteDots(rut); // return 98336313-k
deleteDash(rut); // return 98.336.313k
~~~

