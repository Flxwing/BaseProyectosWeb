# Calculadora con useState

Ejemplo de práctica con React y Vite, siguiendo la estructura del contador de clase.

## Ejecutar

Desde `Javascript/ejemplo-calculadora`:

```bash
npm install
npm run dev
```

Abre la dirección que muestre Vite. En PowerShell, si la política de scripts bloquea `npm`, usa `npm.cmd`.

## Cómo leer el código

1. `src/App.jsx` presenta la página y monta `LayoutCalculadora`.
2. `src/features/calculadora/LayoutCalculadora.jsx` crea cuatro estados con `useState`: las dos entradas, el resultado y el error. Es el equivalente a `LayoutContador`.
3. `src/features/hooks/useCalculadora.js` recibe los valores y setters, igual que `useContador`. Devuelve los manejadores para editar, calcular y limpiar.
4. `CamposCalculadora` recibe los valores y manejadores por props. Los inputs son controlados: `value` muestra el estado y `onChange` lo actualiza.
5. `OperacionesCalculadora` recibe las cuatro acciones por props y las conecta a los botones.
6. `ResultadoCalculadora` muestra el resultado o un mensaje de error. Usa `??` para mostrar correctamente un resultado de cero.

Flujo: escribir → actualizar estado → renderizar; pulsar operación → hook calcula → actualizar resultado → renderizar.

Las entradas empiezan como texto vacío. Antes de calcular se validan y convierten con `Number`, porque los inputs entregan texto. No se usa `useEffect`: todo ocurre en respuesta a eventos. El hook comparte lógica; el estado pertenece al padre.

Prueba `8` y `2` con las cuatro operaciones; también números negativos, decimales, campos vacíos, división por cero, resultado cero y el botón Limpiar. Editar una entrada borra el resultado anterior para no mostrar un cálculo desactualizado.

La aritmética usa números de JavaScript: operaciones como `0.1 + 0.2` pueden mostrar su imprecisión decimal habitual.

```bash
npm run lint
npm run build
```
