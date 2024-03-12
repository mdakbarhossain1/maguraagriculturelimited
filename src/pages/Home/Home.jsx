import HealthMessage from "../../components/HealthMessage/HealthMessage"
import OrganicOffer from "../../components/OrganicOffer/OrganicOffer"
import Slider from "../../components/Slider/Slider"
import SpecialOffer from "../../components/SpecialOffer/SpecialOffer"

const Home = () => {
    return (
        <div>
            <Slider />
            <HealthMessage />
            <SpecialOffer />
            <OrganicOffer />

        </div>
    )
}

export default Home