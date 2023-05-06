import{ useState } from 'react';
import StarRating from '../star-rating/star-rating';

const START_RATING_VALUE = 10;

function PostCommentForm():JSX.Element {
  const [formData, setFormData] = useState({
    rating: START_RATING_VALUE,
    reviewText: '',
  });

  const handleStarClick = (value:number) => {
    setFormData({
      ...formData,
      rating: value,
    });
  };

  const hanndleTextareaChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaValue = evt.target.value;
    setFormData({
      ...formData,
      reviewText: textareaValue,
    });
  };

  return (
    <form action="#" className="add-review__form">
      <StarRating startRating={START_RATING_VALUE} onStarClick={handleStarClick} />

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={hanndleTextareaChange}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>
      </div>
    </form>
  );
}

export default PostCommentForm;
