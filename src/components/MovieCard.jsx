import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

function MovieCard({ id, title, poster, rating, year }) {
  return (
    <Link to={`/movie/${id}`} className="group">
      <article className="bg-gray-800 rounded-lg overflow-hidden transition-transform hover:scale-105">
        <div className="relative aspect-[2/3]">
          <img
            src={poster}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute top-2 right-2 flex items-center bg-black/60 rounded-full px-2 py-1">
            <Star className="h-4 w-4 text-yellow-400 mr-1" aria-hidden="true" />
            <span className="text-sm">{rating}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg group-hover:text-indigo-400 transition-colors">{title}</h3>
          <p className="text-gray-400 text-sm">{year}</p>
        </div>
      </article>
    </Link>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

export default MovieCard;