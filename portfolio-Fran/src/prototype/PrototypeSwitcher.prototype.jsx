// PROTOTYPE - throwaway floating bar to cycle variants. Only rendered in dev.
import { useEffect } from 'react';
import { VARIANT_KEYS, VARIANTS, setVariant, useVariant } from './portfolioVariants.prototype';

const PrototypeSwitcher = () => {
    const variant = useVariant();
    const i = VARIANT_KEYS.indexOf(variant);
    const go = (step) => setVariant(VARIANT_KEYS[(i + step + VARIANT_KEYS.length) % VARIANT_KEYS.length]);

    useEffect(() => {
        const onKey = (e) => {
            const t = e.target;
            if (t.closest && t.closest('input, textarea, [contenteditable]')) return;
            if (e.key === 'ArrowLeft') go(-1);
            if (e.key === 'ArrowRight') go(1);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    });

    const btn = { background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer', padding: '0 10px' };

    return (
        <div style={{
            position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 100000,
            display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 999,
            background: '#111', color: '#fff', border: '2px solid #fff', boxShadow: '0 6px 24px rgba(0,0,0,0.5)',
            fontFamily: 'system-ui, sans-serif', fontSize: 14, fontWeight: 600,
        }}>
            <button style={btn} onClick={() => go(-1)} aria-label="Previous variant">&larr;</button>
            <span style={{ minWidth: 130, textAlign: 'center' }}>{variant} ({VARIANTS[variant].name})</span>
            <button style={btn} onClick={() => go(1)} aria-label="Next variant">&rarr;</button>
        </div>
    );
};

export default PrototypeSwitcher;
