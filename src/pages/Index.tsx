
import React from 'react';
import { Calculator } from 'lucide-react';
import { UnitConverterMain } from '@/components/UnitConverterMain';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Calculator className="w-12 h-12 text-blue-600" />
            <h1 className="text-5xl font-bold text-gray-800">
              Unit Converter
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Convert between metric and imperial units easily. Support for length, weight, distance, and temperature conversions.
          </p>
        </div>

        {/* Main Converter */}
        <div className="max-w-4xl mx-auto">
          <UnitConverterMain />
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-200">
          <p className="text-gray-500">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
