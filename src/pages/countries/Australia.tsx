import React from 'react';
import CountryTemplate from './CountryTemplate';

const Australia = () => {
  const australiaInfo = {
    name: "Australia",
    heroImage: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80",
    description: "Study in Australia for world-class education, amazing lifestyle, and great post-study work opportunities.",
    whyStudy: [
      "High-quality education with globally recognized qualifications",
      "Post-study work opportunities up to 4 years",
      "Multicultural society with excellent quality of life",
      "Safe and welcoming environment for international students",
      "Beautiful weather and natural attractions",
      "Strong support system for international students"
    ],
    universities: [
      {
        name: "University of Melbourne",
        location: "Melbourne, Victoria",
        programs: ["Business", "Engineering", "Arts", "Medicine"]
      },
      {
        name: "University of Sydney",
        location: "Sydney, New South Wales",
        programs: ["Law", "Architecture", "Engineering", "Health Sciences"]
      },
      {
        name: "Australian National University",
        location: "Canberra, ACT",
        programs: ["Research", "Science", "Arts", "Business"]
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
          "Financial sponsorship documents (if applicable)"
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
          "Valid passport and student visa (Subclass 500)",
          "Statement of Purpose",
          "GTE (Genuine Temporary Entrant) statement",
          "Health insurance (OSHC)",
          "Character and health requirements"
        ]
      }
    ]
  };

  return <CountryTemplate {...australiaInfo} />;
};

export default Australia; 