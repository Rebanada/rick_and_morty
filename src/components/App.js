import { useEffect, useState } from 'react';
import dataApi from '../services/api.js';
import { Routes, Route, matchPath, useLocation } from 'react-router-dom';
import ls from '../services/localStorage';

import '../styles/main.scss';
import '../styles/layout/Filters.scss';

import Header from '../components/Header.js';
import CharacterList from '../components/CharacterList.js';
import CharacterCard from '../components/CharacterCard.js';
import Filters from '../components/Filters.js';
import Footer from '../components/Footer.js';

function App() {
  const [dataCartoon, setDataCartoon] = useState([]);
  const [filterSpecies, setFilterSpecies] = useState('all');
  const [filterName, setFilterName] = useState(ls.get('nameCartoon', ''));

  useEffect(() => {
    dataApi().then((data) => {
      setDataCartoon(data);
    });
  }, []);

  const handleFName = (value) => {
    setFilterName(value);
    ls.set('nameCartoon', value);
  };

  const handleFSpecies = (value) => {
    setFilterSpecies(value);
  };

  const cartoonsFiltered = dataCartoon

    .filter((nameCartoon) =>
      nameCartoon.name.toLowerCase().includes(filterName.toLowerCase())
    )

    .filter((cartoon) => {
      return filterSpecies === 'all' ? true : cartoon.species === filterSpecies;
    });

  const { pathname } = useLocation();
  const dataUrl = matchPath('/cartoon/:cartoonId', pathname);
  const cartoonId = dataUrl !== null ? dataUrl.params.cartoonId : null;
  const cartoonFound = dataCartoon.find(
    (cartoon) => cartoon.id === parseInt(cartoonId)
  );

  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />
              <main className='main'>
                <Filters
                  handleFName={handleFName}
                  filterName={filterName}
                  handleFSpecies={handleFSpecies}
                  cartoonsFiltered={cartoonsFiltered}
                />

                <CharacterList cartoons={cartoonsFiltered} />
              </main>{' '}
              <Footer />
            </>
          }
        />
        <Route
          path='/cartoon/:cartoonId'
          element={<CharacterCard cartoon={cartoonFound} />}
        />
      </Routes>
    </div>
  );
}

export default App;
