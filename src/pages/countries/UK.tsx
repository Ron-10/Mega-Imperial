import React from 'react';
import CountryTemplate from './CountryTemplate';

const UK = () => {
  const ukInfo = {
    name: "UK",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80",
    description: "Study in the United Kingdom for world-renowned education, rich cultural heritage, and innovative research opportunities.",
    whyStudy: [
      "Prestigious universities with centuries of academic excellence",
      "Shorter duration of degree programs saving time and money",
      "Multicultural environment in the heart of Europe",
      "Post-study work opportunities (Graduate Route)",
      "English-speaking country with rich history",
      "Strong research infrastructure and funding"
    ],
    universities: [
      {
        name: "University of Oxford",
        location: "Oxford, England",
        programs: ["PPE", "Engineering", "Medicine", "Computer Science"]
      },
      {
        name: "University of Cambridge",
        location: "Cambridge, England",
        programs: ["Natural Sciences", "Mathematics", "Engineering", "Law"]
      },
      {
        name: "Imperial College London",
        location: "London, England",
        programs: ["Engineering", "Medicine", "Business", "Computing"]
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
          "Financial undertaking from sponsor"
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
          "Valid passport and student visa",
          "Personal Statement",
          "Letters of Reference",
          "CAS from the university",
          "Health surcharge payment"
        ]
      }
    ]
  };

  return <CountryTemplate {...ukInfo} />;
};

export default UK; 