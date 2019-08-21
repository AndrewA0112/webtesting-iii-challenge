import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react'

import Controls from './Controls'

describe('<Controls />', () => {
    it('Matches snapshot', () => {
        const tree = renderer.create(<Controls/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})

describe('Closed Toggle', () => {
    it('the closed toggle button is disabled if the gate is locked', () => {
        const { getByTestId } = render(<Controls locked={true}/>)
        expect(getByTestId(/open/i).disabled).toBeTruthy();
    })
})

describe('Locked Toggle', () => {
    it('the locked toggle button is disabled if the gate is open', () => {
        const { getByTestId } = render(<Controls closed={false}/>)
        expect(getByTestId(/lock/i).disabled).toBeTruthy();
    })
})


