import { Link } from 'react-router-dom';
import '../styles/layout/CharacterCard.scss';

const CharacterCard = (props) => {
  return (
    <main className='main_card'>
      <article className='article'>
        <img
          src={props.cartoon.image}
          alt={`Foto de ${props.cartoon.name}`}
          className='img_card'
        />
        <div>
          <h2>{props.cartoon.name}</h2>
          <ul className='element_card'>
            <li className='element_card__li'>Estado: {props.cartoon.status}</li>
            <li className='element_card__li'>
              Especie: {props.cartoon.species}
            </li>
            <li className='element_card__li'>
              Planeta: {props.cartoon.planet}
            </li>
            <li className='element_card__li'>
              Episodios: {props.cartoon.episodes.length}
            </li>
          </ul>
        </div>
      </article>

      <Link to={'/'} className='return'>
        Volver
      </Link>
    </main>
  );
};

export default CharacterCard;
