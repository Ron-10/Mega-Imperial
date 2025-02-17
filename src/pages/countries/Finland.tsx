import React from 'react';
import CountryTemplate from './CountryTemplate';

const Finland = () => {
  const finlandInfo = {
    name: "Finland",
    heroImage: "https://images.unsplash.com/photo-1529154166925-574a0236a4f4?auto=format&fit=crop&q=80",
    description: "Experience high-quality education in Finland, known for its innovative teaching methods and excellent quality of life.",
    whyStudy: [
      "High-quality education system ranked among the world's best",
      "Many English-taught programs available",
      "No tuition fees for EU/EEA students",
      "Safe and stable society with high living standards",
      "Innovative teaching methods and research opportunities",
      "Strong focus on technology and sustainability"
    ],
    universities: [
      {
        name: "University of Helsinki",
        location: "Helsinki",
        programs: ["Computer Science", "Environmental Sciences", "Education", "Business"]
      },
      {
        name: "Aalto University",
        location: "Espoo",
        programs: ["Engineering", "Business", "Arts and Design", "Architecture"]
      },
      {
        name: "University of Turku",
        location: "Turku",
        programs: ["Biotechnology", "Education", "Business", "Technology"]
      }
    ],
    requirements: [
      {
        title: "Academic Requirements",
        items: [
          "All academic certificates from SEE/SLC to latest",
          "Latest academic transcripts and mark sheets",
          "School/College leaving certificates",
          "Character certificates"
        ]
      },
      {
        title: "Financial Requirements",
        items: [
          "Proof of tuition fees payment",
          "Bank voucher/receipt of payment",
          "Bank statements showing sufficient funds",
          "Proof of means of support"
        ]
      },
      {
        title: "English Proficiency",
        items: [
          "IELTS: Minimum 6.0-6.5 overall",
          "PTE: Minimum 58-65",
          "TOEFL: Minimum 80-90 iBT"
        ]
      },
      {
        title: "Other Requirements",
        items: [
          "Valid passport and residence permit",
          "Motivation letter",
          "CV/Resume",
          "Health insurance",
          "Application fee payment (if applicable)"
        ]
      }
    ]
  };

  return <CountryTemplate {...finlandInfo} />;
};

export default Finland; 