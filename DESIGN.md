---
version: alpha
name: 전민 연구 기록
description: 정신건강의학과 교수 전민의 논문 아카이브. 논문 한 편 한 편을 측정 기록지의 점과 박동으로 남겨, 연구가 무엇을 재 왔고 어디로 옮겨 가는지 보여 준다.
colors:
  light:
    bg: "#f7f7f5"          # 기록지 바탕
    surface: "#ffffff"     # 패널(기록지 칸), 버튼 바탕
    tint: "#eff0f1"        # 참고 상자, 사분위 띠, 막대 바탕
    ink: "#121417"         # 본문, 먹선, 눌린 버튼 (bg 위 17.2:1)
    ink-2: "#4b5058"       # 보조 글 (7.6:1)
    meta: "#646a73"        # 캡션, 축 숫자, 라벨 (bg 5.1:1, tint 4.8:1)
    line: "#dcdedf"        # 구분선
    line-2: "#c4c7ca"      # 버튼 테두리, 밑줄
    mark: "#9aa0a6"        # 패널 모서리 십자(장식, 정보 없음)
    grid-minor: "#eef0f1"  # 기록지 눈금(작은 칸)
    grid-major: "#dde1e4"  # 기록지 눈금(큰 칸)
    signal: "#d93a40"      # 측정 표식: 파형, 측정값 점, 큰 수치 (surface 위 4.5:1)
    signal-ink: "#b4232a"  # 빨강으로 쓰는 작은 글자: '전민 주도', 측정값 숫자 (6.1:1)
    signal-soft: "#f8e1e2" # 신뢰구간 띠, 글자 선택
    ok: "#2f6b46"          # 퀴즈 정답 테두리에만
  dark:
    bg: "#171b20"
    surface: "#1d2228"
    tint: "#232930"
    ink: "#e7e9ec"         # 14.2:1
    ink-2: "#b4bac2"       # 8.9:1
    meta: "#959ca5"        # 6.2:1 (tint 5.3:1)
    line: "#2f363e"
    line-2: "#3d454e"
    mark: "#5d6670"
    grid-minor: "#20262d"
    grid-major: "#2b323a"
    signal: "#ff6a6f"      # 5.8:1
    signal-ink: "#ff8a8e"  # 7.1:1
    signal-soft: "#3d2629"
    ok: "#7fcf9b"
typography:
  sans: { fontFamily: "IBM Plex Sans KR, Pretendard, Apple SD Gothic Neo, Malgun Gothic, sans-serif", use: "제목, 본문, 라벨 전부" }
  num: { fontFamily: "IBM Plex Mono, ui-monospace, Menlo, monospace", use: "연도, 축 숫자, 측정값, 표의 수치만" }
  scale:
    home-core: "clamp(26px, 3.4vw, 44px) / 600 / 1.32"
    post-h1: "clamp(27px, 4.2vw, 40px) / 600 / 1.32"
    h2: "clamp(21px, 3vw, 28px) / 600 / 1.4, 위에 1px 먹선"
    h3: "17.5px / 600"
    body: "16.5px / 1.8 (글), 16px / 1.6 (홈), 모바일 16px"
    lede: "18px / 1.75, ink-2"
    meta: "13-14px, meta"
    stat: "26px num, signal-ink"
rounded:
  r: 0                     # 모든 면 직각. 원은 기록지의 점, 측정값 점, 테마 아이콘뿐
spacing:
  gutter: 24px (모바일 16px)
  section: 72px (모바일 48px)
  block: 20-24px
layout:
  home: 1200px, 섹션 머리는 3/9 분할(왼쪽 제목, 오른쪽 설명)
  post: 800px 한 단
---

# 전민 연구 기록: 디자인 계약서

새 페이지나 글을 만들기 전에 이 파일을 먼저 읽는다. 색과 모양은 `assets/site.css`의 토큰과 부품만 쓴다. 토큰 이름은 바꾸지 않고 값만 바꾼다(글 16편이 토큰 이름에 기대고 있다).

## 개요

