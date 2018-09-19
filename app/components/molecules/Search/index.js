/**
 *
 * Search
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { FaSearch } from 'react-icons/fa';
import { SearchWrapper } from './styled';
import Button from '../../atoms/Button/index';
import Input from '../../atoms/Input';
import Form from '../../atoms/Form';
import { palette } from '../../../styleUtils/variables';
import { breakpoints } from '../../../utils/breakpoints';
import { breakpointIsLessThan } from '../../../utils/responsiveHelpers';

/* eslint-disable react/prefer-stateless-function */
class Search extends React.PureComponent {
  onInput = event =>
    this.setState({
      value: event.target.value,
    });

  handleSubmit = event => {
    event.preventDefault();
    event.stopPropagation();

    const value = this.state.value.toUpperCase();

    Object.entries(this.urlMap).forEach(([regex, url]) => {
      const matched = value.match(new RegExp(regex, 'i'));
      if (matched) {
        this.props.history.push(url + matched[0]);
      }
    });

    this.setState({
      value: '',
      inputShown: false,
    });
  };
  toggleSearchInput = bool => {
    this.setState({
      inputShown: bool,
    });
  };

  constructor(props) {
    super(props);

    this.state = {
      value: '',
      inputShown: false,
    };

    this.urlMap = {
      '^[0-9A-F]{4}-[0-9A-F]{8}-[0-9A-F]{4}$': '/blockexplorer/accounts/',
      '^[0-9A-F]{4}$': '/blockexplorer/nodes/',
      '^[0-9A-F]{8}$': '/blockexplorer/blocks/',
      '^[0-9A-F]{4}:[0-9A-F]{8}:[0-9A-F]{4}$': '/blockexplorer/transactions/',
      '^[0-9A-F]{4}:[0-9A-F]{8}$': '/blockexplorer/messages/',
    };
  }

  render() {
    const smallScreen = breakpointIsLessThan(
      breakpoints.tabletMd,
      this.props.breakpoint.size,
    );

    const showInputButton = (
      <Button color={palette.white} click={() => this.toggleSearchInput(true)}>
        <FaSearch />
      </Button>
    );
    return (
      <SearchWrapper>
        {(!smallScreen || this.state.inputShown) && (
          <Form onSubmit={this.handleSubmit}>
            <Input
              type="text"
              name="search"
              id="search"
              placeholder="SEARCH"
              focused={palette.darkblue}
              onChange={this.onInput}
            />
            <Button color={palette.white} type="submit">
              <FaSearch />
            </Button>
          </Form>
        )}
        {smallScreen && !this.state.inputShown && showInputButton}
      </SearchWrapper>
    );
  }
}

Search.propTypes = {
  history: PropTypes.object,
  breakpoint: PropTypes.object,
};

export default Search;