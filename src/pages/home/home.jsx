import { AskQuestion, Atmosphere, EduSystem, Faqs, HomeAbout, HomeAdvantages, HomeHero, HomeStatistics, HomeTeam, } from "../../components"

const Home = () => {

    return (
        <>
            <HomeHero />
            <HomeAbout />
            <HomeAdvantages />
            <HomeStatistics />
            <AskQuestion img='/public/assets/ask-img-1.png' srcSet='/public/assets/ask-img-1@2x.png' />
            <EduSystem />
            <AskQuestion img='/public/assets/ask-img-2.png' srcSet='/public/assets/ask-img-2@2x.png' />
            <HomeTeam />
            <Atmosphere />
            <Faqs />
            <AskQuestion img='/public/assets/ask-img-2.png' srcSet='/public/assets/ask-img-2@2x.png' />

        </>
    )
}

export default Home