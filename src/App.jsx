import { products } from "./data/products";
import { useState, useEffect } from "react";

export default function App() {

  //ESTADO DO CARRINHO
  const [cart, setCart] = useState(() => {
    const dadosSalvos = localStorage.getItem("meu-carrinho");             //pega os dados salvos no navegador
    return dadosSalvos ? JSON.parse(dadosSalvos) : [];                    //transforma o texto em objeto -- se encontrou algo no meu carrinho
  });


  //SALVAR AUTOMATICAMENTE
  useEffect(() => {
    localStorage.setItem("meu-carrinho", JSON.stringify(cart));     
  }, [cart]);

  //ADICIONA O ITEM
  function addToCart(product) {
    const itemExistente = cart.find((item) => item.id === product.id);

    //
    if (itemExistente) {
      const novoCart = cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(novoCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  }

  //RECEBE O ID DO PRODUTO QUE VOCÊ CLICOU
  //FILTER REMOVE DEIXANDO SÓ OS QUE NÃO SÃO ITENS CLICADO
  function removeFromCart(id) {
    const item = cart.find((item) => item.id === id);

    if (item.quantity > 1) {
      const novoCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setCart(novoCart);
    } else {
      setCart(cart.filter((item) => item.id !== id));
    }
  }

  //CÁLCULO
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  return (
    <div style={{
      display: "flex",
      padding: "20px",
      gap: "20px",
      fontFamily: "Arial",
      background: "#f0f2f5",
      minHeight: "100vh"
    }}>

      {/* PRODUTOS */}
      <div style={{ flex: 3 }}>
        <h1>Loja Online</h1>

        <div style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px"
        }}>
          {products.map((p) => (
            <div key={p.id} style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              width: "150px",
              background: "#fff",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}>
              <p style={{ fontWeight: "bold" }}>{p.name}</p>
              <p style={{ color: "#555" }}>R$ {p.price}</p>

              <button 
                onClick={() => addToCart(p)}
                style={{
                  background: "#4CAF50",
                  color: "white",
                  border: "none",
                  padding: "8px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%"
                }}
              >
                Adicionar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CARRINHO */}
      <div style={{
        flex: 1,
        background: "#fff",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        minWidth: "250px",
        height: "fit-content"
      }}>
        <h2>Carrinho</h2>

        {cart.length === 0 ? (
          <p style={{ color: "#777" }}>Seu carrinho está vazio</p>
        ) : (
          <>
            {cart.map((item) => (
              <div key={item.id} style={{
                borderBottom: "1px solid #eee",
                marginBottom: "10px",
                paddingBottom: "10px"
              }}>
                <p style={{ margin: 0 }}>{item.name}</p>
                <p style={{ margin: 0, color: "#666" }}>
                  {item.quantity}x
                </p>

                <button 
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    marginTop: "5px",
                    background: "#ff4d4d",
                    color: "white",
                    border: "none",
                    padding: "5px 8px",
                    borderRadius: "5px",
                    cursor: "pointer"
                  }}
                >
                  Remover
                </button>
              </div>
            ))}

            <h3 style={{ marginTop: "15px" }}>
              Total: R$ {total.toFixed(2)}
            </h3>
          </>
        )}
      </div>

    </div>
  );
}