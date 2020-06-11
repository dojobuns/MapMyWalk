import React from 'react';
import Footer from '../footer/footer_container'

class WalkForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.walk;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger;
        const d = new Date(this.state.date);
        // debugger;
        const month = d.getMonth();
        const day = d.getDate();
        const year = d.getFullYear();
        const date = `${month+1}/${day}/${year}`;

        this.state.date = date;

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
            <div>
                <div className='walk-form'>
                    <div className='log-header-container'>
                        <h1 className='log-header'>LOG A WALK</h1>
                    </div>
                    <br/>
                    <div className='log-sub-header-container'>
                    <img src={window.logo} className='log-sub-header-logo' width='70' alt=""/>
                    <div className='log-sub-header-1'>Track all of your walks here! Be able to track date, time and distance for a better</div>
                    </div>
                    <div className='log-sub-header-2'>walk experience! Add details below to record how your stroll went!</div>
                    <br/>
                    <form onSubmit={this.handleSubmit}>
                        <div className='log-form'>
                            <div className='log-form-group-1'>
                                <label>
                                    <div>Walk name</div>
                                    <input type="text" className='log-walk-name' value={this.state.location} onChange={this.update('location')}/>
                                </label>

                                <label>
                                    <div>Date </div>
                                    <input type="date" className='log-walk-date' value={this.state.date} onChange={this.update('date')}/>
                                </label>
                            </div>
                            <br/>
                            <label>
                                <div>Duration</div> 
                                <input type="text" className='log-walk-duration' value={this.state.duration} placeholder='mm' onChange={this.update('duration')}/>
                            </label>
                            <br/>
                            <label>
                                <div>Distance </div>
                                <input type="text" className='log-walk-distance' value={this.state.distance} onChange={this.update('distance')}/>
                            </label>
                            <br/>
                            <label>
                                <div>How did it go? </div>
                                <textarea className='log-walk-description' value={this.state.description} onChange={this.update('description')}/>
                            </label>
                            <br/>
                        </div>
                        <button type='submit' className='log-walk-save'>SAVE</button>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}

export default WalkForm;
