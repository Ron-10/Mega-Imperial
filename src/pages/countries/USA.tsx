import CountryTemplate from './CountryTemplate';

const USA = () => {
  const usaInfo = {
    name: "USA",
    heroImage: "https://images.pexels.com/photos/290386/pexels-photo-290386.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Experience world-class education in the United States, home to many of the world's top-ranked universities and diverse cultural experiences.",
    whyStudy: [
      "Home to many world-renowned universities including Ivy League institutions",
      "Flexible education system with diverse course options",
      "Cutting-edge research facilities and technology",
      "Rich cultural diversity and campus life",
      "Excellent career opportunities and OPT programs",
      "Strong industry connections and internship opportunities"
    ],
    universities: [
      {
        name: "Harvard University",
        location: "Cambridge, Massachusetts",
        programs: ["Business Administration", "Law", "Medicine", "Computer Science"]
      },
      {
        name: "Stanford University",
        location: "Stanford, California",
        programs: ["Engineering", "Computer Science", "Business", "Psychology"]
      },
      {
        name: "MIT",
        location: "Cambridge, Massachusetts",
        programs: ["Engineering", "Technology", "Mathematics", "Physics"]
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
          "Sponsorship letter (if applicable)"
        ]
      },
      {
        title: "English Proficiency",
        items: [
          "IELTS: Minimum 6.0-6.5 overall",
          "TOEFL: Minimum 80-90 iBT",
          "PTE: Minimum 58-65"
        ]
      },
      {
        title: "Other Requirements",
        items: [
          "Valid passport and student visa (F-1)",
          "Statement of Purpose (SOP)",
          "Letters of Recommendation",
          "SAT/ACT scores (for undergraduate)",
          "GRE/GMAT scores (for graduate programs)"
        ]
      }
    ]
  };

  return <CountryTemplate {...usaInfo} />;
};

export default USA; 