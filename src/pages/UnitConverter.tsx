
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { UnitConverterMain } from '@/components/UnitConverterMain';

const UnitConverter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header with back button */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dictionary
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">
              Unit Converter
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Convert between metric and imperial units easily
            </p>
          </div>
        </div>

        {/* Main Converter */}
        <div className="max-w-4xl mx-auto">
          <UnitConverterMain />
        </div>
      </div>
    </div>
  );
};

export default UnitConverter;
