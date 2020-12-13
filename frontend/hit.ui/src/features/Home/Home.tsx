import React, {useEffect} from 'react';
import {useDispatch } from 'react-redux';
import {
    fetch,
} from './HomeSlice';
import {Semester} from "../../Models/Semester";
export function Home() {

    let items: any =[];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetch());
    }, [dispatch, items])
    const tableData = items.forEach((i:Semester) =>{
        return (
            <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        {i.Name}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                        {i.Description}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="sm:flex">
                        <div className="rounded-md shadow">
                            <a href="#"
                               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-sm md:px-10">
                                Edit
                            </a>
                        </div>
                        <div className="rounded-md shadow">
                            <a href="#"
                               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-sm md:px-10">
                                Delete
                            </a>
                        </div>
                    </div>
                </td>
            </tr>
        )
    })

    return (
        <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <button
                            type="button"
                            className="border items-center justify-center border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline"
                        >
                            Create
                        </button>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Semester Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    Semester Description
                                </th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                   Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {tableData}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
