import React from 'react';

class Panel extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.walk;
    }

    render(){
        const { distance } = this.props;
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
            </div>
        )
    }
}

export default Panel;