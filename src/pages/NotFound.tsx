
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 text-gray-800 flex items-center justify-center">
      <div className="text-center">
        <Calculator className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-600 mb-4">Page Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back to converting units!
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Unit Converter
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
