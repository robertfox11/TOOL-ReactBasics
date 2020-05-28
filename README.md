This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
npm install<br />
npm run start

## Aplication

importamos nuestro componente Shopping Cart y Aside<br />
Tambien importamos nuestro json => prduct.js<br />
//Creamos un array para agregar el carrito
const [products, saveProduct] = useState(prod);<br />
//guardar en local Storage
let prodLocalStorage = JSON.parse(localStorage.getItem("cart"));
if (!prodLocalStorage) {
prodLocalStorage = [];
}
//Json lo pasamos useState lo metemos a la variable products
const [cart, addCart] = useState(prodLocalStorage);
//USamos useEffect saber que se actualiza y mantenerlo
useEffect(() => {
let prodLocalStorage = JSON.parse(localStorage.getItem("cart", "count"));
if (prodLocalStorage) {
localStorage.setItem("cart", JSON.stringify(cart));
} else {
localStorage.setItem("cart", JSON.stringify([]));
}
}, [cart]);

## Components

(Aside)<br />
Realiza la funcionalidad de recoger el numero el cambio del contador
const [count, saveCount] = useState(1);
conn la funcionalidad de handle Change
Que lo pasaremos como props en nuestros<br>
Component ShoppingCartItem<br>
Componente TotalPrice<br>
(ShoppingCartItem)
Pasamos los props que utilizaremos para Shopping cart
cart,
addCart,
setTotalPrecio,
setRestante,
handleChange,
count,
error,<br />

##

Tambien una validacion cuanto es menor de 1 y mayor de 10
const [error, saveError] = useState(false);

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
