import React from 'react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Pizza,
  Salad,
  Fish,
  Beef,
  UtensilsCrossed,
  CakeSlice,
  Soup,
  Coffee,
} from 'lucide-react';

// Define the structure for a cuisine item
interface Cuisine {
  name: string;
  slug: string;
  icon: React.ElementType;
}

// Static data for the carousel. In a real app, this would likely come from an API.
const cuisines: Cuisine[] = [
  { name: 'Italian', slug: 'italian', icon: Pizza },
  { name: 'Healthy', slug: 'healthy', icon: Salad },
  { name: 'Japanese', slug: 'japanese', icon: Fish },
  { name: 'Burgers', slug: 'burgers', icon: Beef },
  { name: 'Chinese', slug: 'chinese', icon: Soup },
  { name: 'Desserts', slug: 'desserts', icon: CakeSlice },
  { name: 'Café', slug: 'cafe', icon: Coffee },
  { name: 'General', slug: 'general', icon: UtensilsCrossed },
];

const CuisineCarousel: React.FC = () => {
  console.log('CuisineCarousel loaded');

  return (
    <section className="w-full py-8">
      <h2 className="text-3xl font-bold tracking-tight mb-6 text-center md:text-left">Explore Cuisines</h2>
      <Carousel
        opts={{
          align: "start",
          loop: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {cuisines.map((cuisine, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 xl:basis-[12%]">
              <Link
                to={`/restaurant-listing?cuisine=${cuisine.slug}`}
                className="group focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-lg"
                aria-label={`Find ${cuisine.name} restaurants`}
              >
                <div className="flex flex-col items-center justify-center p-3 text-center border bg-card text-card-foreground rounded-lg shadow-sm hover:bg-accent hover:shadow-md transition-all duration-200 aspect-square">
                  <cuisine.icon className="h-8 w-8 text-primary mb-2 transition-transform group-hover:scale-110" />
                  <span className="text-sm font-semibold truncate w-full">{cuisine.name}</span>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex" />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </section>
  );
};

export default CuisineCarousel;