import React from 'react';
import uuid from 'react-uuid';
import {
  GridWordsContainer,
  WordContainer,
  WordTitle,
  WordFrequency,
  WordPronunciation,
  WordDefinitions,
  WordDefinition,
  WordShareSection,
  WordShareDescription
} from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
const orderWordsByResults = words => {
  words.sort((a, b) => {
    if (a.results.length < b.results.length) {
      return -1;
    }
    if (a.results.length > b.results.length) {
      return 1;
    }
    return 0;
  });
}
const GridWords = ({ dailyWords }) => {
  orderWordsByResults(dailyWords.words);
  return <GridWordsContainer>
    {dailyWords.words.map(wordItem => {
      return <WordContainer key={wordItem.word}>
        <WordTitle>{wordItem.word}</WordTitle>
        <WordFrequency>{wordItem.frequency}</WordFrequency>
        <WordPronunciation>{wordItem.pronunciation.all}</WordPronunciation>
        <WordDefinitions>
          {wordItem.results.map((result, index) => {
            return <WordDefinition key={uuid()}>
              {++index}- <strong>({result.partOfSpeech})</strong> {result.definition}
            </WordDefinition>
          })}
        </WordDefinitions>
        <WordShareSection>
          <WordShareDescription>Share an example</WordShareDescription>
          <a href={`https://twitter.com/share?ref_src=twsrc%5Etfw&text=I learn a new word: ${wordItem.word} - Sentence example: ...`}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </WordShareSection>

      </WordContainer>
    })}
  </GridWordsContainer>;
}

export default GridWords;