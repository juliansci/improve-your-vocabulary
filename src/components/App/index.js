
import React, { useState, useEffect } from 'react';
import { AppLayout, HeaderLayout, ContentLayout, FooterLayout } from './styled';
import Header from '../Header';
import Footer from '../Footer';
import GridWords from '../GridWords';
import config from '../../config';

const App = () => {
  const [dailyWords, setDailyWords] = useState({
    words: []
  });
  useEffect(() => {
    fetch(config.backendApiUrl)
      .then(response => response.json())
      .then(data => setDailyWords(data));
  }, []);
  const [nextUpdate, setNextUpdate] = useState(0);
  useEffect(() => {
    fetch(`${config.backendApiUrl}next-update`)
      .then(response => response.json())
      .then(data => setNextUpdate(data.nextUpdate))
  }, []);
  return (
    <AppLayout>
      <HeaderLayout >
        <Header nextUpdate={nextUpdate} />
      </HeaderLayout>
      <ContentLayout>
        <GridWords dailyWords={dailyWords} />
      </ContentLayout>
      <FooterLayout>
        <Footer />
      </FooterLayout>
    </AppLayout>
  );
}



export default App;
