'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  {
    title: 'দেশি ও বারমাসি পেয়ারা গাছের চারা - টক-মিষ্টি স্বাদের নিশ্চয়তা',
    imgSrc: '/images/hodanazmol.png',
    description: 'উন্নতমানের দেশি ও বারমাসি পেয়ারা গাছের চারা এখন অনলাইনে সহজেই কিনুন। এই পেয়ারা চারা কম সময়ে ফল দেয়, স্বাদে টক-মিষ্টি এবং আকারে বড়। বাড়ির ছাদ বা বাগানের জন্য উপযুক্ত।',
    price: '৪০.০০৳',
    oldPrice: '৬0.00৳',
    route: '/order/metal-cycle-stand', // ✅ নির্দিষ্ট পাথ
  },
  {
    title: 'উন্নত জাতের আম গাছের চারা - মধুমাসে ঘ্রাণভরা ফল',
    imgSrc: '/images/hodanazmol.png',
    description: 'হিমসাগর, ল্যাংড়া, গোপালভোগসহ নানা জাতের আমের চারা এখানে পাবেন সাশ্রয়ী দামে। গ্রীষ্মে সুস্বাদু ও ঘ্রাণযুক্ত আম পেতে এখনই কিনুন আপনার পছন্দের আম গাছের চারা।',
    price: '৭০৳',
    oldPrice: 'প্রতি চারা =১০০ টাকা ',
    route: '/order/balcony-rack',
  },
  {
    title: ' রসাল ও মিষ্টি লিচু গাছের উন্নত জাতের চারা - বাগানের জন্য উপযুক্ত',
    imgSrc: '/images/hodanazmol.png',
    description: 'দেশি ও চায়না-৩ জাতের লিচু গাছের চারা এখন সাশ্রয়ী দামে। মিষ্টি স্বাদের, ঘ্রাণযুক্ত রসাল লিচুর ফল পেতে লাগান এই উন্নত জাতের চারা। ঘরের আঙিনা, ছাদ বা বাগানে সহজেই চাষ করা যায়। নিয়মিত পরিচর্যায় ২-৩ বছরের মধ্যেই ফল পাওয়া যায়।',
    price: ' প্রতি চারা – ৯০ টাকা (দেশি),',
    oldPrice: '১১৯৳',
    route: '/order/brazilian-lucky-wood',
  },
];

const ProductCards = () => {
  const router = useRouter();

  const handleOrder = (route) => {
    router.push(route);
  };

  return (
    <Container className="my-5">
      <Row className="g-4">
        {products.map((product, index) => (
          <Col key={index} xs={12} md={6} lg={4}>
            <Card className="h-100 shadow-sm">
              <div style={{ position: 'relative', width: '100%', height: '250px' }}>
                <Image
                  src={product.imgSrc}
                  alt={product.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <Card.Body>
                <Card.Title className="text-success fw-bold">{product.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem' }}>{product.description}</Card.Text>
                <Card.Text>
                  <span className="text-success fw-bold">অফার মূল্য - {product.price}</span><br />
                  <span className="text-decoration-line-through text-muted">আগের দামঃ {product.oldPrice}</span>
                </Card.Text>

                {/* ✅ Direct page navigation */}
                <Button variant="success" onClick={() => handleOrder(product.route)}>
                  Order Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductCards;
