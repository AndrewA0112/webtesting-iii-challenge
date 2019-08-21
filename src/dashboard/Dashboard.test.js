import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'

import Dashboard from './Dashboard'

describe('<Dashboard />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Dashboard/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})

describe('Gate', () => {
    it('Cannot be closed or opened if it is locked', () => {
        const { getByTestId } = render(<Dashboard/>)
        fireEvent.click(getByTestId(/open/i))
        fireEvent.click(getByTestId(/lock/i))
        expect(getByTestId(/open/i).disabled).toBeTruthy()
    })
})

describe('Controls Text', () => {
    it('buttons\' text changes to reflect the state the door will be in if clicked', () => {
        const { getByTestId, queryByText } = render(<Dashboard />)
        expect(queryByText(/open gate/i)).toBeFalsy()
        expect(queryByText(/unlock gate/i)).toBeFalsy()
        fireEvent.click(getByTestId("open"))
        fireEvent.click(getByTestId("lock"))
        expect(queryByText(/open gate/i)).toBeTruthy()
        expect(queryByText(/lock gate/i)).toBeTruthy()
    })
})
