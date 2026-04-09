import LevelBadge from './LevelBadge';

interface CategoryRowProps {
    category: {
        name: string;
        detail: string;
        level: 'achieved' | 'experienced' | 'learning';
    };
    isLast: boolean;
}

export default function CategoryRow({ category, isLast }: CategoryRowProps) {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                padding: '14px 0',
                borderBottom: isLast
                    ? 'none'
                    : '1px solid rgba(128,128,128,0.1)',
                gap: '12px',
            }}
        >
            <div style={{ flex: 1, minWidth: 0 }}>
                <div
                    style={{
                        fontSize: '14px',
                        fontWeight: 600,
                        color: 'var(--skill-text, #e4e4e7)',
                        marginBottom: '2px',
                    }}
                >
                    {category.name}
                </div>
                <div
                    style={{
                        fontSize: '12px',
                        color: 'var(--skill-text-muted, #71717a)',
                        lineHeight: 1.4,
                    }}
                >
                    {category.detail}
                </div>
            </div>
            <LevelBadge level={category.level} />
        </div>
    );
}
