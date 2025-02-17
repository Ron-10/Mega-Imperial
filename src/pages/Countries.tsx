import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import USA from './countries/USA';
import UK from './countries/UK';
import Finland from './countries/Finland';
import Australia from './countries/Australia';
import NewZealand from './countries/NewZealand';
import Dubai from './countries/Dubai';
import Canada from './countries/Canada';

const Countries = () => {
  const { country } = useParams();

  switch (country) {
    case 'usa':
      return <USA />;
    case 'uk':
      return <UK />;
    case 'finland':
      return <Finland />;
    case 'australia':
      return <Australia />;
    case 'new-zealand':
      return <NewZealand />;
    case 'dubai':
      return <Dubai />;
    case 'canada':
      return <Canada />;
    default:
      return <Navigate to="/" replace />;
  }
};

export default Countries; 