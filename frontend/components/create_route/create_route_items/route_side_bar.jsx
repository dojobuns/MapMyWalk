import React from 'react';
import { Link } from 'react-router-dom';

class RouteSideBar extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.walk;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state = {walk: this.state};
        debugger;
        this.props.createWalk(this.state)
    }

    update(field) {
        return e => this.setState( { [field]: e.currentTarget.value } );
    }

    render() {
        debugger;
        const { duration, distance } = this.props
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
                                <input type="text" className='side-bar-walk-duration' value={duration} placeholder='mm' onChange={this.update('duration')}/>
                            </label>
                            <br/>
                            <label>
                                <div>Distance </div>
                                <input type="text" className='side-bar-walk-distance' value={distance} onChange={this.update('distance')}/>
                            </label>
                            <br/>
                            <label>
                                <div>How did it go? </div>
                                <textarea className='side-bar-walk-description' value={this.state.description} onChange={this.update('description')}/>
                            </label>
                            <br/>
                        </div>
                        <Link to='/profile'>
                            <button type='submit' className='side-bar-walk-save'>SAVE WALK</button>
                        </Link>
                    </form>
            </div>
        )
    }
}

export default RouteSideBar;