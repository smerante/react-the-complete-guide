import { useState } from 'react';
import AreYouSureModal from './AreYouSureModal';
import Backdrop from './Backdrop';

const Todo = (props: { title: string }) => {

    const [showModal, setShowModal] = useState(false);


    const deleteHandler = () => {
        setShowModal(true);
    }

    const closeModalHandler = () => {
        setShowModal(false);
    }

    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <div className='action'>
                <button onClick={deleteHandler} className='btn'>Delete</button>
            </div>
            {
                showModal &&
                <>
                    <AreYouSureModal onCancel={closeModalHandler} onConfirm={closeModalHandler}/>
                    <Backdrop handleClick={closeModalHandler} />
                </>
            }
        </div>
    )
};

export default Todo;