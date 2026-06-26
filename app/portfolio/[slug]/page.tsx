import type { Metadata } from 'next';
import { Fragment } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { IPortfolioCodePane, IPortfolioDecision } from '@/types/portfolio';
import { PORTFOLIO_CASES } from '@/lib/portfolio/data';

/* ── helpers ───────────────────────────────────────────────── */

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

/** 가벼운 강조: `//` 뒤 주석 흐리게 + accent 부분 시안. (실서비스는 shiki/prism 권장) */
function CodeLine({ line, accent }: { line: string; accent?: string }) {
    const ci = line.indexOf('//');
    const codePart = ci >= 0 ? line.slice(0, ci) : line;
    const comment = ci >= 0 ? line.slice(ci) : '';

    let codeNode: React.ReactNode = codePart;
    if (accent && codePart.includes(accent)) {
        const at = codePart.indexOf(accent);
        codeNode = (
            <>
                {codePart.slice(0, at)}
                <span className="text-secondary">{accent}</span>
                {codePart.slice(at + accent.length)}
            </>
        );
    }
    return (
        <div>
            {codeNode}
            {comment && (
                <span className="text-muted-foreground/60">{comment}</span>
            )}
            {!codePart && !comment && '\u00A0'}
        </div>
    );
}

function CodePaneView({ pane }: { pane: IPortfolioCodePane }) {
    return (
        <div>
            <div
                className={`font-mono text-[11.5px] tracking-[0.03em] ${
                    pane.highlight
                        ? 'text-secondary'
                        : 'text-muted-foreground/70'
                }`}
            >
                {pane.label}
            </div>
            {pane.note && (
                <p className="mt-2 text-[14px] leading-[1.7] text-muted-foreground">
                    {pane.note}
                </p>
            )}
            <pre className="mt-3 overflow-x-auto rounded-xl border border-border bg-card px-[18px] py-4 font-mono text-[13.5px] leading-[1.7] text-[#D7DBDE]">
                {pane.code.split('\n').map((line, i) => (
                    <CodeLine key={i} line={line} accent={pane.accent} />
                ))}
            </pre>
        </div>
    );
}

