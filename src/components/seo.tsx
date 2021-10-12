import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useLocation } from "@reach/router";
import { Helmet } from "react-helmet";


export interface SEOProps {
  seoDescription?: string;
  seoTitle?: string;
}

interface SEOValues {
  description: string;
  title: string;
  url: string;
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl
      }
    }
  }
`;

export function SEO({ seoDescription, seoTitle }: SEOProps): JSX.Element {
  const { site } = useStaticQuery(query);
  const { siteMetadata } = site;
  const { pathname } = useLocation();

  const seo: SEOValues = {
    description: seoDescription || siteMetadata.defaultDescription,
    title: seoTitle || siteMetadata.defaultTitle,
    url: `${siteMetadata.siteUrl}${pathname}`
  }

  return (
    <Helmet title={seo.title} titleTemplate={siteMetadata.titleTemplate}>
      <meta charSet="utf-8" />
      <meta name="description" content={seo.description} />
      <meta httpEquiv="content-language" content="en-us" />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
    </Helmet>
  );
};
