import { connect } from 'react-redux';
import { selectCategory } from '../actions';

const mapStateToProps = (state) => {
    return {
        categories: state.categories.list,
        selected: state.categories.selectedCategody
    };
};
const mapDispatchToProps = {
    selectCategory
};

export const sidebarConnector = connect(mapStateToProps, mapDispatchToProps);