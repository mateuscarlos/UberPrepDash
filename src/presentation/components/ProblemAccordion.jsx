import React, { useState } from 'react';
import { Button, Badge, Checkbox } from '../design-system/components/UI';
import { ptBrLinks } from '../../infrastructure/data/studyResources';

function getProblemSlug(name) {
  let clean = name.replace(/^(Refazer:|Whiteboard:|Mock onsite:|Mock OA:|Mock CodeSignal:|Mock:|Template:)\s*/i, '');
  return clean.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const freqLabels = { hot: 'Top Uber', mid: 'Alta Freq', ok: 'Revisão' };

export function ProblemAccordion({ problem, isCompleted, onToggleCompletion, onSaveNote, savedNote }) {
  const [isOpen, setIsOpen] = useState(false);
  const [localNote, setLocalNote] = useState(savedNote || '');

  const handleLineClick = () => setIsOpen(!isOpen);

  const slug = getProblemSlug(problem.name);
  const lcLink = problem.lc 
    ? `https://leetcode.com/problems/${slug}/` 
    : `https://leetcode.com/problemset/all/?search=${encodeURIComponent(slug)}`;
  const neetcodeLink = `https://www.youtube.com/results?search_query=neetcode+${encodeURIComponent(problem.name)}`;
  const ptBrLink = problem.yt_pt_br || ptBrLinks[problem.lc] || null;

  return (
    <div className={`prob-accordion ${isCompleted ? 'completed' : ''} ${isOpen ? 'open' : ''}`}>
      {/* Header row */}
      <div className="prob-header" onClick={handleLineClick}>
        <div className="prob-check-area" onClick={e => e.stopPropagation()}>
          <Checkbox 
            checked={isCompleted} 
            onChange={(checked) => onToggleCompletion(problem.id, checked)} 
          />
        </div>
        
        <div className="prob-title-area">
          <span className={`prob-name ${isCompleted ? 'done' : ''}`}>{problem.name}</span>
          <div className="prob-meta-row">
            <Badge variant={problem.freq}>{freqLabels[problem.freq] || problem.freq}</Badge>
            <span className="prob-lc-number">#{problem.lc}</span>
          </div>
        </div>

        <div className={`prob-chevron ${isOpen ? 'rotated' : ''}`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>

      {/* Expanded body */}
      {isOpen && (
        <div className="prob-body">
          {/* Action buttons row */}
          <div className="prob-links-row">
            <a href={lcLink} target="_blank" rel="noreferrer" className="prob-link-btn lc">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l.501.467a1.378 1.378 0 001.875-.057 1.378 1.378 0 00-.074-1.953l-.5-.467a5.298 5.298 0 00-1.879-1.14z"/></svg>
              LeetCode ↗
            </a>
            <a href={neetcodeLink} target="_blank" rel="noreferrer" className="prob-link-btn neetcode">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              NeetCode ↗
            </a>
            {ptBrLink && (
              <a href={ptBrLink} target="_blank" rel="noreferrer" className="prob-link-btn br">
                🇧🇷 Vídeo PT-BR
              </a>
            )}
          </div>

          {/* AI Coach section */}
          <div className="prob-ai-section">
            <div className="prob-ai-header">🤖 AI Coach</div>
            <div className="prob-ai-buttons">
              <Button variant="ai">💡 Dica</Button>
              <Button variant="ai">🧠 Abordagem</Button>
              <Button variant="ai">🐍 Python</Button>
              <Button variant="ai">⚠️ Edge Cases</Button>
            </div>
            <div className="prob-ai-chat-placeholder">
              Clique em um prompt acima para interagir com o AI Coach
            </div>
          </div>

          {/* Notes */}
          <div className="prob-notes-section">
            <label className="prob-notes-label">Minhas Anotações</label>
            <textarea 
              className="prob-notes-input"
              value={localNote}
              onChange={e => {
                setLocalNote(e.target.value);
                if (onSaveNote) onSaveNote(problem.id, e.target.value);
              }}
              placeholder="Insights, Big O, por que falhei, padrão identificado..."
            />
          </div>
        </div>
      )}
    </div>
  );
}
