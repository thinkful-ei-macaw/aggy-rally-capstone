import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Profile from './Profile';

describe('<Profile />', () => {
    it('renders without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<Profile profile={{}}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})

//update snapshots
describe('<Profile />', () => {
    it('render this UI as expected', () => {
        const tree = renderer.create(<Profile profile={{}}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})
