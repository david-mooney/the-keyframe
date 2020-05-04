import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ThemeToggle from '@components/themeToggle';

const H1 = styled.h1`
  // FIXME: common typography section
  margin: 30px;
  text-align: right;
  font-size: 20vw;
  font-weight: 600;
  word-spacing: 100vw;
  color: ${({ theme }) => theme.text};
  opacity: 0.03;
`;

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;

const Header = ({ title }) => (
  <Container>
    <H1>{title}</H1>
    <ThemeToggle />
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
