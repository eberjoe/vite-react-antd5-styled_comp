import { Layout } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import styled from 'styled-components';
import media from 'styled-media-query';

export const StyledMainLayout = styled(Layout)`
  display: flex;
  flex-direction: row;
  max-height: 100vh;
  height: 100vh;
`;

export const StyledHeader = styled(Header)`
  display: flex;
  top: 0;
  position: sticky;
  z-index: var(--super-z-index);
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background: #ffff;
  border-bottom: 1px solid black;
`;

export const StyledInnerLayout = styled(Layout)`
  display: flex;
  overflow: auto;
`;

export const StyledContent = styled(Content)`
  ul {
    display: grid;
    margin: 30px 30px 30px 0;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
    list-style: none;
    padding-bottom: 15px;
    ${media.lessThan('medium')`
      display: block;
    `};
  }
`;
