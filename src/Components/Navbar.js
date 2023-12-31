import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import {CloseIcon, HamburgerIcon} from '@chakra-ui/icons';
import {useNavigate} from "react-router-dom";

// anonymous avatar

const Links = ['Dashboard', 'Upload Page'];

const NavLink = ({ children }) => {
  return (
      <Link
          px={2}
          py={1}
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
          }}
          href={`/${children.toLowerCase().replace(/\s/g, '')}`}>
        {children}
      </Link>
  );
};
// remove white space

export default function Navbar({ isCurrentUser}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
      <>
        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
                size={'md'}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={'Open Menu'}
                display={{ md: 'none' }}
                onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box><strong>
                Main Page
              </strong> </Box>
              <HStack
                  as={'nav'}
                  spacing={4}
                  display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}
                    onClick={() => navigate("/sign-up")}
                >
                  {
                    isCurrentUser ?  <Avatar
                        size={'sm'}
                        src={
                          'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                        }
                    /> : <Link href="/sign-up">Log In</Link>
                }
                </MenuButton>
                {/*<MenuList>*/}
                {/*  <MenuItem>Link 1</MenuItem>*/}
                {/*  <MenuItem>Link 2</MenuItem>*/}
                {/*  <MenuDivider />*/}
                {/*  <MenuItem>Link 3</MenuItem>*/}
                {/*</MenuList>*/}
              </Menu>
            </Flex>
          </Flex>

          {isOpen ? (
              <Box pb={4} display={{ md: 'none' }}>
                <Stack as={'nav'} spacing={4}>
                  {Links.map((link) => (
                      <NavLink key={link}>{link}</NavLink>
                  ))}
                </Stack>
              </Box>
          ) : null}
        </Box>
      </>
  );
}