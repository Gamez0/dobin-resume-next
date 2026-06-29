/* ───────────────────────────────────────────────────────────
 * 아래 블록을 기존 types/index.ts 에 그대로 이어 붙이세요.
 * (기존 IProject 등과 같은 파일에서 export 되도록)
 * ─────────────────────────────────────────────────────────── */

export interface IPortfolioStat {
    v: string; // 값 (예: '6곳 → 1곳', '0%') — → ↓ 는 화면에서 강조 처리
    k: string; // 라벨 (예: '정규화 지점')
}

export interface IPortfolioCodePane {
    label: string;
    note?: string; // 이 조각을 설명하는 산문 (코드 위에 표시)
    code?: string;
    accent?: string; // 코드 내 이 문자열을 시안색으로 강조
    highlight?: boolean; // 라벨을 시안색으로 (핵심/해결 조각)
}

export interface IPortfolioDecisionRow {
    label: string; // 상황 / 선택지 / 결정 / 트레이드오프 — 있는 것만
    content: string;
}

export interface IPortfolioDecision {
    n: string; // '결정 ①' 또는 '접근' 등
    title: string;
    rows: IPortfolioDecisionRow[];
    code?: {
        tag?: string;
        panes: IPortfolioCodePane[]; // 1~N 조각 (before / after / 결과 등)
    };
}

/** 배움의 태그 달린 산문 블록 */
export interface IPortfolioLearningNote {
    tag: string; // 작은 라벨 (예: '구조 > 도구', '어떻게 미리 알았나')
    text: string;
}

export interface IPortfolioCase {
    slug: string; // IProject.slug 와 통일 (예: 'shinhan-renewal')
    no: string; // '_01.'
    name: string;
    impact: string;
    meta: string; // 역할 · 기간 · 스택 한 줄
    theme: string; // 인덱스 카드용 한 줄
    tags: string[]; // 인덱스 카드 태그
    stats: IPortfolioStat[];
    background: string[];
    decisions: IPortfolioDecision[];
    results: IPortfolioStat[];
    learning?: {
        quote: string;
        notes?: IPortfolioLearningNote[]; // 태그 블록들 (권장)
        note?: string; // 단순 한 문단용 (호환)
        code?: IPortfolioCodePane; // 배움에 코드가 필요할 때만
    };
    metric: { big: string; sub?: string }; // 인덱스 카드 우측 지표
    draft?: boolean;
}
