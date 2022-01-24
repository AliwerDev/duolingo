import GameBoxWrapper from "./GameBoxWrapper";
import TranslateGame from "../games/Translate/Translate";
import tests from "../data/Levels/Level1/tests";
import {useState} from "react";
import {Button} from "@mui/material";
import TypeTest from "../games/Test";
import ClearIcon from '@mui/icons-material/Clear';

const Finished = (props) => {
	return (
		<>
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
	let [isFinished, setIsFinished] = useState(false);
	const [submitFunction, setSubmitFunction] = useState({submit: ()=>{}})
	const [level, setLevel] = useState(0);

	const nextLevel = () => {
		if (level + 1 < tests.length) setLevel(level + 1);
	};
	const levelFinished = () => {
		setIsFinished(true);
		console.log('levelFinished')
	}
	const submitRes = () => {
		submitFunction.submit()
		levelFinished();
	}

	const test = tests[level];

	const chooseType = (type, test) => {
		switch(type){
			case "translate": return <TranslateGame setSubmitFunction={setSubmitFunction} test={test} setLevel = {setLevel}/>;
			case "test": return <TypeTest test={test}/>;
			case "imgTest": return <p>Hello world</p>;
			case "listening": return <p>Hello world</p>;
		}
	}

	return (
		<GameBoxWrapper>
			<div className={"game-header"}>
				<ClearIcon/>
				<div className="progress">
					<div className="progress-bar"/>
				</div>
			</div>
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