import React, {Component, Fragment} from 'react';
import { Content } from '../content';
import { Sidebar } from '../sidebar';
import { Header } from '../header';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './index.css';
import classnames from 'classnames';

// import PropTypes from 'prop-types';

const todos = {
    1: {id: 1, text: 'Выучить реакт', done: true},
    2: {id: 2, text: 'Выучить реакт-роутер', done: false},
    3: {id: 3, text: 'Выучить редакс', done: false}
};

const categories = {
    1: {id: 1, name: 'React', parentId: null},
    2: {id: 2, name: 'React-router', parentId: 1},
    3: {id: 3, name: 'Выучить редакс', parentId: null}
};

class TodoApp extends Component {
    constructor() {
        super();
        this.state = {
            todos,
            categories
        };
        this.toggleDone = this.toggleDone.bind(this);
        this.saveItem = this.saveItem.bind(this);
        this.getContent = this.getContent.bind(this);
    }

    toggleDone(id) {
        const updatedItem = Object.assign(
            {}, this.state.todos[id], {done: !this.state.todos[id].done}
        );

        this.setState({
            todos: Object.assign({}, this.state.todos, { [id]: updatedItem })
        });
    }

    saveItem(id, text) {
        const updatedItem = Object.assign(
            {}, this.state.todos[id], { text }
        );

        this.setState({
            todos: Object.assign({}, this.state.todos, { [id]: updatedItem })
        });
    }

    getContent() {
        return <Content todos={ this.state.todos }
                 toggleDone={ this.toggleDone }
                 saveItem={ this.saveItem }
        />
    }



    render() {
        const params = {
            todos: this.state.todos,
            toggleDone: this.toggleDone,
            saveItem: this.saveItem,
            Content: this.getContent
        };

        return (
            <Fragment>
                <Header/>
                <Nav/>
                <Sidebar/>
                <Main { ...params }/>
            </Fragment>
        );
    }
}

export default TodoApp;

function Main(props) {
    return (
        <Switch>
            <Route path="/" exact component={ props.Content }/>
            <Route path="/products" exact component={ Products }/>
            <Route path="/products/:id"
                   exact
                   render={ props => <ProductDetails id={ props.match.params.id }/> }
            />
            <Route path="/about" exact component={ About }/>
        </Switch>
    );
}

function About() {
    return (
        <h1>About us</h1>
    );
}

function Products() {
    const showExtraClass = Math.random() > 0.5;

    return (
        <Fragment>
            <h1 className="product-header">Product List</h1>

            <div className={ classnames('product-holder', { extra: showExtraClass }) }>
                <ul>
                    <li>
                        <Link to={{
                            pathname: '/products/1',
                            state: { discount: '10%' }
                        }}>Product 1</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/products/2',
                        }}>Product 2</Link>
                    </li>
                    <li>
                        <Link to={{
                            pathname: '/products/3',
                        }}>Product 3</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

function ProductDetails({ id }) {
    // get real item data from a server inside componentDidMount
    return (
        <Fragment>
            <h1>Product description #{ id }</h1>
            <div className="details">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid at deserunt distinctio doloribus eum ex, explicabo facilis non nulla, quibusdam totam voluptatem voluptatum! Ipsa maiores sint velit vitae voluptate.
            </div>
            <Link to="/products">Go Back</Link>
        </Fragment>
    );
}

const navStyles = {
    fontWeight: 'bold',
    color: 'red'
};

function Nav() {
    return (
        <ul>
            <li>
                <Link to="/">Main</Link>
            </li>
            <li>
                <NavLink
                    activeClassName="active"
                    to="/products"
                >Products</NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    activeStyle={navStyles}
                >About</NavLink>
            </li>
        </ul>
    );
}













