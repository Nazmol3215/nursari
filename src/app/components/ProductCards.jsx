'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const products = [
  {
    title: 'মেটাল সাইকেল প্ল্যান্ট স্ট্যান্ড',
    imgSrc: '/images/hodanazmol.png',
    description: 'মেটাল সাইকেল প্ল্যান্ট স্ট্যান্ড লম্বা - ২৪", পাশে - ২৮" টার ব্যাসার্ধ কেসেল ৫"/৬"/৭", মজবুত ও প্লাস্টিক কোটিং রং করা। মাটি ধরবে না। দারুন সব ইনডোর প্ল্যান্ট দিয়ে সাজিয়ে নিতে পারবেন।',
    price: '৯৯৯৳',
    oldPrice: '৬৯৯.৯৯৳',
    route: '/order/metal-cycle-stand', // ✅ নির্দিষ্ট পাথ
  },
  {
    title: 'মেটাল বেলকনি রেক',
    imgSrc: '/images/hodanazmol.png',
    description: 'সাদা ৫৪"/২৬"/৩৬" - টার ব্যাসার্ধ স্পেসে ৮" ৩ পিসের প্যাকেজ। বেলকনি রেক গুলো যথেষ্ট মজবুত ও প্লাস্টিক কোটিং রং করা। সাথে ৩টি টব ফ্রি পাওয়া যাবে।',
    price: '২৯৯.৯৯৳',
    oldPrice: '৩৬০৳',
    route: '/order/balcony-rack',
  },
  {
    title: 'ব্রাজিলিয়ান লাকি উড',
    imgSrc: '/images/hodanazmol.png',
    description: 'ইন্ডোর প্ল্যান্ট / ডেস্ক প্ল্যান্ট আপনার টেবিল দারুণ এই ইন্ডোর গাছটি রাখতে পারবেন। ৪-৫ দিন পরপর পানি দিতে হবে।',
    price: '৬৫০৳',
    oldPrice: '৭৯৯.৯৯৳',
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
