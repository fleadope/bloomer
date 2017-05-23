import * as React from 'react';
import { shallow } from 'enzyme';

import { PageControl } from './../../../src';

describe('PageControl', () => {
    it('should render a custom component with PageControl props', () => {
        const customComponent = (props) => (
            <div>
                My Button <a {...props} />
            </div>
        );

        const customComponentRendered = (
            <div>
                My Button <a href='#' className='pagination-previous is-focused' />
            </div>
        );

        const component = shallow(<PageControl href='#' isFocused isPrevious render={customComponent} />);
        expect(component.contains(customComponentRendered)).toBe(true);
    });

    it('should render a paragraph with .pagination-previous', () => {
        const component = shallow(<PageControl>My Link</PageControl>);
        expect(component.hasClass('pagination-previous')).toBe(true);
    });

    it('should render a paragraph with .pagination-previous', () => {
        const component = shallow(<PageControl isPrevious>My Link</PageControl>);
        expect(component.hasClass('pagination-previous')).toBe(true);
    });

    it('should render a paragraph with .pagination-previous and custom classes', () => {
        const component = shallow(<PageControl className='custom'>My Link</PageControl>);
        expect(component.hasClass('pagination-previous')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });

    it('should render a paragraph with .pagination-next', () => {
        const component = shallow(<PageControl isNext>My Link</PageControl>);
        expect(component.hasClass('pagination-next')).toBe(true);
    });

    it('should render a paragraph with modifiers and custom classes', () => {
        const component = shallow(<PageControl isNext isActive isFocused className='custom'>My Link</PageControl>);
        expect(component.hasClass('pagination-next')).toBe(true);
        expect(component.hasClass('is-active')).toBe(true);
        expect(component.hasClass('is-focused')).toBe(true);
        expect(component.hasClass('custom')).toBe(true);
    });
});