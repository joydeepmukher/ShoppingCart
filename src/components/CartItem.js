import React from 'react';

function CartItem({product,price,qty}) {
  return (
      <div class="list-group-item">
        <div class="row">
          <div class="col-md-8">{product}</div>
          <div class="col-md-2">${price}</div>
          <div class="col-md-2">{qty}</div>
        </div>
      </div>
  );
}

export default CartItem;
