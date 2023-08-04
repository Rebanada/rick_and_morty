import '../styles/layout/Filters.scss';
const FName = (props) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleInputChange = (ev) => {
    props.handleFName(ev.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <input
        className='input'
        type='search'
        name='search'
        placeholder='Buscar por nombre'
        value={props.filterName}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default FName;
