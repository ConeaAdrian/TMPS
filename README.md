To Do App React


SRP
În fișierul ProductItem.js, clasa ProductItem are o singură responsabilitate afișarea detaliilor produsului și gestionarea adăugării produsului în coșul de cumpărături.

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log(product);
    dispatch(addToCart(product));
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          <div className='name-product'>{limitWords(product.title, 5)}...</div>
        </Typography>
        <Typography color="textSecondary"></Typography>
        <img className='photo-product' src={product.image} />
        <div className='price-product'>Price: {product.price}$</div>
        <br></br>
        <div className='description'>{limitWords(product.description, 20)}..</div>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleAddToCart}>Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default ProductItem;

+---------------------------------------------------+
|                  ProductItem                      |
+---------------------------------------------------+
| product: object                                   |
| dispatch: function                                |
+---------------------------------------------------+
|                                                   |
| + ProductItem({ product })                        |
| + handleAddToCart(): void                         |
| + render(): JSX.Element                           |
|                                                   |
+---------------------------------------------------+

ProductItem: Este componenta care afișează informațiile și acțiunile pentru un produs.
product: Este obiectul reprezentând un produs.
dispatch: Este o funcție utilizată pentru a dispeceriza acțiuni către store-ul Redux.
handleAddToCart(): Este o funcție apelată atunci când se dă clic pe butonul "Add to Cart". Aceasta adaugă produsul în coș utilizând funcția dispatch.
render(): Este o metodă care returnează elementul JSX pentru afișarea componentei ProductItem. Aceasta afișează informațiile despre produs (titlu, imagine, preț, descriere) și un buton pentru adăugarea produsului în coș.

OCP

Principiul Open/Closed (OCP) este implementat în fișierul cartActions.js, unde adăugarea unor noi acțiuni în coșul de cumpărături se poate face prin extinderea clasei CartActionTypes și definirea de noi constante care să reprezinte noile acțiuni. Astfel, codul existent rămâne neschimbat și nu  trebuie să fie modificat pentru a adăuga noi acțiuni în coșul de cumpărături:

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const updateQuantity = (productId, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: {
    productId,
    quantity,
  },
});
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId
  };
};

export const addToPurchasedItems = (product) => ({
  type: 'ADD_TO_PURCHASED_ITEMS',
  payload: product,
});

+---------------------------------------+
|              Actions                  |
+---------------------------------------+
| + addToCart(product: object)          |
| + removeFromCart(productId: string)   |
| + updateQuantity(productId: string,   |
|     quantity: number)                 |
| + addToPurchasedItems(product: object)|
+---------------------------------------+

+---------------------------------------+
|           Action Types                |
+---------------------------------------+
| + ADD_TO_CART: string                 |
| + REMOVE_FROM_CART: string            |
+---------------------------------------+

Actions: Reprezintă acțiunile care pot fi dispecerizate către store-ul Redux.
addToCart(product): Returnează o acțiune pentru adăugarea unui produs în coșul de cumpărături. Parametrul product reprezintă produsul care va fi adăugat.
removeFromCart(productId): Returnează o acțiune pentru eliminarea unui produs din coșul de cumpărături. Parametrul productId reprezintă ID-ul produsului care va fi eliminat.
updateQuantity(productId, quantity): Returnează o acțiune pentru actualizarea cantității unui produs din coșul de cumpărături. Parametrul productId reprezintă ID-ul produsului, iar quantity reprezintă noua cantitate.
addToPurchasedItems(product): Returnează o acțiune pentru adăugarea unui produs în lista de articole achiziționate. Parametrul product reprezintă produsul care va fi adăugat.
Action Types: Reprezintă tipurile de acțiuni disponibile în aplicație.
ADD_TO_CART: Reprezintă tipul acțiunii pentru adăugarea în coșul de cumpărături.
REMOVE_FROM_CART: Reprezintă tipul acțiunii pentru eliminarea din coșul de cumpărături.


