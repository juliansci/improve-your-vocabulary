import styled from 'styled-components';

export const GridWordsContainer = styled.div`
   display: grid;
   grid-template-columns:repeat(4, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 20px;
   @media (max-width: 768px) {
      grid-template-columns:repeat(3, 1fr);
   }
   @media (max-width: 500px) {
      grid-template-columns:repeat(2, 1fr);
   }
   padding: 25px;
`

export const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  text-align: center;
  padding: 15px;
`

export const WordTitle = styled.div`
  font-size: 22px;
`

export const WordPronunciation = styled.div`
`

export const WordFrequency = styled.div`
`

export const WordDefinitions = styled.div`
  text-align: left;
  margin-top: 15px;
`

export const WordDefinition = styled.div`
  margin-bottom: 6px;
`


export const WordShareSection = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
`

export const WordShareDescription = styled.div`
  font-size: 12px;
  color: #333333;
`