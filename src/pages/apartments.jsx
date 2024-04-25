import { useLocation } from "react-router-dom"

import ApartmentsData from "@/data"

export const Apartments = () => {
    const data = Object.values(ApartmentsData())

    const location = useLocation()
    const apartmentId = location.pathname.split('/')[2]

    const apartmentDataById = data.filter(apartment => apartment.id === apartmentId)

    return (
        <main>
            <h2>Appartement n°{apartmentId}</h2>
        </main>
    )
}