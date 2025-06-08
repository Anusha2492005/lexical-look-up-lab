
import React, { useState } from 'react';
import { Volume2, BookOpen, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

interface WordResultProps {
  wordData: WordData;
}

export const WordResult: React.FC<WordResultProps> = ({ wordData }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const playPronunciation = (audioUrl: string) => {
    if (audioUrl) {
      setIsPlaying(true);
      const audio = new Audio(audioUrl);
      audio.play().catch(console.error);
      audio.onended = () => setIsPlaying(false);
      audio.onerror = () => setIsPlaying(false);
    }
  };

  const getPhonetic = () => {
    return wordData.phonetics?.find(p => p.text) || wordData.phonetics?.[0];
  };

  const getAudioUrl = () => {
    return wordData.phonetics?.find(p => p.audio)?.audio || '';
  };

  const phonetic = getPhonetic();
  const audioUrl = getAudioUrl();

  return (
    <div className="space-y-6 animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
      {/* Word Header */}
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <CardTitle className="text-4xl font-bold text-gray-800 mb-2">
                {wordData.word}
              </CardTitle>
              {phonetic?.text && (
                <p className="text-xl text-gray-600 font-mono">
                  {phonetic.text}
                </p>
              )}
            </div>
            {audioUrl && (
              <Button
                onClick={() => playPronunciation(audioUrl)}
                disabled={isPlaying}
                variant="outline"
                size="lg"
                className="flex items-center gap-2 text-blue-600 border-blue-200 hover:bg-blue-50"
              >
                <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-pulse' : ''}`} />
                {isPlaying ? 'Playing...' : 'Listen'}
              </Button>
            )}
          </div>
        </CardHeader>
      </Card>

      {/* Meanings */}
      {wordData.meanings?.map((meaning, index) => (
        <Card key={index} className="bg-white shadow-lg border-0">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-blue-600" />
              <Badge variant="secondary" className="text-lg px-3 py-1 bg-blue-100 text-blue-800">
                {meaning.partOfSpeech}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {meaning.definitions?.slice(0, 3).map((definition, defIndex) => (
              <div key={defIndex} className="border-l-4 border-blue-200 pl-4 space-y-2">
                <div className="flex items-start gap-2">
                  <Hash className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-800 leading-relaxed">
                    {definition.definition}
                  </p>
                </div>
                {definition.example && (
                  <div className="bg-gray-50 rounded-lg p-3 ml-6">
                    <p className="text-gray-600 italic">
                      <strong>Example:</strong> "{definition.example}"
                    </p>
                  </div>
                )}
                {definition.synonyms && definition.synonyms.length > 0 && (
                  <div className="ml-6">
                    <p className="text-sm font-medium text-gray-700 mb-2">Synonyms:</p>
                    <div className="flex flex-wrap gap-2">
                      {definition.synonyms.slice(0, 5).map((synonym, synIndex) => (
                        <Badge 
                          key={synIndex} 
                          variant="outline" 
                          className="text-blue-600 border-blue-200"
                        >
                          {synonym}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
