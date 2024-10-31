import { useParams } from 'react-router-dom';
import { Download, Clock, Calendar, Star } from 'lucide-react';
import SEOHead from '../components/SEOHead';

function MovieDetails() {
  const { id } = useParams();

  // Sample data - In a real app, fetch based on ID
  const movie = {
    title: "Dune: Part Two",
    banner: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    rating: "8.9",
    year: "2024",
    duration: "2h 46min",
    description: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
    genre: ["Action", "Adventure", "Drama", "Sci-Fi"],
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"]
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    "name": movie.title,
    "image": movie.poster,
    "description": movie.description,
    "director": {
      "@type": "Person",
      "name": movie.director
    },
    "actor": movie.cast.map(name => ({
      "@type": "Person",
      "name": name
    })),
    "datePublished": movie.year,
    "genre": movie.genre,
    "duration": movie.duration,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": movie.rating,
      "bestRating": "10",
      "worstRating": "1"
    }
  };

  return (
    <>
      <SEOHead 
        title={movie.title}
        description={movie.description}
        image={movie.banner}
        type="video.movie"
      />
      
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      <article>
        <div className="relative h-[600px]">
          <img
            src={movie.banner}
            alt={movie.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 -mt-96">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <img
                src={movie.poster}
                alt={`${movie.title} Poster`}
                className="w-full rounded-lg shadow-xl"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-2 space-y-6">
              <h1 className="text-4xl font-bold">{movie.title}</h1>
              
              <div className="flex items-center space-x-6 text-gray-300">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 mr-1" aria-hidden="true" />
                  <span>{movie.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" aria-hidden="true" />
                  <span>{movie.duration}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-1" aria-hidden="true" />
                  <span>{movie.year}</span>
                </div>
              </div>

              <p className="text-lg text-gray-300">{movie.description}</p>

              <div>
                <h2 className="text-lg font-semibold mb-2">Genre</h2>
                <div className="flex flex-wrap gap-2">
                  {movie.genre.map((g) => (
                    <span key={g} className="px-3 py-1 bg-gray-800 rounded-full text-sm">
                      {g}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Cast</h2>
                <p className="text-gray-300">{movie.cast.join(', ')}</p>
              </div>

              <button 
                className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                aria-label={`Download ${movie.title}`}
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                <span>Download Movie</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}

export default MovieDetails;