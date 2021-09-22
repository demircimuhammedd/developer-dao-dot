import React, { useCallback, useState } from 'react';
import { getDefaultProvider, Contract } from 'ethers';
import { NftProvider, useNft } from 'use-nft';
import { useRouter } from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  DEVELOPER_DAO_CONTRACT,
  ETHER_SCAN_LINK_PREFIX,
  SITE_URL,
} from '../utils/DeveloperDaoConstants';
import {
  chakra,
  Input,
  Text,
  Button,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons';
import Logo from '../components/Logo';
import PageLayout from '../layout/Page';
import DevName from '../components/Search/Dev/DevName';

function App() {
  const { t } = useTranslation();
  const router = useRouter();
  const id = getSearchID();
  const [developerId, setDeveloperId] = useState(id);

  const ethersConfig = {
    ethers: { Contract },
    provider: getDefaultProvider('homestead'),
  };

  const updateDeveloperId = useCallback(
    (e) => {
      if (e <= 8000) {
        setDeveloperId(e);
        router.replace({ query: { id: e } });
      }
    },
    [router],
  );

  function getSearchID() {
    if (process.browser) {
      const search = window.location.search;
      return new URLSearchParams(search).get('id') || 1;
    }
    return 1;
  }

  return (
    <PageLayout>
      <chakra.main>
        <VStack mx="auto" px={4} spacing={5} w="full" maxW="lg">
          <Logo w={32} h={32} />
          <VStack w="full">
            <Text fontSize="xl">{t('searchId')}</Text>
            <Input
              aria-label="Search by developer ID"
              placeholder="Search developer id"
              value={developerId}
              onChange={(e) => updateDeveloperId(e.target.value)}
              id="hero-field"
              name="hero-field"
              bg="white"
            />
          </VStack>
          {typeof window !== 'undefined' ? (
            <NftProvider fetcher={['ethers', ethersConfig]}>
              <Nft developerId={developerId} />
            </NftProvider>
          ) : (
            <Text>{t('loading')}</Text>
          )}
        </VStack>
      </chakra.main>
    </PageLayout>
  );
}

function Nft(props) {
  const { t } = useTranslation();
  const toast = useToast();

  const copyLinkToNFT = useCallback(() => {
    navigator.clipboard.writeText(`${SITE_URL}/?id=${props.developerId}`);
    toast({
      title: t('linkCopied'),
      isClosable: true,
    });
  }, [toast, t, props.developerId]);

  const { loading, error, nft } = useNft(
    DEVELOPER_DAO_CONTRACT,
    props.developerId,
  );

  if (loading) return <Text>{t('loading')}</Text>;

  if (!props.developerId) return <Text>{t('enterDeveloperId')}</Text>;

  if (error || !nft) return <Text>{t('error')}.</Text>;

  const { nftImage, nftAltText } = processNftImageContent(nft.image);

  return (
    <VStack w="full" spacing={5}>
      <chakra.img
        alt={nftAltText}
        src={nftImage}
        border={4}
        borderStyle="solid"
        borderColor="gray.200"
        w="full"
        objectFit="cover"
        objectPosition="center"
        rounded="md"
      />
      <VStack>
        <DevName nft={nft} developerId={props.developerId} />
        {nft.owner ? (
          <Button
            as="a"
            href={`${ETHER_SCAN_LINK_PREFIX}/${nft.owner}`}
            target="_blank"
            rel="noreferrer"
            title={nft.owner || t('unclaimed')}
            fontSize={{ base: 'xs', sm: 'md' }}
          >
            {t('owner')}:&nbsp;
            <chakra.span maxW="xs">{nft.owner.slice(0, 30)}</chakra.span>...
            {nft.owner.slice(-4)}
          </Button>
        ) : (
          <Button isDisabled>
            {t('owner')}:&nbsp;{t('unclaimed')}
          </Button>
        )}
        <Button onClick={copyLinkToNFT} leftIcon={<LinkIcon />}>
          {t('copyLinkToNFT')}
        </Button>
      </VStack>
    </VStack>
  );
}

const processNftImageContent = (imgStr) => {
  const [formatInfo, base64Str] = imgStr.split(',');

  // The smart contract includes items with unescaped "&", which breaks SVG rendering
  const svgCode = atob(base64Str);
  const processedStr = svgCode.replace(' & ', ' &amp; ');

  const nftImage = formatInfo + ',' + btoa(processedStr);
  const nftAltText = getNftAltText(svgCode);

  return { nftImage, nftAltText };
};

const getNftAltText = (svgCode) => {
  const template = document.createElement('template');
  template.innerHTML = svgCode;

  const [svgTag] = template.content.childNodes;
  if (!svgTag) {
    return 'Developer NFT, failed to load text';
  }

  const textNodes = Array.from(svgTag.querySelectorAll('text'));
  const nftTraits = textNodes.map((node) => node.textContent).join(', ');

  return nftTraits;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

export default App;
