import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import LanguageContext from './languageContext';
import Footer from './components/Footer/Footer';


const App = () => {
  const [lang, setLang] = useState('pl');

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={lang}>
        <Header onLanguageChange={setLang}/>
        <Main />
        <Footer />
      </LanguageContext.Provider>
    </BrowserRouter>
  );
};

export default App;
