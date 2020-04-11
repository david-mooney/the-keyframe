import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Image from 'gatsby-image';
import TransitionLink from 'gatsby-plugin-transition-link';

const Container = styled.article`
  position: relative;
  display: flex;
  margin-bottom: 10rem;
  &:last-of-type {
    margin-bottom: 0;
  }
`;

const LeftColumn = styled.div`
  width: 30%;
  max-width: 25rem;
  display: flex;
  align-items: center;
`;

const RightColumn = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3rem;
`;

const Index = styled.div`
  display: flex;
  align-items: center;
  padding-right: 2rem;
  opacity: 0.5;
  font-style: italic;
  font-size: 1.5rem;
`;

const Date = styled.div`
  display: flex;
  padding: 1rem 0;
  opacity: 0.5;
  font-style: italic;
  font-size: 1.5rem;
`;

const Artwork = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  flex-grow: 1;
  padding: 25rem 0;
  box-shadow: 0 2rem 4rem 0.5rem rgba(38, 32, 45, 0.3);
  background: linear-gradient(0deg, ${props => props.gradient});
  border-radius: 0.5rem;

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 10rem;
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
  padding: 1rem 0;
  font-size: 1.5rem;
  opacity: 0.5;
`;

const Title = styled.h2`
  font-size: 4rem;
  margin: 0;
`;

const Cta = styled(TransitionLink)`
  padding-top: 1rem;
  text-decoration: underline;
  font-size: 1.8rem;
  color: ${props => props.theme.text};
  opacity: 0.5;
  cursor: pointer;
`;

const FeaturedImage = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const Post = ({ fields, frontmatter, index, excerpt }) => (
  <Container>
    <LeftColumn>
      <Index>{`${index + 1}`.padStart(2, '0')}</Index>
      <Artwork gradient={frontmatter.gradient}>
        {frontmatter.featuredImage && (
          <FeaturedImage
            fluid={frontmatter.featuredImage.childImageSharp.fluid}
          />
        )}
      </Artwork>
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
