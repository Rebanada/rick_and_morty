import '../styles/layout/Filters.scss';
const FSpecies = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  const handleChange = (ev) => {
    props.handleFSpecies(ev.target.value);
  };

  return (
    <section>
      <form onSubmit={handleSubmit} className='form'>
        <label className='label' htmlFor='species'>
          Especie:
        </label>
        <select
          className='select'
          name='species'
          id='species'
          onChange={handleChange}
        >
          <option className='value' value='All'>
            Todas
          </option>
          <option className='value' value='Human'>
            Humano
          </option>
          <option className='value' value='Alien'>
            Alien
          </option>
        </select>
      </form>
    </section>
  );
};

export default FSpecies;
