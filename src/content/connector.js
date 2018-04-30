import { connect } from 'react-redux';
import { toggleDone } from '../actions';

const mapStateToProps = (state) => {
    return {
        todos: state.todos.items,
        categoryId: state.categories.selectedCategory
    };
};
const mapDispatchToProps = {
    toggleDone
};

export const contentConnector = connect(mapStateToProps, mapDispatchToProps);