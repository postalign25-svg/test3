# 전민 연구 기록

전남대학교 의과대학 정신건강의학교실 전민의 논문을 '측정 기록지'처럼 엮은 정적 웹사이트입니다. GitHub Pages로 공개합니다. 빌드 도구 없이 HTML, CSS, JS 파일만으로 동작합니다.

## 구성

```
index.html              홈: 기록 머리, 논문들이 반복해서 묻는 것, 이런 상황이라면?, 연구 기록지, 네 시기, 질문, 논문 전체, 소개
paper.html?id=<id>      요약 페이지(B 등급 논문). catalog.js의 데이터로 그린다
posts/<slug>.html       해설 글(A 등급 논문). 본보기: posts/facial-video-hrv.html
assets/catalog.js       모든 데이터(window.CATALOG). 자동 생성 파일, 직접 고치지 않는다
assets/site.js          공통 부품(상단 바, 테마, 이런 상황이라면?, 결론, 연결, 용어 풀이, 인용 복사, 퀴즈)
assets/site.css         디자인 시스템(토큰과 부품)
DESIGN.md               디자인 계약서와 '새 글 쓰는 법'
```

논문 PDF와 작업 파일(논문 카드, 원문 인용이 들어 있는 메모)은 이 저장소에 두지 않습니다. 비공개 작업 폴더(`work/`)에 있고 `.gitignore`로 막아 두었습니다.

## 논문 추가하기

1. **카드 만들기**: 비공개 작업 폴더에 `work/cards/<id>.json`을 추가합니다(형식은 research-archive-builder 스킬의 `references/data-schema.md`). 인벤토리(`inventory.tsv`)에도 한 줄을 넣고, 주제와 시기, 질문 묶음은 `work/themes.json`에 id를 추가합니다.
2. **해설 글이 있는 논문이면**: `posts/<slug>.html`을 쓰고(DESIGN.md의 '새 글 쓰는 법'), 같은 id로 `work/posts_meta/<id>.json`을 만듭니다(slug, short, title, sum, concl, val, unit, cap, g, need, q).
3. **빌드**:
   ```
   python3 -I work/build_catalog.py
   ```
   `assets/catalog.js`가 새로 만들어집니다. 스크립트는 끝에 자체 검사를 돌립니다. 원문 인용, 불일치 메모 같은 비공개 필드가 결과에 섞이면 멈춥니다. 마지막 줄이 `self-test OK`인지 확인합니다.
4. **확인**: `index.html`을 브라우저로 열어 새 논문이 목록과 기록지에 나오는지, 링크가 맞는지 봅니다.
5. **커밋**: 바뀐 `assets/catalog.js`와 새 글을 커밋하고 푸시합니다.

등급: A(해설 글) 논문은 `posts/<slug>.html`로, B(요약) 논문은 `paper.html?id=<id>`로, C(목록만) 논문은 DOI로 이어집니다. 등급은 빌드 스크립트가 정합니다.

## GitHub Pages 설정

1. 저장소의 Settings → Pages로 갑니다.
2. Source를 "Deploy from a branch"로, Branch를 `main`, 폴더를 `/ (root)`로 고르고 저장합니다.
3. 몇 분 뒤 `https://<사용자명>.github.io/<저장소명>/`에서 열립니다.

모든 경로가 상대 경로라서 저장소 이름이 바뀌어도 그대로 동작합니다. 공개 전에 교수님의 확인을 받는 것을 권합니다. 특히 홈의 '논문들이 반복해서 묻는 것'과 다섯 질문은 논문에서 읽어 낸 정리라 확인이 필요합니다.

## 글꼴

IBM Plex Sans KR, IBM Plex Mono(Google Fonts)와 Pretendard(jsDelivr)를 씁니다. 불러오지 못하면 시스템 글꼴(Apple SD Gothic Neo, 맑은 고딕)로 보입니다.
