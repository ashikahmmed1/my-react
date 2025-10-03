import { Suspense } from 'react';
import './App.css';
import Countries from './Conmponent/countries/countries';


const countriesPromise = fetch('https://openapi.programming-hero.com/api/all')
  .then(res => res.json());

function App() {
  return (
    <Suspense fallback={<p>Ashik vai loading.....</p>}>
      <Countries countriesPromise={countriesPromise}></Countries>
    </Suspense>
  );
}

export default App;

