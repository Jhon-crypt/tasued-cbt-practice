export default function ResultHeading(props: {headingContent: string}){

    return(

        <>
        
            <h2 className="mb-16 text-4xl md:text-6xl font-bold font-heading text-center tracking-px-n leading-tight">
                Result for {props.headingContent}
            </h2>
        
        </>

    )

}