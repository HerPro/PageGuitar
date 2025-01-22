import { useEffect, useState } from "react";
import Guitarra from "./components/Guitarra";
import Header from "./components/Header";
import { db } from "./data/db";

function App() {
  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  function addToCard(item){
    const itemExists = cart.findIndex(guitar => guitar.id === item.id)
    if (itemExists >= 0){ // existe en el carrito
      const updateCart = [...cart]
      updateCart[itemExists].quantity++
      setCart(updateCart)
    }else {
      console.log("no existe agregando..")
      item.quantity = 1 
      setCart([...cart, item])
    }
  

  }
  function removeFromCart(id){
      setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))
  }
  return (
    <>
      <Header 
      cart={cart}
      removeFromCart={removeFromCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
           
            <Guitarra 
            key={guitar.id}
            guitar={guitar}
            setCart={setCart}
            addToCard={addToCard}
            
            />
          ))}
        </div>  
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
