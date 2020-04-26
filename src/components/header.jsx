import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Link } from 'gatsby';
import ThemeToggle from '@components/themeToggle';

const H1 = styled.h1`
  // FIXME: common typography section
  margin: 8rem 4rem;
  text-align: right;
  font-size: 5vw;
  font-weight: 600;
  word-spacing: 9999rem;
  color: ${({ theme }) => theme.primary};
  opacity: 0.1;
`;

const Container = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const Header = ({ title }) => (
  <Container>
    <Link to="/">
      <H1>{title}</H1>
    </Link>
    {/* <ThemeToggle /> */}
  </Container>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
