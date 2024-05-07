import { useLocation } from "react-router-dom"
import ApartmentsData from "@/data"

import { Carousel } from "@/components"
import { Collapse } from "@/components"
import { Rating } from "@/components/rating"

import '@/pages/apartments.style.css'

export const Apartments = () => {
    const location = useLocation()
    const apartmentId = location.pathname.split('/')[2]
        
    const data = Object.values(ApartmentsData())
    const currentApartmentData = data.filter(apartment => apartment.id === apartmentId)

    return (
        <main>
            <section className="apartment">
                <Carousel
                    galleryTitle={currentApartmentData[0].title}
                    apartmentPictures={currentApartmentData[0].pictures}
                />                    
                
                <div className="apartment-details">
                    <div className="apartment-details__info">
                        <h2>{currentApartmentData[0].title}</h2>
                        <h3>{currentApartmentData[0].location}</h3>
                        <ul>
                            {currentApartmentData[0].tags.map((item, index) =>
                                <li key={index}>
                                    <p>{item}</p>
                                </li>
                            )}
                        </ul>
                    </div>
                    <div className="apartment-details__host">
                        <div className="host-info">
                            <p>{currentApartmentData[0].host.name.replace(/\s/g, '\n')}</p>
                            <img src={currentApartmentData[0].host.picture} alt={currentApartmentData[0].host.name} />
                        </div>
                        <Rating rating={currentApartmentData[0].rating} />
                    </div>
                </div>

                <div className="apartment-more">
                    <Collapse
                        collapseTitle={"Description"}
                        collapseContent={currentApartmentData[0].description}
                    />
                    <Collapse
                        collapseTitle={"Équipements"}
                        collapseContent={currentApartmentData[0].equipments}
                    />
                </div>
            </section>
        </main>
    )
}