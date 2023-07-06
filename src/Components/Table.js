
import {Table, TableCaption, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr,} from '@chakra-ui/react'

const TableComponent = (head, rows) => {
    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Items bought in this store</TableCaption>
                <Thead>
                    <Tr>
                        <Th>Items</Th>
                        <Th>Price</Th>
                        <Th isNumeric>Quantity</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>inches</Td>
                        <Td>$23 (mm)</Td>
                        <Td isNumeric>25.4</Td>
                    </Tr>
                    <Tr>
                        <Td>feet</Td>
                        <Td>centimetres (cm)</Td>
                        <Td isNumeric>30.48</Td>
                    </Tr>
                    <Tr>
                        <Td>yards</Td>
                        <Td>metres (m)</Td>
                        <Td isNumeric>0.91444</Td>
                    </Tr>
                </Tbody>
                {/*<Tfoot>*/}
                {/*    <Tr>*/}
                {/*        <Th>To convert</Th>*/}
                {/*        <Th>into</Th>*/}
                {/*        <Th isNumeric>multiply by</Th>*/}
                {/*    </Tr>*/}
                {/*</Tfoot>*/}
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
