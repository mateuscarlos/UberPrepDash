import React, { useState, useEffect } from 'react';
import './presentation/design-system/layout.css';
import './presentation/pages/pages.css';
import { warmupGuides } from './infrastructure/data/studyResources';
import { Button } from './presentation/design-system/components/UI';
import { ProblemAccordion } from './presentation/components/ProblemAccordion';
import { useProgress } from './application/hooks/useProgress';

function App() {
  const [activeWeek, setActiveWeek] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [initialData, setInitialData] = useState({ weeks: [], config: { apiKey: '', model: '' } });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => {
        setInitialData(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  
  const {
    weeks, // from hook state
    toggleProblem, isCompleted,
    getWeekStats, getGlobalStats, getDayStats,
    getDaysLeft, getNextSession,
    saveNote, getNote,
    config, saveConfig,
  } = useProgress(initialData);

  const globalStats = getGlobalStats();
  const daysLeft = getDaysLeft();
  const nextSession = getNextSession();

  // Settings handlers
  const [tempKey, setTempKey] = useState(config?.apiKey || '');
  const [tempModel, setTempModel] = useState(config?.model || 'gemini-2.5-flash');

  useEffect(() => {
    if (!loading && config) {
      setTempKey(config.apiKey || '');
      setTempModel(config.model || 'gemini-2.5-flash');
    }
  }, [loading, config]);

  const handleSaveSettings = () => {
    saveConfig({ apiKey: tempKey, model: tempModel });
    setSettingsOpen(false);
  };

  if (loading) {
    return <div style={{padding: 40, color: 'var(--text-secondary)'}}>Carregando plano de estudos e banco de dados...</div>;
  }

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <div style={{width: 26, height: 26, background: 'var(--text-primary)', color: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 5, fontSize: 13, fontWeight: 'bold'}}>U</div>
          UberPrep
        </div>
        <div className="sidebar-nav">
          <div 
            className={`nav-item ${activeWeek === null ? 'active' : ''}`}
            onClick={() => setActiveWeek(null)}
          >
            📊 Dashboard
          </div>
          <div style={{padding: '16px 16px 6px', fontSize: 10, textTransform: 'uppercase', color: 'var(--text-tertiary)', fontWeight: 600, letterSpacing: '0.08em'}}>Semanas</div>
          {weeks.map((w, wi) => {
            const ws = getWeekStats(wi);
            return (
              <div 
                key={w.week}
                className={`nav-item ${activeWeek === w.week ? 'active' : ''}`}
                onClick={() => setActiveWeek(w.week)}
              >
                <span style={{flex: 1}}>Sem {w.week}</span>
                {ws.done > 0 && (
                  <span style={{fontSize: 10, color: ws.pct === 100 ? 'var(--text-success)' : 'var(--accent-primary)'}}>{ws.pct}%</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <div className="main-header">
          <h2 style={{fontSize: 16, fontWeight: 500}}>
            {activeWeek === null ? '📊 Dashboard' : `Semana ${activeWeek} · ${weeks.find(w => w.week === activeWeek)?.title || ''}`}
          </h2>
          <div style={{display: 'flex', gap: 12, alignItems: 'center'}}>
            <span style={{fontSize: 12, color: 'var(--text-success)'}}>
              {globalStats.done}/{globalStats.total} resolvidas
            </span>
            <Button variant="ghost" onClick={() => {
              setTempKey(config.apiKey);
              setTempModel(config.model);
              setSettingsOpen(true);
            }}>⚙️ Config</Button>
          </div>
        </div>

        <div className="main-body">
          {activeWeek === null ? (
            /* ── DASHBOARD ── */
            <div className="dashboard">
              {/* Stats Grid */}
              <div className="dash-stats-grid">
                <div className="dash-stat-card success">
                  <span className="dash-stat-value">{globalStats.done}</span>
                  <span className="dash-stat-label">Resolvidas</span>
                </div>
                <div className="dash-stat-card">
                  <span className="dash-stat-value">{globalStats.total}</span>
                  <span className="dash-stat-label">Total Problemas</span>
                </div>
                <div className="dash-stat-card warning">
                  <span className="dash-stat-value">{daysLeft}</span>
                  <span className="dash-stat-label">Dias Restantes</span>
                </div>
                <div className="dash-stat-card accent">
                  <span className="dash-stat-value">{globalStats.pct}%</span>
                  <span className="dash-stat-label">Progresso Total</span>
                </div>
              </div>

              {/* Global progress */}
              <div className="dash-progress-section">
                <div className="dash-progress-title">Progresso Global</div>
                <div className="dash-progress-bar-container">
                  <div className="dash-progress-fill" style={{width: `${globalStats.pct}%`}} />
                </div>
                <div className="dash-progress-text">
                  {globalStats.done} de {globalStats.total} problemas concluídos · Meta: 26/05/2026
                </div>
              </div>

              {/* Next session card */}
              {nextSession && (
                <div className="dash-next-session">
                  <div className="dash-next-label">Próxima Sessão</div>
                  <div className="dash-next-topic">{nextSession.day.topic}</div>
                  <div className="dash-next-sub">
                    Semana {nextSession.week.week} · {nextSession.day.dayName} · {nextSession.day.time}
                  </div>
                  <div className="dash-next-action">
                    <Button variant="primary" onClick={() => setActiveWeek(nextSession.week.week)}>
                      Ir para esta sessão →
                    </Button>
                  </div>
                </div>
              )}

              {/* Per-week mini cards */}
              <div>
                <h3 style={{fontSize: 14, fontWeight: 600, marginBottom: 12}}>Progresso por Semana</h3>
                <div className="dash-weeks-grid">
                  {weeks.map((w, wi) => {
                    const ws = getWeekStats(wi);
                    return (
                      <div key={w.week} className="dash-week-card" onClick={() => setActiveWeek(w.week)}>
                        <div className="dash-week-num">Semana {w.week}</div>
                        <div className="dash-week-title">{w.title}</div>
                        <div className="dash-week-bar">
                          <div className="dash-week-bar-fill" style={{width: `${ws.pct}%`}} />
                        </div>
                        <div className="dash-week-pct">{ws.done}/{ws.total} · {ws.pct}%</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : (
            /* ── WEEK VIEW ── */
            <div>
              {/* Warmup card for the week */}
              {warmupGuides[activeWeek] && warmupGuides[activeWeek].videos.length > 0 && (
                <div className="warmup-card">
                  <div className="warmup-title">🔥 Aquecimento — {warmupGuides[activeWeek].title}</div>
                  <div className="warmup-videos">
                    {warmupGuides[activeWeek].videos.map((v, i) => (
                      <div key={i} className="warmup-video">
                        <span>📺</span>
                        <a href={v.url} target="_blank" rel="noreferrer">{v.label}</a>
                        <span className="warmup-author">— {v.author}</span>
                      </div>
                    ))}
                    {warmupGuides[activeWeek].readings?.map((r, i) => (
                      <div key={`r${i}`} className="warmup-video">
                        <span>📖</span>
                        <a href={r.url} target="_blank" rel="noreferrer">{r.label}</a>
                        <span className="warmup-author">— {r.author}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {weeks.find(w => w.week === activeWeek)?.days.map(day => {
                const dayStats = getDayStats(day);
                const dailyTips = warmupGuides[activeWeek]?.dailyTips;
                const tipForDay = dailyTips ? dailyTips[day.label] : null;

                return (
                  <div key={day.id} style={{marginBottom: 32}}>
                    {/* Day header */}
                    <div style={{display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid var(--border-default)', paddingBottom: 12, marginBottom: 12}}>
                      <span style={{
                        background: dayStats.complete ? 'var(--accent-success)' : 'var(--text-tertiary)',
                        color: 'var(--bg-primary)',
                        padding: '2px 10px', borderRadius: 'var(--radius-full)',
                        fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em'
                      }}>
                        {day.label}
                      </span>
                      <h3 style={{fontSize: 15, fontWeight: 500, color: 'var(--text-primary)', flex: 1}}>
                        {day.topic}
                      </h3>
                      <span style={{fontSize: 11, color: dayStats.complete ? 'var(--text-success)' : 'var(--text-secondary)'}}>
                        {dayStats.done}/{dayStats.total} · {day.time}
                      </span>
                    </div>
                    
                    {/* Daily tip from references */}
                    {tipForDay && (
                      <div className="day-tip">💡 {tipForDay}</div>
                    )}

                    {/* Day note */}
                    {day.note && day.note !== "Ver anotações no arquivo markdown original." && (
                      <div style={{background: 'var(--bg-secondary)', padding: '10px 14px', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--accent-primary)', color: 'var(--text-secondary)', fontSize: 13, marginBottom: 12}}>
                        <span dangerouslySetInnerHTML={{__html: day.note}} />
                      </div>
                    )}

                    {/* Problems */}
                    <div>
                      {day.problems.map(prob => (
                        <ProblemAccordion 
                          key={prob.id} 
                          problem={prob} 
                          isCompleted={isCompleted(prob.id)}
                          onToggleCompletion={toggleProblem}
                          onSaveNote={saveNote}
                          savedNote={getNote(prob.id)}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
              
              {/* Navigate to next week */}
              {activeWeek < weeks.length && (
                <div style={{textAlign: 'center', marginTop: 48, paddingBottom: 24}}>
                  <Button variant="default" onClick={() => setActiveWeek(Math.min(activeWeek + 1, weeks.length))}>
                    Próxima Semana →
                  </Button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Settings Modal */}
      <div className={`settings-overlay ${settingsOpen ? 'open' : ''}`} onClick={e => { if (e.target === e.currentTarget) setSettingsOpen(false); }}>
        <div className="settings-modal">
          <div className="settings-header">
            <span className="settings-title">⚙️ Configurações</span>
            <button className="settings-close" onClick={() => setSettingsOpen(false)}>×</button>
          </div>
          <div className="form-group">
            <label className="form-label">Google Gemini API Key</label>
            <input 
              type="password" 
              className="form-input" 
              placeholder="AIzaSy..." 
              value={tempKey}
              onChange={e => setTempKey(e.target.value)}
            />
            <div className="form-hint">Guardada localmente no seu browser. Nunca enviada a terceiros.</div>
          </div>
          <div className="form-group">
            <label className="form-label">Modelo</label>
            <select 
              className="form-input" 
              value={tempModel}
              onChange={e => setTempModel(e.target.value)}
            >
              <option value="gemini-2.5-flash">Gemini 2.5 Flash (Rápido)</option>
              <option value="gemini-2.5-pro">Gemini 2.5 Pro (Avançado)</option>
            </select>
          </div>
          <Button variant="primary" onClick={handleSaveSettings} style={{width: '100%'}}>Salvar</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
