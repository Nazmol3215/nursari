'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ImageCard = ({ imgSrc, title, description, price }) => {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      style={{
        margin: '20px auto',
        width: '350px',
        textAlign: 'center',
        position: 'relative',
        border: '1px solid #ccc',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ position: 'relative' }}>
        <Image
          src="/images/hodanazmol.png"
          alt="Product"
          width={350}
          height={300}
          style={{ display: 'block' }}
        />
        {hovered && (
          <div
            style={{
              position: 'absolute',
              top: '30px',
              left: '40%', 
              transform: 'translateX(-50%)',
              display: 'flex',
              gap: '10px',
              zIndex: 10
            }}
          >
            <button
              onClick={() => router.push('/details')}
              style={{
                padding: '6px 12px',
                backgroundColor: '#0070f3',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                left: '20%',
                width: '150px'
              }}
            >
              বিস্তারিত তথ্য
            </button>
            <button
              onClick={() => router.push('/order')}
              style={{
                padding: '6px 12px',
                backgroundColor: '#e91e63',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                right: '20%',
                width: '150px'
              }}
            >
              অর্ডার করুন
            </button>
          </div>
        )}
      </div>
      <div style={{ padding: '10px' }}>
        <h3>{title} লটকন চারা</h3>
        <p>{description} অনেক সুস্বাদু</p>
        <p style={{ fontWeight: 'bold', color: 'green' }}>মূল্য: {price} টাকা</p>
      </div>
    </div>
  );
};

export default ImageCard;
