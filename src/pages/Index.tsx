
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import { SearchBar } from '@/components/SearchBar';
import { WordResult } from '@/components/WordResult';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useQuery } from '@tanstack/react-query';

interface PhoneticData {
  text?: string;
  audio?: string;
}

interface DefinitionData {
  definition: string;
  example?: string;
  synonyms?: string[];
}

interface MeaningData {
  partOfSpeech: string;
  definitions: DefinitionData[];
}

interface WordData {
  word: string;
  phonetics: PhoneticData[];
  meanings: MeaningData[];
}

const fetchWordDefinition = async (word: string): Promise<WordData[]> => {
  if (!word.trim()) {
    throw new Error('Please enter a word to search');
  }
  
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word.trim())}`);
  
  if (!response.ok) {
    throw new Error('Word not found');
  }
  
  return response.json();
};

const Index = () => {
  const [searchWord, setSearchWord] = useState('');
  const [submittedWord, setSubmittedWord] = useState('');

  const { data: wordData, isLoading, error, refetch } = useQuery({
    queryKey: ['word-definition', submittedWord],
    queryFn: () => fetchWordDefinition(submittedWord),
    enabled: !!submittedWord,
    retry: false,
  });

  const handleSearch = (word: string) => {
    setSubmittedWord(word);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Dictionary
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Search for any English word to find its definition, pronunciation, and usage examples
          </p>
          
          {/* Unit Converter Link */}
          <div className="mt-6">
            <Link 
              to="/unit-converter" 
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg hover:bg-blue-50 transition-all duration-200"
            >
              <Calculator className="w-4 h-4" />
              Unit Converter
            </Link>
          </div>
        </div>

        {/* Search Section */}
        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar 
            onSearch={handleSearch}
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            isLoading={isLoading}
          />
        </div>

        {/* Results Section */}
        <div className="max-w-4xl mx-auto">
          {isLoading && <LoadingSpinner />}
          
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Word Not Found</h3>
              <p className="text-red-600">
                Sorry, we couldn't find a definition for "{submittedWord}". 
                Please check your spelling and try again.
              </p>
            </div>
          )}
          
          {wordData && wordData.length > 0 && (
            <WordResult wordData={wordData[0]} />
          )}
          
          {!submittedWord && !isLoading && !error && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">
                Start Your Search
              </h3>
              <p className="text-gray-500">
                Enter any English word above to discover its meaning, pronunciation, and more
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
