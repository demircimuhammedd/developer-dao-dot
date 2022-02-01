import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  IconButton,
  ListItem,
  Stack,
  StackDivider,
  Text,
  UnorderedList,
  useBreakpointValue,
  VisuallyHidden,
  VStack,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ReactElement } from 'react';
import { BsLightningCharge } from 'react-icons/bs';
import { FaDiscord, FaGithub, FaTwitter } from 'react-icons/fa';
import { GiCrownedHeart } from 'react-icons/gi';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import DeveloperDaoLogo from "../components/Logo"

export default function IndexPage() {
  const { t } = useTranslation();

  return (
    <Container>
      <Stack
        as="main"
        minH="100vh"
        spacing={{ base: 6, md: 8 }}
        divider={
          <StackDivider
            h="2px"
            rounded="sm"
            bgGradient="linear(to-r, red.300, orange.300, yellow.300, green.300, blue.300, purple.300, pink.300)"
          />
        }
      >
        <Heading as="h1" fontSize="xl">
          <DeveloperDaoLogo />
        </Heading>

        <Stack spacing={{ base: 10, md: 12 }}>
          <CurrentStatus />

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('mission.title')}
            </Heading>
            <Text>{t('mission.body')}</Text>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('values.title')}
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  {t('values.transparency.title')}
                </Text>
                : {t('values.transparency.body')}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  {t('values.diversity.title')}
                </Text>
                : {t('values.diversity.body')}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  {t('values.responsibility.title')}
                </Text>
                : {t('values.responsibility.body')}
              </ListItem>
              <ListItem>
                <Text as="span" fontWeight="bold">
                  {t('values.kindness.title')}
                </Text>
                : {t('values.kindness.body')}
              </ListItem>
            </UnorderedList>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('goals.title')}
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem>{t('goals.body1')}</ListItem>
              <ListItem>{t('goals.body2')}</ListItem>
            </UnorderedList>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('membership.title')}
            </Heading>
            <Text>{t('membership.body')}</Text>
          </Stack>

          <Stack spacing={6}>
            <Heading as="h2" fontSize="lg">
              {t('links.title')}
            </Heading>
            <UnorderedList spacing={3}>
              <ListItem><a href="https://developerdao.notion.site/developerdao/Developer-DAO-Wiki-eff4dcb00bef46fbaa93e9e4cf940e2e">{t('links.wiki')}</a></ListItem>
              <ListItem><a href="https://forum.developerdao.com">{t('links.forum')}</a></ListItem>
              <ListItem><a href="https://snapshot.org/#/devdao.eth">{t('links.snapshot')}</a></ListItem>
            </UnorderedList>
          </Stack>
        </Stack>

        <VStack spacing={4}>
          <HStack as="footer" justify="center">
            <SocialIconLink
              href="https://twitter.com/developer_dao"
              label="Twitter"
            >
              <>
                <FaTwitter />
                <VisuallyHidden>
                  {t('socialLinkLabel', { platform: 'Twitter' })}
                </VisuallyHidden>
              </>
            </SocialIconLink>
            <SocialIconLink href="https://discord.gg/devdao" label="Discord">
              <>
                <FaDiscord />
                <VisuallyHidden>
                  {t('socialLinkLabel', { platform: 'Discord' })}
                </VisuallyHidden>
              </>
            </SocialIconLink>
            <SocialIconLink
              href="https://github.com/Developer-DAO"
              label="GitHub"
            >
              <>
                <FaGithub />
                <VisuallyHidden>
                  {t('socialLinkLabel', { platform: 'GitHub' })}
                </VisuallyHidden>
              </>
            </SocialIconLink>
          </HStack>

          <HStack
            as="a"
            href="https://vercel.com/?utm_source=developerdao&utm_campaign=oss"
            fontSize="sm"
          >
            <Text>Powered by</Text>
            <Flex align="center">
              <Image
                src="/vercel-logotype-light.svg"
                alt="Vercel"
                width="100px"
                height="22px"
              />
            </Flex>
          </HStack>
        </VStack>
      </Stack>
    </Container>
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
});

const CurrentStatus = () => {
  const shouldShowIcon = useBreakpointValue({ base: false, md: true });
  const buttonSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const { t } = useTranslation();

  return (
    <Stack
      as="aside"
      py={6}
      px={8}
      align="center"
      direction="row"
      spacing={8}
      bg="white"
      rounded="lg"
      color="black"
    >
      {shouldShowIcon && <Icon as={GiCrownedHeart} boxSize={20} />}
      <Stack spacing={4}>
        <Stack fontSize="xs">
          <Text fontSize="sm" fontWeight="bold">
            {t('currentStatus')}: {t('season')} 0
          </Text>
          <Text>{t('callout')}</Text>
        </Stack>
        <Box>
          <Button
            as="a"
            href="https://snapshot.org/#/devdao.eth/proposal/0x52fc76fe5865cf038b89b8c6ef78b6e691c0ab9c2b1228b84b0813b7832ce369"
            size={buttonSize}
            fontSize="xs"
            bg="white"
            border="1px"
            borderStyle="solid"
            borderColor="black"
            _hover={{ bg: 'gray.100' }}
            _active={{ bg: 'gray.200' }}
            leftIcon={<BsLightningCharge />}
          >
            {t('calloutButton')}
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

const SocialIconLink = ({
  children,
  href,
  label,
}: {
  children: ReactElement;
  href: string;
  label: string;
}) => {
  return (
    <IconButton
      as="a"
      aria-label={label}
      cursor="pointer"
      href={href}
      icon={children}
      size="lg"
      variant="ghost"
    />
  );
};
