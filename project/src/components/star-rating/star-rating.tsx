import React, { useState } from 'react';

type StarRatingProps = {
  startRating: number;
  onStarClick?: (value: number) => void;
}

const STAR_LENGTH = 10;

function StarRating({ startRating, onStarClick }:StarRatingProps) {
  const [rating, setRating] = useState<number>(startRating);

  const stars = Array.from({ length: STAR_LENGTH }, (_, index) => index + 1);

  const handleStarClick = (value: number) => {
    setRating(value);
    onStarClick?.(value);
  };

  return (
    <div className="rating">
      <div className="rating__stars">
        {stars.reverse().map((value) => (
          <React.Fragment key={`star-${value}`}>
            <input
              className="rating__input"
              id={`star-${value}`}
              type="radio"
              name="rating"
              value={value}
              checked={rating === value}
              onChange={() => handleStarClick(value)}
            />
            <label className="rating__label" htmlFor={`star-${value}`}>
              {`Rating ${value}`}
            </label>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

function areEqual(prevProps: StarRatingProps, nextProps: StarRatingProps) {
  return prevProps.startRating === nextProps.startRating;
}

export default React.memo(StarRating, areEqual);
