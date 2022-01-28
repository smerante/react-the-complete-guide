import React, { useEffect } from 'react';

export const HOCForwardRefTest = (Component: any, props: any) => {
    const { forwardedRef, ...rest } = props;
    useEffect(() => {
        console.warn('props: ', props);
    }, [props])
    return <><h1>HOC Forward Ref test</h1><Component ref={forwardedRef} {...rest} /></>;
}

const ForwardRefTest = React.forwardRef((props: any, buttonRef: any) => {
    return <>
        <h1>Forward Ref test</h1>
        <button ref={buttonRef} className="ForwardRefTest">
            Click Me
        </button>
    </>
});

export default ForwardRefTest;