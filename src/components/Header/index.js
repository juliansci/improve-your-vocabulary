import React from 'react';
import { HeaderContainer, HeaderTitle, HeaderDescription } from './styled';

const Header = ({ nextUpdate }) => {
  const [counter, setCounter] = React.useState(nextUpdate);
  React.useEffect(() => {
    nextUpdate > 0 && !counter && setCounter(nextUpdate);
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [nextUpdate, counter]);

  return <HeaderContainer>
    <HeaderTitle>
      IMPROVE YOUR VOCABULARY DAILY
       </HeaderTitle>
    <HeaderDescription>
      Each day you will learn 12 words which ones you can improve your vocabulary<br /> Seconds for new words: {counter}
    </HeaderDescription>
  </HeaderContainer>
};


export default Header;
