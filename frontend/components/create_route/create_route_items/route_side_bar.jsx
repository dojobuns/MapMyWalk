import React from 'react';
import Panel from './panel';

class RouteSideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.walk;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state = {walk: this.state};
        // debugger;
        this.props.createWalk(this.state)
            .then(() => this.props.history.push(`/profile`));
    }

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value } );
    }

    render() {
        // debugger;
        const { duration, distance } = this.props;
        
        this.state.duration = duration;
        this.state.distance = distance;
        
        return (
            <div className='route-side-bar'>
                <div className='walk-details'>
                    Walk Details
                </div>
                <form onSubmit={this.handleSubmit}>
                        <div className='side-bar-form'>
                            <label>
                                <input type="text" className='side-bar-walk-name' placeholder='Name this walk' value={this.state.location} onChange={this.update('location')}/>
                            </label>
                            <br/>
                            <label>
                                <input type="date" className='side-bar-walk-date' value={this.state.date} onChange={this.update('date')}/>
                            </label>
                            <br/>
                            <label>
                                <input type="text" className='side-bar-walk-duration' value={this.state.duration} placeholder='mm' onChange={this.update('duration')}/>
                            </label>
                            <br/>
                            <label>
                                <input type="text" className='side-bar-walk-distance' value={this.state.distance} onChange={this.update('distance')}/>
                            </label>
                            <br/>
                            <label>
                                <textarea className='side-bar-walk-description' value={this.state.description} placeholder='How did it go?' onChange={this.update('description')}/>
                            </label>
                            <br/>
                        </div>
                        <button type='submit' className='side-bar-walk-save'>SAVE WALK</button>
                    </form>

                {/* <Panel /> */}
            </div>
        )
    }
}

export default RouteSideBar;