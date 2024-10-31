import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import MovieCard from '../components/MovieCard';
import Categories from '../components/Categories';
import SEOHead from '../components/SEOHead';

// Sample data - In a real app, this would come from an API
const featuredMovies = [
  {
    id: 1,
    title: "Dune: Part Two",
    banner: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1",
    rating: "8.9",
    year: "2024"
  },
  {
    id: 2,
    title: "Madame Web",
    banner: "https://images.unsplash.com/photo-1478720568477-152d9b164e26",
    rating: "7.5",
    year: "2024"
  },
  {
    id: 3,
    title: "Bob Marley: One Love",
    banner: "https://images.unsplash.com/photo-1536440136628-849c177e76a1",
    rating: "8.2",
    year: "2024"
  }
];

const latestMovies = [
  {
    id: 4,
    title: "Anyone But You",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728",
    rating: "7.8",
    year: "2024"
  },
  // Add more movies...
];

function Home() {
  return (
    <>
      <SEOHead 
        title="Download Latest Movies"
        description="Download the latest and most popular movies in HD quality. Browse our collection of Action, Drama, Comedy, and more genres."
        image={featuredMovies[0].banner}
      />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <section className="mb-12" aria-label="Latest Releases">
          <h1 className="text-2xl font-bold mb-6">Latest Releases</h1>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="h-[500px] rounded-xl"
          >
            {featuredMovies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <div className="relative h-full">
                  <img
                    src={movie.banner}
                    alt={movie.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                    <h2 className="text-4xl font-bold mb-4">{movie.title}</h2>
                    <div className="flex items-center space-x-4">
                      <span className="text-yellow-400">★ {movie.rating}</span>
                      <span>{movie.year}</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <section className="lg:col-span-3" aria-label="Featured Movies">
            <h2 className="text-2xl font-bold mb-6">Featured Movies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {latestMovies.map((movie) => (
                <MovieCard key={movie.id} {...movie} />
              ))}
            </div>
          </section>
          <aside aria-label="Movie Categories">
            <Categories />
          </aside>
        </div>
      </div>
    </>
  );
}

export default Home;