import React, {useState} from 'react'

 const useModal = () => {
    const [modal, setModal] = useState(false);
    const handleColseModal = () => {
        setModal(false);

    };

    const handleOpenModal = () => 
    {
        setModal(true);
    };
    return {modal,handleColseModal,handleOpenModal}
}

export default useModal;
