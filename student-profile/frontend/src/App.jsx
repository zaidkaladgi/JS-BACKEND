
import { useState } from 'react'
import './App.css'

function App() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const getProfile = async () => {
    try {
      setLoading(true)
      setError('')

      const response = await fetch('http://localhost:4000/api/profile')

      if (!response.ok) {
        throw new Error('Request failed')
      }

      const data = await response.json()
      setProfile(data)

    } catch (err) {
      setError('CONNECTION FAILED: Backend unavailable')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="terminal">
      <header className="topbar">
        <div className="brand">ZAID<span>.SYS</span></div>
        <div className="system-status">● SYSTEM ONLINE</div>
      </header>

      <main className="container">
        <p className="terminal-line">root@student-profile:~$ initialize</p>

        <h1>STUDENT<span>_PROFILE</span></h1>

        <p className="description">
          Personal information system // Version 1.0
        </p>

        <div className="terminal-window">
          <div className="window-header">
            <div className="dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>profile_terminal.exe</p>
            <p>PORT: 4000</p>
          </div>

          <div className="terminal-body">
            <p className="muted">root@server:~$ fetch /api/profile</p>

            {!profile && !loading && (
              <div className="welcome">
                <p className="green">ACCESS GRANTED.</p>
                <p>Student database is ready.</p>
                <p>Waiting for request...</p>
              </div>
            )}

            {loading && <p className="amber">Connecting to server...</p>}

            {error && <p className="error">{error}</p>}

            {profile && (
              <div className="output">
                <p className="green">SUCCESS: PROFILE RETRIEVED</p>
                <p>--------------------------------</p>
                <p><span>NAME :</span> {profile.name}</p>
                <p><span>AGE :</span> {profile.age}</p>
                <p><span>COURSE :</span> {profile.course}</p>
                <p><span>COLLEGE :</span> {profile.college}</p>
                <p><span>CITY :</span> {profile.city}</p>
                <p>--------------------------------</p>
                <p className="amber">SKILLS DETECTED:</p>
                <div className="skills">
                  {profile.skills.map((skill, index) => (
                    <span key={index}>[{skill}]</span>
                  ))}
                </div>
              </div>
            )}

            <div className="command">
              <span>root@zaid:~$</span>
              <button onClick={getProfile} disabled={loading}>
                {loading ? 'EXECUTING...' : './load-profile'}
              </button>
            </div>
          </div>
        </div>

        <footer>
          <span>NODE.JS</span>
          <span>REACT</span>
          <span>EXPRESS</span>
          <span>API CONNECTED</span>
        </footer>
      </main>
    </div>
  )
}

export default App
