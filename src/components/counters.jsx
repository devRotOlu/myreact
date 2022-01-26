
import React from 'react';

import Counter from './counter';


class  Counters extends React.Component {


    render() { 
        return (<div className="m-4">

                <Counter/>
                <Counter/>
                <Counter/>
                <Counter/>
                <Counter/>

        </div>);
    }
}

export default Counters;