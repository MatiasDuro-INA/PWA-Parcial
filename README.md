# Parcial - Aplicaciones Web Progresivas y Dispositivos Móviles

Este proyecto es parte del **parcial de la materia Aplicaciones Web Progresivas y Dispositivos Móviles**. Consiste en consumir una API pública de Pokémon y mostrar una lista de Pokémon utilizando React y Context API para la gestión de estado.

## 📋 Tareas principales

A continuación se detallan las tareas a realizar, en orden de prioridad:

### 1️⃣ Crear el componente `PokemonList`

- Crear un componente llamado `PokemonList`.
- Este componente debe ser importado y utilizado en `App.jsx`.
- Su función es mostrar un **listado de todos los Pokémon** obtenidos desde la API pública de Pokémon.
- Debes en dicho componente, al momento de renderizarse, llamar a una funcion que utilice la api `https://pokeapi.co/api/v2/pokemon/{id}` y decir que recorra el campo id 150 veces, y guardar cada resultado del pokemon, en un estado de **AllPokemons**, para luego utilizar ese **AllPokemons** para renderizar el componente `Pokemon`



### 2️⃣ Crear el componente `Pokemon`

- Crear un componente llamado `Pokemon`.
- Este componente debe mostrar:
  - El **ID** del Pokémon.
  - El **nombre** del Pokémon.
  - La **imagen** del Pokémon.
- Este componente será utilizado dentro de `PokemonList` para renderizar todos los Pokémon a través de:

```jsx
<Pokemon />

### 3️⃣ Implementar la logica con Context API

- La lógica de obtención y manejo de datos no debe estar directamente en los componentes.
- Utilizar React Context API para centralizar y compartir el estado y la lógica de la aplicación entre los componentes.
