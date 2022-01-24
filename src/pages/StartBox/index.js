import {Button} from "@mui/material";
import StartBoxWrapper from "./StartBoxWrapper";
import {Link} from "react-router-dom";

const StartBox = () => {
	return (
		<StartBoxWrapper>
			<Link to="/GameBox">
				<Button variant={"contained"} color="success">Start Game</Button>
			</Link>
		</StartBoxWrapper>
	)
}

export default StartBox;