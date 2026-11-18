# Portfolio evidence: GitHub activity of `dami-krafton` in Krafton-Playground

This file records the data behind the portfolio page. Every figure below is computed from the commit list in [commit-log.md](commit-log.md), and every commit there links to GitHub.

## How the data was collected

- **Source:** GitHub commit search API, query `author:dami-krafton org:Krafton-Playground`.
- **Collected:** 14 November 2026 (KST). Commits after that date are not included.
- **Method:** the search was run in date windows (half-months, then single days for 16 Oct to 14 Nov) because GitHub returns at most 1,000 results per query. No single-day window exceeded that limit.
- **Deduplication:** GitHub reported 4,233 results. Some commits exist in more than one repository (for example `ops-mrso-console` and `ops-mrso-console-dev`). Each commit SHA is counted once here, which gives 2,824 unique commits.
- **Fields captured:** repository, full SHA, author date, and the first line of the commit message. No file contents or diffs were read.

## Limits of this evidence

- Only commits that GitHub attributes to the `dami-krafton` account are included. Commits made under another email or account are missing.
- GitHub commit search covers default branches. Work that only exists on unmerged branches may be missing.
- A repository appears only if it has at least one such commit. Repositories you own but never committed to are not listed.
- A commit shared by two repositories is attributed to one of them, so per-repository counts for mirrored repositories are lower bounds.
- Project descriptions in the portfolio are inferred from commit subject lines, not from reading the code.
- The repositories are internal. Links work only for people with access to the organisation.

## Headline figures

| Figure | Value |
|---|---:|
| Unique commits authored | 2,824 |
| Of which merge commits | 635 |
| Commits excluding merges | 2,189 |
| Repositories with commits | 27 |
| First commit | 2026-06-03 |
| Last commit collected | 2026-11-14 |
| Days with at least one commit | 129 |
| Busiest day | 2026-11-12 (152 commits) |

## Commits per month

| Month | Commits |
|---|---:|
| 2026-06 | 131 |
| 2026-07 | 311 |
| 2026-08 | 561 |
| 2026-09 | 423 |
| 2026-10 | 500 |
| 2026-11 | 898 |

## Commits by type

Grouped by the conventional-commit prefix on the subject line. The `merge` row is the 635 Git merge commits plus 13 commits whose subject starts with `merge:`.

| Type | Commits |
|---|---:|
| no prefix | 893 |
| merge | 648 |
| fix | 399 |
| feat | 391 |
| docs | 274 |
| test | 83 |
| copy | 35 |
| chore | 31 |
| content | 24 |
| perf | 16 |
| ui | 6 |
| style | 5 |
| refactor | 5 |
| wip | 5 |
| build | 2 |
| qa | 2 |
| revert | 2 |
| start | 1 |
| migration | 1 |
| workspace | 1 |

## Repositories

