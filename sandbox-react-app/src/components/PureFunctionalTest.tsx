import React, { useState } from "react";

const areEqual = (prevProps: any, nextProps: any) => {
    /*
    return true if passing nextProps to render would return
    the same result as passing prevProps to render,
    otherwise return false
    */
    console.warn(prevProps, ' : ', nextProps);
    return false;
}

const PureFunctionalCompTest: React.FunctionComponent<any> = React.memo(props => {

    const [numbers, setNumbers] = useState([0]);

    const updateState = () => {
        const updatedArray = numbers;
        updatedArray.push(Math.random() * 100);
        setNumbers([...updatedArray]);
        // setNumbers(updatedArray); Will not update because shallow comparison prevents re-render
        console.warn('numbers: ', numbers);
    }
    return <>
        <h1>PureComponent functional component Example</h1>
        <p> enable force update to re-render view after state change</p>
        <p>{props.hello}</p>
        <button style={{ display: 'block' }} onClick={() => updateState()}>Add To List</button>
        <div style={{ display: 'flex', flexDirection: 'column', width: '400px', outline: '1px solid grey', height: '250px', overflowY: 'scroll' }}>
            <div style={{ display: 'block' }}></div>
            {
                numbers.map((e, i) => {
                    return <p key={i}>Random Number {e}</p>
                })
            }
        </div>
        {props.children}
    </>;
}, areEqual);

export default PureFunctionalCompTest;
