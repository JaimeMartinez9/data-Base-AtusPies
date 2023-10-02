

## Configuración

Antes de utilizar la API, asegúrate de tener Node.js y npm instalados en tu sistema. Luego, sigue estos pasos:

1. ## Contribuir

    Pasos a seguir para contribuir al desarrollo de la API de A tus Pies 
     A continuación, se detallan los pasos para contribuir:

1. ## Haz un fork del repositorio pulsando el botón "Fork" en la parte superior derecha de esta página.

2. ## Clona el repositorio: 
    git clone https://github.com/JaimeMartinez9/data-Base-AtusPies.git
    cd DATA-BASE-ATUSPIES

3. ## Crea una rama para tu contribución:

      git checkout -b feature/tu-rama

4. ## Empuja tu rama a tu repositorio forkeado:

      git push origin feature/tu-contribucion

--------------------------------------------------------------

# Documentación de la API de Ecommerce: A tus Pies

Esta API proporciona acceso a los productos y categorías de tu comercio local, (A tus Pies).

La API estará disponible en http://localhost:8000/

## Rutas Disponibles:

Productos:
GET http://localhost:8000/productos: Obtener todos los productos.
POST http://localhost:8000/productos: Crear un nuevo producto.
PUT http://localhost:8000/productos/:id : Actualizar un producto existente por ID.
DELETE http://localhost:8000/productos/:id : Eliminar un producto por ID.

--------------------------------

Ejemplos de Solicitudes

## Obtener todos los productos: 

GET http://localhost:8000/productos

## Crear un nuevo producto:

POST http://localhost:8000/productos

Content-Type: application/json
{
  "title": "Nuevo Producto",
  "product_description": "Descripción del nuevo producto",
  "price": 19.99,
  "category_id": 1
}

## Actualizar un producto existente:

PUT http://localhost:8000/productos/:id  ("id del producto  que se desea actualizar")

Content-Type: application/json
{
  "price": 29.99
}

## Eliminar un producto:

DELETE http://localhost:8000/productos/:id  ("id del producto  que se desea eliminar")

---------------------------------

Categorías:
GET /categorias: Obtener todas las categorías.
POST /categorias: Crear una nueva categoría.
PUT /categorias/:id: Actualizar una categoría existente por ID.
DELETE /categorias/:id: Eliminar una categoría por ID.


## Obtener todas las categorías:

GET http://localhost:8000/categorias


## Crear una nueva categoría:

POST http://localhost:8000/categorias

Content-Type: application/json
{
  "brand": "Nueva categoría que quieras crear"
}

## Actualizar una categoría existente:

PUT http://localhost:8000/categorias/:id    ("id de la categoria  que se desea actualizar")

Content-Type: application/json
{
  "brand": "Categoría actualizada"
}


## Eliminar una categoría:

DELETE http://localhost:800/categorias/:id   ("id de la categoria  que se desea eliminar")

------------------------------------

## Ejemplos de Respuestas:

Respuesta exitosa (HTTP 200 OK):

Cuando una solicitud se procesa correctamente, la API responderá con un código de estado HTTP 200 y un mensaje de éxito en formato JSON. Por ejemplo:

  "message": "Operación exitosa",
  "data": {
    "product_id": 1,
    "title": "Zapatillas Adidas Superstar",
    "product_description": "Zapatillas deportivas de alta calidad",
    "price": 99.99,
    "category_id": 1,
  }

## Error de validación:

Error de validación (HTTP 500 Bad Request):

### Error genérico (HTTP 500 Internal Server Error)

En caso de que ocurra un error interno del servidor durante la solicitud, la API responderá con un código de estado HTTP 500 y un mensaje de error en formato JSON. Por ejemplo:

{
  "message": "Error al eliminar el producto",
  "error": "Ha ocurrido un error inesperado en el servidor. Por favor, inténtalo de nuevo más tarde."
}







