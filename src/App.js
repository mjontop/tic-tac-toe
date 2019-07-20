import React, { Component } from "react";
import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			turn: "X",
			winner: undefined,
			gameEnded: false
			
		};
		this.gameState = {
			board: Array(9).fill(""),
			totalMoves: 0
		};
	}

	clicked(event) {
		if (this.gameState.board[event.target.dataset.square] == "") {
			this.gameState.board[event.target.dataset.square] = this.state.turn;
			event.target.innerText = this.state.turn;
			this.setState({
				turn: this.state.turn == "X" ? "O" : "X"
				
			});
			this.gameState.totalMoves++;
		}
		//console.log(this.gameState.totalMoves);
		var result = this.checkWinner();
		if (result == "X") {
			this.setState({
				gameEnded: true,
				winner: "X",
				winnerLine: "Player X wins."
			});
		} else if (result == "O") {
			this.setState({
				gameEnded: true,
				winner: "O",
				winnerLine: "Player O wins."
			});
		} else if (result == "draw") {
			this.setState({
				winnerLine: "Match Drawn",
				gameEnded: true
			});
		}
	}

	checkWinner() {
		var moves = [[1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
		var board = this.gameState.board;
		for (let i = 0; i < moves.length; i++) {
			if (board[moves[i][0]] == board[moves[i][1]] && board[moves[i][1]] == board[moves[i][2]]) {
				return board[moves[i][0]];
			}
		}

		if (this.gameState.totalMoves == 9) {
			console.log("555");
			return "draw";
		}
	}

	render() {
		return (
			<div id="game">
				<div id="head">Worlds best TIC TAC TOE</div>
				<div id="board" onClick={e => this.clicked(e)}>
					<div  className="square" data-square="0" />
					<div  className="square" data-square="1" />
					<div  className="square" data-square="2" />
					<div  className="square" data-square="3" />
					<div  className="square" data-square="4" />
					<div  className="square" data-square="5" />
					<div  className="square" data-square="6" />
					<div  className="square" data-square="7" />
					<div  className="square" data-square="8" />
				</div>
				<br />
				<div id="status"> {this.state.winnerLine} </div>
			</div>
		);
	}
} 

export default App;
