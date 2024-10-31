import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-900 text-white">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 mt-20 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-400">
              <p>© {new Date().getFullYear()} MovieHub. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;