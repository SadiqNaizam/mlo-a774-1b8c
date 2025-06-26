import React from 'react';
import { Search } from 'lucide-react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-Specific Components
import CuisineCarousel from '@/components/CuisineCarousel';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Placeholder data for featured restaurants
const featuredRestaurants = [
  {
    id: '1',
    name: 'The Golden Spoon',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    cuisineTypes: ['Italian', 'Pasta', 'Pizza'],
    rating: 4.5,
    deliveryTime: 30,
  },
  {
    id: '2',
    name: 'Sushi Palace',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    cuisineTypes: ['Japanese', 'Sushi', 'Healthy'],
    rating: 4.8,
    deliveryTime: 25,
  },
  {
    id: '3',
    name: "Burger Haven",
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    cuisineTypes: ['Burgers', 'American', 'Fries'],
    rating: 4.3,
    deliveryTime: 20,
  },
  {
    id: '4',
    name: 'Taco Fiesta',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    cuisineTypes: ['Mexican', 'Tacos', 'Spicy'],
    rating: 4.6,
    deliveryTime: 35,
  },
];

const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[400px] flex items-center justify-center text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80')" }}>
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Your next meal, delivered.
            </h1>
            <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
              Discover the best local restaurants and get your favorite food delivered fast.
            </p>
            <div className="mt-8 flex justify-center max-w-xl mx-auto">
              <div className="flex w-full items-center space-x-2 bg-white rounded-md p-2 shadow-lg">
                <Input
                  type="search"
                  placeholder="Find a restaurant or dish..."
                  className="flex-grow border-none focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
                />
                <Button type="submit" size="lg">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Container */}
        <div className="container py-10 md:py-16">
          {/* Cuisine Carousel Section */}
          <CuisineCarousel />

          {/* Featured Restaurants Section */}
          <section className="mt-12">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-center md:text-left">
              Featured Restaurants
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredRestaurants.map((restaurant) => (
                <RestaurantCard
                  key={restaurant.id}
                  id={restaurant.id}
                  name={restaurant.name}
                  imageUrl={restaurant.imageUrl}
                  cuisineTypes={restaurant.cuisineTypes}
                  rating={restaurant.rating}
                  deliveryTime={restaurant.deliveryTime}
                />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;