import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingStarsInputProps {
  /** The total number of stars to display. */
  count?: number;
  /** The current rating value. */
  value: number;
  /** Callback function that is fired when the rating changes. */
  onChange: (rating: number) => void;
  /** The size of the star icons. */
  size?: number;
  /** Additional CSS classes to apply to the container. */
  className?: string;
  /** A flag to disable the input. */
  disabled?: boolean;
}

const RatingStarsInput: React.FC<RatingStarsInputProps> = ({
  count = 5,
  value = 0,
  onChange,
  size = 24,
  className,
  disabled = false,
}) => {
  const [hoverRating, setHoverRating] = useState(0);
  console.log('RatingStarsInput loaded');

  const handleMouseEnter = (index: number) => {
    if (disabled) return;
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    if (disabled) return;
    setHoverRating(0);
  };

  const handleClick = (index: number) => {
    if (disabled) return;
    onChange(index);
  };

  const stars = Array.from({ length: count }, (_, i) => i + 1);

  return (
    <div className={cn("flex items-center space-x-1", className)}>
      {stars.map((starIndex) => {
        const isFilled = starIndex <= (hoverRating || value);
        return (
          <Star
            key={starIndex}
            size={size}
            className={cn(
              "transition-colors",
              { "text-yellow-400 fill-yellow-400": isFilled },
              { "text-gray-300": !isFilled },
              { "cursor-pointer": !disabled },
              { "cursor-not-allowed opacity-50": disabled }
            )}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
          />
        );
      })}
    </div>
  );
};

export default RatingStarsInput;