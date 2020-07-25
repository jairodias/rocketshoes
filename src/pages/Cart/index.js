import React from 'react';

import { MdAddCircleOutline, MdRemoveCircleOutline,MdDelete } from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="shoes"/>
            </td>
            <td>
              <strong>Shoes</strong>
              <span>R$ 187,80</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7159c1" />
                </button>

                <input type="number" readOnly value={1}/>
                
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159c1" />
                </button>
              </div>
            </td>

            <td>
              <strong>R$ 375,60 </strong>
            </td>

            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1"/>
              </button>
            </td>
            
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$ 900,18</strong>
        </Total>
      </footer>
    </Container>
  );
}