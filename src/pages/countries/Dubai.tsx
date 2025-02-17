import React from 'react';
import CountryTemplate from './CountryTemplate';

const Dubai = () => {
  const dubaiInfo = {
    name: "Dubai",
    heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80",
    description: "Study in Dubai, a global hub for education combining international standards with Middle Eastern hospitality and opportunities.",
    whyStudy: [
      "International university campuses from global institutions",
      "Tax-free income opportunities",
      "Strategic location between East and West",
      "Modern infrastructure and facilities",
      "Multicultural environment",
      "Safe and stable environment"
    ],
    universities: [
      {
        name: "University of Dubai",
        location: "Dubai International Academic City",
        programs: ["Business Administration", "Engineering", "Law", "IT"]
      },
      {
        name: "Heriot-Watt University Dubai",
        location: "Dubai Knowledge Park",
        programs: ["Business", "Engineering", "Computer Science", "Psychology"]
      },
      {
        name: "Canadian University Dubai",
        location: "City Walk Dubai",
        programs: ["Architecture", "Business", "Engineering", "Communication"]
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
          "Financial guarantee letter"
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
          "Valid passport and student visa",
          "No Objection Certificate (NOC)",
          "Health insurance",
          "Emirates ID application",
          "Medical fitness test"
        ]
      }
    ]
  };

  return <CountryTemplate {...dubaiInfo} />;
};

export default Dubai; 