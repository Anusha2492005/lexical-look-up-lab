
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  onSearch: (word: string) => void;
  searchWord: string;
  setSearchWord: (word: string) => void;
  isLoading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  searchWord,
  setSearchWord,
  isLoading
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchWord.trim()) {
      onSearch(searchWord.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex gap-3 p-2 bg-white rounded-xl shadow-lg border border-gray-200 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-200">
        <div className="flex-1">
          <Input
            type="text"
            placeholder="Enter any English word..."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            onKeyPress={handleKeyPress}
            className="border-0 text-lg placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          disabled={!searchWord.trim() || isLoading}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 disabled:opacity-50"
        >
          <Search className="w-5 h-5" />
        </Button>
      </div>
    </form>
  );
};
