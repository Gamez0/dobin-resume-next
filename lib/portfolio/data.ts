import { IPortfolioCase } from '@/types/portfolio';

/**
 * /portfolio 케이스 단일 소스.
 * 배열 순서가 _01/_02/_03 과 이전·다음 네비 순서를 정함.
 * - 신한: 실제 내용 채움.
 * - 상생/포자: 헤더(실제 숫자)만. 본문은 draft → 추후 작성.
 */
export const PORTFOLIO_CASES: IPortfolioCase[] = [
    // (배경 + ① 까지 반영 / ②③·결과·배움은 추후 — draft 는 풀되 본문 일부만 채운 상태)
    {
        slug: 'sspb',
        no: '_01.',
        name: '상생페이백',
        impact: '전국민이 한 번에 몰리는 트래픽을, 서버 증설이 아니라 구조로 흡수했습니다.',
        meta: 'FE Tech Lead (4인 리드) · 2025.06–11 · React · React Router · zustand · react-query · GitLab CI',
        theme: '전국민이 한 번에 몰리는 트래픽을, 서버 증설이 아니라 구조로 흡수했습니다.',
        tags: ['React Router', 'zustand', 'react-query', 'CDN 분산'],
        stats: [
            { v: '1,564만', k: '누적 신청' },
            { v: '600만', k: 'MAU' },
            { v: '200대 → 30대', k: '서버' },
            { v: '0', k: '다운타임' },
        ],
        background: [
            `상생페이백은 전국민이 대상이라, 오픈과 동시에 수천만이 한 번에 몰리는 서비스였어요. 그런데 인프라는 NHN 계약으로 서버를 마음대로 늘릴 수도, SSR을 쓸 수도 없었어요. 게다가 정책이 3일마다 바뀌었고, 그 변경을 여러 팀원이 동시에 쳐내야 했어요. 그래서 우선순위가 분명했어요. 체감 속도를 끌어올리는 교과서적 최적화보다, 사용자가 한꺼번에 쏟아져도 전부에게 실패 없이 deliver하는 것. 그래서 무겁게 다듬기보다 가볍게 만드는 데 초점을 뒀어요. 대규모는 트래픽만이 아니라, 변경과 협업의 규모이기도 했어요.`,
        ],
        decisions: [
            {
                n: '①',
                title: '접속이 안 죽게 · web을 비우고 CDN으로',
                rows: [
                    {
                        label: '해결',
                        content:
                            'web 서버엔 index.html 한 장만, 정적 리소스는 전부 CDN으로. 첫 화면 속도(LCP/FCP)를 일부 양보하는 대신, 트래픽이 몰려도 web 서버가 죽지 않는 구조를 택함',
                    },
                ],
                code: {
                    tag: '구조 재현 · 회사 코드 아님',
                    panes: [
                        {
                            label: 'CDN / web 분리 구조',
                            note: '트래픽이 몰리면 web 서버부터 죽어요. 그래서 web엔 index.html 한 장만 두고, js·css·이미지·폰트는 전부 CDN으로 내보냈어요. CDN은 사용자와 가까운 엣지에 여러 대로 분산돼 있어, 수천만이 몰려도 그 부하를 나눠 받아내요. web 서버는 "파일 한 장 던지는" 역할만 남죠.',
                            code: `사용자
  │
  ▼
[ web ]  index.html 한 장만
  │
  │  js · css · 이미지 · 폰트
  ▼
[ CDN ]  사용자 가까운 엣지 · 여러 대로 분산
         ◀ 몰리는 트래픽을 나눠서 흡수`,
                        },
                        {
                            label: '왜 LCP를 양보했나',
                            highlight: true,
                            note: '보통 Next.js+Vercel처럼 SSR로 완성된 HTML을 내려주면 첫 화면이 빨라요(LCP↑). 하지만 그건 서버가 매 요청마다 렌더링을 떠안는 모델이라, 트래픽이 몰리면 서버가 부하를 받아요. 우리는 인프라가 고정이라 증설로 못 풀었어요. 그래서 반대로 갔어요 — 첫 화면 속도를 일부 내주고, 서버가 트래픽을 아예 안 떠안는 CSR+CDN. 인프라를 못 늘리는 환경에선, 속도를 내주고 안정성을 사는 게 맞았어요. 이 경량 구조가 기반이 돼, 인프라팀과 함께 서버를 200대→30대 규모로 줄여 운영했어요.',
                            code: `                SSR (Next+Vercel)    상생 (CSR + CDN)
 ──────────────────────────────────────────────────
 첫 화면 LCP     빠름                 불리 (JS 받고 렌더)
 서버 부하       매 요청 렌더          없음 (파일 한 장)
 트래픽 폭주     증설로 대응           web이 죽지 않음`,
                        },
                    ],
                },
            },
            // lib/portfolio/data.ts — sspb.decisions 배열에서 ① 객체 다음에 아래 ② 객체를 추가하세요.

            {
                n: '②',
                title: '잦은 변경을 감당하게 · 이른 공통화를 미루다',
                rows: [
                    {
                        label: '해결',
                        content:
                            '정책이 3일마다 바뀌고 정책 로직 대부분이 한 곳에서만 쓰이는 환경. 이른 공통화는 결합도만 높인다고 보고, 로직과 화면을 한 컴포넌트에 모아 변경이 와도 한 곳만 보게 함',
                    },
                ],
                code: {
                    tag: '구조 재현 · 회사 코드 아님',
                    panes: [
                        {
                            label: '공통화 (안 택함)',
                            note: '비슷해 보이는 영역을 잘게 분리하고 정책 로직을 공통 훅으로 빼면 깔끔해 보여요. 하지만 결합도가 생겨요. 예를 들어 "환급액 표시를 Title에서 Card로 옮겨라"는 변경이 오면 — Title에서 빼고, Card에 넣고, 공통 훅 인터페이스까지 세 곳을 맞춰 고쳐야 해요. 정책이 자주 바뀌는 환경에선 이런 변경이 계속 번져요.',
                            code: `// 영역은 잘게 나누고, 정책 로직은 공통 훅으로


const HomeDashboard = () => {
    const {policy} = useDashboardPolicy();  // 정책 계산 공통화
    return(
        <>
            <HomeDashboardTitle />    {/* 환급액 표시 */}
            <HomeDashboardCard />     {/* 신청 현황 */}
            <HomeDashboardNotice />   {/* 안내 문구 */}
        </>
    )
};

// "환급액을 Title → Card로" 변경이 오면
const HomeDashboardTitle = () => {
  // - 환급액 표시            (빼고)
};
const HomeDashboardCard = () => {
  // + 환급액 표시            (넣고)
};
const useDashboardPolicy = () => {
  // 환급액 계산 위치도 조정   (맞추고)
};`,
                        },
                        {
                            label: '중복 허용 · 한 곳에 모으기 (택함)',
                            highlight: true,
                            note: '그래서 로직과 화면을 한 컴포넌트에 모아 뒀어요. 같은 변경("환급액을 제목 옆에서 카드로")이 와도 이 안에서 위치만 옮기면 끝이에요. 게다가 홈 대시보드 정보는 다른 화면에서 다시 쓰는 게 아니라, 공통화로 얻을 재사용 이득도 없었어요. 재사용은 없고 결합도만 생기는 공통화라면, 차라리 중복을 감수하고 한 곳에 모으는 게 변경에 유리했어요.',
                            code: `const HomeDashboard = () => {
  const { policy } = usePolicy();
  const amount = policy.isExtra ? calcExtra() : calcBase();

  return (
    <>
      <h2>{policy.title}</h2>
      {/* 환급액 · 신청 현황 · 안내를 한 곳에서 */}
    </>
  );
};`,
                        },
                        {
                            label: '그 대가',
                            note: '이 판단으로 1564만 신청을 큰 장애 없이 쳐냈어요 — 변경이 와도 손댈 곳이 명확했거든요. 하지만 대가도 있었어요. 시간이 지나며 HomeDashboard가 비대해졌고, 신규 팀원이 이해하는 데 오래 걸렸어요. 더 아쉬운 건 타이밍이었어요. 어느 순간부터 "이 영역은 이제 안 바뀌는구나" 하는 패턴이 보였는데, 그때 분리를 시작했어야 했어요. 마음먹었을 땐 이미 너무 커져서 분리 자체가 부담이 됐거든요.',
                        },
                    ],
                },
            },
            {
                n: '③',
                title: '여러 손이 같이 짓게 · 통제할 건 풀고, 못 할 건 길들이고',
                rows: [
                    {
                        label: '해결',
                        content:
                            '통제할 수 있는 건 선을 그어 풀어주고(타입), 통제 못 하는 외부 의존은 격리하거나 그 동작 전제를 맞춰 안전하게 들임. 여러 손과 외부가 얽혀도 안전하게 합류하도록',
                    },
                ],
                code: {
                    tag: '구조 재현 · 회사 코드 아님',
                    panes: [
                        {
                            label: '통제 못 하는 외부 솔루션',
                            note: '간편인증·보안키패드·휴대폰인증 같은 외부 솔루션은 우리 통제 밖이었어요. 어떤 업체는 난독화된 파일만 던졌고, "React에서 됩니다"라더니 막상 생명주기와 안 맞기도 했고요. 그래서 솔루션마다 다르게 길들였어요. JS로 온 건 TS로 감싸고, 생명주기 밖에서 도는 건 React 안으로 끌어왔어요. 간편인증은 문서가 없어, 잘 붙인 다른 서비스들을 역으로 분석해 맞췄고요. 보안키패드가 특히 까다로웠어요. "React 된다"는 말과 달리 window 객체 기반이라, 올라가긴 해도 생명주기 밖에서 돌았어요. 그래서 일부 사용자의 카드번호가 제대로 넘어가지 않는 사고가 났는데, 재현조차 어려웠죠. cleanup을 비롯해 React식으로 다 시도해도 안 됐어요. 원인은 전제의 차이였어요 — 그 솔루션은 라우트가 바뀌면 페이지가 새로고침된다고 가정하는데, React는 SPA라 라우트가 바뀌어도 새로고침이 없거든요. 그래서 그 구간만 하드 리로딩으로, 솔루션이 기대하는 환경을 SPA 안에서 만들어 줬어요.',
                        },
                        {
                            label: 'TS, 어디까지 강제할까',
                            highlight: true,
                            note: '팀에 TS가 익숙잖은 분도 있었고, 따로 가르칠 시간은 없었어요. 그렇다고 모든 곳에 타입을 강제하면 부담만 커요 — 추론이 대부분 메워주니까요. 그래서 선을 그었어요. 파일은 .ts/.tsx로, 함수 반환 타입과 API 응답 타입만 명시. 나머지는 추론에 맡겨, 효과는 챙기고 진입 장벽은 낮췄어요.',
                            code: `// 강제하는 것 — 경계만
//  · 파일은 .ts / .tsx
//  · 함수 반환 타입 명시
//  · API 응답 타입 선언

const getRefund = async (): Promise<RefundResponse> => { ... }

// 나머지(지역 변수 등)는 추론에 맡김 — 강제 안 함
const total = items.reduce((a, b) => a + b.amount, 0)  // number 추론`,
                        },
                        {
                            label: '팀원의 제안을 함께 다듬다',
                            note: '폰트는 리소스 중에서도 가장 무거운 축이었어요. Pretendard를 regular·medium·semibold·bold 네 굵기로 쓰는데, subset 안 한 woff2는 굵기당 773KB라 통으로 받으면 4종에 3MB에 달했거든요. 퍼블리셔 분이 이걸 줄일 방법을 제안했고, 저는 그 제안을 검토해 부족한 부분을 보완한 뒤 채택했어요. 외부 CDN으로 받는 초기안은 의존이 위험해 backup 폰트를 함께 뒀고, dynamic subset으로 실제 쓰는 글자 청크만 받게 해 폰트 로드를 수백 KB대로 줄였어요. 팀원의 아이디어를 조직적으로 다듬어 경량화로 연결한 케이스예요.',
                        },
                    ],
                },
            },
        ],
        results: [
            { v: '0', k: '다운타임' },
            { v: '200대 → 30대', k: '서버 운영 규모' },
            { v: '1,564만', k: '신청 전부 처리' },
            { v: '600만', k: 'MAU 안정 운영' },
        ],
        resultsNote: `그렇게 서버를 늘리지 않고도 전국민 트래픽을 무중단으로 받아냈어요. 가볍게 만든 구조(①), 변경을 한 곳에 모은 선택(②), 외부와 여러 손을 안전하게 합류시킨 방식(③)이 함께 받친 결과예요.`,
        learning: {
            quote: 'best practice를 무조건 따르기보다, 상황에 맞게 적용할 줄 아는 게 중요했다.',
            notes: [
                {
                    tag: 'best practice는 규칙이 아니라 도구',
                    text: '컴포넌트를 잘게 나누고, 공통화하고, 타입을 강제하는 건 다 이유가 있는 best practice예요. 하지만 그건 목적을 위한 도구지 그 자체가 목적이 아니에요. HomeDashboard를 title·card로 쪼개는 게 보통은 맞지만, 기획이 3일마다 바뀌는 환경에선 이른 분리가 변경을 더 번지게 해요. 그래서 best practice를 알되, 이 조건에서 그게 목적에 맞는지를 먼저 물었어요.',
                },
                {
                    tag: '기준은 코드가 아니라 목적',
                    text: 'SSR로 LCP를 높이고, 공통화로 중복을 줄이는 건 좋은 코드의 기준이에요. 하지만 상생의 목적은 전국민이 한꺼번에 몰려도 전부 안전하게 쓰는 것이었어요. 그 목적에서 거꾸로 보면, 더 좋아 보이는 선택이 오히려 독일 때가 있었고요. 좋은 코드인지보다, 이 목적에 복무하는지를 기준으로 삼았어요.',
                },
            ],
        },
        metric: { big: '무중단 운영', sub: '1,564만 신청 · 600만 MAU' },
        draft: false,
    },

    {
        slug: 'shinhan-renewal',
        no: '_02.',
        name: '신한은행',
        impact: '표현이 제각각이던 플래그를, 화면이 몰라도 되게 한 곳에서 정규화했습니다.',
        meta: '프론트엔드 (프리랜서) · 2025.05 · 1개월 · React · react-query · TypeScript · Next.js · pnpm 모노레포',
        theme: '같은 상품군 안에서도 제각각이던 플래그를, 화면이 몰라도 되게 정규화 계층으로 끊어냈습니다.',
        tags: ['react-query', 'select', 'TypeScript'],
        stats: [{ v: '6곳 → 1곳', k: '정규화 지점' }],
        background: [
            `신한은행의 100여 종 금융상품 조회 서비스가 오래 운영되며 규제가 바뀌고 신·구 상품이 누적된 탓에, 같은 의미의 플래그조차 상품마다 'Y' · '1' · boolean · undefined로 제각각 들어왔어요. 정작 이를 받아주는 정규화 계층은 없어, 값이 필요한 곳마다 직접 비교했고 — 상품이 늘수록 그 비교도 늘어 분기가 곳곳에 쌓였어요. 결국 규제나 상품이 하나 바뀔 때마다 흩어진 여러 곳을 함께 고쳐야 했죠. 상품과 규제가 계속 느는 금융 도메인에선, 이렇게 흩어진 분기는 새 상품·규제마다 수정 누락 위험으로 쌓여요. 금융 데이터라 계산 오차는 0이어야 했고요.`,
        ],
        decisions: [
            {
                n: '접근',
                title: 'untyped(stringly-typed) 플래그를 정규화로',
                rows: [
                    {
                        label: '해결',
                        content:
                            '각 쿼리의 select에서 값을 boolean으로 정규화. 화면은 값을 직접 비교하지 않고 정규화된 값만 소비하고, 새 상품·규제가 와도 수정은 select 한 곳',
                    },
                ],
                code: {
                    tag: '회사 코드 아님 · 핵심 패턴 재현',
                    panes: [
                        {
                            label: 'before · 형식 비교가 흩어진 상태',
                            note: `같은 의미의 플래그인데 상품마다 'Y' · '1' · boolean으로 제각각이고, 이걸 받아줄 정규화 계층도 없어 묻는 곳마다 값을 직접 비교하고 있었어요. 그러다 보니 'y' 하나에도 조용히 어긋나고 — 금융에선 곧 계산 오차예요 — 상품이 추가·삭제될 때마다 흩어진 비교문도 여러 곳에서 고쳐야 했고요.`,
                            code: `if (raw.인터넷가입여부 === 'Y') { /* 외화 */ }
if (raw.상품신규방법_인터넷 === '1') { /* 예금 */ }
if (flag === 'Y' || flag === '1') { /* 또 다른 곳 */ }`,
                        },
                        {
                            label: 'after · react-query select로 정규화',
                            highlight: true,
                            note: '그래서 react-query의 select에서 untyped(stringly-typed) 플래그를 boolean으로 정규화해요. 정규화 책임을 select로 분리하면, 화면은 받아온 data를 가공하지 않고 정규화된 값만 소비해요.',
                            accent: 'toBool',
                            code: `const toBool = (v: unknown): boolean =>
  v === 'Y' || v === '1' || v === true   // 'N'·'0'·undefined → false

select: (raw): ForexData => ({
  ...raw,
  canJoinOnline: toBool(raw.인터넷가입여부),
})`,
                        },
                        {
                            label: '화면 · 좁혀서 소비',
                            note: '화면은 상품구분으로 쓸 data만 좁히고(displayData), 표현은 몰라도 정규화된 값을 그대로 소비해요.',
                            accent: 'displayData',
                            code: `const displayData =
  isS01 ? s01Data :
  isS02 ? depositData :
  isFX  ? forexData : etcData

if (displayData?.canJoinOnline) { /* 비교문 없이 소비 */ }`,
                        },
                    ],
                },
            },
        ],
        results: [{ v: '6곳 → 1곳', k: '정규화 지점' }],
        learning: {
            quote: '좋은 코드는 좋은 도구가 아니라, 변경에 강한 구조에서 나온다.',
            notes: [
                {
                    tag: '구조 > 도구',
                    text: '이 정규화가 버틴 건 react-query라서가 아니라, 값을 받는 길목 한 곳에 책임을 모은 구조 때문이었어요. 레거시 프레임워크였어도 정규화하고 화면에서 직접 비교만 안 했다면 변경에 강했을 거고, 반대로 React를 써도 정규화 없이 화면이 다 떠안았다면 고치기 어렵고 버그도 잦았을 거예요.',
                },
                {
                    tag: '어떻게 미리 알았나',
                    text: '그렇게 미리 구조를 잡을 수 있던 건 도메인을 이해한 덕이었어요. 그 코드를 짜던 순간엔 당장 바뀌는 게 없었고 문서도 없었지만, 금융 규제가 바뀔 때마다 요건이 변하고 그에 따라 API 응답 구조도 누적되며 바뀌어 왔다는 걸 읽을 수 있었거든요. 그래서 앞으로의 변경을 미리 대비해 정규화 계층을 둔 거예요.',
                },
            ],
        },
        metric: { big: '6곳 → 1곳', sub: '계산 오차율 0%' },
    },

    // lib/portfolio/data.ts — pozalabs 객체를 아래로 교체하세요.
    // (배경 + decision ① Lighthouse 까지 반영 / decision ② ISR·결과·배움은 추후 — draft 유지)

    {
        slug: 'pozalabs',
        no: '_03.',
        name: '포자랩스',
        impact: '감이 아니라 측정으로 최적화하고, 외주 레거시를 핵심 흐름부터 점진 이관했습니다.',
        meta: '프론트엔드 · 2022.08–2024.08 · Next.js · react-query · 디자인 시스템 · Mixpanel',
        theme: '감이 아니라 측정으로 최적화하고, 외주 레거시를 핵심 흐름부터 점진 이관했습니다.',
        tags: ['Next.js', 'ISR', '디자인 시스템', 'Mixpanel'],
        stats: [
            { v: '80%↓', k: '초기 진입' },
            { v: '4배', k: 'CTR' },
            { v: '90–100', k: 'Lighthouse' },
        ],
        background: [
            `포자랩스의 음원 유통 서비스는, 같은 일을 하는 여러 스택이 혼재한 코드를 인계받은 상태였어요 (jQuery·Bootstrap·styled 등이 섞여 있었죠). 이렇게 눈으로 보이는 건 정리하면 되지만, 체감상 느린 원인은 어디인지 분명하지 않았어요. 이런 건 감으로 손대면 엉뚱한 곳을 고치기 쉬워요. 그래서 보이는 건 정리하되, 나머지는 추측 대신 측정으로 진짜 병목부터 찾기로 했어요.`,
        ],
        decisions: [
            {
                n: '①',
                title: 'Lighthouse 90~100 · 측정으로 병목을 풀다',
                rows: [
                    {
                        label: '해결',
                        content:
                            '추측 대신 도구마다 다른 각도로 측정해 병목을 찾고, 지표별 원인을 하나씩 처리. 인계받은 서비스를 Performance 90점대로, 처음부터 측정을 기준으로 설계한 신규 프로젝트를 100점 근처로',
                    },
                ],
                code: {
                    tag: '구조 재현 · 회사 코드 아님',
                    panes: [
                        {
                            label: '무엇으로 측정했나',
                            highlight: true,

                            note: '체감상 느린 걸 추측으로 손대면 엉뚱한 데를 고치기 쉬워요. 그래서 도구마다 다른 각도로 측정했어요. 각 도구가 보는 게 달라서, 겹쳐 보면 "느리다"가 "이 요청이 저걸 막아서 느리다"로 구체화돼요.',
                            code: `측정 도구             무엇을 보나
──────────────────────────────────────────────
Lighthouse           지표 · 종합 진단 (LCP·FCP·CLS)
WebPageTest          워터폴 — 어떤 요청이 뒤를 막는지
Chrome Performance   메인 스레드 — 어디서 멈추는지
React Profiler       불필요한 리렌더 — 어떤 컴포넌트인지`,
                        },
                        {
                            label: 'render-blocking · 304  (워터폴로 발견)',
                            highlight: true,

                            note: '워터폴을 보니 동기 스크립트가 렌더를 막고 있었어요. 급하지 않은 스크립트는 defer로, 독립적인 건 async로 돌려 차단을 풀었어요. 또 인증 URL이 바뀌며 304를 반복하던 요청이 있었는데 — 304를 만나 다시 요청하는 동안 뒤 리소스까지 막고 있었어요. 바뀐 URL로 정리해 그 재요청을 없앴어요.',
                            code: `<!-- before: 동기 script가 파싱·렌더를 막음 -->
<script src="/vendor.js"></script>

<!-- after: 렌더 차단 없이 로드 -->
<script src="/vendor.js" defer></script>
<script src="/analytics.js" async></script>`,
                        },
                        {
                            label: '불필요한 리렌더  (React Profiler로 발견)',
                            highlight: true,
                            note: 'React Profiler로 불필요하게 리렌더되는 영역을 찾았어요. 전부 최적화하기보다, 리렌더가 잦은 곳을 우선순위로 골라 컴포넌트를 분리했어요 — 재생 상태를 구독하는 부분만 안쪽으로 밀어, 부모와 형제(리스트)는 리렌더되지 않게요.',
                            code: `// before: 재생 상태가 바뀔 때마다 부모까지 통째로 리렌더
const Player = () => {
  const { currentTime } = usePlayback();   // 매 프레임 갱신
  return (
    <div>
      <Waveform time={currentTime} />   {/* 이것만 바뀌면 되는데 */}
      <TrackList />                     {/* 같이 리렌더됨 */}
    </div>
  );
};

// after: 자주 바뀌는 부분만 분리해 리렌더 범위를 좁힘
const Player = () => (
  <div>
    <WaveformContainer />   {/* 재생 상태 구독은 이 안에서만 */}
    <TrackList />           {/* 리렌더 안 됨 */}
  </div>
);`,
                        },
                        {
                            label: '이미지 · 폰트 로딩  (Lighthouse로 발견)',
                            highlight: true,

                            note: '이미지·폰트가 늦게 들어오며 화면을 밀어내던 게(reflow·CLS) 있었어요. next/image로 크기를 잡고 포맷을 WebP로 통일했어요. 상단 이미지는 priority로 먼저, 하단은 lazy로 미뤘고, 폰트는 preload로 늦게 바뀌는 문제(FOUT)를 없앴어요.',
                            code: `// 상단(첫 화면): 먼저 로드
<Image src={hero} priority alt="..." />

// 하단: 뷰포트에 들어올 때 로드
<Image src={thumb} loading="lazy" alt="..." />

// 폰트: 미리 받아 늦게 바뀌는 것(FOUT) 방지
<link rel="preload" href="/fonts/pretendard.woff2"
      as="font" crossOrigin="" />`,
                        },
                        {
                            label: '그래서 도달한 점수',
                            highlight: true,

                            note: '이렇게 지표별 병목을 풀어, 인계받은 서비스를 Performance 90점대로 올렸어요. 이 경험으로 "감이 아니라 측정에서 시작한다"가 몸에 뱄고, 이후 새로 시작한 Next.js 프로젝트는 처음부터 측정을 기준으로 설계해 100점에 근접시켰어요.',
                        },
                    ],
                },
            },
            // 1) lib/portfolio/data.ts — pozalabs.stats 에서 '초기 진입' 라벨을 '미리듣기 대기' 로 변경
            //    { v: '80%↓', k: '초기 진입' }  →  { v: '80%↓', k: '미리듣기 대기' }

            // 2) pozalabs.decisions 배열에서 ① 객체 다음에 아래 ② 객체를 추가하세요.

            {
                n: '②',
                title: '미리듣기가 느리다 · 매번 도는 왕복을 걷어내다',
                rows: [
                    {
                        label: '해결',
                        content:
                            '레퍼런스는 고정인데 음원 URL만 10분 주기로 바뀌어, 진입마다 API 체인을 새로 돌던 구조. ISR로 결과를 주기에 맞춰 미리 만들어 두고, 진입 시엔 왕복 없이 바로 내려주게 함',
                    },
                ],
                code: {
                    tag: '구조 재현 · 회사 코드 아님',
                    panes: [
                        {
                            label: '문제 · 진입마다 도는 왕복',
                            highlight: true,
                            note: '미국에서 "음원 미리듣기가 너무 느리다"는 피드백을 받았어요. 흐름을 뜯어보니 — 레퍼런스 API는 음원을 바로 주지 않고, 음원 URL을 얻기 위한 값만 갖고 있었어요. 그 값으로 음원 API를 한 번 더 호출해야 실제 URL이 나왔고요. 게다가 그 음원 URL은 10분마다 바뀌어서, 진입할 때마다 이 왕복을 새로 해야 했어요. 병목 상당수가 백엔드·기존 설계 영역이었지만, 넘기지 않고 호출 흐름 전체를 직접 따라가 봤어요.',
                            code: `진입할 때마다:

[ 레퍼런스 API ]   음원 URL을 얻기 위한 값만 있음
       │
       ▼
[ 음원 API ]       실제 음원 URL — 10분마다 바뀜
       │
       ▼
    첫 화면         매 진입마다 이 왕복을 새로
                   (느린 망에서 지연 ↑)`,
                        },
                        {
                            label: '통찰 · 바뀌는 건 음원 URL뿐',
                            highlight: true,
                            note: '여기서 한 가지가 보였어요. 레퍼런스 자체는 바뀌지 않았고, 바뀌는 건 음원 URL뿐이었어요 — 그것도 10분 주기로요. 그렇다면 매 진입마다 체인을 도는 건 낭비였어요. 그래서 Next.js ISR로, 이 결과를 주기에 맞춰 미리 만들어 두고 진입 시엔 바로 내려주게 했어요. 재생성 주기는 URL 수명보다 짧게 잡아, 만료된 URL이 나가지 않게 했고요. 매번 돌던 왕복이 사라지면서, 사용자가 음원을 들어보기까지 기다리는 시간을 약 80% 줄였어요.',
                            code: `// Next.js 13 (pages router) — getStaticProps + revalidate (ISR)
export const getStaticProps = async () => {
  const data = await getPreview();   // 재생성 시점에만 체인 실행
  return {
    props: { data },
    revalidate: 300,  // 음원 URL 수명(10분)보다 짧게 — 만료 전 갱신
  };
};`,
                        },
                    ],
                },
            },
        ],
        results: [
            { v: '90–100', k: 'Lighthouse Performance' },
            { v: '80%↓', k: '미리듣기 대기' },
            { v: '4배', k: 'CTR' },
        ],
        resultsNote:
            '측정으로 병목을 특정하고(①), 낭비되던 요청을 걷어내(②) 인계받은 서비스의 성능을 끌어올렸어요.',
        learning: {
            quote: "최적화는 '느리다'를 '무엇 때문에 느리다'로 좁히는 데서 시작해요.",
            notes: [
                {
                    tag: '감이 아니라 원인을 짚는다',
                    text: '체감상 느린 걸 추측으로 손대면 엉뚱한 데를 고치기 쉬워요. 그래서 도구로 측정해 "이 요청이 저걸 막아서 느리다"처럼 원인을 특정하고서야 정확히 고칠 수 있었어요. 원인이 늘 제 코드 안에 있는 것도 아니었고요 — 데이터가 오는 구조(음원 URL이 10분마다 바뀌던 것)를 읽어야 보이는 병목은, 담당 영역을 넘어 흐름 전체를 따라가야 찾을 수 있었어요.',
                },
                {
                    tag: '90점은 목표가 아니라 지표예요',
                    text: '최적화를 하며 분명해진 게 있어요. 90점은 목표가 아니라 지표였어요. 진짜 목표는 사용자가 겪는 경험을 낫게 하는 것이고요. 포자랩스에선 점수는 좋았지만 사용자에게 닿지 못한 제품도 겪었고, 그 경험까지 더해 좋은 점수보다 사용자에게 가치가 닿는 게 진짜 목표라는 걸 배웠어요. (이 이야기는 궁금하시면 면접에서 여쭤봐 주세요.)',
                },
            ],
        },
        metric: { big: '진입 80%↓', sub: 'CTR 4배 · Lighthouse 90–100' },
        draft: false,
    },
];
