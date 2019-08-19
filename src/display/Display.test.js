import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'

import Display from './Display'

describe('<Display />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Display/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
});

describe('Defaults', () => {
    it('Defaults to `unlocked` and `open`', () => {
        const { queryByText } = render(<Display />)
        expect(queryByText(/unlocked/i)).toBeTruthy();
        expect(queryByText(/open/i)).toBeTruthy();
    })
})

describe('Close/Open', () => {
    it('displays `Closed` if the closed prop is true and `Open` if otherwise', () => {
        const closed = false;
        const { queryByText } = render(<Display closed={closed}/>)
        if(closed){
            expect(queryByText(/closed/i)).toBeTruthy();
        } else {
            expect(queryByText(/open/i)).toBeTruthy();
        }
    })
})

describe('Lock/Unlock', () => {
    it('displays `Locked` if the locked prop is true and `Unlocked` if otherwise', () => {
        const locked = false;
        const { queryByText } = render(<Display locked={locked}/>)
        if(locked){
            expect(queryByText(/locked/i)).toBeTruthy();
        } else {
            expect(queryByText(/unlocked/i)).toBeTruthy();
        }
    })
})

describe('Lock/Close class', () => {
    it('when locked or closed use the red-led class', () => {
        const { queryByText } = render(<Display locked={true} closed={true}/>)
        expect(queryByText(/closed/i).className.includes('red-led')).toBeTruthy()
        expect(queryByText(/locked/i).className.includes('red-led')).toBeTruthy()
    })
})

describe('Unlocked/Open class', () => {
    it('when unlocked or open use the green-led class', () => {
        const { queryByText } = render(<Display locked={false} closed={false}/>)
        expect(queryByText(/open/i).className.includes('green-led')).toBeTruthy()
        expect(queryByText(/unlocked/i).className.includes('green-led')).toBeTruthy()
    })
})
