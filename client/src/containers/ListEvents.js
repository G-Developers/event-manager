// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Row,
    Col,
    Jumbotron,
    Button
  } from 'reactstrap';

import { userLogin, fetchEvents, postEvent, userLogout } from '../actions';
import { Action } from 'redux'

import { connect } from 'react-redux';

type dispatch = {
    dispatch: (action: Action ) => any
}

type Props =  dispatch & {
    userState: Object,
    events: Object,
    appState: Object,
};
  
class ListEvents extends Component<Props> {

    componentDidMount() {
        this.getData();
    }
    
    getData = () => {
        const { dispatch } = this.props;
        dispatch(userLogin({ username: 'admin',password: '1299459ML' }));
        dispatch(fetchEvents());
    }

    logout = () => {
        const { dispatch } = this.props;
        dispatch(userLogout());
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const { title, description, startDateTime, endDateTime, organisation } = event.nativeEvent.target.elements;

        this.props.dispatch(postEvent({
            title: title.value,
            description: description.value,
            startDateTime: startDateTime.value,
            endDateTime: endDateTime.value,
            organisation: organisation.value
        }));
    }

    render() {
        const { appState, userState, events } = this.props;
        return (
            <div>
                <Jumbotron>
                    <Row>
                        <Col>
                            <h1>Welcome to Event Management for communities...</h1>
                            {
                                (userState.token) ? 
                                <Button
                                    tag="a"
                                    color="success"
                                    size="large"
                                    onClick={ this.logout }
                                >
                                    Logout
                                </Button>
                                : 
                                ''
                            }
                            <p>
                            <Button
                                tag="a"
                                color="success"
                                size="large"
                                onClick={ this.getData }
                            >
                                Fetch events!
                            </Button>
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="App-intro">
                            <p>{ (appState.loading.length > 0) ? 'Loading' : '' }</p>
                            {(events.events.length === 0) ? <div> No events found! </div> : <div></div> }
                            {events.events.map( (event) => {
                                return <div key={event.id}>{event.title} by {event.organisation.name}</div>;
                            })}
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Add Event</p>
                            <form onSubmit={this.handleSubmit}>
                                <input className="form-control" type="text" name="title" />
                                <input className="form-control" type="text" name="description" />
                                <input className="form-control" type="datetime-local" name="startDateTime" />
                                <input className="form-control" type="datetime-local" name="endDateTime" />
                                <select name="organisation">
                                    <option value="1">Angular Pakistan</option>
                                </select>
                                <Button
                                    tag="button"
                                    color="success"
                                    size="small"
                                    type="submit">
                                    Add event
                                </Button>
                            </form>
                        </Col>
                    </Row>
                </Jumbotron>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // const { appState, userState, events } = state;

    return state;
}

export default connect(mapStateToProps)(ListEvents);
