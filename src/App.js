  import Header from './components/Header';
  import Articles from './components/Articles';
  
  import {useState} from 'react';

function App() {
  
  useState()
  //Usando de desestruturação
  // Retorna um valor e uma função
  let [carrinho,setCarrinho] = useState(0);
  
  const addItem = ()=>{
    setCarrinho(carrinho + 1);
    console.log("Está chamando a função"+ carrinho);
  }

  const removeItem= ()=>{
    if(carrinho > 0){
      setCarrinho(carrinho - 1);
    }
    console.log("Está chamando a função:" + carrinho);
  }
  return (
    <>
      <Header></Header>
      <Articles></Articles>

      <h3>Items no carirnho: {carrinho}</h3>

      
      <div className='flex'>
        <button className="ml-2 add-button" onClick={addItem}>+</button>
        <button className="ml-2 remove-button" onClick={removeItem} >-</button>
      </div>
    </>
  );
}

export default App;
