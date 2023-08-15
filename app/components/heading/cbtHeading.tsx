

export default function CbtHeading(props: { matric: any, course_code : any }){

    

    return (

        <>
        
        <div className="">

          <div className="flex justify-center">
            <div className="stats shadow">

              <div className="stat place-items-center bg-primary text-white">
                <div className="stat-title text-white">{props.matric}</div>
                <div className="stat-value">{props.course_code}</div>
                <div className="stat-desc text-secondary"></div>
              </div>

            </div> 
          </div>

        </div>

        </>

    )

}