| Repository | Commits | Merges | First commit | Last commit |
|---|---:|---:|---|---|
| [ops-mrso-console](https://github.com/krafton-playground/ops-mrso-console) | 1,329 | 390 | 2026-10-24 | 2026-11-14 |
| [notetaker-landing](https://github.com/krafton-playground/notetaker-landing) | 619 | 163 | 2026-06-18 | 2026-10-29 |
| [ops-content-hub](https://github.com/krafton-playground/ops-content-hub) | 287 | 9 | 2026-06-20 | 2026-11-13 |
| [ops-ax-101](https://github.com/krafton-playground/ops-ax-101) | 213 | 24 | 2026-08-11 | 2026-09-04 |
| [vibecoding-01](https://github.com/krafton-playground/vibecoding-01) | 81 | 0 | 2026-07-30 | 2026-08-07 |
| [ops-meeting-notes](https://github.com/krafton-playground/ops-meeting-notes) | 60 | 6 | 2026-07-02 | 2026-08-10 |
| [kimpo-hackathon](https://github.com/krafton-playground/kimpo-hackathon) | 55 | 19 | 2026-09-21 | 2026-09-28 |
| [ops-meeting-notes-mobile](https://github.com/krafton-playground/ops-meeting-notes-mobile) | 48 | 0 | 2026-07-11 | 2026-07-16 |
| [ops-daily-report](https://github.com/krafton-playground/ops-daily-report) | 35 | 7 | 2026-06-26 | 2026-07-07 |
| [ops-mrso-console-dev](https://github.com/krafton-playground/ops-mrso-console-dev) | 17 | 11 | 2026-11-05 | 2026-11-10 |
| [wiki-fact-checker](https://github.com/krafton-playground/wiki-fact-checker) | 16 | 0 | 2026-08-06 | 2026-08-07 |
| [clovanote-mcp](https://github.com/krafton-playground/clovanote-mcp) | 13 | 4 | 2026-07-15 | 2026-09-01 |
| [vibecode-landing](https://github.com/krafton-playground/vibecode-landing) | 12 | 2 | 2026-06-21 | 2026-06-28 |
| [clovanote-mcp-mini](https://github.com/krafton-playground/clovanote-mcp-mini) | 9 | 0 | 2026-06-04 | 2026-06-14 |
| [ops-hands-session](https://github.com/krafton-playground/ops-hands-session) | 5 | 0 | 2026-08-04 | 2026-08-04 |
| [ops-echo](https://github.com/krafton-playground/ops-echo) | 4 | 0 | 2026-06-06 | 2026-06-17 |
| [ops-firecrawl](https://github.com/krafton-playground/ops-firecrawl) | 3 | 0 | 2026-07-25 | 2026-10-21 |
| [hackathon-prep](https://github.com/krafton-playground/hackathon-prep) | 3 | 0 | 2026-06-28 | 2026-06-28 |
| [ppt-deep-analyze](https://github.com/krafton-playground/ppt-deep-analyze) | 2 | 0 | 2026-09-17 | 2026-09-17 |
| [sp-workspace](https://github.com/krafton-playground/sp-workspace) | 2 | 0 | 2026-07-29 | 2026-07-29 |
| [hackathon-kimpo](https://github.com/krafton-playground/hackathon-kimpo) | 2 | 0 | 2026-09-21 | 2026-09-21 |
| [ops-whisper-worker](https://github.com/krafton-playground/ops-whisper-worker) | 2 | 0 | 2026-07-05 | 2026-07-05 |
| [test-vibecoding-01](https://github.com/krafton-playground/test-vibecoding-01) | 2 | 0 | 2026-06-23 | 2026-06-23 |
| [Trends-hub-agent](https://github.com/krafton-playground/Trends-hub-agent) | 2 | 0 | 2026-06-03 | 2026-06-03 |
| [onboarding-test-02](https://github.com/krafton-playground/onboarding-test-02) | 1 | 0 | 2026-08-05 | 2026-08-05 |
| [test-mini-ops-app](https://github.com/krafton-playground/test-mini-ops-app) | 1 | 0 | 2026-08-04 | 2026-08-04 |
| [test-vibecoding-02](https://github.com/krafton-playground/test-vibecoding-02) | 1 | 0 | 2026-06-30 | 2026-06-30 |

## Evidence for each portfolio project

Each commit quoted on the portfolio page is listed here with its SHA, plus the first and last commit of the repository.

### Trends-hub-agent

2 commits, 2026-06-03 to 2026-06-03.

| Commit | Date | Subject |
|---|---|---|
| [`c877cdd`](https://github.com/krafton-playground/Trends-hub-agent/commit/c877cdd56c60b28b24da688af69645d834b3c126) | 2026-06-03 | Enable a deployable Hermes trend agent MVP *(first)* |
| [`c877cdd`](https://github.com/krafton-playground/Trends-hub-agent/commit/c877cdd56c60b28b24da688af69645d834b3c126) | 2026-06-03 | Enable a deployable Hermes trend agent MVP |
| [`b972516`](https://github.com/krafton-playground/Trends-hub-agent/commit/b9725169be17adfb4f2a1486112bf5b8c16cdbba) | 2026-06-03 | Keep crawler lint-clean for CI *(last)* |

### clovanote-mcp

13 commits, 2026-07-15 to 2026-09-01.

| Commit | Date | Subject |
|---|---|---|
| [`082e125`](https://github.com/krafton-playground/clovanote-mcp/commit/082e125e3a38b0f49356b94c345923c136860711) | 2026-07-15 | Replace template with Clova Note MCP server (streamable-http, multi-user OAuth) *(first)* |
| [`082e125`](https://github.com/krafton-playground/clovanote-mcp/commit/082e125e3a38b0f49356b94c345923c136860711) | 2026-07-15 | Replace template with Clova Note MCP server (streamable-http, multi-user OAuth) |
| [`8dd29e9`](https://github.com/krafton-playground/clovanote-mcp/commit/8dd29e90ca3cbe5e926bb8720e5b340d5798ab09) | 2026-07-23 | Sanitize tool errors so pydantic internals never reach MCP clients |
| [`d8df2fa`](https://github.com/krafton-playground/clovanote-mcp/commit/d8df2faf335649ec0e3af74b5483aee3e85e6ff8) | 2026-09-01 | Merge pull request #4 from krafton-playground/chore/remove-init-entrypoint *(last)* |

### notetaker-landing

619 commits, 2026-06-18 to 2026-10-29.

| Commit | Date | Subject |
|---|---|---|
| [`4c14581`](https://github.com/krafton-playground/notetaker-landing/commit/4c145813a139ac56eacc5472949634321b9bb709) | 2026-06-18 | Add OS/tool environment selector with dynamic prompt + skill path *(first)* |
| [`4c14581`](https://github.com/krafton-playground/notetaker-landing/commit/4c145813a139ac56eacc5472949634321b9bb709) | 2026-06-18 | Add OS/tool environment selector with dynamic prompt + skill path |
| [`cf4d364`](https://github.com/krafton-playground/notetaker-landing/commit/cf4d364786af713d2ba57b1188d609cedeb46d7e) | 2026-09-01 | Fill the roster from Outlook, and let people connect MS365 |
| [`95fbab0`](https://github.com/krafton-playground/notetaker-landing/commit/95fbab0e721bbec97909eeb770d00ce03ab6ea30) | 2026-10-27 | fix: recover quarantined exports, contain per-row DB errors, and pin list SQL to the JS classifier (#276) |
| [`6323a43`](https://github.com/krafton-playground/notetaker-landing/commit/6323a434e5ae8220446b68091ec77d89ef28e810) | 2026-10-29 | docs: 인수인계·제품 명세·파이프라인 그림·FullScript 제안 트레이드오프 문서 추가 (#277) *(last)* |

### ops-content-hub

287 commits, 2026-06-20 to 2026-11-13.

| Commit | Date | Subject |
|---|---|---|
| [`150d713`](https://github.com/krafton-playground/ops-content-hub/commit/150d7133121b4c12960b1ab133e67568a3da82a5) | 2026-06-20 | Migrate krafton-ops-bot onto ops-content-hub (EKS, core-api SSO + embedded Hermes) *(first)* |
| [`150d713`](https://github.com/krafton-playground/ops-content-hub/commit/150d7133121b4c12960b1ab133e67568a3da82a5) | 2026-06-20 | Migrate krafton-ops-bot onto ops-content-hub (EKS, core-api SSO + embedded Hermes) |
| [`6df9a66`](https://github.com/krafton-playground/ops-content-hub/commit/6df9a667caab758b60a16b58f6314c0b03abebfd) | 2026-08-12 | Hermes가 내 Outlook을 본다 — 공용 사서함 대신 내 연결로, 그리고 실패 이유를 말해준다 (#101) |
| [`16ab58d`](https://github.com/krafton-playground/ops-content-hub/commit/16ab58d132932a02c1e36c6614ebc3ec4109bdcf) | 2026-08-12 | 연결 테스트를 공식 Atlassian API로 (유효한 토큰이 '거부됨'으로 뜨던 원인) (#104) |
| [`e1e8d4e`](https://github.com/krafton-playground/ops-content-hub/commit/e1e8d4ea4c0dda6a7f6e2816d085b1c8e97d2daf) | 2026-11-13 | fix: 로그인 만료 시 저장 오류 안내와 소스 미리보기 지연 해소 *(last)* |

### ops-daily-report

35 commits, 2026-06-26 to 2026-07-07.

| Commit | Date | Subject |
|---|---|---|
| [`385d326`](https://github.com/krafton-playground/ops-daily-report/commit/385d3261434955869e5a97374f7efb8694730b65) | 2026-06-26 | feat: daily/weekly report bot (Confluence ingest + Slack + dashboard) *(first)* |
| [`385d326`](https://github.com/krafton-playground/ops-daily-report/commit/385d3261434955869e5a97374f7efb8694730b65) | 2026-06-26 | feat: daily/weekly report bot (Confluence ingest + Slack + dashboard) |
| [`021d27d`](https://github.com/krafton-playground/ops-daily-report/commit/021d27deffe32e33ec44b048bf56a32f168a8950) | 2026-06-26 | feat: per-user encrypted Confluence token + team (GSMT/SPT1) categorization |
| [`8f84a3c`](https://github.com/krafton-playground/ops-daily-report/commit/8f84a3cf05ae0c16dbb86136e87298317ac4954a) | 2026-07-07 | feat(bot): ground the weekly report in the '주간 업무 현황 상세' table |
| [`8f84a3c`](https://github.com/krafton-playground/ops-daily-report/commit/8f84a3cf05ae0c16dbb86136e87298317ac4954a) | 2026-07-07 | feat(bot): ground the weekly report in the '주간 업무 현황 상세' table *(last)* |

### ops-meeting-notes

60 commits, 2026-07-02 to 2026-08-10.

| Commit | Date | Subject |
|---|---|---|
| [`a22048f`](https://github.com/krafton-playground/ops-meeting-notes/commit/a22048f97b0cf56b2959e2826dcd906a1e96bad9) | 2026-07-02 | Port gpd2ai v2 (AI Meeting Intelligence Platform) into this repo *(first)* |
| [`b3b794f`](https://github.com/krafton-playground/ops-meeting-notes/commit/b3b794f1bb169a78ae2bba4ab9a7e5e57126ca94) | 2026-07-04 | Auto-collect glossary candidates from finished meetings (#14) |
| [`5a24c52`](https://github.com/krafton-playground/ops-meeting-notes/commit/5a24c5299347e83d3afb32a3fa187684d0448380) | 2026-08-10 | 운영본부(Operations Div.) 구성원에게만 자동 Slack 알림 — proactive DM에 조직 allowlist 게이트 (#31) *(last)* |

### ops-meeting-notes-mobile

48 commits, 2026-07-11 to 2026-07-16.

| Commit | Date | Subject |
|---|---|---|
| [`5985613`](https://github.com/krafton-playground/ops-meeting-notes-mobile/commit/59856139279e3c6315d172fd18aef74b8dc7eb7e) | 2026-07-11 | Expo 앱 스캐폴드: 회의 목록 + 상세(스크립트 턴 뷰) — 웹 프론트 로직 포팅 *(first)* |
| [`f709a3d`](https://github.com/krafton-playground/ops-meeting-notes-mobile/commit/f709a3d72b7be189bb1c1fd470e8339e5dfdab43) | 2026-07-11 | 실시간 녹음 → STT 파이프라인 연결 (expo-audio + import-audio 계약) |
| [`4ebe9b8`](https://github.com/krafton-playground/ops-meeting-notes-mobile/commit/4ebe9b840aeaaec6fd68cd1c775dc0dca3b790c2) | 2026-07-12 | 녹음 유실 복구(하드QA #5 부분집합): 업로드 전 종료된 녹음 재업로드 제안 + 캐시 정리 |
| [`a26c8d7`](https://github.com/krafton-playground/ops-meeting-notes-mobile/commit/a26c8d725051c2c713bd180fb8e6c0d3733d0b8e) | 2026-07-16 | 크래시 수정: expo-sharing 정적 import 제거 — 네이티브 모듈 없는 빌드에서 회의 열면 앱 사망 *(last)* |

### vibecoding-01

81 commits, 2026-07-30 to 2026-08-07.

| Commit | Date | Subject |
|---|---|---|
| [`9aa8024`](https://github.com/krafton-playground/vibecoding-01/commit/9aa8024adbad7821ed269cff79afa6f1900945d6) | 2026-07-30 | feat: implement 바이브코딩 기초편 web deck *(first)* |
| [`9aa8024`](https://github.com/krafton-playground/vibecoding-01/commit/9aa8024adbad7821ed269cff79afa6f1900945d6) | 2026-07-30 | feat: implement 바이브코딩 기초편 web deck |
| [`a487f42`](https://github.com/krafton-playground/vibecoding-01/commit/a487f427adfcd8e2967601102960979be93a7f44) | 2026-08-07 | docs: add the 중급 실습 run book |
| [`a487f42`](https://github.com/krafton-playground/vibecoding-01/commit/a487f427adfcd8e2967601102960979be93a7f44) | 2026-08-07 | docs: add the 중급 실습 run book *(last)* |

### ops-ax-101

213 commits, 2026-08-11 to 2026-09-04.

| Commit | Date | Subject |
|---|---|---|
| [`496a220`](https://github.com/krafton-playground/ops-ax-101/commit/496a220adc4f37aadc4e78b28573bdc06c75d466) | 2026-08-11 | docs: scaffold AX Course curriculum and commit PARA memory store *(first)* |
| [`c0af744`](https://github.com/krafton-playground/ops-ax-101/commit/c0af744b54295d26a2dd3986d68a862a98f162f1) | 2026-08-18 | feat: implement AX Course handbook page from course/ curriculum |
| [`db04efe`](https://github.com/krafton-playground/ops-ax-101/commit/db04efe1fc5b98f6fa69d6e38821f05c4100560c) | 2026-09-04 | docs: clarify search question placeholder *(last)* |

### wiki-fact-checker

16 commits, 2026-08-06 to 2026-08-07.

| Commit | Date | Subject |
|---|---|---|
| [`63cc2de`](https://github.com/krafton-playground/wiki-fact-checker/commit/63cc2de9d465e229e33fbb5734f0ff9604a9d545) | 2026-08-06 | Make evidence-backed Confluence research reusable as an internal KP prototype *(first)* |
| [`b1e940a`](https://github.com/krafton-playground/wiki-fact-checker/commit/b1e940a9207469db538185dc737a037a737ba12a) | 2026-08-06 | Bind verification evidence to the requested page |
| [`9b53e93`](https://github.com/krafton-playground/wiki-fact-checker/commit/9b53e93241b68feb2b0db09b7ac7c6024de9b473) | 2026-08-06 | Keep verification inside the interactive latency budget |
| [`1f15400`](https://github.com/krafton-playground/wiki-fact-checker/commit/1f15400d372fe021b3854217e0133edd24b18a7a) | 2026-08-07 | chore: ignore .omc/ operational state directory *(last)* |

### kimpo-hackathon

55 commits, 2026-09-21 to 2026-09-28.

| Commit | Date | Subject |
|---|---|---|
| [`1cef1e3`](https://github.com/krafton-playground/kimpo-hackathon/commit/1cef1e31b679e71678412badc90ed5296c6e00f6) | 2026-09-21 | feat: implement ReportSync demo workspace from HTML reference *(first)* |
| [`445c92d`](https://github.com/krafton-playground/kimpo-hackathon/commit/445c92d7b1ce33e698c9e7b51d257de3ebe82f48) | 2026-09-23 | feat: recommend Outlook and Confluence sources for selected agenda |
| [`c415031`](https://github.com/krafton-playground/kimpo-hackathon/commit/c4150319eb93f98371a4ff1a829a6169c136e8c7) | 2026-09-28 | docs: ReportSync 현재 상태와 남은 작업 정리 (#23) *(last)* |

### ops-mrso-console

1,329 commits, 2026-10-24 to 2026-11-14.

| Commit | Date | Subject |
|---|---|---|
| [`560a5a2`](https://github.com/krafton-playground/ops-mrso-console/commit/560a5a205e1f52e215b2cca8f6bfe0bf3f5821a3) | 2026-10-24 | docs: KP 마이그레이션 계획과 M0–M7 TODO 추가 [skip ci] *(first)* |
| [`dc3a993`](https://github.com/krafton-playground/ops-mrso-console/commit/dc3a993745ad8ee60e952f4bff5326d83e3778eb) | 2026-11-13 | feat(projects): unattended-operation setup wizard, no ID/key entry, auto runner registration and readiness alert at Project creation |
| [`1ec1819`](https://github.com/krafton-playground/ops-mrso-console/commit/1ec1819fbeefedaed354ddefdfedcb3448b9e9c5) | 2026-11-13 | feat(mcp): let a Project ADMIN queue and start a collection run |
| [`cefc5f2`](https://github.com/krafton-playground/ops-mrso-console/commit/cefc5f21319b6041bc655a68793bb75ed4d143a4) | 2026-11-13 | fix(publication): confirm Confluence-normalized writes and link citations |
| [`e42babd`](https://github.com/krafton-playground/ops-mrso-console/commit/e42babd8f7a6e1edb5d08799c86f5736abe517e3) | 2026-11-13 | test(mcp): isolated end-to-end run of the collection-run tools (33/33) |
| [`65b508b`](https://github.com/krafton-playground/ops-mrso-console/commit/65b508b05d3e7679ac4af3f9918cecacf2459fde) | 2026-11-14 | Merge pull request #338 from krafton-playground/fix/operator-overview-v2-prod-e2e *(last)* |

