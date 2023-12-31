# prueba_tecnica_backend

# API de Pedidos de Clientes en un Rango de Fechas

Esta API permite obtener información sobre los pedidos de los clientes en un rango de fechas específico. A continuación, se describen los endpoints disponibles y cómo utilizarlos.

## Obtener todos los pedidos de clientes

**Ruta:** `/`

**Método:** `GET`

**Descripción:** Este endpoint devuelve todos los pedidos de los clientes.

**Ejemplo de uso:**

```
http://localhost:3000/api/v1/customers-orders-in-date-range/
```

## Obtener pedidos de clientes en un rango de fechas

**Ruta:** `/start/:start/end/:end`

**Método:** `GET`

**Parámetros:**
- `start`: Fecha de inicio del rango (formato YYYY-MM-DD).
- `end`: Fecha de fin del rango (formato YYYY-MM-DD).

**Descripción:** Este endpoint devuelve los pedidos de los clientes que se realizaron entre las fechas `start` y `end`.

**Ejemplo de uso:**

```
http://localhost:3000/api/v1/customers-orders-in-date-range/start/2003-01-09/end/2003-12-31
```

## Obtener pedidos de un cliente específico en un rango de fechas

**Ruta:** `/start/:start/end/:end/id/:id?`

**Método:** `GET`

**Parámetros:**
- `start`: Fecha de inicio del rango (formato YYYY-MM-DD).
- `end`: Fecha de fin del rango (formato YYYY-MM-DD).
- `id`: ID del cliente (opcional).

**Descripción:** Este endpoint devuelve los pedidos del cliente con el ID especificado que se realizaron entre las fechas `start` y `end`. Si no se proporciona un `id`, se devolverán los pedidos de todos los clientes.

**Ejemplo de uso:**

```
http://localhost:3000/api/v1/customers-orders-in-date-range/start/2003-01-09/end/2003-12-31/id/324
```

## Obtener pedidos de un cliente específico en un rango de fechas

**Ruta:** `/start/:start/end/:end/name/:name?`

**Método:** `GET`

**Parámetros:**
- `start`: Fecha de inicio del rango (formato YYYY-MM-DD).
- `end`: Fecha de fin del rango (formato YYYY-MM-DD).
- `name`: Nombre del cliente (opcional).

**Descripción:** Este endpoint devuelve los pedidos del cliente con el nombre especificado que se realizaron entre las fechas `start` y `end`. Si no se proporciona un `name`, se devolverán los pedidos de todos los clientes.

**Ejemplo de uso:**

```
http://localhost:3000/api/v1/customers-orders-in-date-range/start/2003-01-09/end/2003-12-31/name/Stylish%20Desk%20Decors,%20Co.
```
