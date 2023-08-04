import '../styles/layout/Characters.scss';
import '../styles/layout/CharacterList.scss';
import { Link } from 'react-router-dom';

const Characters = (props) => {
  return (
    <div className='div'>
      <li className='element'>
        <Link to={`cartoon/${props.cartoon.id}`} className='link'>
          <article>
            <img
              src={props.cartoon.image}
              alt={`Foto de ${props.cartoon.name}`}
              className='element__img'
            />
            <div>
              <h3 className='element__name'>{props.cartoon.name}</h3>
              <p className='element__species'>{props.cartoon.species}</p>
            </div>
          </article>
        </Link>
      </li>
    </div>
  );
};

export default Characters;
