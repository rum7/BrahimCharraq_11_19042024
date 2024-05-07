import { useState } from "react"

import arrowPrev from '@/assets/arrow-prev-gallery.svg'
import arrowNext from '@/assets/arrow-next-gallery.svg'

import '@/components/carousel.style.css'

export const Carousel = ({ galleryTitle, apartmentPictures }) => {
    const [currPicture, setcurrPicture] = useState(0)
    const picturesNb = apartmentPictures.length-1

    const handleGallery = (direction) => {
        if(direction === 'previous') {
            currPicture === 0 ?
            setcurrPicture(picturesNb)
            : setcurrPicture(currPicture - 1)
        } else {
            currPicture === picturesNb ?
            setcurrPicture(0)
            : setcurrPicture(currPicture + 1)
        }
    }

    return (
        <div className="apartment-gallery">
            {picturesNb > 1 ?
                <>
                    <button 
                        onClick={() => {handleGallery('previous')}} 
                        className="gallery-btn gallery-btn__left"
                    >
                        <img src={arrowPrev} alt="button previous picture" />
                    </button>

                    <button 
                        onClick={() => {handleGallery('next')}} 
                        className="gallery-btn gallery-btn__next"
                    >
                        <img src={arrowNext} alt="button next picture" />
                    </button>
                    <p className="gallery-num">{currPicture+1}/{picturesNb+1}</p> 
                </>
                : null
            }                    

            <img className="picture" src={apartmentPictures[currPicture]} alt={galleryTitle} />
        </div>
    )
}
