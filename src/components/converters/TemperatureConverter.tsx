
import React, { useState, useEffect } from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const TemperatureConverter: React.FC = () => {
  const [celsiusValue, setCelsiusValue] = useState<string>('');
  const [fahrenheitValue, setFahrenheitValue] = useState<string>('');
  const [isReversed, setIsReversed] = useState(false);

  const convertCelsiusToFahrenheit = (celsius: number): number => {
    return (celsius * 9/5) + 32;
  };

  const convertFahrenheitToCelsius = (fahrenheit: number): number => {
    return (fahrenheit - 32) * 5/9;
  };

  useEffect(() => {
    if (!isReversed && celsiusValue && !isNaN(Number(celsiusValue))) {
      const result = convertCelsiusToFahrenheit(Number(celsiusValue));
      setFahrenheitValue(result.toFixed(2));
    }
  }, [celsiusValue, isReversed]);

  useEffect(() => {
    if (isReversed && fahrenheitValue && !isNaN(Number(fahrenheitValue))) {
      const result = convertFahrenheitToCelsius(Number(fahrenheitValue));
      setCelsiusValue(result.toFixed(2));
    }
  }, [fahrenheitValue, isReversed]);

  const handleSwitch = () => {
    setIsReversed(!isReversed);
    const tempCelsius = celsiusValue;
    const tempFahrenheit = fahrenheitValue;
    setCelsiusValue(tempFahrenheit);
    setFahrenheitValue(tempCelsius);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">🌡️ Temperature Converter</h3>
        <p className="text-gray-600">Convert between Celsius and Fahrenheit</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Celsius (°C)
          </label>
          <Input
            type="number"
            placeholder="Enter value in °C"
            value={celsiusValue}
            onChange={(e) => setCelsiusValue(e.target.value)}
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
            Fahrenheit (°F)
          </label>
          <Input
            type="number"
            placeholder="Enter value in °F"
            value={fahrenheitValue}
            onChange={(e) => setFahrenheitValue(e.target.value)}
            disabled={!isReversed}
            className="text-lg"
          />
        </div>
      </div>

      {(celsiusValue || fahrenheitValue) && (
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            {!isReversed 
              ? `${celsiusValue}°C = ${fahrenheitValue}°F`
              : `${fahrenheitValue}°F = ${celsiusValue}°C`
            }
          </p>
        </div>
      )}
    </div>
  );
};
