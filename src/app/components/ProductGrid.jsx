'use client';

import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const products = [
  {
    path: '/products/payel-sar',
    title: 'পায়েল সার',
    description: 'High-quality wireless headphones with noise cancellation.',
    rating: 4.5,
    price: 120,
    imgSrc: '/images/hodanazmol.png',
  },
  {
    path: '/products/vami-mixture',
    title: 'ভামী মিক্সচার',
    description: 'Latest smartphone with advanced features.',
    rating: 4.8,
    price: 899,
    imgSrc: '/images/hodanazmol.png',
  },
  {
    path: '/products/metal-rack',
    title: 'মেটাল রেক',
    description: 'Lightweight laptop with powerful performance.',
    rating: 4.7,
    price: 1500,
    imgSrc: '/images/hodanazmol.png',
  },
  {
    path: '/products/hodanazmol.png',
    title: 'ইনডোর প্লান্টি',
    description: 'Feature-packed smartwatch with health tracking.',
    rating: 4.3,
    price: 200,
    imgSrc: '/images/hodanazmol.png',
  },
];

const ProductGrid = () => {
  const router = useRouter();

  const handleBuyNow = (path) => {
    router.push(path);
  };

  return (
    <Container className="my-5">
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={6} md={6} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <div style={{ width: '100%', height: '180px', position: 'relative' }}>
                <Image
                  src={product.imgSrc}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="fw-bold">{product.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem' }}>{product.description}</Card.Text>
                <Card.Text>
                  <strong>Rating:</strong> {product.rating} ⭐<br />
                  <strong>Price:</strong> ${product.price}
                </Card.Text>
                <Button variant="success" className="mt-auto" onClick={() => handleBuyNow(product.path)}>
                  Buy Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
