import { useState } from 'react';
import AreYouSureModal from './AreYouSureModal';
import Backdrop from './Backdrop';

const Todo = (props: { title: string }) => {

    const [showModal, setShowModal] = useState(false);


    const deleteHandler = () => {
        setShowModal(true);
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
                    <AreYouSureModal />
                    <Backdrop />
                </>
            }
        </div>
    )
};

export default Todo;