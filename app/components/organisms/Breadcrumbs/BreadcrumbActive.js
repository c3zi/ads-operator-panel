import styled from 'styled-components';
import { breakpoints } from '../../../utils/breakpoints';

export const BreadcrumbActive = styled.li`
  margin-right: calc(var(--spacing-factor) * 2);
  color: var(--blue);
  font-weight: 400;
  display: block;
  text-decoration: none;
  position: relative;
  text-align: center;
  white-space: nowrap;
  font-family: var(--font-family-title);

  @media screen and (max-width: ${breakpoints.tabletSm}px) {
    &:last-of-type {
      display: none;
    }
  }
`;

BreadcrumbActive.displayName = 'BreadcrumbActive';
export default BreadcrumbActive;
