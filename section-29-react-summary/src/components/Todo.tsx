export const Todo = (props: {title: string}) => {
    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <div className='action'>
                <button className='btn'>Delete</button>
            </div>
        </div>
    )
};