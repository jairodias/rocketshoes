import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList> 
      <li>
        <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="shoes"/>
        <strong>Tênis legal</strong>
        <span>R$ 300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 10
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>


      <li>
        <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="shoes"/>
        <strong>Tênis legal</strong>
        <span>R$ 300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 8
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>


      <li>
        <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="shoes"/>
        <strong>Tênis legal</strong>
        <span>R$ 300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 0
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>


      <li>
        <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="shoes"/>
        <strong>Tênis legal</strong>
        <span>R$ 300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 1
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>


      <li>
        <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="shoes"/>
        <strong>Tênis legal</strong>
        <span>R$ 300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 2
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>


      <li>
        <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="shoes"/>
        <strong>Tênis legal</strong>
        <span>R$ 300,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF"/> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      
    </ProductList>

  );
}