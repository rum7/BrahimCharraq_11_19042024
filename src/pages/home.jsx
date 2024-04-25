import { Link } from "react-router-dom"

import ApartmentsData from "@/data"

import { Banner } from "@/components"

import '@/pages/home.style.css'

export const Home = () => {
    const data = Object.values(ApartmentsData())  

    return (
        <>
            <Banner 
                bannerClass={'banner banner-home banner-text'} 
                bannerTitle={'Chez vous, partout et ailleurs'} 
            />
            <main>
                <section className="gallery">
                    {data.map((apartment) => (
                        <Link
                            key={`apartment-${apartment.id}`}
                            to={`apartments/${apartment.id}`}
                            className="apartment-card"
                        >
                            <h2>{apartment.title}</h2>
                            <img src={apartment.cover} alt={apartment.title} />
                        </Link>
                    ))}
                </section>
            </main>
        </>
    )
}