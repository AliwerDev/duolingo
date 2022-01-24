import {Button} from "@mui/material";
import StartBoxWrapper from "./StartBoxWrapper";
import {Link} from "react-router-dom";
import firstData from '../../data/Levels/school/tests'
import {pushLevelData} from "../../functions/functions";

const StartBox = () => {
	return (
		<StartBoxWrapper>
			<Link to="/GameBox" onClick={() => {pushLevelData(firstData)}}>
				<Button variant={"contained"} color="success">Start Game</Button>
			</Link>
		</StartBoxWrapper>
	)
}

export default StartBox;