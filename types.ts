import React from 'react';

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  fullWidth?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.FC<{ className?: string }>;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  description: string;
  images: ProjectImage[];
}