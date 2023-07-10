import {Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr,} from '@chakra-ui/react'
import {useEffect} from "react";


// TODO: Make form editable;
const TableComponent = ({sharedData}) => {
    let expensesKeys = [] ;
    if (sharedData !== null) {
        expensesKeys = Object.keys(sharedData['expenses'][0])
    }

    useEffect(() => {
        console.log(sharedData);
    }, [sharedData]);

    return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Items bought in this store</TableCaption>
                <Thead>
                    <Tr>
                        {sharedData !== null && expensesKeys.map((key, index) => {
                            return <Th key={index}>{key}</Th>;
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
                                        return <Td key={index}>{expense[key]}</Td>;
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
