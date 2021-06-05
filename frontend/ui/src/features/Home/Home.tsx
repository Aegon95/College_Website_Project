import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addSemesters, deleteSemesters, editSemesters, fetchSemesters, selectSemesterItems,} from './HomeSlice';
import {Semester} from "../../Models/Semester";
import {CreateSemester} from "./CreateSemester";
import {Button, ButtonGroup, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react"

export function Home() {
    const dispatch = useDispatch();
    const items = useSelector(selectSemesterItems);
    const [showCreateModal, setShowCreateModal] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [isEdit, setIsEdit] = useState(false)
    const [editSemester, setEditSemester] = useState(new Semester("", ""))
    useEffect(() => {
        dispatch(fetchSemesters());
    }, [dispatch])


    const tableData = items.map((i: Semester) =>
        (
            <Tr key={i.id}>
                <Td>
                    {i.name}
                </Td>
                <Td>
                    {i.description}
                </Td>
                <Td>
                    <ButtonGroup variant="outline" spacing="6">
                        <Button colorScheme="blue" onClick={() => handleEditClick(i)}>Edit</Button>
                        <Button colorScheme="red" onClick={async () => {
                            dispatch(deleteSemesters(i.id))
                        }}>Delete</Button>
                    </ButtonGroup>
                </Td>
            </Tr>
        )
    )
    const columns = ["Semester Name", "Semester Description", "Actions"]
    const theadData = columns.map(c => <Th>
            {c}
        </Th>
    )

    const createSubmitButton = () => {
        const sem = new Semester(name, description)
        dispatch(addSemesters(sem))
        setShowCreateModal(false)
    }

    const handleEditClick = (sem: Semester) => {
        setIsEdit(true)
        setName(sem.name)
        setDescription(sem.description)
        setEditSemester(sem)
        setShowCreateModal(true)
    }

    const handleEditSaveClick = () => {
        const sem = new Semester(name, description)
        sem.id = editSemester.id
        dispatch(editSemesters(sem))
        setShowCreateModal(false)
        setEditSemester(new Semester("", ""))
        setName("")
        setDescription("")
    }
    return (

        <div>
            <CreateSemester setShowModal={setShowCreateModal} showModal={showCreateModal}
                            setDescription={setDescription} setName={setName} handleSubmit={createSubmitButton}
                            isEdit={isEdit} description={description} name={name} handleEdit={handleEditSaveClick}
                            setIsEdit={setIsEdit}/>
            <Button
                onClick={() => setShowCreateModal(true)}
            >
                Create
            </Button>
            <Table variant="simple">
                <Thead>
                    <tr>
                        {theadData}
                    </tr>
                </Thead>
                <Tbody>
                    {tableData}
                </Tbody>
            </Table>
        </div>
    );
}