전민의 논문은 처음에 혈액과 척도로 한 시점의 값을 재다가, 2023년부터 걸음 수, 얼굴 영상 심박변이도, 목소리, 일상 언어처럼 계속 흐르는 신호를 읽는 쪽으로 옮겨 간다. 사이트의 모습은 이 세계의 사물인 **측정 기록지**(심전도 용지, 검사 기록지)에서 가져왔다. 칸이 있는 기록지 패널, 모서리 십자 표시, 1px 먹선, 축 숫자의 고정폭, 그리고 빨간 파형 하나.

방향은 design-pick의 `web-blueprint-grid` 팩에서 시작해 이 주제에 맞게 고쳤다(아래 '팩에서 바꾼 것'). 사용자가 미리보기 B(측정 기록지)를 골랐다.

## 시그니처: 연구 기록지(홈)

사이트 전체에 하나뿐인 시그니처. 홈의 `#sheet`.

- **점(채널 1, 검체와 척도)**: 혈액, 골밀도, 설문 같은 한 시점 지표 논문 한 편이 속 빈 점 하나. 연도 칸에 아래에서 위로 쌓는다. 전민 주도(제1, 공동 제1, 교신, 공동 교신저자) 논문은 먹색으로 채운 점, 맨 아래 왼쪽부터.
- **박동(채널 2, 연속 신호)**: 디지털 신호 논문(시기 P4) 한 편이 빨간 파형의 박동 하나. 첫 디지털 논문이 나온 해(2023)까지는 평탄선, 그 뒤로 논문 수만큼 박동이 뛴다. 전민 주도 논문은 더 높은 박동과 꼭대기의 먹색 점.
- **축**: 연도와 그해 논문 수(고정폭). 2023년에 점선 세로선과 "2023, 신호를 재기 시작".
- **시기 괄호**: P1~P4는 먹선 괄호, P4만 빨강, 병행 줄기는 meta 색 점선.
- **상호작용**: 점이나 박동에 마우스를 올리거나 누르면 가장 가까운 표식이 골라지고(먹선 고리), 아래 읽기 칸(`.readout`)에 연도, 제목, 학술지, 역할, 이동 링크가 나온다. 기록지에 초점을 두고 왼쪽, 오른쪽 화살표로 한 편씩 옮긴다. '연도별 수를 표로 보기'가 표 대체 보기다.
- **데이터**: 모두 `CATALOG.PAPERS`에서 계산한다. 연도 미상 논문은 그리지 않고 표에 수만 적는다.
- **모바일**: 화면 폭에 맞춰 다시 그린다(점 반지름 2.8, 연도 '16 형식, 채널 이름은 채널 위 한 줄). 가로 스크롤이 생기면 기록지 칸 안에서만 생긴다.

## 색

- **빨강(signal)은 측정과 주도 표시에만 쓴다.** 기록지 파형과 P4 괄호, 글과 요약 페이지의 측정값 점과 큰 수치(`.stat b`, `.k-val`), 신뢰구간 끝선, '전민 주도' 글자(`signal-ink`), 진행 막대, 키보드 초점선. 버튼 바탕, 링크, 제목, 장식에는 쓰지 않는다. 면적은 화면의 5% 이하.
- **먹(ink)**: 본문, 섹션 머리의 1px 먹선, 눌린 버튼(먹으로 채움), 비교 기준 점(속 빈 먹색 원).
- **meta**: 캡션, 축, 라벨. 모든 바탕에서 4.5:1 이상.
- **tint**: 참고 상자, 사분위 범위 띠, 막대 바탕. 왼쪽 색 띠는 쓰지 않는다.
- 어두운 모드는 같은 토큰 이름으로 정의된다(`prefers-color-scheme`와 `data-theme`). 잉크 블랙이 아니라 청회색 바탕.
- 그 밖의 색(파랑, 초록 계열의 범주 색)은 쓰지 않는다. 비교는 '속 빈 먹색 점 대 빨간 점'으로 나타낸다.

## 글꼴

- 제목, 본문, 라벨은 모두 **IBM Plex Sans KR**(없으면 Pretendard, 시스템 글꼴). 공학 문서와 검사 기록지에 쓰이는 산세리프라서 골랐다.
- **IBM Plex Mono는 숫자에만**: 연도, 축 숫자, 측정값, 표의 수치. 글자 라벨, 제목, 버튼에는 쓰지 않는다.
- 라벨은 문장형 한국어. 영문 대문자 라벨, `// 라벨`, `[01]` 접두를 쓰지 않는다.
- 이 환경에서는 jsDelivr가 막혀 Pretendard가 안 불릴 수 있다. 그래도 화면이 깨지지 않게 대체 글꼴 순서를 유지한다.

## 배치

- 홈 1200px. 섹션은 위에 1px 먹선, 머리는 3/9 분할(`.sec-head`). 기록지와 시기, 연결처럼 '칸'인 것은 `.panel`(1px 테두리 + 네 모서리 십자 `<span class="cx"></span>`).
- 글과 요약 페이지 800px 한 단. h2마다 위에 1px 먹선.
- 그림자 없음, 둥근 모서리 없음, 반투명 블러 없음. 분리는 1px 선과 여백으로만.
- 모바일 390px에서 가로 넘침 없음. 표는 카드형 행으로 바뀌고, 넓은 그림은 자기 칸 안에서만 스크롤한다(`.scroll-x`).

## 부품(assets/site.css, assets/site.js)

| 부품 | 클래스 | 누가 만드나 |
|---|---|---|
| 상단 바 | `header.top` | site.js가 채움. 페이지는 빈 `<header class="top" data-root="../"></header>`만 둔다 |
| 기록 머리 | `.panel.form` | 홈 |
| 섹션 머리 | `.sec-head` | 홈, 연결 섹션 |
| 연구 기록지 | `.sheet`, `.trace`, `.readout`, `.legend` | 홈 |
| 이런 상황이라면? | `.scene` | site.js `SITE.scene()`. 글에서는 자동 |
| 결론 블록 | `.concl` | site.js `SITE.concl()`. 글에서는 자동 |
| 연결 | `.connect` | site.js `SITE.connect()`. 같은 질문, 같은 시기, 같은 주제. 글에서는 자동 |
| 측정값 눈금 | `.gauge` | `SITE.gauge(g, label)`. 빨간 점 = 이 연구의 값, 속 빈 점 = 비교 기준, 띠 = 범위, 빨간 끝선 띠 = 신뢰구간 |
| 핵심 수치 줄 | `.stats > .stat` | 글 |
| 30초 요약 | `.tldr` | 글 |
| 그림 칸 | `.panel.figure` + `.fig-head`, `.fig-note` | 글 |
| 참고 상자 | `.callout` | 글 |
| 용어 풀이 | `<span class="term" data-tip="설명">` | site.js가 말풍선을 붙임 |
| 선택 버튼 | `.seg > button[data-k]` | `SITE.seg(id, cb, key)` |
| 퀴즈 | `#quizBox` | `SITE.quiz(el, items, slug)` |
| 인용 복사 | `<button class="btn" data-copy="#citeText">` | site.js |
| 논문 링크 | `<a data-paper="<id>"></a>` | site.js가 해설 글, 요약 페이지, DOI 가운데 맞는 주소를 넣음 |
| 정보 칸 | `.facts`, `.kr` | 요약 페이지 |

## '이런 상황이라면?'과 결론

- 상황 카드는 정답을 맞히는 퀴즈가 아니다. 연구가 출발한 현장 장면(`need.scene`), 물음(`need.ask`), 정답 없는 선택지 2~3개(`need.opts`), 고르면 펼쳐지는 '왜 이 연구가 필요했나'(`need.why`, 논문 서론 기반).
- 결론(`concl`)은 논문의 Conclusion 절에 충실하게 1~2문장. 과장하지 않는다. 결론 아래에 '이 연구가 답하려 한 질문'(홈의 질문으로 링크)과 역할 한 줄.

## 목소리

- 글은 존댓말, 짧은 문단, 비유 하나쯤. 전문 용어는 `.term`으로 풀이.
- 저자 자신의 논문을 비판하거나 오류, 오타, 표와 본문 불일치를 지적하지 않는다. 불일치가 있으면 표 값으로 조용히 맞추고 채팅으로만 보고한다.
- 논문에 없는 비교 기준(우연 수준, 다수 클래스 정확도 등)을 덧붙이지 않는다. 숫자는 논문에서만. 그림에서 읽은 값은 '그림에서 읽은 대략값', 직접 계산한 값은 '계산값', 만든 예시는 '가상 예시'로 적는다.
- 확인 전 표현: 홈은 '철학'이 아니라 '논문들이 반복해서 묻는 것'.
- 투표, 반응 버튼, 연결 안 된 댓글 자리, 개발용 문구를 독자에게 보이지 않는다.

## avoid-ai-design에서 지킨 것

- 이모지 아이콘 없음. 링크와 버튼 끝 화살표(→) 없음. `A · B · C` 가운뎃점 메타 없음(데이터 문장의 가운뎃점과 줄표는 `SITE.tidy()`가 쉼표로 바꾼다).
- 대문자 영문 라벨, 장식용 01/02/03, 제목 속 한 단어만 색칠하기 없음.
- 모든 면의 둥근 모서리와 그림자, 왼쪽 색 띠 상자, 반투명 블러 헤더 없음.
- 크림 바탕과 테라코타, 검은 바탕과 형광 한 색(SD1, SD2), 보라색 그라디언트 없음.
- 끝없이 반복되는 움직임 없음. 움직임은 상황 카드가 펼쳐질 때 0.25초 페이드와 막대 길이 전환뿐이고 `prefers-reduced-motion`에서 끈다.
- 모든 버튼에 실제 동작이 있다. 메뉴는 존재하는 홈 섹션(`#sheet`, `#phases`, `#questions`, `#papers`)만 가리킨다.
- `:focus-visible`은 빨간 2px 선(site.css). 스캐너의 K7은 이 때문에 오탐이다. SD4m(고정폭)은 숫자 전용이라 의도한 것이다.

## 팩(web-blueprint-grid)에서 바꾼 것과 이유

| 팩 규칙 | 바꾼 것 | 이유 |
|---|---|---|
| 페이지 전면에 그리드 배경 | 기록지 패널 안에만 심전도 용지 눈금 | 전면 그리드는 antislop-ui의 '배경 그리드' 기본값. 눈금은 실제 사물(기록지)이 있는 곳에만 둔다 |
| 라벨과 캡션을 고정폭 대문자, `// 라벨`, `[01]` 접두 | 라벨은 본문체 문장형 한국어, 고정폭은 숫자에만 | avoid-ai-design SD4(템플릿 크롬), SD6(장식 번호) |
| 잉크 블랙(#0a0a0a) 어두운 모드 | 청회색(#171b20) 어두운 모드 | SD2(검은 바탕 + 한 색 강조)를 피하고, 기록지 종이의 어두운 판으로 읽히게 |
| 시그널 레드를 CTA 버튼 바탕에 | 빨강은 측정과 주도 표시에만, 1차 버튼은 먹색 | 이 사이트에서 빨강의 뜻을 하나로 고정(측정값) |
| 모든 요소 24px 격자 스냅 | 간격 척도(8, 12, 16, 24, 48, 72) | 문서형 사이트의 읽기 리듬이 더 중요 |
| 스크롤 진입 애니메이션 | 없음 | 내용 위주, 움직임은 반응에만 |
| 호버 시 테두리 빨강 | 호버 시 테두리 먹색, 링크 밑줄만 빨강 | 빨강의 뜻 유지 |

## 새 글 쓰는 법(해설 글, A 등급)

본보기는 `posts/facial-video-hrv.html`이다. 이 파일을 복사해서 시작하고, 아래 세 군데는 **글자 그대로** 둔다.

### 1. `<head>`

```html
<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{short} - 전민 연구 기록</title>
<meta name="description" content="{논문 한 줄 설명}을 쉽게 풀어 쓴 인터랙티브 해설">
<script>try{var t=JSON.parse(localStorage.getItem('jm:theme'));if(t)document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+KR:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/pretendard.min.css">
<link rel="stylesheet" href="../assets/site.css">
<style>
/* 이 글에만 쓰는 규칙. 색은 var(--…) 토큰만, 모서리는 var(--r)만. 새 색(hex) 금지 */
</style>
</head>
```

### 2. 상단 바와 본문 틀

```html
<body>
<header class="top" data-root="../"></header>
<main class="post"><div class="wrap">
<section class="hero">
  <p class="eyebrow">논문 해설: {주제1}, {주제2}</p>
  <h1>{질문형 제목}</h1>
  <p class="lede">{2~4문장 도입}</p>
  <p class="meta">원문: {저자 외}. {학술지} {권}:{쪽}, {연도}<br>읽는 데 약 {n}분, 직접 눌러 보는 요소 {n}개와 퀴즈</p>
</section>
  … 본문 …
<footer> … </footer>
</div></main>
```

- 상단 바는 비워 둔다. site.js가 브랜드, 메뉴, 테마 버튼, 진행 막대를 채운다.
- `.hero` 바로 뒤에 site.js가 **이런 상황이라면?**과 **결론 블록**을 넣는다. 직접 만들지 않는다.
- `<main>` 안의 `<footer>` 바로 앞에 site.js가 **이 연구가 이어지는 곳**(같은 질문, 같은 시기, 같은 주제)을 넣는다. 직접 만들지 않는다.
- 글쓴이 카드 없음. 역할은 결론 블록 아래 한 줄로 자동 표시.

### 3. 끝의 스크립트 세 개(순서 고정)

```html
<script src="../assets/catalog.js"></script>
<script src="../assets/site.js"></script>
<script>
(function(){
'use strict';
const S=window.SITE, esc=S.esc, $=s=>document.querySelector(s);
const KEY='{slug}';
/* 이 글의 인터랙티브 요소. 선택 기억은 S.seg(id, cb, KEY+':이름'), 퀴즈는 S.quiz($('#quizBox'), items, KEY) */
})();
</script>
</body>
</html>
```

- 글의 스크립트는 **site.js 뒤에** 둔다(`window.SITE`를 쓰기 때문). 전역 변수를 만들지 않도록 즉시 실행 함수로 감싼다.
- 테마, 진행 막대, 용어 풀이, 인용 복사, 눈금 점 말풍선은 site.js가 한다. 글에 다시 쓰지 않는다.
- 저장은 `S.store.get/set`(앞에 `jm:`이 붙는다). localStorage를 직접 쓰지 않는다.

### 본문 순서

`.hero` → (자동: 상황, 결론) → `.tldr` 30초 요약 → `.stats` 실제 수치 3~4개 → `nav.toc` 목차 → 왜 필요했나 → 어떻게 했나 → 결과(실제 수치로 만든 인터랙티브 요소 3~5개, 각각 `.panel.figure` 안에) → 의미와 한계(논문이 밝힌 것만) → 퀴즈 5문항 → `<footer>`(인용과 복사 버튼, DOI와 PubMed 링크, 원문 라이선스 한 줄, 가상 예시 안내, 109 안내). 본문에서 관련 논문을 '함께 읽기'로 한 번 잇는다: `<a data-paper="<논문 id>">글자</a>`.

### 메타데이터(catalog.js)

글마다 비공개 작업 폴더에 `work/posts_meta/<논문 id>.json`을 만들고 `python3 -I work/build_catalog.py`를 다시 돌린다. 이 값이 있어야 site.js가 상황 카드, 결론, 연결을 넣는다.

```json
{
  "slug": "facial-video-hrv",
  "short": "색인용 짧은 제목(20자 안팎)",
  "title": "글의 h1과 같은 질문형 제목",
  "sum": "두 문장 요약",
  "concl": "논문 Conclusion 절에 충실한 1~2문장",
  "val": "0.64", "unit": "AUROC", "cap": "수치 설명",
  "g": {"min": 0.5, "max": 1, "ticks": [0.5, 0.6, 0.7, 0.8, 0.9, 1], "pts": [{"v": 0.64, "label": "설명"}]},
  "need": {"scene": "현장 장면", "ask": "물음", "opts": ["선택지 2~3개, 정답 없음"], "why": "왜 필요했나(논문 서론)"},
  "q": "Q1"
}
```

빌드 스크립트는 `title`을 `post_title`로 내보낸다(논문 원제 `title`을 지키려고). `POSTS`는 slug가 있는 A 등급 논문 목록이다.

### 검사

- `python3 voice_check.py posts/<slug>.html`: 0건.
- Playwright로 390, 1280 × 라이트, 다크에서 pageerror 없음, `scrollWidth`가 화면 폭과 같음, 모든 버튼을 눌러 봄.
- `detect.mjs`: P0 없음(K7은 오탐).
