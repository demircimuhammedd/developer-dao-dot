import React from 'react';
import DirectMintBox from '../components/DirectMint/DirectMintBox';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PageLayout from '../layout/Page';
import { useTranslation } from 'react-i18next';
import { chakra } from '@chakra-ui/react';

const Mint = () => {
  const { t } = useTranslation();
  return (
    <>
      <PageLayout>
        <chakra.main>
          <DirectMintBox />
        </chakra.main>
      </PageLayout>
    </>
  );
};

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default Mint;
