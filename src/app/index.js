import React, {Component} from 'react';
import { UserList } from '../user-list';
import { WithSpinner } from '../with-spinner';
// import PropTypes from 'prop-types';

class Root extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            isFetching: false
        };

        this.onRemoveUser = this.onRemoveUser.bind(this);
        this.fetchData = this.fetchData.bind(this);
    }

    onRemoveUser(id) {
        this.setState({
            list: this.state.list.filter(value => value.id !== id)
        });
    };

    componentWillMount() {
        this.setState({ isFetching: true });

        setTimeout(() => this.fetchData(), 1000);


    }

    fetchData() {
        fetch('data.json')
            .then(resp => resp.json())
            .then(list => {
                this.setState({
                    list,
                    isFetching: false
                });
            });
    }

    render() {

        return (
            <WithSpinner predicate={ this.state.isFetching }>
                <div className="App">
                    {
                        this.state.list.length
                            ? <UserList list={this.state.list} onRemoveUser={ this.onRemoveUser }/>
                            : <p>No users found</p>
                    }
                </div>
            </WithSpinner>
        );
    }
}

export default Root;