LSP
Principiul Liskov Substitution (LSP) este folosit în mod implicit în toate componentele React, prin faptul că orice componentă poate fi înlocuită cu alta componentă fără a afecta comportamentul aplicației. În plus, acestprincipiu poate fi văzut în fișierul Cart.js, unde componenta Cart primește ca și proprietate un obiect item care poate  fi de orice tip, atâta timp cât acesta are o proprietate quantity și o proprietate product. Acest lucru permite adăugarea de noi tipuri de obiecte în coșul de cumpărături fără a fi nevoie să modificăm componenta Cart.

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
+---------------------------------------------------+
|                       Cart                        |
+---------------------------------------------------+
| cartItems: array                                  |
+---------------------------------------------------+
|                                                   |
| + Cart()                                          |
|                                                   |
| + render(): JSX.Element                           |
|                                                   |
+---------------------------------------------------+


Cart: Este componenta principală care afișează conținutul coșului de cumpărături.
cartItems: Este un array care conține articolele din coșul de cumpărături.
render(): Este o metodă care returnează elementul JSX pentru afișarea componentei Cart. Aceasta verifică dacă cartItems este gol și afișează un mesaj corespunzător sau afișează lista de elemente din coșul de cumpărături utilizând componenta CartItem.S


ISP

Interface Segregation Principle, desi nu cpoate detine acest principiu, este posibil de realizat prin segregare, ISP este aplicat în mod implicit prin separarea responsabilităților în componente și funcții diferite:
Componenta Cart este responsabilă doar pentru afișarea produselor din coșul de cumpărături și nu implementează alte funcționalități  nerelevante pentru acest scop. Ea folosește componenta CartItem pentru a afișa fiecare produs în parte. (codul de mai sus).

CartItem este responsabilă pentru afișarea informațiilor despre un singur produs din coș și gestionarea acțiunilor specifice produsului (schimbarea cantității, eliminarea din coș și cumpărarea produsului). Nu implementează funcționalități care ar trebui să aparțină altor componente.

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState('');

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (item) {
      dispatch(updateQuantity(item.id, newQuantity));
    }
  };

  const handleRemoveClick = () => {
    if (item) {
      dispatch(removeFromCart(item.id));

    }
  };

  const handleBuyClick = () => {
    if (item) {
      setBgColor('lightgreen');
      dispatch(addToPurchasedItems(item));
 
    }
  };

  return (
    <div className="cart-item" style={{ backgroundColor: bgColor }}>
      <div className="product-info">
        <div className="title">{item ? item.title : ''}</div>
        <div className="price">Price: {item ? item.price : ''} $</div>
      </div>
      <input type="number" value={item.quantity} onChange={handleQuantityChange} />
      <button className="remove-btn" onClick={handleRemoveClick}>Remove</button>
      <button className="buy-btn" onClick={handleBuyClick}>Buy</button>
    </div>
  );
};

export default CartItem;


+---------------------------------------------------+
|                   CartItem                        |
+---------------------------------------------------+
| item: object                                      |
| dispatch: function                                |
| bgColor: string                                   |
+---------------------------------------------------+
|                                                   |
| + CartItem({ item })                              |
| + handleQuantityChange(e: Event): void            |
| + handleRemoveClick(): void                       |
| + handleBuyClick(): void                          |
| + render(): JSX.Element                           |
|                                                   |
+---------------------------------------------------+
CartItem: Este componenta care afișează informațiile și acțiunile pentru un element din coșul de cumpărături.
item: Este obiectul reprezentând un element din coșul de cumpărături.
dispatch: Este o funcție utilizată pentru a dispeceriza acțiuni către store-ul Redux.
bgColor: Este o stare pentru culoarea fundalului elementului CartItem.
handleQuantityChange(): Este o funcție apelată atunci când se schimbă cantitatea unui element din coș. Aceasta actualizează cantitatea în store-ul Redux utilizând funcția dispatch.
handleRemoveClick(): Este o funcție apelată atunci când se dă clic pe butonul de eliminare. Aceasta elimină elementul din coș utilizând funcția dispatch.
handleBuyClick(): Este o funcție apelată atunci când se dă clic pe butonul de cumpărare. Aceasta actualizează culoarea fundalului elementului și adaugă elementul într-o listă de articole cumpărate utilizând funcția dispatch.
render(): Este o metodă care returnează elementul JSX pentru afișarea componentei CartItem. Aceasta afișează informațiile despre elementul din coș, un câmp de introducere pentru cantitate, butoanele de eliminare și cumpărare.


