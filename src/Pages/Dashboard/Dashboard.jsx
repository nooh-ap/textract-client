import TableComponent from "../../Components/Table";
import UploadPage from "../UploadDocument/UploadPage";
import {Container} from "@chakra-ui/react";

export const Dashboard = () => {
	return (
		<>
			<div>
				<Container>
					<UploadPage />
				</Container>
			</div>
		</>
	)
}