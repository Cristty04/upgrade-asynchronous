//1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir 
//los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y 
//un .js.

//fetch('https://api.agify.io?name=michael').then(res => console.log(res)).catch(err => console.log(err));

//2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una 
//consulta a la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io';

const boton$$ = document.querySelector('button')
boton$$.addEventListener('click', async () => {
    const cosas$$ = document.querySelector('input').value
    const response = await fetch(`${baseUrl}?name=${cosas$$}`)
    const res = await response.json()
    console.log(res)
    //2.3-4
  for (let i = 0; i < res.country.length; i++) {
    const parrafo$$ = document.createElement('p')
    parrafo$$.setAttribute('id', `parraf${i}`)
    parrafo$$.innerHTML = `${res.name} tiene un ${res.country[i].probability} % de ser de ${res.country[i].country_id}`
    document.body.append(parrafo$$)

    const botoncito$$ = document.createElement('button')
    botoncito$$.innerText = 'X'
    parrafo$$.appendChild(botoncito$$)
    botoncito$$.addEventListener('click', () => {
        const eliminar$$ = document.querySelector(`#parraf${i}`)
        eliminar$$.remove()
    })

  }
        
    }
 )



//2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición a la api que diga...
//'El nombre X tiene un Y porciento de ser de Z' etc etc.EJ: El nombre Pepe tiene un 22 porciento de ser de ET
//y un 6 porciento de ser de MZ.



//2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno de los p que hayas insertado
//y que si el usuario hace click en este botón eliminemos el parrafo asociado.