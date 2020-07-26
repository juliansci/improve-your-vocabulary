import React from 'react';
import { HeaderContainer, HeaderTitle, HeaderDescription } from './styled';

const Header = ({ nextUpdate }) => {
  const [counter, setCounter] = React.useState(nextUpdate);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  return <HeaderContainer>
    <HeaderTitle>
      IMPROVE YOUR VOCABULARY DAILY<br />DON'T STOP
       </HeaderTitle>
    <HeaderDescription>
      These are the words today <br /> {counter} seconds left for new words.
      </HeaderDescription>
  </HeaderContainer>
};


export default Header;
