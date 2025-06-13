import Head from 'next/head';

export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f7fff7', padding: '20px' }}>
      <Head>
        <title>রুকন চারা বাজার | ফলজ বনজ ও ঔষধি গাছের চারা অনলাইনে কিনুন</title>
        <meta
          name="description"
          content="রুকন চারা বাজার থেকে কিনুন বাংলাদেশের সেরা অনলাইন ফলজ, বনজ ও ঔষধি গাছের চারা। হোম ডেলিভারি সহ নির্ভরযোগ্য নার্সারি।"
        />
        <meta name="keywords" content="চারা, অনলাইন চারা, ফলজ গাছ, বনজ গাছ, নার্সারি, rukon chhara bazar" />
        <meta name="author" content="Rukon" />
        <meta property="og:title" content="রুকন চারা বাজার | বাংলাদেশের সেরা অনলাইন চারা বাজার" />
        <meta
          property="og:description"
          content="ফলজ, বনজ ও ঔষধি গাছের চারা কিনুন রুকন চারা বাজার থেকে। বিশ্বস্ত ও দ্রুত ডেলিভারিসহ অনলাইন সেবা।"
        />
        <meta property="og:image" content="https://yourdomain.com/charabazar-banner.jpg" />
        <meta property="og:url" content="https://rukoncharabazar.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <h1 style={{ textAlign: 'center', color: '#006400', fontSize: '36px' }}>
        🌱 রুকন চারা বাজার 🌿
      </h1>
      <p style={{ textAlign: 'center', color: '#333', fontSize: '18px' }}>
        ফলজ, বনজ, ঔষধি চারা এখন ঘরে বসেই কিনুন।
      </p>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px', color: '#2c3e50' }}>বেস্ট সেলিং চারা</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {[
            { name: 'আম গাছের চারা', image: 'https://yourdomain.com/aam.jpg' },
            { name: 'লিচু গাছের চারা', image: 'https://yourdomain.com/lichu.jpg' },
            { name: 'নারকেল গাছের চারা', image: 'https://yourdomain.com/narkel.jpg' },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                border: '1px solid #ddd',
                borderRadius: '10px',
                padding: '10px',
                width: '250px',
                backgroundColor: '#fff',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '100%', borderRadius: '8px', height: '180px', objectFit: 'cover' }}
              />
              <h3 style={{ textAlign: 'center', marginTop: '10px', color: '#228B22' }}>{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
