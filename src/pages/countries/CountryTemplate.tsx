import React from 'react';
import ParallaxSection from '../../components/ParallaxSection';

interface CountryInfo {
  name: string;
  heroImage: string;
  description: string;
  whyStudy: string[];
  universities: {
    name: string;
    location: string;
    programs: string[];
  }[];
  requirements: {
    title: string;
    items: string[];
  }[];
}

const CountryTemplate: React.FC<CountryInfo> = ({
  name,
  heroImage,
  description,
  whyStudy,
  universities,
  requirements
}) => {
  return (
    <>
      <ParallaxSection 
        imageUrl={heroImage}
        height="50vh"
        overlay={true}
      >
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold mb-6 text-white">Study in {name}</h1>
          <p className="text-xl max-w-3xl mx-auto text-white">
            {description}
          </p>
        </div>
      </ParallaxSection>

      <div className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Why Study Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Why Study in {name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyStudy.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <p className="text-gray-700">{reason}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Top Universities Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Top Universities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((university, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
                  <p className="text-gray-600 mb-4">{university.location}</p>
                  <h4 className="font-medium mb-2">Popular Programs:</h4>
                  <ul className="list-disc list-inside text-gray-700">
                    {university.programs.map((program, idx) => (
                      <li key={idx}>{program}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Requirements Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8">Requirements</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="space-y-6">
                {requirements.map((requirement, index) => (
                  <div key={index}>
                    <h3 className="text-xl font-semibold mb-3">{requirement.title}</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      {requirement.items.map((item, idx) => (
                        <li key={idx} className="text-gray-700">{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default CountryTemplate; 