import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.addPerson} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.deletePerson(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapState = state => {
    return{
        persons: state.persons
    }
}
const mapActions = dispatch => {
    return{
        addPerson: (name, age) => dispatch({type: 'ADD_PERSON', personData: {name, age}}),
        deletePerson: (id) => dispatch({type: 'DELETE_PERSON', id: id})
    }
}
export default connect(mapState, mapActions)(Persons);
