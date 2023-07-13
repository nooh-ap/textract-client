import {
    Card,
    CardBody,
    Flex,
    Tab,
    TabList,
    TabPanels,
    TabPanel,
    Text,
    Tabs,
} from "@chakra-ui/react";

import TableComponent from "../Components/Table";



export function Dashboard() {
    return (
        <>
            <Flex mt={4} gap={3}>
                <Card>
                <CardBody p={4} >
                    <Text fontSize={'lg'}>
                        <Text>
                            <strong>$325</strong>
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
            </Flex>
            <Tabs mt={4}>
                <TabList>
                    <Tab>Reciepts</Tab>
                    <Tab>Stores</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                            <TableComponent sharedData={tableData} />
                    </TabPanel> <TabPanel>
                        <Text>Two</Text>
                    </TabPanel>
                </TabPanels>


            </Tabs>

        </>
    )
}
