import React from 'react';
import CountryTemplate from './CountryTemplate';

const Canada = () => {
  const canadaInfo = {
    name: "Canada",
    heroImage: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80",
    description: "Study in Canada and experience high-quality education, multicultural environment, and excellent post-study work opportunities.",
    whyStudy: [
      "High-quality education at affordable tuition rates",
      "Post-study work permits and immigration opportunities",
      "Safe and welcoming environment for international students",
      "Multicultural society with high quality of life",
      "Bilingual environment (English and French)",
      "Beautiful landscapes and modern cities"
    ],
    universities: [
      {
        name: "University of Toronto",
        location: "Toronto, Ontario",
        programs: ["Business", "Engineering", "Medicine", "Computer Science"]
      },
      {
        name: "University of British Columbia",
        location: "Vancouver, British Columbia",
        programs: ["Environmental Science", "Business", "Engineering", "Arts"]
      },
      {
        name: "McGill University",
        location: "Montreal, Quebec",
        programs: ["Medicine", "Law", "Engineering", "Business"]
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
          "GIC (Guaranteed Investment Certificate)",
          "Bank statements showing sufficient funds"
        ]
      },
      {
        title: "English Proficiency",
        items: [
          "IELTS: Minimum 6.0 overall",
          "TOEFL: Minimum 80 iBT",
          "PTE: Minimum 58"
        ]
      },
      {
        title: "Other Requirements",
        items: [
          "Valid passport and study permit",
          "Letter of acceptance from a DLI",
          "Statement of Purpose",
          "Medical examination",
          "Biometrics"
        ]
      }
    ]
  };

  return <CountryTemplate {...canadaInfo} />;
};

export default Canada; 