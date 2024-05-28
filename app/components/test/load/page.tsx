'use client';
import React from 'react';
import ReactDOM from 'react-dom';
import {Quote,motivationQuotes} from './data';
import { useState, useEffect } from 'react';
  

const App: React.FC = () => {

const [quote, setQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const randomQuote = motivationQuotes[Math.floor(Math.random() * motivationQuotes.length)];
    setQuote(randomQuote);
  }, []);

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome to</h1>
        <h1 style={styles.mainTitle}>BurgerLendar</h1>
      </header>
      <main style={styles.main}>
        <img
          src="https://thumb.ac-illust.com/36/36ac3e42b8ed38dce15bc0ad7c5e9a1c_t.jpeg"
          alt="burger"
          style={styles.burgerImage}
        />
        <div style={styles.username}>username...</div>
        <div style={styles.quote}>
            {quote ? (
            <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px', textAlign: 'center' }}>
            <p style={{ fontSize: '1.5em', fontStyle: 'italic' }}>{quote.text}</p>
            <p style={{ fontSize: '1.2em', marginTop: '10px' }}>— {quote.author}</p>
            </div>
        ) : (
            <p>Loading quote...</p>
        )}


        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#003366',
    color: '#F9ECCB',
    textAlign: 'center' as 'center',
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    fontSize: '1.5em',
    margin: '0',
    color: '#F9ECCB',
  },
  mainTitle: {
    fontSize: '2.5em',
    margin: '0',
    color: '#F9ECCB',
  },
  main: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center',
    backgroundColor: '#003366',
    padding: '20px',
    borderRadius: '10px',
  },
  burgerImage: {
    width: '150px',
    height: '150px',
  },
  username: {
    marginTop: '20px',
    fontSize: '1.2em',
    color: '#F9ECCB',
  },
  quote: {
    marginTop: '10px',
    fontSize: '1em',
    color: '#F9ECCB',
  },
};
export default App;
/*
ReactDOM.render(<App />, document.getElementById('root'));
*/