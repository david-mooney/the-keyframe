import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  display: flex;
  cursor: pointer;
`;

const Switch = styled.div`
  position: relative;
  height: ${props => props.size};
  width: calc(${props => props.size} * 2);
  border-radius: ${props => props.size};
  background: ${props => props.theme.primary};
  overflow: hidden;
`;

const Circle = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  height: ${props => props.size};
  width: ${props => props.size};
  background: ${props => props.theme.lightest};
  border-radius: 50%;
  transform: translate(${props => (props.checked ? 100 : 0)}%, -50%) scale(0.85);
  transition: 0.2s transform ease-out;
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  pointer-events: none;
  &:focus + div {
    box-shadow: 0 0 0.3rem 0.15rem ${props => props.theme.focus};
  }
`;

const Toggle = ({
  size = '3rem',
  label = 'toggle button',
  children = null,
  id,
  value,
  onClick,
}) => (
  <Label htmlFor={id} aria-label={label}>
    <Input
      id={id}
      type="checkbox"
      role="switch"
      checked={value}
      aria-checked={value}
      onChange={onClick}
    />
    {children || (
      <Switch size={size}>
        <Circle size={size} checked={value} />
      </Switch>
    )}
  </Label>
);

Toggle.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  size: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Toggle;
