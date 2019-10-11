import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/src/theme/saas';
import { ResetCSS } from 'common/src/assets/css/style';
import { GlobalStyle, ContentWrapper } from '../containers/Saas/saas.style';
import Navbar from '../containers/Saas/Navbar';
import BannerSection from '../containers/Saas/BannerSection';
import FeatureSection from '../containers/Saas/FeatureSection';
import VisitorSection from '../containers/Saas/VisitorSection';
import ServiceSection from '../containers/Saas/ServiceSection';
import Footer from '../containers/Saas/Footer';
import PricingSection from '../containers/Saas/PricingSection';
import TrialSection from '../containers/Saas/TrialSection';
import TimelineSection from '../containers/Saas/TimelineSection';
import TestimonialSection from '../containers/Saas/TestimonialSection';
import PartnerSection from '../containers/Saas/PartnerSection';
import { DrawerProvider } from 'common/src/contexts/DrawerContext';
import FaqSection from '../containers/Saas/FaqSection';

export default () => {

  const initGoogleTagManager = () => {
    return {
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments)}
      gtag('js', new Date());
      gtag('config', 'UA-149861691-1');
      `
    };
  };

  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
        <Head>
          <title>Iammer.io | In-App Messaging Platform</title>
          <meta name="Description" content="In-App Messaging Platform" />
          <meta name="theme-color" content="#ec5555" />
          <link
            href="//fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
          <script async src="//www.googletagmanager.com/gtag/js?id=UA-149861691-1"></script>
          <script dangerouslySetInnerHTML={initGoogleTagManager()} />
          <link rel="dns-prefetch" href="//fonts.googleapis.com"></link>
          <link rel="dns-prefetch" href="//fonts.gstatic.com"></link>
          <link rel="dns-prefetch" href="//www.googletagmanager.com"></link>
        </Head>
        <ResetCSS />
        <GlobalStyle />
        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <BannerSection />
          <FeatureSection />
          <VisitorSection />
          <ServiceSection />
          <PricingSection />
          <TestimonialSection />
          <PartnerSection />
          <TimelineSection />
          <FaqSection />
          <TrialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
