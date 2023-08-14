"use client"
import Rating from 'react-star-rating-component';
import dynamic from "next/dynamic";

const ProductRatings = ({ratings}) => {
    return (
        <>
            <Rating
                value={ratings}

                starCount={ratings}
                starColor={'#008ce0'}
                emptyStarColor={'#ccc'}
            />

        </>
    );
};

export default dynamic(() => Promise.resolve(ProductRatings), { ssr: false })