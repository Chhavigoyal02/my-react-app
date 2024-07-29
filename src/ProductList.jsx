import React from 'react';
import Product from './Product.jsx';

function ProductList({ products }){
  return (
    <div className="md:grid grid-cols-3 gap-2 space-y-4 md:space-y-2 mt-5">
      {products.map(function(items){
        return (
          <Product 
            key={items.id}
            {...items}
            />
        );
      })}
    </div>
  );
}

export default ProductList;