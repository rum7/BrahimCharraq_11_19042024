import star from '@/assets/star.svg'
import starRed from '@/assets/star-red.svg'

import '@/components/rating.style.css'

const renderHostRating = (rate) => {
    const rateResult = []

    for (let index = 1; index <= 5; index++) {
        index <= rate ? rateResult.push(<li key={index}><img src={starRed} alt="rate icon red" /></li>) 
        : rateResult.push(<li key={index}><img src={star} alt="rate icon" /></li>)
    }

    return rateResult
}

export const Rating = ({ rating }) => {
  return (
    <div className="host-rate">
        <ul>{renderHostRating(rating)}</ul>
    </div>
  )
}
