import NotificationAlert from "../alerts/notificationAlert"

export default function NotificationSection(){

    return (

        <>
        
            <div className="px-6 pt-6 2xl:container">

                <h2 className="mt-10 mb-16 text-4xl md:text-5xl font-bold font-heading text-center tracking-px-n leading-tight">
                    Notifications
                </h2>

                <div className="flex justify-center mt-8">

                    <NotificationAlert />

                </div>

            </div>
        
        </>

    )

}