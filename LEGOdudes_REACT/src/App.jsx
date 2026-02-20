import './style/lego.css'
import { products } from './assets/legodudes'
import { useEffect, useState } from 'react'

import Cart from './components/Cart'
import Products from './components/Products'
import Header from './components/Header'
import Nav from './components/Nav'
import CategoryTitle from './components/CategoryTitle'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [cart, setCart] = useState([])
  const [cartQuantity, setCartQuantity] = useState(0)
  const [totalSum, setTotalSum] = useState(0)

  console.log("Cart", cart)
<<<<<<< HEAD
<<<<<<< HEAD

  useEffect(() =>{
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

    setCartQuantity(totalQuantity)
  }, [cart])

=======
  useEffect(()=>{
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)
    setCartQuantity(totalQuantity)
  },[cart])

>>>>>>> 1ce3dba0f74b859c4e4216b091ba9b3ad9241936
  function Header({setIsOpen, cartQuantity}){
    return(
      <header>
        <h1>
          <a href="index.html">             
            <img src="website_images/LD_logo.svg" alt="LEGOdudes" />
          </a>
          </h1>
          <button id="cart-button" onClick={()=> setIsOpen((prev) => !prev)}>
            <div id="cart-quantity">{cartQuantity}</div>
            <img src="website_images/legocart.svg" alt="Handlevogn" />
          </button>
      </header>
    )
  }

  function Nav(){
    return(
       <nav>
          <a href="#">City</a>
          <a href="#">Ninjago</a>
          <a href="#">Castles & Knights</a>
          <a href="#">Marine & Pirates</a>
          <a href="#">Movie characters</a>
        </nav>
    )
  }

  function CategoryTitle(){
    return (<h2>Ninjago</h2>)
  }

  function Products({products, setCart}){
    return (
    <div id="product-list">
      {products.map(p => <ProductCard key={p.prodid} p={p} setCart={setCart} />)}
=======
/*
  useEffect kjøres automatisk av React
  hver gang noe i dependency-listen endres.
*/
  useEffect(() => {

    /*
      cart.reduce(...) brukes for å regne ut
      totalt antall produkter i handlekurven.
>>>>>>> bb17c58fdebb168872dc65fe768b7df016c503c0
      
      - sum starter på 0
      - item er ett produkt i cart
      - item.quantity legges til summen for hvert produkt
    */
    const totalQuantity = cart.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

<<<<<<< HEAD
  function ProductCard({p, setCart}){
<<<<<<< HEAD

    const handleClick = ()=>{
      setCart((prev) => 
        prev.some(item => item.prodid === p.prodid) ?
        prev.map(item => item.prodid === p.prodid ? {...item, quantity: item.quantity + 1} 
        : item ) : [...prev, {...p, quantity: 1}])
=======
    
    const handleClick = ()=>{
      setCart((prev) => 
        prev.some(item => item.prodid === p.prodid) ?
        prev.map(item =>  item.prodid === p.prodid ? {...item, quantity: item.quantity + 1}
        : item 
        ) : 
        [...prev, {...p, quantity: 1}])
>>>>>>> 1ce3dba0f74b859c4e4216b091ba9b3ad9241936
      console.log("Legg i handlekurv")
    }
=======
    /*
      Oppdaterer state cartQuantity
      slik at UI-et kan vise riktig totalt antall
      (f.eks. antall varer i handlekurv-ikonet).
    */
    setCartQuantity(totalQuantity);
>>>>>>> bb17c58fdebb168872dc65fe768b7df016c503c0

    /*
      Denne useEffect-en kjører kun når cart endres,
      fordi cart er eneste dependency.
    */
   const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
   setTotalSum(total)
  }, [cart]);

  function Page(){
    return(
          <main>
            <CategoryTitle />
            <Products products={products} setCart={setCart} />
          </main>
    )
  }

<<<<<<< HEAD
  function Cart({isOpen, cart, setCart}){
    return (
      <section id="cart" className={isOpen ? "" : "hidden"}>
            <table id="cart-items">
              <tbody>
<<<<<<< HEAD
                {cart.lenght <= 0 ?
=======
                {cart.length <= 0 ?
>>>>>>> 1ce3dba0f74b859c4e4216b091ba9b3ad9241936
                  (<tr>
                    <td>Ingen varer i handlevognen enda.</td>
                  </tr>) : (cart.map(p => <CartItem key={p.prodid} p={p} setCart={setCart} />))
                }
              </tbody>
            </table>
            <p>Total pris: <span id="total-price">0</span>NOK</p>
        </section>
    )
  }
  
  function CartItem({p, setCart}){
<<<<<<< HEAD

    const removeFromcart = (prodid)=>{
=======
    const removeFromCart = (prodid)=>{
>>>>>>> 1ce3dba0f74b859c4e4216b091ba9b3ad9241936
      setCart(prev => prev.map(item => item.prodid === prodid ? {...item, quantity: item.quantity - 1}: item)
      .filter(item => item.quantity > 0)
    )

    }

    return (
      <tr>
        <td className="title">{p.title}</td>
        <td className="price">{p.price}</td>
        <td className="quantity">{p.quantity}</td>
<<<<<<< HEAD
        <td className="delete"><button onClick={()=>removeFromcart(p.prodid)}>X</button></td>
=======
        <td className="delete"><button onClick={()=>removeFromCart(p.prodid)}>X</button></td>
>>>>>>> 1ce3dba0f74b859c4e4216b091ba9b3ad9241936
      </tr>
    )
  }  


=======
>>>>>>> bb17c58fdebb168872dc65fe768b7df016c503c0
  return (
    <Layout setIsOpen={setIsOpen} cartQuantity={cartQuantity} isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum}>
      <Routes>
        <Route index element={<Page />} />
        <Route path='city' element={<CategoryTitle title="City" />} />
        <Route path='ninjago' element={<CategoryTitle title="Ninjago" />} />
      </Routes>
    </Layout>

  )
}

export default App
