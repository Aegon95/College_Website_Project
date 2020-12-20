import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    addSemesters,
    deleteSemesters, editSemesters, fetchSemesters, selectSemesterItems,
} from './HomeSlice';
import {Semester} from "../../Models/Semester";
import {CreateSemester} from "./CreateSemester";
export function Home() {
    const dispatch = useDispatch();
    const items  = useSelector(selectSemesterItems);
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    const [editSemester, setEditSemester] = useState(new Semester("", ""))
    useEffect(() => {
        dispatch(fetchSemesters());
    }, [dispatch])



    const tableData = items.map((i:Semester) =>
        (
            <tr key={i.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        {i.name}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                        {i.description}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="sm:flex">
                        <div className="rounded-md shadow">
                            <a onClick={() => handleEditClick(i)}
                               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-sm md:px-10">
                                Edit
                            </a>
                        </div>
                        <div className="rounded-md shadow">
                            <a onClick={async () => {
                                dispatch(deleteSemesters(i.id))
                            }}
                               className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-sm md:px-10">
                                Delete
                            </a>
                        </div>
                    </div>
                </td>
            </tr>
        )
    )

    const createSubmitButton = () =>{
        const sem = new Semester(name, description)
        dispatch(addSemesters(sem))
        setShowCreateModal(false)
    }

    const handleEditClick = (sem: Semester) =>{
        setIsEdit(true)
        setName(sem.name)
        setDescription(sem.description)
        setEditSemester(sem)
        setShowCreateModal(true)
    }

    const handleEditSaveClick = () =>{
        const sem = new Semester(name, description)
        sem.id = editSemester.id
        dispatch(editSemesters(sem))
        setShowCreateModal(false)
        setEditSemester(new Semester("", ""))
        setName("")
        setDescription("")
    }
    return (

        <div className="flex flex-col">
            <CreateSemester setShowModal={setShowCreateModal} showModal = {showCreateModal} setDescription={setDescription} setName={setName} handleSubmit={createSubmitButton} isEdit = {isEdit} description={description} name={name}  handleEdit={handleEditSaveClick} setIsEdit={setIsEdit}/>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <button
                            type="button"
                            onClick={() => setShowCreateModal(true)}
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
