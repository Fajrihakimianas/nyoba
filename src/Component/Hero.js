import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUsers} from '../Store/Action/userActions';

class Hero extends Component {

    componentDidMount(){
        this.props.getUsers()
    }

    render() {
        const {results} = this.props;
        console.log(this.props.results);

        return (
            <div>
                {results.map(u =>
                    <div>
                        <h6>{u.gender}</h6>
                    </div>
                )}       
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    results: state.results.results
})

export default connect(mapStateToProps, {getUsers})(Hero)
