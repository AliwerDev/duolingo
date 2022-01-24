import FinishBoxWrapper from "./FinishBoxWrapper";
import {Button} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";


const FinishBox = ({data}) => {
	console.log(data)
	return (
		<FinishBoxWrapper>
			<div className="scoreBox text-center">
				<p className="score me-2">{data.score}</p>
				<p className="max"> / 100</p>
			</div>

			<Link to={"/"}><Button variant={"text"}><HomeIcon/></Button></Link>
		</FinishBoxWrapper>
	)
}

export default FinishBox;