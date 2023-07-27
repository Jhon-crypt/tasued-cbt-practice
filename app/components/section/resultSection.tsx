import Link from "next/link"
import { BiMessageAltCheck } from "react-icons/bi"
import { HiOutlineExclamationTriangle } from "react-icons/hi2"

export default function ResultSection(){

    return (

        <>
        
            <div className="flex justify-center">

                <div className="stats shadow">

                    <div className="stat">
                        <div className="stat-figure text-primary">
                            <BiMessageAltCheck style={{ fontSize: "30px" }}/>
                        </div>
                        <div className="stat-title">20190110259</div>
                        <div className="stat-value text-primary">15/20</div>
                        <div className="stat-desc">You're on average</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <HiOutlineExclamationTriangle style={{ fontSize: "30px" }}/>
                        </div>
                        <div className="stat-title">Questions failed</div>
                        <div className="stat-value text-secondary">5 Questions</div>
                        <div className="stat-desc">Try better next time</div>
                    </div>

                    <div className="stat">
                        <Link href="/practice/inputMatric">
                            <div className="stat bg-primary text-white rounded">
                                <div className="stat-value">Practice<br />Again</div>
                            </div>
                        </Link>
                    </div>

                </div>

            </div>
        
        </>

    )

}