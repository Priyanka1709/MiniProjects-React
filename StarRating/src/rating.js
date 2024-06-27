import Star from "./star";
import { useState } from "react";

const Rating = ({ totalStars }) => {
  const [selectedStar, setSelectedStar] = useState(-1);
  const [hoveredStar, setHoveredStar] = useState(-1);

  if (totalStars < 1) {
    return;
  }

  const handleStarClick = (index) => {
    setSelectedStar(index);
  };
  const handleHoveredStar = (index) => {
    setHoveredStar(index);
  };

  return (
    <div className="rating">
      {Array(totalStars)
        .fill(0)
        .map((star, index) => {
          return (
            <div
              key={index}
              onClick={() => handleStarClick(index)}
              onMouseEnter={() => handleHoveredStar(index)}
              onMouseLeave={() => handleHoveredStar(-1)}
            >
              <Star
                filled={
                  hoveredStar > -1
                    ? index <= hoveredStar
                    : index <= selectedStar
                }
              />
            </div>
          );
        })}
    </div>
  );
};

export default Rating;
