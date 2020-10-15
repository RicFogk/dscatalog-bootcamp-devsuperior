import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { ProductsResponse } from '../../core/types/Product';
import { makeRequest } from '../../core/utils/request';
import ProductCard from './components/ProductCard';
import ProductCardLoader from './components/Loaders/ProductCardLoader';
import './styles.scss';

function Catalog(){
  //quando o componente iniciar, buscar lista de produtos

  // quando a lista de produtos estiver disponível,
  // popular um estado no componente, e listar os produtos dinamicamente

  const [productsResponse, setProductsResponse] = useState<ProductsResponse>();
  const [isLoading, setIsLoading] = useState(false);

  console.log(productsResponse);

  useEffect(() => {
    // teste de quando o comonente é inicado---> console.log('Componente de listagem iniciado!')
    // sobre o FETCH:
    //muito codigo para fazer requisicao
    //nao tem suporte nativo para ler o progresso de upload de arquivos
    // nao tem suporte nativo para enviar query strings
    // substituir fetch('http://localhost:3000/products').then(response=>response.json()).then (response => console.log(response)); por axios
    //substitui o axios por makeRequest

    const params = {
      page: 0,
      linesPerPage: 12
    
    }

    //iniciar o loader
    setIsLoading(true);
    makeRequest({ url: '/products', params}).then(response => setProductsResponse(response.data)).finally (() => {
      //finalizar o loader
      setIsLoading(false);
    })
  },[]
  );

  return (
   <div className = "catalog-container">
        <h1 className="catalog-title">
          Catálogo de produtos
          </h1>
    
    <div className="catalog-products">
      {isLoading ? <ProductCardLoader /> : (
        productsResponse?.content.map(product => (
          <Link to={`/products/${product.id}`} key={product.id}>
          <ProductCard product={product} />
          </Link>
          ))
      )}
      
    </div>

    </div>
);
}

export default Catalog;