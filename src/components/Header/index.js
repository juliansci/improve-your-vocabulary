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
      Learn 12 new words every day and enrich your vocabulary<br /> Next words in {counter} seconds
    </HeaderDescription>
  </HeaderContainer>
};


export default Header;
