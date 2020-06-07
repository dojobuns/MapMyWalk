import React from 'react';

class WalkForm extends React.Component {
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
        return (
            <div className='walk-form'>
                <h1>WALK FORM</h1>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        location: <input type="text" value={this.state.location} onChange={this.update('location')}/>
                    </label>
                    <br/>
                    <label>
                        Date: <input type="date" value={this.state.date} onChange={this.update('date')}/>
                    </label>
                    <br/>
                    <label>
                        Duration: <input type="text" value={this.state.duration} onChange={this.update('duration')}/>
                    </label>
                    <br/>
                    <label>
                        Distance: <input type="text" value={this.state.distance} onChange={this.update('distance')}/>
                    </label>
                    <br/>
                    <label>
                        Starting Latitude: <input type="text" value={this.state.start_lat} onChange={this.update('start_lat')}/>
                    </label>
                    <br/>
                    <label>
                        Starting Longitude: <input type="text" value={this.state.start_long} onChange={this.update('start_long')}/>
                    </label>
                    <br/>
                    <label>
                        Ending Latitude: <input type="text" value={this.state.end_lat} onChange={this.update('end_lat')}/>
                    </label>
                    <br/>
                    <label>
                        Ending Longitude: <input type="text" value={this.state.end_long} onChange={this.update('end_long')}/>
                    </label>
                    <button type='submit'>Log Workout</button>
                </form>
            </div>
        )
    }
}

export default WalkForm;
