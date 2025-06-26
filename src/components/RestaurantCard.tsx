import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Star, Clock } from 'lucide-react';

/**
 * Props for the RestaurantCard component.
 */
interface RestaurantCardProps {
  id: string;
  imageUrl: string;
  name: string;
  cuisineTypes: string[];
  rating: number;
  deliveryTime: number;
}

/**
 * A custom card for displaying a restaurant's summary information.
 * It includes an image, name, cuisine, rating, and delivery time.
 * The entire card is a link to the restaurant's detail page.
 */
const RestaurantCard: React.FC<RestaurantCardProps> = ({
  imageUrl,
  name,
  cuisineTypes,
  rating,
  deliveryTime,
}) => {
  console.log('RestaurantCard loaded for:', name);

  return (
    <Link to="/restaurant-detail" className="group block h-full">
      <Card className="w-full h-full overflow-hidden transition-all duration-300 hover:shadow-xl flex flex-col">
        <CardHeader className="p-0">
          <AspectRatio ratio={16 / 9}>
            <img
              src={imageUrl || 'https://via.placeholder.com/400x225?text=FeastExpress'}
              alt={`Image of ${name}`}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
          </AspectRatio>
        </CardHeader>
        
        <CardContent className="p-4 space-y-2 flex-grow">
          <CardTitle className="text-xl font-bold line-clamp-1">{name}</CardTitle>
          <div className="flex items-center text-sm text-muted-foreground space-x-4">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
              <span className="font-medium">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{deliveryTime} min</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <div className="flex flex-wrap gap-2">
            {cuisineTypes.slice(0, 3).map((cuisine, index) => (
              <Badge key={index} variant="secondary" className="font-normal">
                {cuisine}
              </Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default RestaurantCard;