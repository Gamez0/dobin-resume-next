'use client';

import SectionTitle from '@/components/SectionTitle';
import {
    SKILL_MATRIX_LEVELS as LEVELS,
    SKILL_MATRIX_DATA,
    SkillMatrixCategory,
} from '@/lib/data';
import { useState } from 'react';
import CategoryRow from './components/CategoryRow';

type ActiveTab = Pick<SkillMatrixCategory, 'id'>['id'];

export default function SkillMatrix() {
    const [activeTab, setActiveTab] = useState<ActiveTab>('efficiency');
    const activeData =
        SKILL_MATRIX_DATA.find((d) => d.id === activeTab) ??
        SKILL_MATRIX_DATA[0];

    const counts = activeData.categories.reduce<Record<string, number>>(
        (acc, cat) => {
            acc[cat.level] = (acc[cat.level] || 0) + 1;
            return acc;
        },
        {} as Record<string, number>,
    );

    return (
        <section
            className="pb-section"
            style={{
                width: '100%',
                maxWidth: '1148px',
                margin: '0 auto',
                fontFamily:
                    "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
            }}
        >
            {/* Section Title */}
            <div style={{ marginBottom: '32px' }}>
                <SectionTitle title="Skill Matrix" />

                <p
                    style={{
                        fontSize: '15px',
                        color: 'var(--skill-text, #e4e4e7)',
                        margin: '12px 0 0 0',
                        lineHeight: 1.6,
                    }}
                >
                    5년간의 프론트엔드 경험을 세 가지 축으로 정리했습니다.
                </p>
                <p
                    style={{
                        fontSize: '13px',
                        color: 'var(--skill-text-muted, #71717a)',
                        margin: '6px 0 0 0',
                        lineHeight: 1.5,
                    }}
                >
                    각 탭을 눌러 세부 역량을 확인해보세요.
                </p>
            </div>

            {/* Tabs */}
            <div
                style={{
                    display: 'flex',
                    gap: '4px',
                    marginBottom: '24px',
                    borderBottom: '1px solid rgba(128,128,128,0.15)',
                    paddingBottom: '0',
                }}
            >
                {SKILL_MATRIX_DATA.map((section) => {
                    const isActive = activeTab === section.id;
                    return (
                        <button
                            key={section.id}
                            onClick={() => setActiveTab(section.id)}
                            style={{
                                padding: '10px 16px',
                                fontSize: '13px',
                                fontWeight: isActive ? 600 : 400,
                                color: isActive
                                    ? 'var(--skill-text, #e4e4e7)'
                                    : 'var(--skill-text-muted, #71717a)',
                                background: 'none',
                                border: 'none',
                                borderBottom: isActive
                                    ? '2px solid var(--skill-text, #e4e4e7)'
                                    : '2px solid transparent',
                                cursor: 'pointer',
                                transition: 'all 0.2s ease',
                                marginBottom: '-1px',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {section.tab}
                        </button>
                    );
                })}
            </div>

            {/* Description */}
            <p
                style={{
                    fontSize: '13px',
                    color: 'var(--skill-text-muted, #71717a)',
                    margin: '0 0 20px 0',
                    lineHeight: 1.5,
                }}
            >
                {activeData.description}
            </p>

            {/* Summary bar */}
            <div
                style={{
                    display: 'flex',
                    gap: '16px',
                    marginBottom: '20px',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    backgroundColor:
                        'var(--skill-card-bg, rgba(128,128,128,0.06))',
                }}
            >
                {Object.entries(LEVELS).map(([key, config]) => (
                    <div
                        key={key}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontSize: '12px',
                            color: 'var(--skill-text-muted, #71717a)',
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
                        <span>{config.label}</span>
                        <span style={{ fontWeight: 600, color: config.color }}>
                            {counts[key] || 0}
                        </span>
                    </div>
                ))}
            </div>

            {/* Category List */}
            <div
                style={{
                    padding: '4px 0',
                }}
            >
                {activeData.categories.map((cat, i) => (
                    <CategoryRow
                        key={cat.name}
                        category={cat}
                        isLast={i === activeData.categories.length - 1}
                    />
                ))}
            </div>
        </section>
    );
}
