import React from 'react';
import { Global } from '@mantine/core';
import { GetServerSideProps } from 'next';
import { QueryClientProvider, QueryClient } from 'react-query';
import Header from '@components/Header';
import App from '@components/Home';
import { colors } from '@config';
import Footer from '@components/Footer';

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
    },
  },
});

const links = [
  {
    link: 'https://docs.impler.io',
    label: 'Documentation',
  },
  {
    link: 'https://discord.impler.io',
    label: 'Community',
  },
  {
    link: 'https://github.com/knovator/impler.io',
    label: 'Github',
  },
];
const HEADER_HEIGHT = 70;
const FOOTER_HEIGHT = 70;
const EXTRA_SPACING = 5;
const APP_REDUCE_HEIGHT = HEADER_HEIGHT + FOOTER_HEIGHT + EXTRA_SPACING;

interface HomeProps {
  PROJECT_ID: string;
  API_BASE_URL: string;
  ACCESS_TOKEN?: string;
  TEMPLATE?: string;
  PRIMARY_COLOR?: string;
}

export default function Home({ PROJECT_ID, API_BASE_URL, ACCESS_TOKEN, TEMPLATE, PRIMARY_COLOR }: HomeProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Global
        styles={() => ({
          body: {
            backgroundColor: colors.black,
          },
        })}
      />
      <Header links={links} height={HEADER_HEIGHT} />
      <App
        API_BASE_URL={API_BASE_URL}
        headerHeight={APP_REDUCE_HEIGHT}
        PROJECT_ID={PROJECT_ID}
        ACCESS_TOKEN={ACCESS_TOKEN}
        PRIMARY_COLOR={PRIMARY_COLOR}
        TEMPLATE={TEMPLATE}
      />
      <Footer />
    </QueryClientProvider>
  );
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => ({
  props: {
    // taking environment variables from serverSideProps, so they don't gets hard coded
    PROJECT_ID: process.env.PROJECT_ID!,
    API_BASE_URL: process.env.API_BASE_URL!,
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,
    TEMPLATE: process.env.TEMPLATE,
    PRIMARY_COLOR: process.env.PRIMARY_COLOR,
  },
});