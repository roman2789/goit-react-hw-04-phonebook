import styled from 'styled-components';
import { font } from '../mixins';

export const List = styled.ol`
  padding: 20px;
  overflow-y: hidden;
  ${font({ fs: 16, fw: 400, lh: 20 })};
  border-radius: 5px;
  background-color: ${props => props.theme.colors.greyBg};
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const DelButton = styled.button`
  padding: 3px;
  border-radius: 6px;
  background-color: ${props => props.theme.colors.colorBg};
  box-shadow: -1px -1px 3px ${props => props.theme.colors.white},
    1px 1px 3px ${props => props.theme.colors.colorShadow};

  &:hover {
    box-shadow: -2px -2px 5px ${props => props.theme.colors.white},
      2px 2px 5px ${props => props.theme.colors.colorShadow};
  }
  &:active {
    background-color: ${props => props.theme.colors.grey};
    fill: ${props => props.theme.colors.white};
    box-shadow: inset 1px 1px 2px ${props => props.theme.colors.white},
      inset -1px -1px 2px ${props => props.theme.colors.colorShadow};
  }
`;
