import React from 'react';
// class ListOfWords extends React.PureComponent {
//   render() {
//     return <div>{this.props.words.join(',')}</div>;
//   }
// }
class PureComponentTest extends React.PureComponent<{ name: string }, { numbers: Array<Number> }> {
    constructor(props: any) {
        super(props);
        this.state = {
            numbers: [0],
        };
    };

    updateState = () => {
        const updatedArray = this.state.numbers;
        updatedArray.push(Math.random() * 100);
        this.setState({
            numbers: updatedArray,
        });

        // Pure Components will only re-render with shallow comparison === true
        // this.forceUpdate();
    }

    render() {
        return <>
            <h1>PureComponent class component Example</h1><p> enable force update to re-render view after state change</p>
            <button style={{ display: 'block' }} onClick={() => this.updateState()}>Add To List</button>
            <div style={{ display: 'flex', flexDirection: 'column', width: '400px', outline: '1px solid grey', height: '250px', overflowY: 'scroll' }}>
                <div style={{ display: 'block' }}></div>
                {
                    this.state.numbers.map((e, i) => {
                        return <p key={i}>Random Number {e}</p>
                    })
                }
            </div>
        </>;
    }
}

export default PureComponentTest;
