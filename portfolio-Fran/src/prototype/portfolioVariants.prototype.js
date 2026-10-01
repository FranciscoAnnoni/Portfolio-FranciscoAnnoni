// PROTOTYPE - throwaway. Three variants of the portfolio content, switchable via ?variant=A|B|C
// on the existing page. A = current site, B = full proposal for US AI Engineer roles, C = mix.
import { useEffect, useState } from 'react';

export const VARIANT_KEYS = ['A', 'B', 'C'];

const METRICS = {
    'DevEx-MCP': { append: ' Adopted by [X] engineers across [Y] teams at Rappi.' },
    'Improvisador': { replace: ['Deployed at improvisador.lat and actively used.', 'Live at improvisador.lat with [X] monthly users.'] },
};

const LOCATION = 'Based in Buenos Aires, Argentina (UTC-3) · Full overlap with US working hours · Open to remote roles.';

export const VARIANTS = {
    A: {
        name: 'Original',
        // grid fills row by row, 3 columns
        skills: ['AI Agents & LLM', 'Docker', 'TypeScript', 'Python', 'Node.js', 'React', 'Git', 'AWS', 'SQL & NoSQL'],
        featured: ['DevEx-MCP', 'Skynet: n8n Homelab Assistant', 'Improvisador', 'Tragui', 'OfferHub'],
        movedToOther: [],
        location: null,
        metrics: false,
    },
    B: {
        name: 'Proposal',
        skills: ['AI Agents & LLM', 'Docker', 'Node.js', 'Python', 'AWS', 'React', 'MCP', 'PostgreSQL', 'TypeScript'],
        featured: ['DevEx-MCP', 'Skynet: n8n Homelab Assistant', 'Improvisador'],
        movedToOther: ['Tragui', 'OfferHub'],
        location: LOCATION,
        metrics: true,
    },
    C: {
        name: 'Mix',
        skills: ['AI Agents & LLM', 'Docker', 'Node.js', 'Python', 'AWS', 'React', 'MCP', 'SQL & NoSQL', 'TypeScript'],
        featured: ['DevEx-MCP', 'Skynet: n8n Homelab Assistant', 'Improvisador', 'OfferHub'],
        movedToOther: ['Tragui'],
        location: LOCATION,
        metrics: true,
    },
};

export const applyMetrics = (project, variant) => {
    const m = VARIANTS[variant].metrics && METRICS[project.title];
    if (!m) return project;
    const description = m.append
        ? project.description + m.append
        : project.description.replace(m.replace[0], m.replace[1]);
    return { ...project, description };
};

const readVariant = () => {
    const v = new URLSearchParams(window.location.search).get('variant');
    return VARIANT_KEYS.includes(v) ? v : 'A';
};

export const setVariant = (v) => {
    const url = new URL(window.location.href);
    url.searchParams.set('variant', v);
    window.history.replaceState(null, '', url);
    window.dispatchEvent(new Event('prototype-variant'));
};

export const useVariant = () => {
    const [variant, setState] = useState(readVariant);
    useEffect(() => {
        const update = () => setState(readVariant());
        window.addEventListener('prototype-variant', update);
        return () => window.removeEventListener('prototype-variant', update);
    }, []);
    return variant;
};
