import React, { useState, useEffect } from "react";
import Image from "next/image"
import CbtActionHeading from "../../components/heading/cbtActionHeading";
import CbtHeading from "../../components/heading/cbtHeading"
import CbtQuestions from "../../components/section/cbtQuestionsSection"


export default function Cbt({ params }: { params: { sid: any} }){
      //{formatElapsedTime(state.elapsedTime)}

    return (

        <>
        
            <CbtActionHeading />

                <br /><br /><br /><br />
                <section className="relative pb-32 bg-white overflow-hidden">

                <Image className="absolute top-0 left-0" src="https://shuffle.dev/flaro-assets/images/testimonials/gradient.svg" width={674} height={772} alt="gradient1"/>
                <Image className="absolute bottom-0 right-0" src="https://shuffle.dev/flaro-assets/images/testimonials/gradient.svg" width={640} height={652} alt="Gradient1"/>

                    <div className="relative z-10 container px-2 mx-auto">

                        <CbtHeading />

                        <CbtQuestions student_id={params.sid}/>

                    </div>

                </section>


        </>

    )

}