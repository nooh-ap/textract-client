// TODO: Make form editable;
// TODO: Add total
// TODO: Add date, store name, address,
// TODO: Add Animation
import {useSelector} from "react-redux";
import {Table, TableContainer, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";

const TableComponent = () => {
    const sharedData = useSelector(state => state.receipt);
    const {expenses} = sharedData.receipts[0] || {}
    const expenseKeys = Object.keys(expenses[0]);

    const keys = ["ITEM", "PRICE", "QUANTITY"]
    console.log(expenses[0]);


    return (
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        {
                            keys.map((expense, index) => {
                                return (
                                    <Th key={index}>
                                        {keys[index]}
                                    </Th>
                                );
                            })
                        }
                    </Tr>
                </Thead>
                <Tbody>
                    {
                        expenses.map((expense, index) => {
                            return (
                                <Tr key={index}>
                                    {
                                        expenseKeys.map((key, index) => {
                                                return (
                                                    <Td key={index}>
                                                        {expense[key]}
                                                    </Td>
                                                );
                                            }
                                        )
                                    }
                                </Tr>
                            );
                        })
                    }
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TableComponent;
