import React from "react";

interface CreateSemesterComponentProps {
    setShowModal: Function
    showModal: boolean
    setName: Function
    setDescription: Function
    name: string
    description: string
    handleSubmit: Function
    isEdit: boolean
    setIsEdit: Function
    handleEdit: Function
}

export const CreateSemester : React.FC<CreateSemesterComponentProps> = (props) => {
    const buttonText = props.isEdit ? "Edit" : "Create"
    const modalText =  props.isEdit ? "Edit Semester" : "Create Semester"
    return (
        <>
            {props.showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {modalText}
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => props.setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                          x
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto">
                                    <div className="mb-3 pt-0">
                                        <p className="py-2 text-xl">Name</p>
                                        <input type="text" placeholder="Name"
                                               onChange={e => props.setName(e.target.value)}
                                               value = {props.name}
                                               className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                                    </div>

                                    <div className="mb-3 pt-0">
                                        <p className="py-2 text-xl">Description</p>
                                        <input type="text" placeholder="Description"
                                               onChange={e => props.setDescription(e.target.value)}
                                               value = {props.description}
                                               className="px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full"/>
                                    </div>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => {
                                            props.setShowModal(false)
                                            props.setIsEdit(false)
                                        }}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="button"
                                        style={{ transition: "all .15s ease" }}
                                        onClick={() => props.isEdit ? props.handleEdit() : props.handleSubmit()}
                                    >
                                        {buttonText}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
