# rick-morty-graphql
## Enunciado
Rick and Morty tienen una nueva aventura y necesitan tu ayuda! Todas las especies se han revelado contra los humanos y necesitan una herramienta para saber quien es un humano y quien no. Para ello vas a crear un frontend mostrando una lista de los caracteres de rick and morty que sean humanos (species===human). Siguiendo los siguientes pasos:

- Crea un repositorio en github
- Crea un frontend utilizando next.js y material UI
- Crea un backend en express con un endpoint que utilice la API de graphql de rick and morty

Entrega un link al repo con un readme explicando un poco el proyecto.

Puntos extra por:
- Utilizar pagination
- Utilizar typescript
- Buenas prácticas en tu código
- Creatividad en el proyecto o elementos extra

## Instrucciones
1. Clona este repositorio
2. Haz npm install
3. Haz npm start
4. Ve a la ruta http://localhost:3000

## Explicación
### Servidor
He creado un endpoint con Express en el que se establece la consulta a la API GraphQL de Rick y Morty que se podrá utilizar más tarde en el cliente. El servidor no tiene mucha más explicación, solo que he establecido unas opciones de CORS para que puedan comunicarse el servidor y el cliente.
### Cliente
He creado una aplicación de Next con algunos componentes de MUI que hace una petición al endpoint que hemos creado y establece los resultados como estado. Cada vez que el número de la paginación cambia, se hace otra consulta a la API, pidiendo solo los datos necesarios y recargando solamente la parte del cliente donde se muestran estos.

## Por hacer
Me hubiese poder dedicar más tiempo a la parte del css para que quedase una aplicación más vistosa y haber sacado la paginación del componente que renderiza las cartas de los personajes, pero no tengo más tiempo.