Acțiunile Redux din fișierul cartActions.js sunt separate în  funcții mici și precise (addToCart, removeFromCart, updateQuantity,  addToPurchasedItems), fiecare având o singură responsabilitate. Acest lucru permite ca componentele să utilizeze doar funcțiile necesare pentru a-și îndeplini sarcinile,  fără a fi încărcate cu funcționalități suplimentare nerelevante.

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';


export const updateQuantity = (productId, quantity) => ({
  type: 'UPDATE_QUANTITY',
  payload: {
    productId,
    quantity,
  },
});
export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product
  };
};

export const removeFromCart = (productId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: productId
  };
};

export const addToPurchasedItems = (product) => ({
  type: 'ADD_TO_PURCHASED_ITEMS',
  payload: product,
});

+---------------------------------------+
|              Actions                  |
+---------------------------------------+
| + addToCart(product: object)          |
| + removeFromCart(productId: string)   |
| + updateQuantity(productId: string,   |
|     quantity: number)                 |
| + addToPurchasedItems(product: object)|
+---------------------------------------+

+---------------------------------------+
|           Action Types                |
+---------------------------------------+
| + ADD_TO_CART: string                 |
| + REMOVE_FROM_CART: string            |
+---------------------------------------+


DIP

În fișierul ProductList.js, clasa ProductList depinde de o interfață ProductService, în loc să depindă de implementarea specifică a serviciului. Acest lucru permite ca serviciul să fie înlocuit în mod transparent cu o altă implementare în viitor, fără a modifica clasa ProductList, respectând astfel principiul DIP.

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    try {
      const productList = await ApiService.getProducts();
      this.setState({ products: productList });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  render() {
    const { products } = this.state;

    return (
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            {/* <CartItem item={{ product, quantity: 1 }} /> */}
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default ProductList;

+---------------------------------------------------+
|                  ProductList                      |
+---------------------------------------------------+
| products: array                                   |
+---------------------------------------------------+
|                                                   |
| + constructor(props: object)                      |
| + componentDidMount(): void                       |
| + render(): JSX.Element                           |
|                                                   |
+---------------------------------------------------+

ProductList: Este o clasă componentă care afișează o listă de produse.
products: Este un array care conține lista de produse.
constructor(props): Este constructorul clasei ProductList care inițializează starea componentei cu un array gol pentru produse.
componentDidMount(): Este o metodă de ciclu de viață care este apelată automat după ce componenta a fost montată în arborele DOM. Aceasta apelează ApiService.getProducts() pentru a obține lista de produse și actualizează starea componentei cu rezultatul.
render(): Este o metodă care returnează elementul JSX pentru afișarea componentei ProductList. Aceasta afișează o grilă (Grid) în care fiecare produs este afișat folosind componenta ProductItem.

Clasa ApiService abstrage comunicarea cu API-ul, astfel încât componentele care o folosesc, cum ar fi CartItem, nu depind direct de implementarea API-ului. În schimb, ele depind de abstracția furnizată de clasa ApiService.
class ApiService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://fakestoreapi.com',
      timeout: 1000,
    });
  }

  async getProducts() {
    try {
      const response = await this.apiClient.get('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}

const apiService = new ApiService();
export default apiService;

+---------------------------------------+
|              ApiService               |
+---------------------------------------+
| - apiClient: AxiosInstance            |
+---------------------------------------+
| + constructor()                       |
| + getProducts(): Promise<object[]>    |
+---------------------------------------+

ApiService: Este clasa responsabilă pentru interacțiunea cu API-ul de back-end.
apiClient: Este o instanță a obiectului Axios utilizată pentru a face cereri HTTP către API.
constructor(): Este constructorul clasei ApiService care inițializează apiClient cu o instanță Axios configurată pentru a face cereri la URL-ul specificat.
getProducts(): Este o metodă asincronă care face o cerere GET la endpoint-ul /products al API-ului. Returnează datele răspunsului sub formă de array de obiecte reprezentând produsele. În caz de eroare, este aruncată o excepție și afișat un mesaj de eroare în consolă.


Design Patterns
Creational Design Patterns

Singleton Pattern

Un singleton este un design pattern creational care permite crearea unei singure instanțe a unei clase și oferă un punct global de acces la această instanță. În implementarea dată, clasa ApiService este construită folosind un constructor și are o singură proprietate numită apiClient. Acesta este un obiect creat folosind metoda create a bibliotecii Axios, cu parametrii specificați în constructor (baza URL-ului și timpul de timeout).

Singurul obiect ApiService este creat în afara clasei prin intermediul instrucțiunii const apiService = new ApiService(); și este exportat pentru a fi utilizat în alte module. Astfel, oricare alt modul care importă apiService va avea acces la aceeași instanță a clasei ApiService.

Această implementare asigură că există o singură instanță a clasei ApiService în întregul sistem și oferă un mod convenabil de a accesa această instanță globală în mai multe module.


import axios from 'axios';

class ApiService {
  constructor() {
    this.apiClient = axios.create({
      baseURL: 'https://fakestoreapi.com',
      timeout: 1000,
    });
  }

  async getProducts() {
    try {
      const response = await this.apiClient.get('/products');
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }
}

const apiService = new ApiService();
export default apiService;

+-------------------------+
|       ApiService        |
+-------------------------+
| - apiClient: AxiosInstance |
+-------------------------+
| + getProducts(): Promise |
+-------------------------+

          |
          |uses
          |
          V

+------------------+
|     Axios      |
+------------------+
| - baseURL: string |
| - timeout: number |
+------------------+
| + create(config: AxiosRequestConfig): AxiosInstance |
| + get(url: string): Promise |
+------------------+


ApiService este clasa principală care gestionează comunicarea cu API-ul extern. Aceasta conține un câmp privat apiClient de tip AxiosInstance, care este utilizat pentru a efectua apeluri HTTP.
getProducts() este o metodă asincronă din clasa ApiService care utilizează apiClient pentru a efectua o cerere HTTP GET la ruta /products. Aceasta returnează datele primite din răspunsul cererii.
Axios este biblioteca externă utilizată pentru a efectua cereri HTTP. Aceasta conține o configurație de bază pentru URL-ul de bază și timpul de timeout al cererilor.
Metoda create() a clasei Axios este folosită pentru a crea o instanță personalizată a AxiosInstance, care va moșteni configurația de bază.
AxiosInstance are mai multe metode, inclusiv get(), care este utilizată în metoda getProducts() pentru a efectua cererea GET.ApiService.js - Acest fișier reprezintă o clasă care utilizează design pattern-ul Singleton. Design pattern-ul Singleton este folosit pentru a asigura că o clasă are o singură instanță și pentru a oferi un punct centralizat de acces la această instanță. În acest caz, clasa ApiService este creată o singură dată și instanța sa este exportată pentru a fi utilizată în întregul proiect.
productReducer.js și cartReducer.js - Aceste fișiere reprezintă reduceri într-un design pattern de tip Redux. Redux este un model de gestionare a stării aplicației, iar reducerii sunt funcții pure care specifică cum ar trebui să se schimbe starea aplicației în urma acțiunilor. Acesta este un exemplu de design pattern comportamental, deoarece reducerii definesc comportamentul de actualizare a stării în funcție de acțiunile primite.
actions.js - Aici sunt definite acțiunile care pot fi dispecerizate în reduceri pentru a actualiza starea. Deși nu este clar unde sunt utilizate aceste acțiuni, se pare că se potrivesc cu un design pattern de tip Flux, care este baza pentru Redux. Flux este un alt model de gestionare a stării care folosește acțiuni pentru a dispeceriza schimbările către reduceri.

Factory Method

În această modificare, am creat o funcție createProductReducer() care acționează ca un "Factory Method" și returnează reducerul pentru produse. Acest Factory Method permite crearea și configurarea reducerului pentru produse într-un mod mai flexibil și modular.

Apelând createProductReducer(), putem obține o nouă instanță a reducerului pentru produse. Acest lucru este util în situații în care dorim să creăm reduceri separate pentru diferite componente sau funcționalități.

Astfel, am aplicat un design pattern creational, "Factory Method", pentru a crea și configura reducerul pentru produse într-un mod mai flexibil și modular.

import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from '../actions/types';

const initialState = {
  products: [],
  error: null,
};

function createProductReducer() {
  return function productReducer(state = initialState, action) {
    switch (action.type) {
      case FETCH_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
          error: null,
        };
      case FETCH_PRODUCTS_FAILURE:
        return {
          ...state,
          products: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
}

const productReducer = createProductReducer();

export default productReducer;
+----------------------------+
|       createProductReducer |
+----------------------------+
| + productReducer           |
+----------------------------+

          |
          |returns
          |
          V

+------------------+
|  productReducer  |
+------------------+
| - state: object  |
| - action: object |
+------------------+
| + FETCH_PRODUCTS_SUCCESS() |
| + FETCH_PRODUCTS_FAILURE() |
| + default()                |
+------------------+

createProductReducer() este o funcție care acționează ca un Factory Method și returnează reducerul productReducer.
productReducer este o funcție care primește două argumente, state și action, și este responsabilă de actualizarea stării în funcție de tipul acțiunii primite.
productReducer conține trei metode:
FETCH_PRODUCTS_SUCCESS() este apelată atunci când acțiunea este de tip FETCH_PRODUCTS_SUCCESS. Aceasta actualizează starea cu noile produse și resetează eroarea la null.
FETCH_PRODUCTS_FAILURE() este apelată atunci când acțiunea este de tip FETCH_PRODUCTS_FAILURE. Aceasta actualizează starea cu o listă goală de produse și setează eroarea conform acțiunii.
default() este apelată atunci când acțiunea nu corespunde niciunui caz din switch. Aceasta returnează starea neschimbată.




Structural Design Pattern
Decorator Pattern

Am creat clasa ProductItemDecorator care acționează ca un decorator pentru componenta ProductItem. Aceasta extinde comportamentul componentei prin adăugarea metodelor limitTitleWords(limit) și limitDescriptionWords(limit), care aplică logica de limitare a cuvintelor la titlul și descrierea produsului.

În interiorul metodei render() a decoratorului, apelăm metodele limitTitleWords(limit) și limitDescriptionWords(limit) pentru a obține versiunile limitate ale titlului și descrierii produsului. Acesta este apoi afișat în componenta Card din cadrul metodei render() a decoratorului.

Componenta ProductItem originală este înlocuită cu instanța decoratorului ProductItemDecorator, care primește proprietatea product și funcția handleAddToCart ca argumente.

Astfel, am adăugat un design pattern structural, "Decorator", pentru a extinde comportamentul componentei ProductItem prin decorarea acesteia cu metodele limitTitleWords() și limitDescriptionWords().

class ProductItemDecorator {
  constructor(component) {
    this.component = component;
  }

  limitTitleWords(limit) {
    const { product } = this.component.props;
    const title = product.title;
    const words = title.split(/\s+/);
    const limitedWords = words.slice(0, limit).join(' ');
    return `${limitedWords}...`;
  }

  limitDescriptionWords(limit) {
    const { product } = this.component.props;
    const description = product.description;
    const words = description.split(/\s+/);
    const limitedWords = words.slice(0, limit).join(' ');
    return `${limitedWords}...`;
  }

  render() {
    const { product } = this.component.props;
    const { handleAddToCart } = this.component;

    return (
      <Card>
        <CardContent>
          <Typography variant="h5" component="h2">
            <div className='name-product'>{this.limitTitleWords(5)}</div>
          </Typography>
          <Typography color="textSecondary"></Typography>
          <img className='photo-product' src={product.image} />
          <div className='price-product'>Price: {product.price}$</div>
          <br></br>
          <div className='description'>{this.limitDescriptionWords(20)}</div>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleAddToCart}>Add to Cart</Button>
        </CardActions>
      </Card>
    );
  }
}

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    console.log(product);
    dispatch(addToCart(product));
  };

  const decoratedProductItem = new ProductItemDecorator({ props: { product }, handleAddToCart });

  return decoratedProductItem.render();
};
+------------------+
|   ProductItem    |
+------------------+
| - product: object |
+------------------+
| + handleAddToCart() |
| + render()         |
+------------------+

          |
          |uses
          |
          V

+------------------------+
| ProductItemDecorator   |
+------------------------+
| - component: object    |
+------------------------+
| + limitTitleWords(limit)    |
| + limitDescriptionWords(limit) |
| + render()             |
+------------------------+

ProductItem este componenta React care primește un produs ca proprietate (product) și conține funcția handleAddToCart() și metoda render().
ProductItemDecorator este decoratorul care extinde comportamentul componentei ProductItem. Acesta primește componenta ca argument în constructor și conține metodele limitTitleWords(limit), limitDescriptionWords(limit) și render().
ProductItemDecorator folosește proprietatea component pentru a accesa produsul (product) și funcția handleAddToCart din componenta inițială.
Metoda render() din decorator adaugă logica de limitare a cuvintelor pentru titlu și descriere, afișând produsul decorat în cadrul componentei Card.



Proxy Pattern

Am creat clasa ProductItemProxy care acționează ca un proxy pentru componenta ProductItem. Acesta primește componenta ProductItem și metoda handleAddToCart ca argumente în constructor.

În cadrul metodei handleAddToCart a proxy-ului, putem adăuga logica suplimentară pentru gestionarea adăugării produsului în coșul de cumpărături. În exemplul de cod, doar afișăm un mesaj în consolă, dar puteți adapta această metodă pentru a implementa funcționalitățile necesare.

În metoda render a componentei ProductList, în loc să utilizăm direct componenta ProductItem, folosim proxy-ul ProductItemProxy și pasăm componenta ProductItem și metoda handleAddToCart ca proprietăți ale proxy-ului. Acest lucru ne permite să controlăm și să extindem comportamentul componentei ProductItem prin intermediul proxy-ului.

Astfel, am adăugat un design pattern structural, "Proxy", pentru a controla sau extinde comportamentul componentei ProductItem.
class ProductItemProxy {
  constructor(component) {
    this.component = component;
  }

  handleAddToCart(product) {
    // Putem adăuga aici logica suplimentară pentru gestionarea adăugării produsului în coșul de cumpărături.
    console.log('Product added to cart:', product);
    this.component.handleAddToCart(product);
  }

  render() {
    return this.component.render();
  }
}

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    try {
      const productList = await ApiService.getProducts();
      this.setState({ products: productList });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }

  render() {
    const { products } = this.state;

    return (
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid key={product.id} item xs={12} sm={6} md={4}>
            {/* <CartItem item={{ product, quantity: 1 }} /> */}
            <ProductItemProxy
              component={<ProductItem product={product} />}
              handleAddToCart={this.handleAddToCart} // Metoda handleAddToCart definită în componenta ProductList
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default ProductList;

+------------------------+
|   ProductItemProxy     |
+------------------------+
| - component: object    |
+------------------------+
| + handleAddToCart(product) |
| + render()             |
+------------------------+

          |
          |uses
          |
          V

+------------------+
|   ProductList    |
+------------------+
| - products: array |
+------------------+
| + componentDidMount() |
| + render()         |
+------------------+

ProductItemProxy este un proxy pentru componenta ProductItem. Acesta primește componenta ProductItem ca argument în constructor și conține metodele handleAddToCart(product) și render().
Metoda handleAddToCart(product) din proxy permite adăugarea de logica suplimentară înainte de a apela metoda handleAddToCart() a componentei ProductItem.
Metoda render() din proxy returnează rezultatul metodei render() a componentei ProductItem.
Componenta ProductList este clasa care extinde Component din React. Aceasta conține un state products pentru a stoca lista de produse.
Metoda componentDidMount() din ProductList este apelată după ce componenta este montată și folosește ApiService pentru a obține lista de produse și a le seta în starea componentei.
Metoda render() din ProductList afișează lista de produse în cadrul unei componente Grid. Pentru fiecare produs, se creează o instanță a ProductItemProxy și se pasează componenta ProductItem și metoda handleAddToCart ca proprietăți ale proxy-ului.

Behaivoral Design Patterns
Observer Pattern

În acest exemplu, am creat clasa Cart care reprezintă coșul de cumpărături. Aceasta are o listă de cartItems și o listă de observers. Metodele addObserver, removeObserver și notifyObservers sunt utilizate pentru gestionarea observatorilor. addToCart și removeFromCart actualizează starea coșului și apelează notifyObservers pentru a notifica observatorii despre schimbări.

Reducer-ul cartReducer utilizează acum instanța clasei Cart ca stare inițială și apelează metodele corespunzătoare pe baza acțiunilor. Astfel, atunci când se adaugă sau se elimină un produs din coș, observatorii vor fi notificați și vor putea reacționa în consecință.

import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

class Cart {
  constructor() {
    this.cartItems = [];
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notifyObservers() {
    this.observers.forEach(observer => observer.update(this.cartItems));
  }

  addToCart(item) {
    this.cartItems.push(item);
    this.notifyObservers();
  }

  removeFromCart(itemId) {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    this.notifyObservers();
  }
}

const cart = new Cart();

const cartReducer = (state = cart, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      state.addToCart(action.payload);
      return state;
    case REMOVE_FROM_CART:
      state.removeFromCart(action.payload);
      return state;
    default:
      return state;
  }
};

export default cartReducer;

     +-----------------+
     |      Cart       |
     +-----------------+
     | - cartItems: [] |
     | - observers: [] |
     +-----------------+
     | + addObserver(observer: Observer): void |
     | + removeObserver(observer: Observer): void |
     | + notifyObservers(): void |
     | + addToCart(item: Item): void |
     | + removeFromCart(itemId: string): void |
     +-----------------+

            |
            |
            |
            | 1..*
+------------------+
|     Observer     |
+------------------+
|                  |
+------------------+
| + update(cartItems: Item[]): void |
+------------------+

            |
            |
            |
            | 1
+-----------------------+
|      cartReducer      |
+-----------------------+
|                       |
+-----------------------+
| - cart: Cart          |
+-----------------------+
| + addToCart(item: Item): void |
| + removeFromCart(itemId: string): void |
+-----------------------+



Clasa Cart reprezintă coșul de cumpărături și are o relație de agregare cu clasa Observer.
Interfața Observer definește metoda update, care va fi implementată de observatori pentru a reacționa la schimbările din coșul de cumpărături.
Clasa cartReducer conține instanța clasei Cart și expune metodele addToCart și removeFromCart pentru a actualiza coșul de cumpărături.
Observatorii (nu sunt reprezentați în diagramă) pot fi alte componente sau module care se abonează la modificările din coșul de cumpărături prin adăugarea sau eliminarea de observatori folosind metodele addObserver și removeObserver.

Strategy Pattern

În această implementare, clasa Cart reprezintă obiectul comportamental care utilizează diferite strategii pentru adăugarea și eliminarea elementelor din coșul de cumpărături. Strategiile sunt definite prin obiecte separate addToCartStrategy și removeFromCartStrategy, care conțin metode specifice pentru a efectua operațiunile respective.

Prin intermediul metodelor setAddToCartStrategy și setRemoveFromCartStrategy, puteți schimba strategiile în timpul execuției, dacă este necesar.

În reducerul cartReducer, acțiunile ADD_TO_CART și REMOVE_FROM_CART sunt dispecerizate cu ajutorul store.dispatch, permițând modificarea stării coșului de cumpărături.

class Cart {
  constructor(addToCartStrategy, removeFromCartStrategy) {
    this.cartItems = [];
    this.addToCartStrategy = addToCartStrategy;
    this.removeFromCartStrategy = removeFromCartStrategy;
  }

  setAddToCartStrategy(strategy) {
    this.addToCartStrategy = strategy;
  }

  setRemoveFromCartStrategy(strategy) {
    this.removeFromCartStrategy = strategy;
  }

  addToCart(item) {
    this.addToCartStrategy.addToCart(this.cartItems, item);
  }

  removeFromCart(itemId) {
    this.removeFromCartStrategy.removeFromCart(this.cartItems, itemId);
  }
}

const initialState = {};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

const addToCartStrategy = {
  addToCart: (cartItems, item) => {
    const newCartItems = [...cartItems, item];
    store.dispatch({ type: ADD_TO_CART, payload: newCartItems });
  },
};

const removeFromCartStrategy = {
  removeFromCart: (cartItems, itemId) => {
    const newCartItems = cartItems.filter(item => item.id !== itemId);
    store.dispatch({ type: REMOVE_FROM_CART, payload: newCartItems });
  },
};

const cart = new Cart(addToCartStrategy, removeFromCartStrategy);

export default cartReducer;

        +---------------------------+
        |          Cart             |
        +---------------------------+
        | - cartItems: Array        |
        | - addToCartStrategy: Object |
        | - removeFromCartStrategy: Object |
        +---------------------------+
        | + setAddToCartStrategy(strategy: Object): void |
        | + setRemoveFromCartStrategy(strategy: Object): void |
        | + addToCart(item: Object): void |
        | + removeFromCart(itemId: number): void |
        +---------------------------+

              ^
              |
              |             +----------------------+
              +-------------| addToCartStrategy    |
              |             +----------------------+
              |             | - addToCart(cartItems: Array, item: Object): void |
              |             +----------------------+

              ^
              |
              |             +----------------------+
              +-------------| removeFromCartStrategy|
                            +----------------------+
                            | - removeFromCart(cartItems: Array, itemId: number): void |
                            +----------------------+

Diagrama UML descrie clasa Cart cu proprietățile sale cartItems, addToCartStrategy și removeFromCartStrategy. Clasa Cart are metodele setAddToCartStrategy, setRemoveFromCartStrategy, addToCart și removeFromCart.

Există două strategii definite: addToCartStrategy și removeFromCartStrategy, care sunt obiecte separate și conțin metode specifice pentru a efectua operațiunile respective.

Reducerul cartReducer rămâne neschimbat și gestionează acțiunile ADD_TO_CART și REMOVE_FROM_CART pentru a actualiza starea coșului de cumpărături.


