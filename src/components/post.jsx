import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpointAbove } from '@styles/breakpoints';
import { Link } from 'gatsby';

const Container = styled.article`
  position: relative;
  display: flex;
  margin-bottom: 150px;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LeftColumn = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
`;

const RightColumn = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 45px;
`;

const Index = styled.div`
  display: flex;
  align-items: center;
  padding-right: 30px;
  font-style: italic;
  font-size: 1.125rem;
  opacity: 0.5;
`;

const Date = styled.div`
  display: flex;
  padding: 15px 0;
  opacity: 0.5;
  font-style: italic;
  font-size: 1.125rem;
`;

const Artwork = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-grow: 1;
  padding: 300px 0;
  box-shadow: 0 30px 60px 10px rgba(38, 32, 45, 0.3);
  background: linear-gradient(0deg, ${props => props.gradient});
  border-radius: 5px;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 150px;
    width: 1px;
    background-color: ${props => props.theme.text};
    transform: translateY(-100%);
    opacity: 0.2;
  }

  &:before {
    left: 5px;
  }

  &:after {
    right: 5px;
  }
`;

const Description = styled.span`
  padding: 15px 0;
  font-size: 1.125rem;
  opacity: 0.5;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin: 0;
`;

const Cta = styled(Link)`
  padding-top: 15px;
  text-decoration: underline;
  font-size: 1.4rem;
  color: ${props => props.theme.text};
  opacity: 0.5;
  cursor: pointer;
`;

const Post = ({ fields, frontmatter, index, excerpt }) => (
  <Container>
    <LeftColumn>
      <Index>{`${index}`.padStart(2, '0')}</Index>
      <Artwork gradient={frontmatter.gradient} className={`artwork-${index}`} />
    </LeftColumn>

    <RightColumn>
      <Date>{frontmatter.date}</Date>
      <Title>{frontmatter.title || fields.slug}</Title>
      <Description
        dangerouslySetInnerHTML={{
          __html: frontmatter.description || excerpt,
        }}
      />
      <Cta to={fields.slug} aria-label={frontmatter.title}>
        Read More
      </Cta>
    </RightColumn>
  </Container>
);

Post.propTypes = {
  fields: PropTypes.object.isRequired,
  frontmatter: PropTypes.object.isRequired,
  excerpt: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Post;
