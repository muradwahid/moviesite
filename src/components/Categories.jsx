import { Film, Flame, Heart, Laugh, Sword, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'Action', icon: Sword },
  { name: 'Comedy', icon: Laugh },
  { name: 'Drama', icon: Heart },
  { name: 'Trending', icon: Flame },
  { name: 'New Releases', icon: Film },
  { name: 'Top Rated', icon: Trophy },
];

function Categories() {
  return (
    <div className="bg-gray-800 rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <nav>
        <ul className="space-y-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <li key={category.name}>
                <Link
                  to={`/category/${category.name.toLowerCase()}`}
                  className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Icon className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                  <span>{category.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Categories;