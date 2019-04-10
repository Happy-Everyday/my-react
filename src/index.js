import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink, Route, BrowserRouter as Router} from 'react-router-dom'
import './index.css';


function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            squares: Array(9).fill(null),
            isXNext: true
        }
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)} />;
    }

    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.isXNext ? 'X' : 'O';
        this.setState({
            squares: squares,
            isXNext: !this.state.isXNext
        });
    }

    render() {
        const status = 'Next player: ' + (this.state.isXNext ? 'X' : 'O');
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Home extends React.Component {
    render() {
        return (
            <h2>home</h2>
        )
    }
}

class Name extends React.Component {
    render() {
        return (
            <h2>name</h2>
        )
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <Router>
                    <ul>
                        <li><NavLink to='/home'>home</NavLink></li>
                        <li><NavLink to='/name'>name</NavLink></li>
                    </ul>
                    <div className="game-board">
                        <Board />
                    </div>
                    <div className="game-info">
                        <div>{/* status */}</div>
                        <ol>{/* TODO */}</ol>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/name' component={Name}></Route>
                    </div>
                </Router>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
