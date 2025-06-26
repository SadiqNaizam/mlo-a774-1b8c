import React, { useState } from 'react';

// Custom Layout and Component Imports
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Component Imports
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';

// Placeholder data for restaurants
const sampleRestaurants = [
  { id: '1', name: 'The Golden Spoon', cuisineTypes: ['Italian', 'Pasta', 'Pizza'], rating: 4.7, deliveryTime: 30, imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800' },
  { id: '2', name: 'Sushi Samurai', cuisineTypes: ['Japanese', 'Sushi', 'Asian'], rating: 4.9, deliveryTime: 25, imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800' },
  { id: '3', name: 'Burger Barn', cuisineTypes: ['American', 'Burgers', 'Fries'], rating: 4.5, deliveryTime: 20, imageUrl: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=800' },
  { id: '4', name: 'Taco Town', cuisineTypes: ['Mexican', 'Tacos', 'Burritos'], rating: 4.6, deliveryTime: 35, imageUrl: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?q=80&w=800' },
  { id: '5', name: 'Peking Duck House', cuisineTypes: ['Chinese', 'Noodles', 'Asian'], rating: 4.8, deliveryTime: 45, imageUrl: 'https://images.unsplash.com/photo-1585851373353-7a630b7a42b8?q=80&w=800' },
  { id: '6', name: 'La Trattoria', cuisineTypes: ['Italian', 'Pizza'], rating: 4.4, deliveryTime: 40, imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=800' },
];

const RestaurantListingPage: React.FC = () => {
  console.log('RestaurantListingPage loaded');

  // In a real app, this state would be used to filter and sort the restaurants
  const [restaurants, setRestaurants] = useState(sampleRestaurants);

  const cuisineFilters = ['Italian', 'Japanese', 'American', 'Mexican', 'Chinese'];
  const ratingFilters = [5, 4, 3];
  const priceFilters = ['$', '$$', '$$$'];


  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      <Header />
      <main className="flex-grow container py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-72 lg:sticky top-24 self-start">
            <h2 className="text-2xl font-bold mb-4">Filters</h2>
            <Accordion type="multiple" defaultValue={['cuisine', 'rating']} className="w-full">
              {/* Cuisine Filter */}
              <AccordionItem value="cuisine">
                <AccordionTrigger className="font-semibold">Cuisine</AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                  {cuisineFilters.map((cuisine) => (
                    <div key={cuisine} className="flex items-center space-x-2">
                      <Checkbox id={`cuisine-${cuisine}`} />
                      <Label htmlFor={`cuisine-${cuisine}`} className="font-normal text-sm">{cuisine}</Label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
              
              {/* Rating Filter */}
              <AccordionItem value="rating">
                <AccordionTrigger className="font-semibold">Rating</AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                   {ratingFilters.map((rating) => (
                    <div key={`rating-${rating}`} className="flex items-center space-x-2">
                      <Checkbox id={`rating-${rating}`} />
                      <Label htmlFor={`rating-${rating}`} className="font-normal text-sm">{rating} & up</Label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>

              {/* Price Filter */}
              <AccordionItem value="price">
                <AccordionTrigger className="font-semibold">Price Range</AccordionTrigger>
                <AccordionContent className="space-y-3 pt-2">
                   {priceFilters.map((price) => (
                    <div key={`price-${price}`} className="flex items-center space-x-2">
                      <Checkbox id={`price-${price}`} />
                      <Label htmlFor={`price-${price}`} className="font-normal text-sm">{price}</Label>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </aside>

          {/* Restaurant Grid */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row justify-between items-baseline mb-6">
                <h1 className="text-3xl font-bold tracking-tight">Italian Restaurants</h1>
                <div className='flex items-center gap-4 mt-4 sm:mt-0'>
                    <span className="text-sm text-muted-foreground">{restaurants.length} results</span>
                    <Select defaultValue="rating">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="rating">Highest Rating</SelectItem>
                            <SelectItem value="delivery">Fastest Delivery</SelectItem>
                            <SelectItem value="az">Name (A-Z)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Separator className="mb-6"/>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantListingPage;