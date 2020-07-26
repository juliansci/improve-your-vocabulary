import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  min-height: 1000px;
  justify-content: center;
`

export const GridWordsContainer = styled.div`
   display: grid;
   grid-template-columns:repeat(4, 1fr);
   grid-column-gap: 20px;
   grid-row-gap: 20px;
   @media (max-width: 1120px) {
      grid-template-columns:repeat(3, 1fr);
   }
   @media (max-width: 758px) {
      grid-template-columns:repeat(2, 1fr);
   }
   @media (max-width: 500px) {
      grid-template-columns:repeat(1, 1fr);
   }
   padding: 25px;
`

export const WordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  text-align: center;
  padding: 15px;
`

export const WordTitle = styled.div`
  font-size: 24px;
`

export const WordPronunciation = styled.div`
`

const colorByFrequency = {
  rare: '#FD151B',
  uncommon: '#FFB30F',
  common: '#01295F',
  frequent: '#849324'
}
export const WordFrequency = styled.div`
  background-color: ${props => colorByFrequency[props.frequency]};
  padding: 2px 10px;
  color: white;
  border-radius: 15px;
  font-size: 14px;
`

export const WordDefinitions = styled.div`
  text-align: left;
  margin-top: 15px;
  width: 100%;
`

export const WordDefinition = styled.div`
  margin-bottom: 10px;
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