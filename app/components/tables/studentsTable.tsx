export default function StudentsTables(){

    return (

        <>
        

            <div className="p-4 overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="text-xs text-gray-500 text-left">
                            <th className="pb-3 font-medium">Matric Number</th>
                            <th className="pb-3 font-medium">Score</th>
                            <th className="pb-3 font-medium">Time</th>
                            <th className="pb-3 font-medium">Date</th>
                            <th className="pb-3 font-medium">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-xs bg-gray-50">
                            <td className="py-5 px-6 font-medium">20190110349</td>
                            <td className="font-medium">12</td>
                            <td className="font-medium">6:15PM</td>
                            <td className="font-medium">7/26/2023</td>
                            <td>
                                <span className="inline-block py-1 px-2 text-white bg-red-500 rounded-full">Failed</span>
                            </td>
                        </tr>
                        <tr className="text-xs bg-gray-50">
                            <td className="py-5 px-6 font-medium">20190110349</td>
                            <td className="font-medium">20</td>
                            <td className="font-medium">6:15PM</td>
                            <td className="font-medium">7/26/2023</td>
                            <td>
                                <span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">Passed</span>
                            </td>
                        </tr>
                        <tr className="text-xs bg-gray-50">
                            <td className="py-5 px-6 font-medium">20190110349</td>
                            <td className="font-medium">20</td>
                            <td className="font-medium">6:15PM</td>
                            <td className="font-medium">7/26/2023</td>
                            <td>
                                <span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">Passed</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        
        </>

    )

}