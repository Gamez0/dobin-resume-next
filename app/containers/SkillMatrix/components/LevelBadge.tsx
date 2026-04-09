import { SKILL_MATRIX_LEVELS as LEVELS } from '@/lib/data';

interface LevelBadgeProps {
    level: 'achieved' | 'experienced' | 'learning';
}

export default function LevelBadge({ level }: LevelBadgeProps) {
    const config = LEVELS[level];
    return (
        <span
            style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 12px',
                borderRadius: '100px',
                fontSize: '12px',
                fontWeight: 500,
                color: config.color,
                backgroundColor: config.bg,
                border: `1px solid ${config.color}20`,
                whiteSpace: 'nowrap',
            }}
        >
            <span
                style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: config.color,
                }}
            />
            {config.label}
        </span>
    );
}
