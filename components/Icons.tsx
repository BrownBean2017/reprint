import React from 'react';

export const ArtStationIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M9.206 7.603L10.875 10.5h9.11l-1.652-2.897H9.206zM3.483 17.525l1.64 2.868h13.68l-1.66-2.868H3.483zm5.004-1.428l-4.502-7.89 1.665-2.895 4.5 7.89-1.663 2.895z" />
  </svg>
);

export const MobyGamesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M2 4h20v16H2V4zm2 2v12h16V6H4zm3 2h2v6H7V8zm4 0h2v6h-2V8zm4 0h2v6h-2V8z" />
    <text x="50%" y="80%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fontWeight="bold" fill="currentColor" style={{pointerEvents: 'none'}}>M</text>
  </svg>
);

export const IMDbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20 3H4a1 1 0 00-1 1v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1zM9.5 17h-2v-2h-1v2h-2V7h2v2h1V7h2v10zm4 0h-2V7h2v10zm4 0h-2.2l-1.6-4h-.2v4h-2V7h2.2l1.6 4h.2V7h2v10z" />
  </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
