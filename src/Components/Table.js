import {Heading, Table, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from '@chakra-ui/react'
import {useEffect} from "react";


// TODO: Make form editable;
// TODO: Add total
// TODO: Add date, store name, address,
// TODO: Add Animation
const TableComponent = ({sharedData}) => {
    let expensesKeys = [] ;
    if (sharedData !== null) {
        expensesKeys = Object.keys(sharedData['expenses'][0])
    }

    return (
        <TableContainer>
            <Text my={2 }>
                {sharedData ? `Purchase: ${sharedData['summary']['INVOICE_RECEIPT_DATE']} ` : `Unknown Date`}<br/>
                {sharedData ? `Amount: $${sharedData['summary']['TOTAL']}` : null}
            </Text>
            <Table variant='simple'>
                <TableCaption>{sharedData ? `Items you received from  ${sharedData['summary']['NAME']}` : null}</TableCaption>
                <Thead>
                    <Tr>
                        {sharedData !== null && expensesKeys.map((key, index) => {
                            return <Th key={index} fontWeight={"extrabold"}>{key}</Th>;
                        })}
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        sharedData !== null &&
                        sharedData['expenses'].map((expense, index) => {
                            return (
                                <Tr key={index}>
                                    {expensesKeys.map((key, index) => {
                                        return <Td key={index}>
                                            <Text>{expense[key].toLowerCase()}</Text>
                                        </Td>;
                                    })}
                                </Tr>
                            );
                        })
                    }
                {/*    TODO: Add total */}
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
