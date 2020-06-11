import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Panel extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.walk;
    }

    render(){
        // debugger;
        const { distance, removeMarker, removeAll } = this.props;
        this.state.distance = distance;
        this.state.distance = (this.state.distance === 0) ? (
            this.state.distance
        ) : (
            this.state.distance.toFixed(2)
        )
        return(
            <div className='panel'>
                <div className='panel-top'>
                </div>
                    <div className='panel-distance-header'>DISTANCE</div>
                    <div className='panel-distance-number'>
                        <div className='panel-distance-actual-number'>{this.state.distance}</div>
                        <div>MI</div>
                    </div>
                    <div className='panel-buttons'>
                        <button onClick={removeMarker} className='remove-marker'><FontAwesomeIcon icon={'undo'} className='undo' />Undo</button>
                        <button onClick={removeAll} className='clear-map'><FontAwesomeIcon icon={'times'} className='times' />Clear</button>
                    </div>
            </div>
        )
    }
}

export default Panel;