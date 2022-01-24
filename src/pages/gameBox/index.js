import GameBoxWrapper from "./GameBoxWrapper";
import TranslateGame from "../../games/Translate/Translate";
import tests from "../../data/Levels/Level1/tests";
import {useState} from "react";
import {Button} from "@mui/material";
import TypeTest from "../../games/Test";
import ClearIcon from '@mui/icons-material/Clear';
import ListeningGame from "../../games/Listining/Listining";
import {Link} from "react-router-dom";

const Finished = (props) => {
	return (
		<>
			<div>Result</div>
			<Button variant={"outlined"} color={'primary'} onClick={props.nextLevel} >next</Button>
		</>
	)
}
const NoFinished = (props) => {
	return (
		<>
			<Button className={"next"} variant={"outlined"} color={'primary'} onClick={props.nextLevel} >next</Button>
			<Button className={"submit"} variant={"contained"} color={'success'} onClick={props.submitRes}>Submit</Button>
		</>
	)
}

const GameBox = () => {
	let [progressWidth, setProgressWidth] = useState(0)
	let [isFinished, setIsFinished] = useState(false);
	const [isTrue, setIsTrue] = useState(false)
	const [level, setLevel] = useState(0);
	const [isGameLevelFinish, setIsGameLevelFinish] = useState(false);

	const nextLevel = () => {
		if (level + 1 < tests.length) {
			setLevel(level + 1)
			setIsFinished(false)
		}else{
			setIsGameLevelFinish(true);
		}
	};
	const levelFinished = () => {
		setIsFinished(true);
		console.log('levelFinished')
	}
	const submitRes = () => {
		if(isTrue) {
			setProgressWidth(progressWidth + (100 / tests.length))
		}else{
			setProgressWidth(progressWidth - (50 / tests.length))
		}
		levelFinished();
	}
	if(progressWidth < 0)setProgressWidth(0);

	const test = tests[level];

	const chooseType = (type, test) => {
		switch(type){
			case "translate": return <TranslateGame setSubmitFunction={setIsTrue} test={test} setLevel = {setLevel}/>;
			case "test": return <TypeTest test={test}  setSubmit={setIsTrue}/>;
			case "imgTest": return <p>Hello world</p>;
			case "listening": return <ListeningGame test={test} setSubmit={setIsTrue}  setLevel={setLevel}/>;
		}
	}

	return (
		<GameBoxWrapper>
			{
				// isGameLevelFinish &&

			}
			<div className={"game-header"}>
				<Link to={"/"}><ClearIcon/></Link>
				<div className="progress">
					<div className="progress-bar" style={{width: `${(progressWidth >= 0) ? progressWidth : 0}%`}}/>
				</div>
			</div>
			{
				isFinished && <div className="modalFinish" />}
			{
				chooseType(test.type, test)
			}
			<div className="game-footer py-5 px-5 d-flex justify-content-between align-items-center">
				{
					isFinished ? <Finished nextLevel={nextLevel} submitRes={submitRes}/>:
					<NoFinished nextLevel={nextLevel} submitRes={submitRes}/>
				}
			</div>
		</GameBoxWrapper>
	)
}

export default GameBox;