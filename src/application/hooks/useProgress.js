import { useState, useEffect } from 'react';

const STORAGE_KEY = 'uber_prep_ai';

export function useProgress(weeks) {
  const [completedProblems, setCompletedProblems] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.checked || {};
      }
    } catch(e) {}
    return {};
  });

  const [notes, setNotes] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.aiTracker || {};
      }
    } catch(e) {}
    return {};
  });

  const [config, setConfig] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.config || { apiKey: '', model: 'gemini-2.5-flash' };
      }
    } catch(e) {}
    return { apiKey: '', model: 'gemini-2.5-flash' };
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({
        checked: completedProblems,
        config,
        aiTracker: notes,
      }));
    } catch(e) {}
  }, [completedProblems, config, notes]);

  const toggleProblem = (id, isDone) => {
    setCompletedProblems(prev => ({ ...prev, [id]: isDone }));
  };

  const isCompleted = (id) => !!completedProblems[id];

  const saveNote = (probId, text) => {
    setNotes(prev => ({
      ...prev,
      [probId]: { ...(prev[probId] || { notes: '', chat: [] }), notes: text }
    }));
  };

  const getNote = (probId) => (notes[probId]?.notes || '');

  const saveConfig = (newConfig) => {
    setConfig(newConfig);
  };

  // Compute stats
  const getWeekStats = (weekIdx) => {
    const w = weeks[weekIdx];
    if (!w) return { total: 0, done: 0, pct: 0 };
    let total = 0, done = 0;
    w.days.forEach(d => d.problems.forEach(p => {
      total++;
      if (completedProblems[p.id]) done++;
    }));
    return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
  };

  const getGlobalStats = () => {
    let total = 0, done = 0;
    weeks.forEach((_, wi) => {
      const s = getWeekStats(wi);
      total += s.total;
      done += s.done;
    });
    return { total, done, pct: total ? Math.round(done / total * 100) : 0 };
  };

  const getDayStats = (day) => {
    let total = day.problems.length, done = 0;
    day.problems.forEach(p => { if (completedProblems[p.id]) done++; });
    return { total, done, complete: total > 0 && done === total, pct: total ? Math.round(done / total * 100) : 0 };
  };

  // Days until interview
  const getDaysLeft = () => {
    const target = new Date('2026-05-26');
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return Math.max(0, Math.ceil((target - today) / 864e5));
  };

  // Get next uncompleted session
  const getNextSession = () => {
    for (let wi = 0; wi < weeks.length; wi++) {
      for (let di = 0; di < weeks[wi].days.length; di++) {
        const day = weeks[wi].days[di];
        const s = getDayStats(day);
        if (!s.complete) return { weekIdx: wi, dayIdx: di, day, week: weeks[wi] };
      }
    }
    return null;
  };

  return {
    completedProblems,
    toggleProblem,
    isCompleted,
    getWeekStats,
    getGlobalStats,
    getDayStats,
    getDaysLeft,
    getNextSession,
    saveNote,
    getNote,
    config,
    saveConfig,
    notes,
    setNotes,
  };
}
