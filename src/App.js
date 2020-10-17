import React from 'react';
import Tweet from './components/Tweet'
import './App.css';

function App() {
  const [currentQuotes, setCurrentQuotes] = React.useState([])
  const [dumbName, setDumbName] = React.useState('Donald Trump')

  const getQuote = () => {
    console.log('Fetch!')
    fetch('https://api.tronalddump.io/random/quote')
      .then((data) => data.json())
      .then((data) => setCurrentQuotes((currentQuotes) => currentQuotes.concat([data])))
  }

  React.useEffect(() => {
    for (let i = 0; i < 6; i++) {
      console.log('do thing')
      getQuote()
    }
  }, [])

  return (
    <div className="container">
      {currentQuotes.map((quote) => <Tweet content={quote} />)}
    </div>
  );
}

export default App;
