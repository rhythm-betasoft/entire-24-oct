import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      });
  }, []); 

  return (
  <div className="container mx-auto p-4">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded-lg shadow-md p-4 flex flex-col" >
            <img src={product.image} alt={product.title} className="w-full h-48 object-contain mb-4 "/>
            <h3 className="text-xl font-semibold mb-2 text-center ">{product.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>

            <div className="mt-auto text-center">
              <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
            </div>
          <div className='flex align-center justify-between'>
  <button ml-5  className="bg-yellow-400 text-white px-2 py-1 rounded text-lg">Edit</button>
  <button  className="bg-red-600 text-white px-2 py-1 rounded text-lg">Delete</button>
</div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
