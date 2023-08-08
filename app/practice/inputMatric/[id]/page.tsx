import Header from "@/app/components/heading/heading"
import Footer from "@/app/components/footer/footer"
import InputMatricNumberForm from "@/app/components/forms/inputMatricNumberForm"

export default function InputMatric({ params }: { params: { id: any } }){

    return (

        <>
        
            <Header />

                <InputMatricNumberForm practice_id={params.id}/>

            <Footer />
        
        </>

    )

}