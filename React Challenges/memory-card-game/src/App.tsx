import "./App.css";

import Game from "./components/Game";

export default function App() {
    return (
        <div className="App">
            <h1>Memory Card Game</h1>
            <h2>Start clicking to make pairs</h2>
            <Game />
        </div>
    );
}
