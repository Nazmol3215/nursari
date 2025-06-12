'use client'; // Next.js এর client component হিসেবে চিহ্নিত করতে হবে
import React from "react";
const MarqueeBanner = () => {
return (
    <marquee
        style={{
            color: "white",
            fontSize: "20px",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #4CAF50, #2E8B57)",
            padding: "12px",
            borderRadius: "8px",
            border: "2px solid #fff",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
            display: "block",
            width: "100%",
        }}
    >
        আমাদের বাগানে পাবেন দেশীয় লটকন চারা, যা আপনার বাগানকে করবে আরও সুন্দর ও ফলদায়ক।
        <span style={{ marginLeft: "20px" }}>
            🌱🌿 আমাদের বাগানে পাবেন দেশীয় লটকন চারা, যা আপনার বাগানকে করবে আরও সুন্দর ও ফলদায়ক। 🌿🌱
        </span>
    </marquee>
);
};

export default MarqueeBanner;
