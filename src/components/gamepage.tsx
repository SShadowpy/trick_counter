import React from "react";


export default function Gamepage(props: any) {
    const [gameFinished, setGameFinished] = React.useState(false)
    const [team1, setTeam1] = React.useState({ name: 'Team 1', score: 0 })
    const [team2, setTeam2] = React.useState({ name: 'Team 2', score: 0 })

    function addScore1() {
        if (!gameFinished)
            setTeam1({ ...team1, score: ++team1.score })
        if (team1.score === props.gamelimit)
            setGameFinished(true)
    }
    function addScore2() {
        if (!gameFinished)
            setTeam2({ ...team2, score: ++team2.score })
        if (team2.score === props.gamelimit)
            setGameFinished(true)
    }
    function subsScore1() {
        if (team1.score != 0)
            setTeam1({ ...team1, score: --team1.score })
        if (team1.score === props.gamelimit - 1)
            setGameFinished(false)
    }
    function subsScore2() {
        if (team2.score != 0)
            setTeam2({ ...team2, score: --team2.score })
        if (team2.score === props.gamelimit - 1)
            setGameFinished(false)
    }
    function resetGame() {
        setTeam1({ ...team1, score: 0})
        setTeam2({ ...team2, score: 0})
        setGameFinished(false)
    }
    

    return (
        <div>
            <div className="container">
                <h1>{gameFinished && (team1.score > team2.score ? `${team1.name} has won!` : `${team2.name} has won!`)}</h1>
                <div className="content-container"> 
                    <div className="division p1">
                        <textarea maxLength={18} rows={1} value={team1.name} onChange={(e) => setTeam1({ ...team1, name: e.target.value })}></textarea>
                        <div onClick={addScore1} className="score-container">
                            <h1 className="score">{team1.score}</h1>
                        </div>
                        <button className="sub-button p1" onClick={subsScore1}><img src="https://w7.pngwing.com/pngs/518/981/png-transparent-minus-remove-delete-cancel-negative-symbol-icon-not-no-gray.png" ></img></button>
                    </div>
                    <div className="division p2">
                        <textarea maxLength={18} rows={1} value={team2.name} onChange={(e) => setTeam2({ ...team2, name: e.target.value })}></textarea>
                        <div onClick={addScore2} className="score-container">
                            <h1 className="score">{team2.score}</h1>
                        </div>
                        <button onClick={subsScore2} className="sub-button p2"><img src="https://w7.pngwing.com/pngs/518/981/png-transparent-minus-remove-delete-cancel-negative-symbol-icon-not-no-gray.png"/></button>
                    </div>
                    <button className='resetButton' onClick={resetGame}>Reset</button>
                </div>
            </div>    
        </div>
    )
}