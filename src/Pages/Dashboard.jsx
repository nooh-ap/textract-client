import {Card, CardBody, Flex, Heading, Text} from "@chakra-ui/react";

const cardBody = []
export function Dashboard() {
    return (
        <>
            <Heading>
                <Text>Dashboard</Text>
            </Heading>
                <Flex>
            <Card>
                <CardBody p={4}>
                    <Text fontSize={'lg'}>
                        <Text>
                            <strong>$325 </strong>
                        </Text>
                            <Text>Total Spending</Text>
                    </Text>
                </CardBody>
            </Card> <Card>
                <CardBody p={4}>
                    <Text fontSize={'lg'} >
                        <Text >
                            <strong>26 </strong>
                        </Text>
                            <Text>Receipts Scanned</Text>
                    </Text>
                </CardBody>
            </Card>
            {/*<Card>*/}
            {/*    <CardBody>*/}

            {/*    </CardBody>*/}
            {/*</Card>*/}
                </Flex>
        </>
    )
}
