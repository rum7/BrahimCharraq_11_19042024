import ApartmentsData from "../data"

export const Home = () => {
    const data = Object.values(ApartmentsData())
    console.log('ApartmentsData: ', data)

    return (
        <h2>Accueil</h2>
    )
}