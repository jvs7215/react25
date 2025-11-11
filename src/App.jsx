import { useEffect, useState } from 'react'
import batFlyingAnimationHighRes from './images/batFlyingAnimationHighRes.gif'
import githubMark from './images/githubMark.png'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        document.body.className = darkMode ? 'dark' : 'light'
    }, [darkMode])

    const toggleDarkMode = () => setDarkMode(!darkMode)

    return (
        <div>
            <div>
                <a href="https://github.com/jvs7215" target="_blank" rel="noreferrer">
                    <img src={githubMark} className="logo" alt="GitHub logo" />
                </a>

                <a href="#">
                    <img
                        src={batFlyingAnimationHighRes}
                        className="logo bat"
                        alt="Bat logo"
                    />
                </a>
            </div>

            <h1>Let's test out some React</h1>

            <div className="card">
                <button onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
                <button onClick={toggleDarkMode}>
                    Toggle {darkMode ? 'Light' : 'Dark'} Mode
                </button>
            </div>

            <p className="read-the-docs">Click on the GitHub logo to learn more</p>
        </div>
    )
}

export default App