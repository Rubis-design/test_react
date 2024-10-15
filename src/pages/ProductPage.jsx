import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке товара:', error);
      });
  }, [id]);

  if (!product) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className="product-page" style={{ display: 'flex', gap: '20px', padding: '20px' }}>
      <img src={product.image} alt={product.title} style={{ width: '300px', height: '300px' }} />
      <div>
        <h2>{product.title}</h2>
        <p>
          <strong>Категория:</strong> {product.category}
        </p>
        <p>
          <strong>Рейтинг:</strong> {product.rating.rate} / 5
        </p>
        <p>
          <strong>Описание:</strong> {product.description}
        </p>
        <p>
          <strong>Цена:</strong> ${product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductPage;
