import React from 'react';
import uuid from 'react-uuid';
import {
  LoaderContainer,
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
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

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
  if (!dailyWords.words.length) {
    return <LoaderContainer>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />
    </LoaderContainer>;
  }
  return <GridWordsContainer>
    {dailyWords.words.map(wordItem => {
      const wordFrequency = wordItem.frequency < 2 ?
        'rare' :
        wordItem.frequency >= 2 && wordItem.frequency < 2.7 ? 'uncommon' :
          wordItem.frequency >= 2.7 && wordItem.frequency < 3.4 ? 'common' :
            'frequent';
      return <WordContainer key={wordItem.word}>
        <WordTitle>{wordItem.word}</WordTitle>
        <WordFrequency frequency={wordFrequency}>
          {wordFrequency}
        </WordFrequency>
        <WordPronunciation>/{wordItem.pronunciation}/</WordPronunciation>
        <WordDefinitions>
          {wordItem.results.map((result, index) => {
            return <WordDefinition key={uuid()}>
              {++index}- <strong>({result.partOfSpeech})</strong> {result.definition}.<br />
              {result.examples &&
                <>
                  <strong>Example:</strong> {result.examples}
                </>
              }
            </WordDefinition>
          })}
        </WordDefinitions>
        <WordShareSection>
          <WordShareDescription>Share an example</WordShareDescription>
          <a href={`https://twitter.com/share?ref_src=twsrc%5Etfw&text=I learn a new word: ${wordItem.word} - Example => Write a sentence example 😊`} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={{ color: 'rgb(29, 161, 242)' }} />
          </a>
        </WordShareSection>

      </WordContainer>
    })}
  </GridWordsContainer>;
}

export default GridWords;