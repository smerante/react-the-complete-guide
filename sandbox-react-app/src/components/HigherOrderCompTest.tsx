const AddColorBG = (Component: any, color: any) => {
    return <>
        <h1>HOC Test Component </h1>
        <div style={{ backgroundColor: color }}>
            <Component />
        </div>
    </>
}

export default AddColorBG;