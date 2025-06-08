
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LengthConverter } from './converters/LengthConverter';
import { WeightConverter } from './converters/WeightConverter';
import { DistanceConverter } from './converters/DistanceConverter';
import { TemperatureConverter } from './converters/TemperatureConverter';

type UnitType = 'length' | 'weight' | 'distance' | 'temperature';

const unitTypes = [
  { value: 'length', label: '📏 Length (cm ⇄ inches)', icon: '📏' },
  { value: 'weight', label: '⚖️ Weight (kg ⇄ pounds)', icon: '⚖️' },
  { value: 'distance', label: '🚗 Distance (km ⇄ miles)', icon: '🚗' },
  { value: 'temperature', label: '🌡️ Temperature (°C ⇄ °F)', icon: '🌡️' },
];

export const UnitConverterMain: React.FC = () => {
  const [selectedType, setSelectedType] = useState<UnitType>('length');

  const renderConverter = () => {
    switch (selectedType) {
      case 'length':
        return <LengthConverter />;
      case 'weight':
        return <WeightConverter />;
      case 'distance':
        return <DistanceConverter />;
      case 'temperature':
        return <TemperatureConverter />;
      default:
        return <LengthConverter />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Choose conversion type:
        </label>
        <Select value={selectedType} onValueChange={(value: UnitType) => setSelectedType(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select unit type" />
          </SelectTrigger>
          <SelectContent>
            {unitTypes.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {renderConverter()}
    </div>
  );
};
