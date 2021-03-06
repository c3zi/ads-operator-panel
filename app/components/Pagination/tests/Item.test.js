import React from 'react';
import { shallow } from 'enzyme';
import Item from '../Item';

describe('<Item />', () => {
  it('should generate <PaginationListElement> element ', () => {
    const renderedComponent = shallow(<Item page={4} />);
    expect(renderedComponent.find('PaginationListElement').length).toEqual(1);
  });

  it('should generate empty <li /> element where there is no page and link props ', () => {
    const renderedComponent = shallow(<Item />);

    expect(renderedComponent.find('li').length).toEqual(1);
  });

  it('should generate <span> element when link does not exist', () => {
    const renderedComponent = shallow(<Item label="test" page={4} />);

    expect(renderedComponent.find('PaginationListElement').length).toEqual(1);
    expect(renderedComponent.find('span').length).toEqual(1);
    expect(renderedComponent.find('span').text()).toEqual('test');
  });

  it('should generate <span> element when page does not exist', () => {
    const renderedComponent = shallow(<Item label="test" link="/api" />);

    expect(renderedComponent.find('PaginationListElement').length).toEqual(1);
    expect(renderedComponent.find('span').length).toEqual(1);
    expect(renderedComponent.find('span').text()).toEqual('test');
  });

  it('should generate <span> element with page number when label does not exists', () => {
    const renderedComponent = shallow(<Item label="test" link="/api" />);

    expect(renderedComponent.find('PaginationListElement').length).toEqual(1);
    expect(renderedComponent.find('span').length).toEqual(1);
    expect(renderedComponent.find('span').text()).toEqual('test');
  });

  it('should generate <li> element with active class when active prop is passed', () => {
    const renderedComponent = shallow(<Item active label="test" link="/api" />);

    expect(renderedComponent.find('PaginationListElement').length).toEqual(1);
    expect(
      renderedComponent.find('PaginationListElement').prop('active'),
    ).toEqual(true);
  });

  it('should generate <span> element with disabled class when disable prop is passed', () => {
    const renderedComponent = shallow(
      <Item disabled label="test" link="/api" />,
    );

    expect(renderedComponent.find('PaginationListElement').length).toEqual(1);
    expect(
      renderedComponent.find('PaginationListElement').prop('disabled'),
    ).toEqual(true);
  });

  it('should generate <Link> element for page button', () => {
    const renderedComponent = shallow(
      <Item label="test" link="/api" page={3} />,
    );

    expect(renderedComponent.find('PaginationListElement').length).toEqual(1);
    expect(renderedComponent.find('Link').length).toEqual(1);
  });
});
