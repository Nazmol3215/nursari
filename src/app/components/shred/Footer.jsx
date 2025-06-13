"use client";
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-white text-center p-4" style={{ backgroundColor: '#3F9E53' }}>
               
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          আমরা আপনাকে দিচ্ছি দেশি ও বিদেশি ফলের সেরা চারা গাছ অনলাইনে অর্ডারের সুবিধা।  
          ঘরে বসেই কিনুন আপনার পছন্দের চারা গাছ!
        </p>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-2 mb-2">
            <a href="https://web.facebook.com/treehousebd.official" className="btn btn-primary w-100" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook me-2"></i> Facebook
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://wa.me/8801641131205" className="btn btn-success w-100" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp me-2"></i> WhatsApp
            </a>
          </div>
          <div className="col-md-2 mb-2">
            <a href="https://www.youtube.com/@treehousebd" className="btn btn-danger w-100" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube me-2"></i> YouTube
            </a>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            {/* <p>
              <i className="fas fa-phone me-2"></i>
              <a href="tel:01641131205" className="text-white">01641-131205</a>
            </p>
            <p>
              <i className="fas fa-envelope me-2"></i>
              <a href="mailto:bdtreehouse205@gmail.com" className="text-white">bdtreehouse205@gmail.com</a>
            </p> */}
          </div>
        </div>

        <div className="mt-4">
              <p style={{ fontSize: "14px", marginTop: "20px" }}>
          &copy; {new Date().getFullYear()} রুকন চারা বাজার. সর্বস্বত্ব সংরক্ষিত।
        </p>
         <h2 style={{ marginBottom: "10px", fontSize: "24px" }}>
          🌱 রুকন চারা বাজার
        </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
