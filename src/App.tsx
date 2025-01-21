import React from 'react';
import Header from './components/Header'

import { apiKey, popular, trending } from './modules/ApiLinks';
import DisplayItems from './components/DisplayItems';

function App() {
  return (
    <>
      <br /><br /><br /><br /><br />
      <Header />
      <DisplayItems apiEndpoint={trending} itemHeading='Trending' showButtons={true} tvShowOn={true} moviesOn={true} numberOfMovies={100} />
      <DisplayItems apiEndpoint={popular} itemHeading='Popular' showButtons={true} tvShowOn={true} moviesOn={true} numberOfMovies={100} />

    </>
  );
}

export default App;
