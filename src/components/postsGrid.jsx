import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Grid = styled.div`
  width: 100%;
  padding: 150px 0;
  display: flex;
  flex-direction: column;
`;

const PostsGrid = ({ children }) => <Grid>{children}</Grid>;

PostsGrid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default PostsGrid;
