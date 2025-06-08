
import React, { useState, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const LengthConverter: React.FC = () => {
  const [cmValue, setCmValue] = useState<string>('');
  const [inchValue, setInchValue] = useState<string>('');
  const [isReversed, setIsReversed] = useState(false);

  const convertCmToInch = (cm: number): number => {
    return cm / 2.54;
  };

  const convertInchToCm = (inch: number): number => {
    return inch * 2.54;
  };

  useEffect(() => {
    if (!isReversed && cmValue && !isNaN(Number(cmValue))) {
      const result = convertCmToInch(Number(cmValue));
      setInchValue(result.toFixed(4));
    }
  }, [cmValue, isReversed]);

  useEffect(() => {
    if (isReversed && inchValue && !isNaN(Number(inchValue))) {
      const result = convertInchToCm(Number(inchValue));
      setCmValue(result.toFixed(4));
    }
  }, [inchValue, isReversed]);

  const handleSwitch = () => {
    setIsReversed(!isReversed);
    const tempCm = cmValue;
    const tempInch = inchValue;
    setCmValue(tempInch);
    setInchValue(tempCm);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">📏 Length Converter</h3>
        <p className="text-gray-600">Convert between centimeters and inches</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Centimeters (cm)
          </label>
          <Input
            type="number"
            placeholder="Enter value in cm"
            value={cmValue}
            onChange={(e) => setCmValue(e.target.value)}
            disabled={isReversed}
            className="text-lg"
          />
        </div>

        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={handleSwitch}
            className="rounded-full"
          >
            <ArrowLeftRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Inches (in)
          </label>
          <Input
            type="number"
            placeholder="Enter value in inches"
            value={inchValue}
            onChange={(e) => setInchValue(e.target.value)}
            disabled={!isReversed}
            className="text-lg"
          />
        </div>
      </div>

      {(cmValue || inchValue) && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            {!isReversed 
              ? `${cmValue} cm = ${inchValue} inches`
              : `${inchValue} inches = ${cmValue} cm`
            }
          </p>
        </div>
      )}
    </div>
  );
};
