import React from 'react'

export const IplTeams = ({teams}) => {
return(
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs bg-black uppercase text-white">
            <tr>
                <th scope="col" className="px-6 py-3">
                Position
                </th>
                <th scope="col" className="px-6 py-3">
                Lost
                </th>
                <th scope="col" className="px-6 py-3">
                Matches Played
                </th>
                <th scope="col" className="px-6 py-3">
                NRR
                </th>
                <th scope="col" className="px-6 py-3">
                No
                </th>
                <th scope="col" className="px-6 py-3">
                Points
                </th>
                <th scope="col" className="px-6 py-3">
                Teams
                </th>
                <th scope="col" className="px-6 py-3">
                Tied
                </th>
                <th scope="col" className="px-6 py-3">
                Won
                </th>
            </tr>
        </thead>
        <tbody>
            {teams.map((team,index)=>(
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {index+1}
                </th>
                <th className="px-6 py-4 text-black">
                    {team.Lost}
                </th>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {team.Matches}
                </td>
                <td className="px-6 py-4">
                {team.NRR}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {team.No}
                </td>
                <td className="px-6 py-4">
                    {team.Points}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                {team.Team}
                </td>
                <td className="px-6 py-4">
                {team.Tied}
                </td>
                <td className="px-6 py-4">
                {team.Won}
                </td>
                
            </tr>
            ))}
            
        </tbody>
    </table>
</div>

)
}
