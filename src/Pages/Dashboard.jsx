import {useSelector} from "react-redux";
import {Card, CardBody, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import TableComponent from "../Components/Table";
import HandleUpload from "./UploadDocument/HandleUpload";


export function Dashboard() {
    const sharedData = useSelector(state => state.receipt);
    const receipts = sharedData?.receipts;
    console.log(receipts);

    return (
        <>
            {receipts.length > 0 ? <ReceiptData /> : <EmptyState /> }
        </>
    )
}

function EmptyState() {
    return (
        <Flex
            align={'center'}
            justify={'center'}
            minH={'65vh'}
            direction={'column'}
            gap={4}
        >
            <Text fontSize={'3xl'}>No Receipts Scanned Yet</Text>
            <HandleUpload />
        </Flex>
    )
}

function ReceiptData() {
    return (
        <>
            <Flex mt={4} gap={3}>
                <Card>
                    <CardBody p={4}>
                        <Text fontSize={'lg'}>
                            <Text>
                                <strong>$325</strong>
                            </Text>
                            <Text>Total Spending</Text>
                        </Text>
                    </CardBody>
                </Card> <Card>
                <CardBody p={4}>
                    <Text fontSize={'lg'}>
                        <Text>
                            <strong>26</strong>
                        </Text>
                        <Text>Receipts Scanned</Text>
                    </Text>
                </CardBody>
            </Card>
            </Flex>
            <Tabs mt={4}>
                <TabList>
                    <Tab>Receipts</Tab>
                    <Tab>Stores</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <TableComponent/>
                    </TabPanel>
                    <TabPanel>

                    </TabPanel>
                </TabPanels>
            </Tabs>
        </>
    )
}