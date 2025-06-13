'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const products = [
  {
    id: 1,    
    title: 'The Dark Side Unisex Softstyle T-Shirt',
    price: 20,
    image: '/images/hodanazmol.png',
  },
  {
    id: 2,
    title: 'Putt, I Must Unisex Softstyle T-Shirt',
    price: 15,
    image: '/images/ibrahim.png',
  },
  {
    id: 3,
    title: 'Never Hit A Shot Unisex Softstyle T-Shirt',
    price: 15,
    image: '/images/hodanazmol.png',
  },
  {
    id: 4,
    title: 'May The Course Be With You Unisex Softstyle T-Shirt',
    price: 300,
    image: '/images/ibrahim.png',
  },
  {
    id: 5,
    title: 'The Dark Side Unisex Softstyle T-Shirt',
    price: 300,
    image: '/images/hodanazmol.png',
  },
];

export default function ProductGridTwo() {
  const router = useRouter();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      style={{
        position: 'relative',
        padding: '10px',
        overflow: 'hidden',
      }}
    >
      {/* Scroll Left Button */}
      <button
        onClick={() => scroll('left')}
        style={{
          position: 'absolute',
          left: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          border: 'none',
          fontSize: '14px',
          padding: '10px',
          borderRadius: '50%',
          zIndex: 2,
          cursor: 'pointer',
        }}
      >
        ◀
      </button>

      {/* Scroll Right Button */}
      <button
        onClick={() => scroll('right')}
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.6)',
          color: '#fff',
          border: 'none',
          fontSize: '14px',
          padding: '10px',
          borderRadius: '50%',
          zIndex: 2,
          cursor: 'pointer',
        }}
      >
        ▶
      </button>

      {/* Horizontal Scrollable Product Container */}
      <div
        ref={scrollRef}
        style={{
          display: 'flex',
          overflowX: 'auto',
          scrollBehavior: 'smooth',
          gap: '20px',
          padding: '10px',
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              width: '230px',
              height: '350px',
              backgroundColor: '#fff',
              borderRadius: '10px',
              padding: '10px',
              textAlign: 'center',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.5)',
              transition: 'all 0.3s ease',
              position: 'relative',
              flex: '0 0 auto',
            }}
          >
            {/* Discount Badge */}
            {product.price < 300 && (
              <div
                style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '5px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                }}
              >
                50% OFF
              </div>
            )}

            <Image
              src={product.image}
              alt={product.title}
              width={200}
              height={200}
              style={{ borderRadius: '8px' }}
            />
            <h3 style={{ fontSize: '16px', margin: '10px 0' }}>{product.title}</h3>
            <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
              ${product.price}
            </p>
            <button
              style={{
                padding: '8px 16px',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold',
              }}
              onClick={() => router.push(`/product/${product.id}`)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
