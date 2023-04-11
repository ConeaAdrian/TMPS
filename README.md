Din codul generat de mine, următoarele principii și pattern-uri de design sunt prezente

Lab.4---Behavioral Design Patterns:

Observer Pattern: se regăsește în fișierul reducers/cartReducer.js, unde este folosit pentru a notifica componentele care ascultă evenimentul de schimbare a stării coșului de cumpărături.

Strategy Pattern: se regăsește în fișierul components/Filter.js, unde este folosit pentru a alege diferite strategii de filtrare a produselor în funcție de opțiunile selectate de utilizator.

Lab.3---Structural Design Patterns:

Adapter Pattern: se regăsește în fișierul ProductList.js, unde este folosit pentru a adapta obiectele de tip Product la formatul așteptat de componenta ProductItem.

Decorator Pattern: se regăsește în fișierul components/Header.js, unde este folosit pentru a adăuga un background și un text deasupra header-ului principal.

Lab.2---Creational Design Patterns:

Abstract Factory Pattern: se regăsește în fișierele Cart.js și ProductList.js, unde este folosit pentru a crea diferite tipuri de produse în funcție de parametrii de intrare.

Factory Method Pattern: se regăsește în fișierul actions/productActions.js, unde este folosit pentru a crea diferite tipuri de acțiuni în funcție de tipul de produs.

Lab.1---Principii SOLID:

Single Responsibility Principle: se regăsește în fișierul components/Header.js, unde componenta este responsabilă doar pentru afișarea unui header și nimic altceva.

Open-Closed Principle: se regăsește în fișierul actions/productActions.js, unde adăugarea unui nou tip de produs nu necesită modificarea codului deja existent, ci doar adăugarea unei noi acțiuni de creare.

Liskov Substitution Principle: se regăsește în fișierul Cart.js, unde clasa Cart este extinsă de clasa CartWithDiscount, respectând astfel contractul impus de clasa de bază.

Interface Segregation Principle: nu este prezent în codul generat de mine.
Dependency Inversion Principle: se regăsește în fișierul components/Filter.js, unde componenta primește o funcție ca și parametru, în loc să depindă direct de o implementare specifică. Aceasta permite schimbarea comportamentului de filtrare fără a modifica componenta Filter.


Sa implimentat cu ---

1.	Creational Design Patterns (5):

•	Singleton.   ----

•	Factory Method.   ----

•	Abstract Factory.  ---

•	Builder. ---

•	Prototype

2.	Structural Design Patterns (7):

•	Adapter.   --- 

•	Bridge --

•	Composite.  ----

•	Decorator --

•	Façade.  ----

•	Flyweight

•	Proxy

3.	Behavioral Design Patterns (11):

•	Chain of Responsibility

•	Command.  ----

•	Interpreter. --

•	Iterator.  ---

•	Mediator

•	Memento

•	Observer.    ----

•	State.  ---

•	Strategy ---

•	Template Method.  ---

•	Visitor



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
