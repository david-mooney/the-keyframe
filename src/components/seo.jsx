import React from 'react';

const Seo = ({ data }) => {
  console.log('data', data);

  const { title, description, author } = data.site.siteMetadata;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:description" content={description}></meta>
      <meta name="twitter:card" content="summary"></meta>
      <meta name="twitter:creator" content={author}></meta>
      <meta name="twitter:title" content={title}></meta>
      <meta name="twitter:description" content={description}></meta>
    </>
  );
};

export default Seo;