function DecisionCard({ d }: { d: IPortfolioDecision }) {
    return (
        <div className="mb-4 rounded-[14px] border border-border bg-[hsl(var(--background-light))] p-[26px]">
            <h3 className="flex items-baseline gap-[11px] text-[19px] font-bold tracking-[-0.01em]">
                <span className="font-mono text-xs font-medium tracking-[0.03em] text-secondary">
                    {d.n}
                </span>
                {d.title}
            </h3>

            <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-[7px] text-[15.5px]">
                {d.rows.map((r) => (
                    <Fragment key={r.label}>
                        <dt className="pt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-muted-foreground/70">
                            {r.label}
                        </dt>
                        <dd className="text-muted-foreground">{r.content}</dd>
                    </Fragment>
                ))}
            </dl>

            {d.code && (
                <div className="mt-[22px]">
                    <div className="mb-3.5 flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-muted-foreground/60">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#C9A227]" />
                        {d.code.tag ?? '핵심 패턴 재현'}
                    </div>
                    <div className="space-y-6">
                        {d.code.panes.map((pane, idx) => (
                            <CodePaneView key={idx} pane={pane} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

/* ── route config ──────────────────────────────────────────── */

export function generateStaticParams() {
    return PORTFOLIO_CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const c = PORTFOLIO_CASES.find((x) => x.slug === slug);
    if (!c) return { title: 'Portfolio — Dobin Shin' };
    return {
        title: `${c.name} · 케이스 스터디 — Dobin Shin`,
        description: c.impact,
    };
}

/* ── page ──────────────────────────────────────────────────── */

export default async function CaseStudyPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const i = PORTFOLIO_CASES.findIndex((x) => x.slug === slug);
    if (i === -1) notFound();

    const c = PORTFOLIO_CASES[i];
    const prev = i > 0 ? PORTFOLIO_CASES[i - 1] : null;
    const next = i < PORTFOLIO_CASES.length - 1 ? PORTFOLIO_CASES[i + 1] : null;

    return (
        <div className="mx-auto max-w-[920px] px-8">
            <Link
                href="/portfolio"
                className="inline-flex items-center gap-2.5 pt-[34px] font-mono text-[12.5px] text-muted-foreground hover:text-secondary"
            >
                ← 케이스 전체
            </Link>

            {/* header */}
            <header className="border-b border-border pb-[42px] pt-[18px]">
                <h1 className="mt-5 font-black-han-sans text-[clamp(34px,5.4vw,52px)] font-normal leading-[1.14] tracking-[-0.01em]">
                    {c.name}
                </h1>
                <p className="mt-5 text-[19px] leading-[1.5] text-muted-foreground">
                    {c.impact}
                </p>
                <p className="mt-6 font-mono text-[12.5px] leading-[1.7] tracking-[0.02em] text-muted-foreground/70">
                    {c.meta}
                </p>

                {c.stats.length > 0 && (
                    <div className="mt-[30px] flex flex-wrap gap-x-[26px]">
                        {c.stats.map((s) => (
                            <div key={s.k} className="py-0.5 font-mono">
                                <span className="text-[21px] font-medium tracking-[-0.01em]">
                                    <Arrowed text={s.v} />
                                </span>
                                <span className="mt-[5px] block text-[11px] uppercase tracking-[0.05em] text-muted-foreground/70">
                                    {s.k}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
            </header>

            {c.draft || c.decisions.length === 0 ? (
                <p className="py-[48px] font-mono text-sm text-muted-foreground/70">
                    이 케이스의 본문은 작성 예정입니다.
                </p>
            ) : (
                <>
                    {c.background.length > 0 && (
                        <section className="border-b border-border py-[48px]">
                            <div className="mb-5">
                                <Eyebrow>배경 &amp; 문제</Eyebrow>
                            </div>
                            {c.background.map((p, idx) => (
                                <p
                                    key={idx}
                                    className="text-muted-foreground [&+p]:mt-3.5"
                                >
                                    {p}
                                </p>
                            ))}
                        </section>
                    )}

                    <section className="border-b border-border py-[48px]">
                        <div className="mb-5">
                            <Eyebrow>접근 &amp; 의사결정</Eyebrow>
                        </div>
                        {c.decisions.map((d) => (
                            <DecisionCard key={d.n} d={d} />
                        ))}
                    </section>

                    {c.results.length > 0 && (
                        <section className="border-b border-border py-[48px]">
                            <div className="mb-5">
                                <Eyebrow>결과</Eyebrow>
                            </div>
                            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-px overflow-hidden rounded-[14px] border border-border bg-border">
                                {c.results.map((r) => (
                                    <div
                                        key={r.k}
                                        className="bg-background p-[22px]"
                                    >
                                        <div className="font-mono text-[23px] font-medium tracking-[-0.01em]">
                                            <Arrowed text={r.v} />
                                        </div>
                                        <div className="mt-2 text-[13px] text-muted-foreground">
                                            {r.k}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {c.learning && (
                        <section className="py-[48px]">
                            <div className="mb-5">
                                <Eyebrow>배움</Eyebrow>
                            </div>
                            <p className="text-[22px] font-bold leading-[1.55] tracking-[-0.02em] before:mb-[22px] before:block before:h-0.5 before:w-[34px] before:bg-secondary before:content-['']">
                                {c.learning.quote}
                            </p>

                            {c.learning.notes &&
                                c.learning.notes.length > 0 && (
                                    <div className="mt-7 space-y-6">
                                        {c.learning.notes.map((n) => (
                                            <div key={n.tag}>
                                                <div className="font-mono text-[11.5px] tracking-[0.03em] text-secondary">
                                                    {n.tag}
                                                </div>
                                                <p className="mt-2 text-[15px] leading-[1.7] text-muted-foreground">
                                                    {n.text}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                            {c.learning.code && (
                                <div className="mt-6">
                                    <CodePaneView pane={c.learning.code} />
                                </div>
                            )}
                            {c.learning.note && (
                                <p className="mt-5 text-muted-foreground">
                                    {c.learning.note}
                                </p>
                            )}
                        </section>
                    )}
                </>
            )}

            {/* prev / next */}
            <nav className="flex justify-between border-t border-border pt-9 font-mono text-[13px]">
                {prev ? (
                    <Link
                        href={`/portfolio/${prev.slug}`}
                        className="text-secondary hover:text-foreground"
                    >
                        ← {prev.name}
                    </Link>
                ) : (
                    <span />
                )}
                {next ? (
                    <Link
                        href={`/portfolio/${next.slug}`}
                        className="text-secondary hover:text-foreground"
                    >
                        {next.name} →
                    </Link>
                ) : (
                    <span />
                )}
            </nav>
        </div>
    );
}
