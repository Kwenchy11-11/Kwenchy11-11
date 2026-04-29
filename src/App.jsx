import './App.css'
import heroImage from './assets/hero.png'

function App() {
  const repos = [
    { name: 'GamebyMe', desc: 'Interactive games built with JavaScript', lang: 'JavaScript', langColor: '#f1e05a', fork: false },
    { name: 'thaichess', desc: 'makruk thai', lang: 'TypeScript', langColor: '#3178c6', fork: true, forkFrom: 'ChindanaiNaKuby/thaichess' },
    { name: 'chess-video-editor', desc: 'Chess video editor tools', lang: 'TypeScript', langColor: '#3178c6', fork: false },
    { name: 'weight-loss-fasting-app', desc: 'Track fasting, water intake and weight', lang: 'TypeScript', langColor: '#3178c6', fork: false },
  ]

  const techStack = [
    { name: 'TypeScript', color: '#3178c6', icon: 'TS' },
    { name: 'JavaScript', color: '#f1e05a', icon: 'Js' },
    { name: 'React', color: '#61dafb', icon: '' },
    { name: 'Node.js', color: '#68a063', icon: '◆' },
    { name: 'Git & GitHub', color: '#f05032', icon: '' },
  ]

  const achievements = [1, 2, 3]

  // Generate contribution data
  const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr']
  const days = ['Mon', 'Wed', 'Fri']
  const generateContributions = () => {
    const data = []
    for (let m = 0; m < 12; m++) {
      const weekData = []
      for (let w = 0; w < 4; w++) {
        const dayData = []
        for (let d = 0; d < 3; d++) {
          // More contributions in recent months
          const intensity = m >= 9 ? Math.random() : (m >= 7 ? Math.random() * 0.5 : Math.random() * 0.2)
          dayData.push(intensity > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0)
        }
        weekData.push(dayData)
      }
      data.push(weekData)
    }
    return data
  }
  const contributions = generateContributions()

  const getContributionColor = (level) => {
    if (level === 0) return '#161b22'
    if (level === 1) return '#e8a0bf44'
    if (level === 2) return '#e8a0bf88'
    if (level === 3) return '#e8a0bfcc'
    return '#e8a0bf'
  }

  return (
    <div className="profile-page">
      {/* Decorative background elements */}
      <div className="bg-decorations">
        <span className="star" style={{top: '5%', left: '3%'}}>✦</span>
        <span className="star" style={{top: '15%', left: '8%'}}>✧</span>
        <span className="star" style={{top: '25%', left: '2%'}}>✦</span>
        <span className="star" style={{top: '40%', left: '5%'}}>✧</span>
        <span className="star" style={{top: '55%', left: '3%'}}>✦</span>
        <span className="star" style={{top: '70%', left: '7%'}}>✧</span>
        <span className="star" style={{top: '85%', left: '4%'}}>✦</span>
        <span className="star" style={{top: '10%', right: '3%'}}>✦</span>
        <span className="star" style={{top: '30%', right: '5%'}}>✧</span>
        <span className="star" style={{top: '50%', right: '2%'}}>✦</span>
        <span className="star" style={{top: '65%', right: '6%'}}>✧</span>
        <span className="star" style={{top: '80%', right: '4%'}}></span>
        <span className="paw" style={{bottom: '2%', left: '10%'}}>🐾</span>
        <span className="paw" style={{bottom: '2%', left: '25%'}}>🐾</span>
        <span className="paw" style={{bottom: '2%', left: '40%'}}>🐾</span>
        <span className="paw" style={{bottom: '2%', left: '55%'}}>🐾</span>
        <span className="paw" style={{bottom: '2%', left: '70%'}}>🐾</span>
        <span className="paw" style={{bottom: '2%', left: '85%'}}></span>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">
          <div className="github-logo">
            <svg height="32" viewBox="0 0 16 16" width="32" fill="#e6edf3">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </div>
          <span className="navbar-username">Kwenchy11-11</span>
        </div>
        <div className="navbar-center">
          <div className="search-bar">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="#6e7681">
              <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-3.04-3.04ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path>
            </svg>
            <span>Type / to search</span>
          </div>
        </div>
        <div className="navbar-right">
          <span className="nav-icon">+</span>
          <span className="nav-icon">◎</span>
          <span className="nav-icon">✉</span>
          <span className="nav-icon">⚡</span>
          <div className="nav-avatar">🐱</div>
        </div>
      </nav>

      {/* Profile Tabs */}
      <div className="profile-tabs">
        <div className="tabs-container">
          <div className="tab active">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25ZM6.5 6.5v8h7.75a.25.25 0 0 0 .25-.25V6.5Zm8-1.5V1.75a.25.25 0 0 0-.25-.25H1.75a.25.25 0 0 0-.25.25V5ZM5 11.5 3.25 13 1.5 11.5 3.25 10Zm0-4L3.25 9 1.5 7.5 3.25 6Zm0-4L3.25 5 1.5 3.5 3.25 2Z"></path></svg>
            Overview
          </div>
          <div className="tab">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM8 12.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"></path></svg>
            Repositories <span className="tab-count">10</span>
          </div>
          <div className="tab">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25ZM8 5.5a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3A.75.75 0 0 1 8 5.5Zm-3.5 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Zm7 0a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-1.5 0v-3a.75.75 0 0 1 .75-.75Z"></path></svg>
            Projects
          </div>
          <div className="tab">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25Zm9.22 3.34a.75.75 0 0 0-1.06 0L6.5 6.75 5.28 5.53a.75.75 0 0 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0l2.19-2.19a.75.75 0 0 0 0-1.06ZM8.78 9.78a.75.75 0 0 0-1.06 0l-2.19 2.19a.75.75 0 0 0 1.06 1.06l1.22-1.22 1.22 1.22a.75.75 0 0 0 1.06-1.06l-2.19-2.19Z"></path></svg>
            Packages
          </div>
          <div className="tab">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path></svg>
            Stars <span className="tab-count">6</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Sidebar */}
        <aside className="sidebar-left">
          <div className="avatar-container">
            <div className="avatar-wrapper">
              <div className="avatar">
                <svg viewBox="0 0 200 200" width="200" height="200">
                  <defs>
                    <radialGradient id="avatarBg" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#3d3545"/>
                      <stop offset="100%" stopColor="#2a2535"/>
                    </radialGradient>
                  </defs>
                  <circle cx="100" cy="100" r="98" fill="url(#avatarBg)" stroke="#e8a0bf" strokeWidth="3"/>
                  {/* Cat face */}
                  <ellipse cx="100" cy="110" rx="55" ry="50" fill="#6b6575"/>
                  {/* Ears */}
                  <polygon points="55,70 45,25 80,55" fill="#6b6575"/>
                  <polygon points="145,70 155,25 120,55" fill="#6b6575"/>
                  <polygon points="58,65 50,32 75,55" fill="#e8a0bf88"/>
                  <polygon points="142,65 150,32 125,55" fill="#e8a0bf88"/>
                  {/* Eyes */}
                  <ellipse cx="80" cy="100" rx="12" ry="14" fill="#f5c542"/>
                  <ellipse cx="120" cy="100" rx="12" ry="14" fill="#f5c542"/>
                  <ellipse cx="82" cy="100" rx="6" ry="10" fill="#1a1a2e"/>
                  <ellipse cx="122" cy="100" rx="6" ry="10" fill="#1a1a2e"/>
                  <circle cx="78" cy="94" r="3" fill="white"/>
                  <circle cx="118" cy="94" r="3" fill="white"/>
                  {/* Nose */}
                  <ellipse cx="100" cy="118" rx="5" ry="4" fill="#e8a0bf"/>
                  {/* Mouth */}
                  <path d="M95 122 Q100 128 105 122" stroke="#4a4555" strokeWidth="2" fill="none"/>
                  {/* Whiskers */}
                  <line x1="55" y1="110" x2="75" y2="115" stroke="#8a8595" strokeWidth="1.5"/>
                  <line x1="55" y1="120" x2="75" y2="120" stroke="#8a8595" strokeWidth="1.5"/>
                  <line x1="125" y1="115" x2="145" y2="110" stroke="#8a8595" strokeWidth="1.5"/>
                  <line x1="125" y1="120" x2="145" y2="120" stroke="#8a8595" strokeWidth="1.5"/>
                  {/* Chest fur */}
                  <ellipse cx="100" cy="145" rx="35" ry="25" fill="#d4c8d8"/>
                  {/* Paws */}
                  <ellipse cx="70" cy="155" rx="15" ry="10" fill="#6b6575"/>
                  <ellipse cx="130" cy="155" rx="15" ry="10" fill="#6b6575"/>
                </svg>
              </div>
              <div className="avatar-heart">💗</div>
              <div className="avatar-paw"></div>
            </div>
            <div className="meow-bubble">
              Meow~ 🐾
            </div>
          </div>

          <div className="profile-info">
            <h1 className="profile-name">
              Kwanchanok Roumsuk <span className="heart">♥</span>
            </h1>
            <p className="profile-username">Kwenchy11-11</p>
            <div className="profile-badge">
              <span>📚</span> Study @ CMU
            </div>
            <button className="edit-profile-btn">Edit profile</button>
            <div className="profile-stats">
              <span>👥 1 follower · 1 following</span>
            </div>
            <div className="profile-email">
              <span>✉</span> kwanchanok_ro@cmu.ac.th
            </div>
          </div>

          <div className="achievements">
            <h3>Achievements</h3>
            <div className="achievement-badges">
              {achievements.map((i) => (
                <div key={i} className="achievement-badge">
                  <svg viewBox="0 0 40 40" width="40" height="40">
                    <circle cx="20" cy="20" r="18" fill="#2a2535" stroke="#e8a0bf" strokeWidth="2"/>
                    <text x="20" y="26" textAnchor="middle" fontSize="18">🐱</text>
                  </svg>
                </div>
              ))}
              <div className="achievement-more">+3</div>
            </div>
          </div>

          <div className="feedback-link">
            <span>🐱</span> Send feedback ↗
          </div>

          <div className="sleeping-cat">
            <svg viewBox="0 0 120 60" width="120" height="60">
              <ellipse cx="60" cy="40" rx="45" ry="18" fill="#6b6575"/>
              <ellipse cx="60" cy="35" rx="35" ry="15" fill="#7b7585"/>
              <circle cx="35" cy="28" r="12" fill="#6b6575"/>
              <polygon points="28,20 22,8 38,18" fill="#6b6575"/>
              <polygon points="42,20 48,8 38,18" fill="#6b6575"/>
              <ellipse cx="32" cy="26" rx="3" ry="4" fill="#1a1a2e"/>
              <ellipse cx="40" cy="26" rx="3" ry="4" fill="#1a1a2e"/>
              <ellipse cx="36" cy="32" rx="3" ry="2" fill="#e8a0bf"/>
              <path d="M30 45 Q35 50 40 45" stroke="#4a4555" strokeWidth="1.5" fill="none"/>
              <path d="M75 35 Q85 30 95 35" stroke="#6b6575" strokeWidth="4" fill="none"/>
              <text x="95" y="15" fontSize="10" fill="#e8a0bf">z z z</text>
            </svg>
            <div className="cat-bed"></div>
          </div>
        </aside>

        {/* Center Content */}
        <main className="content-center">
          {/* README Card */}
          <div className="readme-card">
            <div className="readme-header">
              <span className="readme-path">kwenchy11-11 / README.md</span>
            </div>
            <div className="readme-content">
              <div className="readme-text">
                <h2>Hi there, I'm Kwenchy 🐱</h2>
                <p className="readme-tagline">A cat lover ♥ | Code. Coffee. Cats.</p>
                <ul className="readme-list">
                  <li>🐾 Currently learning something new every day ✨</li>
                  <li>🐾 Building things that make life a little cuter 🌸</li>
                  <li>🐾 Goal: Become a full-stack developer 👩‍💻</li>
                </ul>
              </div>
              <div className="readme-illustration">
                <img src={heroImage} alt="Kwenchy's hero illustration" className="hero-img" />
              </div>
            </div>
          </div>

          {/* Popular Repositories */}
          <div className="repos-section">
            <div className="repos-header">
              <span>Popular repositories</span>
              <span className="customize-link">Customize your pins</span>
            </div>
            <div className="repos-grid">
              {repos.map((repo, i) => (
                <div key={i} className="repo-card">
                  <div className="repo-icon">
                    <svg viewBox="0 0 40 40" width="40" height="40">
                      <circle cx="20" cy="20" r="18" fill="#2a2535" stroke="#e8a0bf44" strokeWidth="1"/>
                      <text x="20" y="26" textAnchor="middle" fontSize="16">
                        {i === 0 ? '🎮' : i === 1 ? '❤️' : i === 2 ? '' : '💧'}
                      </text>
                    </svg>
                  </div>
                  <div className="repo-info">
                    <div className="repo-name-row">
                      <span className="repo-name">{repo.name}</span>
                      <span className="repo-visibility">Public</span>
                    </div>
                    <p className="repo-desc">{repo.desc}</p>
                    {repo.fork && (
                      <p className="repo-fork">Forked from <span className="fork-link">{repo.forkFrom}</span></p>
                    )}
                    <div className="repo-lang">
                      <span className="lang-dot" style={{backgroundColor: repo.langColor}}></span>
                      {repo.lang}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contribution Graph */}
          <div className="contributions-section">
            <div className="contributions-header">
              <span>481 contributions in the last year</span>
              <div className="contribution-settings">
                Contribution settings ▾
              </div>
            </div>
            <div className="contribution-graph">
              <div className="graph-months">
                {months.map((m, i) => (
                  <span key={i} className="month-label">{m}</span>
                ))}
              </div>
              <div className="graph-body">
                <div className="graph-days">
                  {days.map((d, i) => (
                    <span key={i} className="day-label">{d}</span>
                  ))}
                </div>
                <div className="graph-grid">
                  {contributions.map((month, mi) => (
                    <div key={mi} className="month-column">
                      {month.map((week, wi) => (
                        <div key={wi} className="week-column">
                          {week.map((day, di) => (
                            <div
                              key={di}
                              className="contribution-cell"
                              style={{backgroundColor: getContributionColor(day)}}
                            ></div>
                          ))}
                        </div>
      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="graph-legend">
                <span>Less</span>
                <div className="legend-cells">
                  <div className="legend-cell" style={{backgroundColor: '#161b22'}}></div>
                  <div className="legend-cell" style={{backgroundColor: '#e8a0bf44'}}></div>
                  <div className="legend-cell" style={{backgroundColor: '#e8a0bf88'}}></div>
                  <div className="legend-cell" style={{backgroundColor: '#e8a0bfcc'}}></div>
                  <div className="legend-cell" style={{backgroundColor: '#e8a0bf'}}></div>
                </div>
                <span>More</span>
              </div>
              <div className="graph-footer">
                <span className="learn-link">Learn how we count contributions</span>
              </div>
            </div>
          </div>
          {/* GitHub Stats Images */}
          <div className="github-stats-images">
            <div className="stats-row">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Kwenchy11-11&show_icons=true&theme=tokyonight&hide_border=true&title_color=e8a0bf&icon_color=e8a0bf&text_color=8b949e&bg_color=0d1117"
                alt="GitHub Stats"
                className="stats-image"
              />
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Kwenchy11-11&layout=compact&theme=tokyonight&hide_border=true&title_color=e8a0bf&text_color=8b949e&bg_color=0d1117"
                alt="Top Languages"
                className="stats-image"
              />
            </div>
          </div>

          {/* GitHub Streak */}
          <div className="github-streak">
            <img
              src="https://streak-stats.demolab.com?user=Kwenchy11-11&theme=tokyonight&hide_border=true&title_color=e8a0bf&ring=e8a0bf&fire=e8a0bf&currStreakNum=e8a0bf&sideNums=8b949e&currStreakLabel=e8a0bf&sideLabels=8b949e&dates=8b949e&background=0d1117"
              alt="GitHub Streak"
              className="streak-image"
            />
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="sidebar-right">
          {/* Thanks Card */}
          <div className="thanks-card">
            <div className="thanks-cat">
              <svg viewBox="0 0 60 30" width="60" height="30">
                <ellipse cx="30" cy="25" rx="25" ry="12" fill="#6b6575"/>
                <circle cx="20" cy="18" r="10" fill="#6b6575"/>
                <circle cx="40" cy="18" r="10" fill="#6b6575"/>
                <polygon points="14,12 10,2 20,10" fill="#6b6575"/>
                <polygon points="26,12 22,2 24,10" fill="#6b6575"/>
                <polygon points="34,12 38,2 36,10" fill="#6b6575"/>
                <polygon points="46,12 50,2 40,10" fill="#6b6575"/>
                <ellipse cx="25" cy="16" rx="3" ry="4" fill="#f5c542"/>
                <ellipse cx="35" cy="16" rx="3" ry="4" fill="#f5c542"/>
                <ellipse cx="26" cy="16" rx="1.5" ry="2.5" fill="#1a1a2e"/>
                <ellipse cx="36" cy="16" rx="1.5" ry="2.5" fill="#1a1a2e"/>
                <ellipse cx="30" cy="22" rx="2" ry="1.5" fill="#e8a0bf"/>
              </svg>
            </div>
            <h3>Thanks for visiting my profile!</h3>
            <p>Have a purrfect day ♥</p>
            <span className="paw-print">🐾</span>
            <div className="visitor-count">
              <img
                src="https://profile-counter.glitch.me/Kwenchy11-11/count.svg"
                alt="Visitor Count"
              />
            </div>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack-card">
            <h3>Tech Stack <span className="paw-icon">🐾</span></h3>
            <div className="tech-badges">
              {techStack.map((tech, i) => (
                <div key={i} className="tech-badge" style={{backgroundColor: tech.color + '22', borderLeft: `3px solid ${tech.color}`}}>
                  <span className="tech-icon">{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Year Selector */}
          <div className="year-selector">
            <div className="year-btn active">2026</div>
            <div className="year-btn">2025</div>
            <div className="year-btn">2024</div>
          </div>

          {/* Yarn Ball */}
          <div className="yarn-decoration">
            <svg viewBox="0 0 80 80" width="80" height="80">
              <circle cx="40" cy="40" r="25" fill="#e8a0bf44" stroke="#e8a0bf" strokeWidth="2"/>
              <path d="M25 35 Q35 25 45 35 Q55 45 45 55 Q35 65 25 55 Q15 45 25 35" fill="none" stroke="#e8a0bf" strokeWidth="1.5"/>
              <path d="M30 30 Q40 20 50 30 Q60 40 50 50 Q40 60 30 50 Q20 40 30 30" fill="none" stroke="#d4849e" strokeWidth="1"/>
              {/* Yarn string */}
              <path d="M60 25 Q70 15 65 5 Q60 -5 55 5" fill="none" stroke="#e8a0bf" strokeWidth="2"/>
              <path d="M55 5 Q50 15 55 20" fill="none" stroke="#e8a0bf" strokeWidth="2"/>
            </svg>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default App
