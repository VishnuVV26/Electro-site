import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';

const Review = ({ stars, reviews }) => {
    // Calculate the number of filled, half-filled, and unfilled stars
    const filledStars = Math.floor(stars);
    const hasHalfStar = stars % 1 !== 0;
    const remainingStars = hasHalfStar ? 5 - filledStars - 1 : 5 - filledStars;

    // Array to store the JSX elements for stars
    const ratings = [];

        // Add filled stars
        for (let i = 0; i < filledStars; i++) {
            ratings.push(<FaStar key={i} className='w-4 text-yellow-500' />);
        }

        // Add half-filled star if needed
        if (hasHalfStar) {
            ratings.push(<FaStarHalfAlt key={filledStars} className='w-4 text-yellow-500' />);
        }

        // Add remaining unfilled stars
        for (let i = 0; i < remainingStars; i++) {
            ratings.push(<AiOutlineStar key={filledStars + i} className='w-4 text-yellow-500' />);
        }

    return (
       <div className='flex mt-1'>
        {ratings}
        {reviews !== undefined && <p className='text-sm font-medium'>({reviews} customer reviews)</p>}
       </div>
    );
};

export default Review;
