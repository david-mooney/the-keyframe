import React from 'react';
import styled, { css } from 'styled-components';
import Toggle from '@components/inputs/toggle';
import ThemeContext from '@components/themeContext';

const sun = css`
  background-color: ${props => props.theme.background};
  transform: translate(0, -50%) scale(0.85);
`;

const moon = css`
  background-color: ${props => props.theme.background};
  transform: translate(100%, -50%) scale(0.85);
`;

const TopLeft = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
`;

const Switch = styled.div`
  position: relative;
  height: 30px;
  width: 60px;
  border-radius: 30px;
  background-color: ${props => props.theme.text};
`;

const Circle = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  transition: 0.2s transform ease-out, 0.25s background-color ease-out;
  ${props => (props.checked ? moon : sun)}
`;

const Toggler = () => (
  <ThemeContext.Consumer>
    {({ darkMode, toggleDarkMode }) => (
      <TopLeft>
        <Toggle
          id="themeToggle"
          label="Switch between light and dark mode"
          value={darkMode}
          callback={toggleDarkMode}
        >
          <Switch checked={darkMode}>
            <Circle checked={darkMode} />
          </Switch>
        </Toggle>
      </TopLeft>
    )}
  </ThemeContext.Consumer>
);

export default Toggler;
