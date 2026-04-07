import { useState, useEffect, useMemo } from 'react';

export function useProgress(initialData) {
  const [weeks, setWeeks] = useState(initialData.weeks || []);
  const [config, setConfigLocal] = useState(initialData.config || { apiKey: '', model: '' });

  // Update effect to handle refetches if initialData changes
  useEffect(() => {
    setWeeks(initialData.weeks || []);
    setConfigLocal(initialData.config || { apiKey: '', model: '' });
  }, [initialData]);

  const problemsMap = useMemo(() => {
    const map = new Map();
    for (const w of weeks) {
      for (const d of w.days) {
        for (const p of d.problems) {
          map.set(p.id, p);
        }
      }
    }
    return map;
  }, [weeks]);

  const toggleProblem = async (id, isCompleted) => {
    setWeeks(prev => prev.map(w => ({
      ...w,
      days: w.days.map(d => ({
        ...d,
        problems: d.problems.map(p => p.id === id ? { ...p, isCompleted } : p)
      }))
    })));

    try {
      await fetch(`/api/problem/${id}/toggle`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isCompleted })
      });
    } catch(e) { console.error(e) }
  };

  const isCompleted = (id) => {
    return problemsMap.get(id)?.isCompleted || false;
  };

  const saveNote = async (probId, text) => {
    setWeeks(prev => prev.map(w => ({
      ...w,
      days: w.days.map(d => ({
        ...d,
        problems: d.problems.map(p => p.id === probId ? { ...p, userNote: text } : p)
      }))
    })));

    try {
      await fetch(`/api/problem/${probId}/note`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note: text })
      });
    } catch(e) { console.error(e) }
  };

  const getNote = (id) => {
    return problemsMap.get(id)?.userNote || '';
  };

  const saveConfig = async (newConfig) => {
    setConfigLocal(newConfig);
    try {
      await fetch(`/api/config`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newConfig)
      });
    } catch(e) { console.error(e) }
  };

  const getWeekStats = (weekIdx) => {
    const w = weeks[weekIdx];
    if (!w) return { total: 0, done: 0, pct: 0 };
    let total = 0, done = 0;
    w.days.forEach(d => d.problems.forEach(p => {
      total++;
      if (p.isCompleted) done++;
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
    day.problems.forEach(p => { if (p.isCompleted) done++; });
    return { total, done, complete: total > 0 && done === total, pct: total ? Math.round(done / total * 100) : 0 };
  };

  const getDaysLeft = () => {
    const target = new Date('2026-05-26');
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return Math.max(0, Math.ceil((target - today) / 864e5));
  };

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
    weeks,
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
    saveConfig
  };
}
