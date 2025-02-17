import React from 'react';
import CountryTemplate from './CountryTemplate';

const NewZealand = () => {
  const nzInfo = {
    name: "New Zealand",
    heroImage: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&q=80",
    description: "Experience quality education in New Zealand, known for its innovative teaching, stunning landscapes, and welcoming culture.",
    whyStudy: [
      "High-quality education with practical learning approach",
      "Post-study work opportunities",
      "Safe and peaceful environment",
      "Beautiful natural environment",
      "Excellent work-life balance",
      "Welcoming to international students"
    ],
    universities: [
      {
        name: "University of Auckland",
        location: "Auckland",
        programs: ["Business", "Engineering", "Arts", "Sciences"]
      },
      {
        name: "University of Otago",
        location: "Dunedin",
        programs: ["Medicine", "Business", "Sciences", "Humanities"]
      },
      {
        name: "Victoria University of Wellington",
        location: "Wellington",
        programs: ["Law", "Architecture", "Science", "Commerce"]
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
          "Sponsorship evidence (if applicable)"
        ]
      },
      {
        title: "English Proficiency",
        items: [
          "IELTS: Minimum 6.0 overall",
          "PTE: Minimum 58",
          "TOEFL: Minimum 80 iBT"
        ]
      },
      {
        title: "Other Requirements",
        items: [
          "Valid passport and student visa",
          "Statement of Purpose",
          "Medical and travel insurance",
          "Character requirements",
          "Genuine intention to study"
        ]
      }
    ]
  };

  return <CountryTemplate {...nzInfo} />;
};

export default NewZealand; 