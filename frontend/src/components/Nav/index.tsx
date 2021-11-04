import React from 'react';

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import Logo from '../Logo';
import { IconGitHub } from '../Icons';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';

export default function Gslr() {
  const bg = useColorModeValue('white', 'gray.800');
  const mobileNav = useDisclosure();
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <chakra.header
        bg={bg}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <Flex>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <Logo h={7} w={7} />
            </chakra.a>
            <chakra.h1 fontSize="m" fontWeight="medium" ml="2">
              Developer DAO
            </chakra.h1>
          </Flex>
          <HStack display="flex" alignItems="center" spacing={1}>
            <HStack
              spacing={5}
              mr={1}
              color="brand.500"
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <Link href="/" passHref>
                {t('home')}
              </Link>
              <Link href="/mint" passHref>
                {t('mintTokenText')}
              </Link>
              <Link href="/projects" passHref>
                {t('projects')}
              </Link>
              <IconGitHub
                h={7}
                w={7}
                opacity={0.6}
                transition="opacity 300ms ease-in-out"
                _hover={{ opacity: 1 }}
              />
            </HStack>

            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('grey.800', 'inherit')}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />

              <VStack
                pos="absolute"
                top={2}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                pt={7}
                pb={7}
                m={0}
                bg={bg}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  onClick={mobileNav.onClose}
                />

                <Link href="/" passHref>
                  {t('home')}
                </Link>

                <Link href="/mint" passHref>
                  {t('mintTokenText')}
                </Link>

                <Link href="/projects" passHref>
                  {t('projects')}
                </Link>

                <chakra.a
                  href="https://github.com/Developer-DAO/developer-dao"
                  target="_blank"
                  rel="noreferrer"
                  title={t('daoGithubRepo')}
                >
                  <IconGitHub
                    h={7}
                    w={7}
                    opacity={0.6}
                    transition="opacity 300ms ease-in-out"
                    _hover={{ opacity: 1 }}
                  />
                </chakra.a>
              </VStack>
            </Box>
          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
}
