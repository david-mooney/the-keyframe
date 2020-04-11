import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import theme from '@styles/theme';

import GlobalStyles from '@styles/globalStyles';
import Header from './header';
import Footer from './footer';

const PageLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: 1.8rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  transition: 0.2s background-color linear, 0.2s color linear;
`;

const Main = styled.main`
  flex: 1 1 auto;
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const Page = ({ title, darkMode, children }) => {
  const currentTheme = darkMode ? theme.dark : theme.light;

  return (
    <ThemeProvider theme={currentTheme}>
      <PageLayout>
        <GlobalStyles />
        <Header title={title} />
        <Main>{children}</Main>
        <Footer />
      </PageLayout>
    </ThemeProvider>
  );
};

Page.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

const mapStateToProps = ({ darkMode }) => ({ darkMode });

export default connect(mapStateToProps, null)(Page);
