import React from 'react';

class WalkDashboard extends React.Component {
    componentDidMount(){
        debugger;
        this.props.fetchWalks();
    }

    render(){
        return(
            <div className='walk-dashboard-component'>
                
            </div>
        )
    }
}

export default WalkDashboard;