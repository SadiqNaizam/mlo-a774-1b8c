import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import { toast } from "sonner";

interface MenuItemCardProps {
  id: string | number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  onQuantityChange?: (itemId: string | number, newQuantity: number) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(0);
  console.log('MenuItemCard loaded for:', name);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    if (onQuantityChange) {
      onQuantityChange(id, newQuantity);
    }
    if (quantity === 0) {
      toast.success(`${name} added to cart!`);
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      if (onQuantityChange) {
        onQuantityChange(id, newQuantity);
      }
      if (newQuantity === 0) {
          toast.info(`${name} removed from cart.`);
      }
    }
  };

  return (
    <Card className="w-full overflow-hidden transition-all duration-200 hover:shadow-md">
      <CardContent className="p-4 flex items-center gap-4">
        {imageUrl && (
          <div className="flex-shrink-0">
            <img
              src={imageUrl}
              alt={name}
              className="h-24 w-24 rounded-md object-cover"
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>
          <p className="text-md font-bold text-gray-800 mt-2">${price.toFixed(2)}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 ml-4">
          {quantity === 0 ? (
            <Button onClick={handleIncrement} className="w-full">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add
            </Button>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={handleDecrement} className="h-8 w-8">
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-lg font-bold w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={handleIncrement} className="h-8 w-8">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuItemCard;