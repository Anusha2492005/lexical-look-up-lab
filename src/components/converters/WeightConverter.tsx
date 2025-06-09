
import React, { useState, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const WeightConverter: React.FC = () => {
  const [kgValue, setKgValue] = useState<string>('');
  const [lbValue, setLbValue] = useState<string>('');
  const [isReversed, setIsReversed] = useState(false);

  const convertKgToLb = (kg: number): number => {
    return kg * 2.20462;
  };

  const convertLbToKg = (lb: number): number => {
    return lb / 2.20462;
  };

  useEffect(() => {
    if (!isReversed && kgValue && !isNaN(Number(kgValue))) {
      const result = convertKgToLb(Number(kgValue));
      setLbValue(result.toFixed(4));
    }
  }, [kgValue, isReversed]);

  useEffect(() => {
    if (isReversed && lbValue && !isNaN(Number(lbValue))) {
      const result = convertLbToKg(Number(lbValue));
      setKgValue(result.toFixed(4));
    }
  }, [lbValue, isReversed]);

  const handleSwitch = () => {
    setIsReversed(!isReversed);
    const tempKg = kgValue;
    const tempLb = lbValue;
    setKgValue(tempLb);
    setLbValue(tempKg);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">⚖️ Weight Converter</h3>
        <p className="text-gray-600">Convert between kilograms and pounds</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Kilograms (kg)
          </label>
          <Input
            type="number"
            placeholder="Enter value in kg"
            value={kgValue}
            onChange={(e) => setKgValue(e.target.value)}
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
            Pounds (lb)
          </label>
          <Input
            type="number"
            placeholder="Enter value in pounds"
            value={lbValue}
            onChange={(e) => setLbValue(e.target.value)}
            disabled={!isReversed}
            className="text-lg"
          />
        </div>
      </div>

      {(kgValue || lbValue) && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            {!isReversed 
              ? `${kgValue} kg = ${lbValue} pounds`
              : `${lbValue} pounds = ${kgValue} kg`
            }
          </p>
        </div>
      )}
    </div>
  );
};
