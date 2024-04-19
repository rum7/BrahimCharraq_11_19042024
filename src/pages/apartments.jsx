import { useLocation } from "react-router-dom"

import ApartmentsData from "../data"

export const Apartments = () => {
    const location = useLocation()
    const apartmentId = location.pathname.split('/')[2]

    console.log('apartmentId: ', apartmentId)


    const data = Object.values(ApartmentsData())
    console.log('ApartmentsData: ', data)

    return (
        <h2>Appartements num</h2>
    )
}