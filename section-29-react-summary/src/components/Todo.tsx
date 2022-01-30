const Todo = (props: {title: string}) => {


    const deleteHandler = () => {
        console.warn('clicked: ', props);
    }

    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <div className='action'>
                <button onClick={deleteHandler} className='btn'>Delete</button>
            </div>
        </div>
    )
};

export default Todo;