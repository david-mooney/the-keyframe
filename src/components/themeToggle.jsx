import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';

import Toggle from '@components/inputs/toggle';

import { actions } from '../../createStore'; // FIXME: alias

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
  top: 4rem;
  right: 4rem;
`;

const Switch = styled.div`
  position: relative;
  height: 3rem;
  width: 6rem;
  border-radius: 3rem;
  background-color: ${props => props.theme.text};
`;

const Circle = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  transition: 0.2s transform ease-out, 0.25s background-color ease-out;
  ${props => (props.checked ? moon : sun)}
`;

const Toggler = ({ darkMode, toggle }) => (
  <TopLeft>
    <Toggle
      id="themeToggle"
      label="Switch between light and dark mode"
      size="4rem"
      value={darkMode}
      onClick={toggle}
    >
      <Switch checked={darkMode}>
        <Circle checked={darkMode} />
      </Switch>
    </Toggle>
  </TopLeft>
);

Toggler.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapStateToProps = ({ darkMode }) => ({ darkMode });

const mapDispatchToProps = dispatch => ({
  toggle: () => dispatch({ type: actions.TOGGLE_STATE }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Toggler);
