const Backdrop = (props: { handleClick: () => void }) => {
    return <div className='backdrop' onClick={props.handleClick} />
}

export default Backdrop;