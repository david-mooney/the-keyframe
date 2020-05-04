import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyles from '@styles/globalStyles';
import themes from '@styles/themes';

import ThemeContext from '@components/themeContext';
import Header from '@components/header';
import Footer from '@components/footer';

const PageLayout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  // fixme: should happen elsewhere
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.background};
  transition: 0.2s background-color linear, 0.2s color linear; */
`;

const Main = styled.main`
  flex: 1 1 auto;
  width: 90%;
  max-width: 1080px;
  margin: 0 auto;
`;

const LayoutWrapper = ({ element, props }) => {
  const { data } = props;
  const { title } = data.site.siteMetadata;

  return (
    <ThemeContext.Consumer>
      {({ darkMode }) => (
        <ThemeProvider theme={darkMode ? themes.dark : themes.light}>
          <PageLayout>
            <GlobalStyles />
            <Header title={title} />
            <Main>{element}</Main>
            <Footer />
          </PageLayout>
        </ThemeProvider>
      )}
    </ThemeContext.Consumer>
  );
};

LayoutWrapper.propTypes = {
  props: PropTypes.object,
  data: PropTypes.object,
  element: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default LayoutWrapper;
