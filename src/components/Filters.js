import FSpecies from '../components/FSpecies.js';
import FName from '../components/FName.js';

const Filters = (props) => {
  const renderNotFound = () => {
    if (props.filterName && props.cartoonsFiltered.length === 0) {
      return (
        <p className='not_found'>
          Lo siento, no hay un personaje con el nombre: "{props.filterName}"
        </p>
      );
    }
    return null;
  };
  return (
    <>
      <FName handleFName={props.handleFName} filterName={props.filterName} />
      <FSpecies handleFSpecies={props.handleFSpecies} />
      {renderNotFound()}
    </>
  );
};

export default Filters;
