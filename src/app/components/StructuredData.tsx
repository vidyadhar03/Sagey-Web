'use client'

export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Vynce",
    "description": "Turn your Spotify data into stunning, AI-powered insights",
    "url": "https://vynce.app",
    "applicationCategory": "MusicApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Vynce Team"
    },
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "4.8",
      "reviewCount": "1247"
    },
    "featureList": [
      "Music Radar Analysis",
      "Musical Age Detection", 
      "Mood Ring Tracking",
      "Night Owl Pattern Analysis",
      "AI-Powered Insights",
      "Social Media Sharing"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
} 