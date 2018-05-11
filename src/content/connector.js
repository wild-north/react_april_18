import { connect } from 'react-redux';
import { toggleDone } from '../actions';
import { getItemsForSelectedCategory } from '../selectors'

const mapStateToProps = (state) => {
    return {
        todos: getItemsForSelectedCategory(state)
    };
};
const mapDispatchToProps = {
    toggleDone
};

export const contentConnector = connect(mapStateToProps, mapDispatchToProps);