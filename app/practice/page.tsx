import Image from "next/image"
import Header from "../components/heading/heading"
import Footer from "../components/footer/footer"
import PracticeHeading from "../components/heading/practiceHeading"
import PraticeSection from "../components/section/practiceSection"

export default function Practice(){

    return (

        <>
        
            <Header />

            <section className="relative pt-24 pb-32 bg-white overflow-hidden">

                <Image className="absolute top-0 left-0" src="https://shuffle.dev/flaro-assets/images/testimonials/gradient.svg" width={674} height={772} alt="gradient1"/>
                <Image className="absolute bottom-0 right-0" src="https://shuffle.dev/flaro-assets/images/testimonials/gradient.svg" width={640} height={652} alt="Gradient1"/>

                <div className="relative z-10 container px-4 mx-auto">

                    <PracticeHeading />

                    <div className="flex flex-wrap -m-3">

                        <PraticeSection />

                    </div>
                    
                </div>

            </section>

            <Footer />
        
        </>

    )

}