import React from 'react';
import {Box, Container, Skeleton, VStack} from '@chakra-ui/react';

export function UploadPageLoader() {
    return (
        <>
            <VStack spacing={4} align="stretch">
                <Container p="8">
                    <Skeleton height="40px"/>
                </Container>
                <Container mt={4}>
                    <Skeleton mt={4} height="90px"/>
                    <Skeleton mt={4} height="90px"/>
                    <Skeleton mt={4} height="90px"/>
                </Container>
                <Box h="80px" mx={8}>
                    <Skeleton p={4} height="20px"/>
                </Box>
            </VStack>
        </>
    )
}