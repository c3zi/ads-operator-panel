import { keyframes } from 'styled-components';

export const scaleIn = keyframes`
  to {
    transform: scale(1) rotateX(0); 
  }`;

export const fadeIn = keyframes`
  to {
    transform: scale(1); 
    opacity: 1; 
  }`;

export const rotateIn = keyframes`
to {
   transform: rotate(0);
}
`;
