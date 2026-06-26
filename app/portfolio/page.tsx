import { PORTFOLIO_CASES } from '@/lib/data';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Portfolio · 케이스 스터디 — Dobin Shin',
    description: '대표 프로젝트 3개의 엔지니어링 케이스 스터디',
};

const reductions = [
    '수정 6곳 → 1곳',
    '빌드 10분 → 2분 30초',
    '서버 200대 → 30대',
];

/** → 와 ↓ 를 secondary(시안)로 */
function Arrowed({ text }: { text: string }) {
    return (
        <>
            {text.split(/([→↓])/).map((p, i) =>
                p === '→' || p === '↓' ? (
                    <span key={i} className="text-secondary">
                        {p}
                    </span>
                ) : (
                    p
                ),
            )}
        </>
    );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
    return (
        <span className="flex items-center gap-2.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="text-secondary">✳</span>
            {children}
        </span>
    );
}

export default function PortfolioPage() {
    // 컨테이너(max-w / px)는 기존 페이지 래퍼에 맞춰 조정.
    return (
        <div className="mx-auto max-w-[920px] px-8">
            {/* ─── Hero ─── */}
            <section className="pb-[70px] pt-24">
                <Eyebrow>Portfolio · 엔지니어링 케이스 스터디</Eyebrow>

                <h1 className="mt-8 max-w-[17ch] text-[clamp(34px,6vw,58px)] font-medium leading-[1.18] tracking-[-0.02em]">
                    변경에 강한{' '}
                    <em className="not-italic text-secondary">구조</em>를 만드는
                    프론트엔드
                </h1>

                <p className="mt-6 max-w-[50ch] text-lg text-muted-foreground">
                    대표 프로젝트 3개를, 어떤 문제를 어떻게 풀었는지 코드까지
                    드러내 정리했습니다. 전체 프로젝트 목록은{' '}
                    <Link
                        href="/"
                        className="border-b border-secondary/60 pb-px text-foreground hover:text-secondary"
                    >
                        메인 사이트
                    </Link>
                    에 있습니다.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-x-[22px] gap-y-2 font-mono text-[13.5px]">
                    <span className="tracking-[0.04em] text-muted-foreground/70">
                        복잡함을 줄입니다
                    </span>
                    {reductions.map((r) => (
                        <span key={r} className="whitespace-nowrap">
                            <Arrowed text={r} />
                        </span>
                    ))}
                </div>
            </section>

            {/* ─── Case studies ─── */}
            <section>
                <div className="mb-1.5 flex items-center gap-3.5">
                    <Eyebrow>Selected case studies</Eyebrow>
                    <span className="h-px flex-1 bg-border" />
                </div>

                <div className="mt-[18px]">
                    {PORTFOLIO_CASES.map((c) => (
                        <Link
                            key={c.slug}
                            href={`/portfolio/${c.slug}`}
                            className="group grid grid-cols-[auto_1fr_auto] items-start gap-x-[26px] gap-y-2 border-t border-border px-2.5 py-[34px] transition-colors last:border-b hover:bg-white/[0.03] max-[720px]:grid-cols-[auto_1fr]"
                        >
                            <span className="pt-4 font-mono text-sm tracking-[0.02em] text-muted-foreground/70">
                                {c.no}
                            </span>

                            <div>
                                <h2 className="flex items-center gap-3 font-black-han-sans text-[34px] font-normal leading-[1.12] tracking-[-0.01em] max-[720px]:text-[27px]">
                                    {c.name}
                                    <span className="-translate-x-1.5 font-mono text-[22px] text-secondary opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100">
                                        ↗
                                    </span>
                                </h2>

                                <p className="mt-3.5 max-w-[46ch] text-[15.5px] text-muted-foreground">
                                    {c.theme}
                                </p>

                                <div className="mt-[15px] flex flex-wrap items-center gap-y-1.5 font-mono text-xs text-muted-foreground/70">
                                    {c.tags.map((t, i) => (
                                        <span
                                            key={t}
                                            className="flex items-center"
                                        >
                                            {i > 0 && (
                                                <span className="mx-1.5 text-secondary/50">
                                                    •
                                                </span>
                                            )}
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-3 text-right font-mono max-[720px]:col-start-2 max-[720px]:pt-3.5 max-[720px]:text-left">
                                <span className="text-[18px] font-medium tracking-[-0.01em]">
                                    <Arrowed text={c.metric.big} />
                                </span>
                                <span className="mt-[7px] block text-xs text-muted-foreground/70">
                                    <Arrowed text={c.metric.sub} />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
