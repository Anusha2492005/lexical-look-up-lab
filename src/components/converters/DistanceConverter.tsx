
import React, { useState, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const DistanceConverter: React.FC = () => {
  const [kmValue, setKmValue] = useState<string>('');
  const [miValue, setMiValue] = useState<string>('');
  const [isReversed, setIsReversed] = useState(false);

  const convertKmToMi = (km: number): number => {
    return km * 0.621371;
  };

  const convertMiToKm = (mi: number): number => {
    return mi / 0.621371;
  };

  useEffect(() => {
    if (!isReversed && kmValue && !isNaN(Number(kmValue))) {
      const result = convertKmToMi(Number(kmValue));
      setMiValue(result.toFixed(4));
    }
  }, [kmValue, isReversed]);

  useEffect(() => {
    if (isReversed && miValue && !isNaN(Number(miValue))) {
      const result = convertMiToKm(Number(miValue));
      setKmValue(result.toFixed(4));
    }
  }, [miValue, isReversed]);

  const handleSwitch = () => {
    setIsReversed(!isReversed);
    const tempKm = kmValue;
    const tempMi = miValue;
    setKmValue(tempMi);
    setMiValue(tempKm);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">🚗 Distance Converter</h3>
        <p className="text-gray-600">Convert between kilometers and miles</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Kilometers (km)
          </label>
          <Input
            type="number"
            placeholder="Enter value in km"
            value={kmValue}
            onChange={(e) => setKmValue(e.target.value)}
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
            Miles (mi)
          </label>
          <Input
            type="number"
            placeholder="Enter value in miles"
            value={miValue}
            onChange={(e) => setMiValue(e.target.value)}
            disabled={!isReversed}
            className="text-lg"
          />
        </div>
      </div>

      {(kmValue || miValue) && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            {!isReversed 
              ? `${kmValue} km = ${miValue} miles`
              : `${miValue} miles = ${kmValue} km`
            }
          </p>
        </div>
      )}
    </div>
  );
};
