import React from "react";
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react"

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

export const CreateSemester: React.FC<CreateSemesterComponentProps> = (props) => {
    const buttonText = props.isEdit ? "Save" : "Create"
    const modalText = props.isEdit ? "Edit Semester" : "Create Semester";
    return (
        <Modal isOpen={props.showModal} onClose={() => {
            props.setShowModal(false)
            props.setIsEdit(false)
        }}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>{modalText}</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <Input placeholder="Name"
                           onChange={e => props.setName(e.target.value)}
                           value={props.name}/>
                    <Input placeholder="Description"
                           onChange={e => props.setDescription(e.target.value)}
                           value={props.description}/>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3}
                            onClick={() => props.isEdit ? props.handleEdit() : props.handleSubmit()}>
                        {buttonText}
                    </Button>
                    <Button variant="ghost" onClick={() => {
                        props.setShowModal(false)
                        props.setIsEdit(false)
                    }}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
