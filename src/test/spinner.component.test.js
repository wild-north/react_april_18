import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { SpinnerForTest } from '../components/spinner';

it('renders correctly', () => {
    // const tree = renderer
    //     .create(<SpinnerForTest/>)
    //     .toJSON();
    const wrapper = shallow(<SpinnerForTest/>);
    expect(wrapper).toMatchSnapshot();
});