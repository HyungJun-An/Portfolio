import { PropsWithChildren } from 'react'
import 'server-only'
import { formatDate } from './utils'

const SubText = ({ children }: PropsWithChildren) => (
  <span className="text-gray-500 font-medium text-xs">{children}</span>
)

export const 작성일 = {
  ko: formatDate(2025, 12, 26, 'ko'),
  en: formatDate(2025, 12, 26, 'en'),
}

export const dictionary = {
  certificates: {
    이름: {
      ko: '이름',
      en: 'Name',
    },
    내용: {
      ko: '내용',
      en: 'Content',
    },
    주관: {
      ko: '주관',
      en: 'Organizer',
    },
    일시: {
      ko: '일시',
      en: 'Date',
    },
    기타자격증보기: {
      ko: '기타 자격증 보기',
      en: 'View Other Certificates',
    },
    정기기사1회: {
      ko: '2025년 정기 기사 1회',
      en: '2025 Engineer 1st',
    },
    정보처리기사: {
      ko: '정보처리기사',
      en: 'Engineer Information Processing',
    },
    과학기술정보통신부: {
      ko: '과학기술정보통신부',
      en: 'Ministry of Science and ICT',
    },
    제N회: {
      ko: '제',
      en: '',
    },
    회: {
      ko: '회',
      en: '',
    },
    점: {
      ko: '점',
      en: ' points',
    },
    전국4등: {
      ko: '전국 4등',
      en: 'National Rank 4',
    },
    국제테스트연구원: {
      ko: '국제테스트 연구원',
      en: 'International Testing Institute',
    },
    대한검정회: {
      ko: '대한검정회',
      en: 'Korea Test Association',
    },
    준1급: {
      ko: '준1급',
      en: 'Level 1 (Pre-Advanced)',
    },
    대한민국한자교육연구회: {
      ko: '대한민국한자교육연구회',
      en: 'Korea Chinese Character Education Institute',
    },

    // Other certificates
    태권도: {
      ko: '태권도',
      en: 'Taekwondo',
    },
    단: {
      ko: '단',
      en: ' Dan',
    },
    국기원: {
      ko: '국기원',
      en: 'Kukkiwon',
    },
    유도: {
      ko: '유도',
      en: 'Judo',
    },
    대한유도회: {
      ko: '대한유도회',
      en: 'Korea Judo Association',
    },
    그래픽기술자격: {
      ko: '그래픽기술자격',
      en: 'GTQ',
    },
    급: {
      ko: '급',
      en: ' Level',
    },
    한국생산성본부: {
      ko: '한국생산성본부',
      en: 'Korea Productivity Center',
    },
    정보기술자격: {
      ko: '정보기술자격',
      en: 'ITQ',
    },
    한글파워포인트: {
      ko: '(한글파워포인트)',
      en: '(Hangul PowerPoint)',
    },
    등급: {
      ko: '등급',
      en: ' Grade',
    },
    워드프로세서: {
      ko: '워드프로세서',
      en: 'Word Processor',
    },
    대한상공회의소: {
      ko: '대한상공회의소',
      en: 'Korea Chamber of Commerce and Industry',
    },
  },
  education: {
    학력_이름: {
      ko: '이름',
      en: 'Name',
    },
    세부: {
      ko: '세부',
      en: 'Detail',
    },
    기간: {
      ko: '기간',
      en: 'Period',
    },
    비고: {
      ko: '비고',
      en: 'Note',
    },
    한국외국어대학교: {
      ko: '한국외국어대학교',
      en: 'Hankook Foreign Univ.',
    },
    학력_학위: {
      ko: '정보통신공학과',
      en: 'BCompSc',
    },
    학력_기간: {
      ko: '2021.03 ~ 2026.02',
      en: 'Mar. 2021 - Feb. 2026',
    },
    학력_비고: {
      ko: '학사 (B.S.)',
      en: 'B.S. (Bachelor of Science)',
    },
    비고_내용: {
      ko: '-',
      en: '-',
    },
  },
  general: {
    이력서: {
      ko: '이력서',
      en: 'Resume',
    },
    한줄소개: {
      ko: (
        <>
          코드를 이해하고 직접 다루며 품질을 검증하는 QA Engineer입니다. 
          고객의 불편을 기능 단위가 아닌 구조와 코드 관점에서 분석하고, 제품이 ‘왜 그렇게 동작해야 하는지’를 끝까지 질문합니다.
        </>
      ),
      en: (
        <>
        I am a QA Engineer who understands and works directly with code to validate quality.I analyze user issues not at the feature level, but from a structural and code-level perspective, continuously questioning why a product should work the way it does.
        </>
      ),
    },
    히어로태그라인: {
      ko: '개발을 이해하고, 사용자 경험을 개선하는 QA 엔지니어',
      en: '개발을 이해하고, 사용자 경험을 개선하는 QA 엔지니어',
    },
    개발경력: {
      ko: '경력',
      en: 'Work Experience',
    },
    경력기간: {
      ko: `(3개월, ${작성일.ko} 기준)`,
      en: `(3months, as of ${작성일.en})`,
    },
    학력: {
      ko: '학력',
      en: 'Education',
      },
    자격증: {
      ko: '자격증',
      en: 'Certificates',
    },
    기술스택: {
      ko: '기술 스택',
      en: 'Tech Stack',
    },
    추가정보: {
      ko: '추가 정보',
      en: 'Additional Information',
    },
    개발경험: {
      ko: '개발 경험',
      en: 'Development Experience',
    },
    개발활동: {
      ko: '개발 활동',
      en: 'Development Activities',
    },
    수상: {
      ko: '수상',
      en: 'Awards',
    },
    소개: {
      ko: '소개',
      en: 'About',
    },
    문제해결경험: {
      ko: '문제 해결 경험',
      en: 'Problem Solving Experience',

    },
    직무성취경험: {
      ko: '직무 성취 경험',
      en: 'Job Achievement Experience',
   
    },
    가치관및신조: {
      ko: '가치관 및 신조',
      en: 'Values and Beliefs',

    },
    이루고싶은것: {
      ko: '이루고 싶은 것',
      en: 'What I Want to Achieve',

    },
    성격의장단점: {
      ko: '성격의 장단점',
      en: 'Personality Strengths and Weaknesses',
    
    },
    급여있음: {
      ko: '(급여 O, 4대보험 X)',
      en: '(Paid, No Social Insurance)',
   
    },
    급여없음: {
      ko: '(급여 X)',
      en: '(Unpaid)',
   
    },
    약950자: {
      ko: '약 950자',
      en: 'About 950 words',
   
    },
    약900자: {
      ko: '약 900자',
      en: 'About 900 words',
    
    },
    약850자: {
      ko: '약 850자',
      en: 'About 850 words',

    },
    약300자: {
      ko: '약 300자',
      en: 'About 300 words',

    },
    작성자: {
      ko: '작성자: 서민주',
      en: 'Author: Minjoo Suh',
    },
  },
  hero: {
    이름: {
      ko: '서민주',
      en: 'Minjoo SUH (서민주)',
    },
    생일: {
      ko: '1999.09.21 (여, 한국인)',
      en: 'Spetember 21, 1999 (Female, Korean)',
    },
    학위: {
      ko: '한국외국어대학교 정보통신공학과',
      en: 'Hankook University Foreign School,  Univ.',
    },

    주소: {
      ko: '경기도 고양시 일산동구 백석동',
      en: 'Baseok dong, Gyeongkki',
    },

    jobTitle: {
      ko: 'QA 엔지니어',
      en: 'Quality Assurance Engineer',
    },

    availableStatus: {
      ko: '구직 중',
      en: 'Available for Hire',
    },

    basicInfoTitle: {
      ko: '기본 정보',
      en: 'Basic Information',
    },

    other: {
      ko: '기타',
      en: 'Other',
    },

    birthLabel: {
      ko: '생년월일',
      en: 'Date of Birth',
    },

    locationLabel: {
      ko: '거주지',
      en: 'Location',
    },

    interestsLabel: {
      ko: '취미',
      en: 'Interests',
    },

    interests: {
      ko: '독서',
      en: 'Reading',
    },

    degreeLabel: {
      ko: '학위',
      en: 'Degree',
    },

    onlineProfilesLabel: {
      ko: '링크',
      en: 'Links',
    },
  },
  project: {
    개인프로젝트: {
      ko: '개인 프로젝트',
      en: 'Personal Project',
    },
    googleAnalytics: {
      ko: '11.2만',
      en: '112K',
    },
    amplitude: {
      ko: '26.1%',
      en: '26.1%',
    },
    cloudflareAnalytics: {
      ko: '90.5%',
      en: '90.5%',
    },
  },
  workExperiences: {
    현재: { ko: '현재', en: 'Current' },
    과거: { ko: '과거', en: 'Past' },

    // =========================
    // TOSS
    // =========================
    TOSS_회사명: { ko: '토스', en: 'Toss' },
    TOSS_팀: {
      ko: (
        <>
          QA Engineer <SubText>(Contract)</SubText>
        </>
      ),
      en: (
        <>
          QA Engineer <SubText>(Contract)</SubText>
        </>
      ),
    },
    TOSS_기간: { ko: '2025.11 ~ 현재', en: 'Nov 2025 ~ Present' },
    TOSS_설명: {
      ko: `토스 쇼핑(이커머스) 서비스에서 QA Assistant로 근무하며, 내부 기획 툴과 테스트 관리 도구를 활용한 전반적인 품질 검증 업무를 수행하고 있습니다.
자체 Figma 툴인 Deus와 Notion/Jira를 통해 기획서를 분석하고, TestRail 기반 테스트 케이스 실행 및 결과 관리를 통해 기능 안정성을 검증합니다.
또한 Slack 중심 커뮤니케이션을 운영하며 반복 업무 효율화를 위해 Slack Bot을 직접 제작·활용하는 등 QA 프로세스 개선에도 기여하고 있습니다.`,
      en: `Working as a QA Assistant for Toss Shopping (e-commerce), performing end-to-end quality verification using internal planning tools and test management systems.
I analyze requirements via Deus (internal Figma) and Notion/Jira, and validate feature stability by executing and managing test cases in TestRail.
I also collaborate across teams via Slack and contribute to QA process improvements by building and using a Slack bot to streamline repetitive workflows.`,
    },
    TOSS_업무설명: {
      ko: `요구사항 분석 → 테스트 케이스 설계/수행 → 결과 리포팅까지 E2E 품질 검증을 수행합니다.
결제/쿠폰/배송비/주문(CTA) 등 핵심 플로우 리그레션 테스트를 통해 릴리즈 안정성을 확보합니다.`,
      en: `Conduct end-to-end quality validation from requirement analysis to test case design/execution and reporting.
Ensure release stability through regression testing across core flows such as payment, coupons, shipping fees, and ordering (CTA).`,
    },
    TOSS_성과1: {
      ko: '테스트 케이스 실행/관리(Testrail) 및 이슈 트래킹(Jira)을 통해 리그레션 품질을 안정적으로 운영',
      en: 'Operated stable regression quality by managing test runs in TestRail and tracking issues in Jira',
    },
    TOSS_성과2: {
      ko: 'Slack 기반 협업 및 반복 업무 자동화를 통해 QA 커뮤니케이션/프로세스 효율화에 기여',
      en: 'Improved QA communication and process efficiency through Slack-based collaboration and workflow automation',
    },

    // =========================
    // RIWON
    // =========================
    RIWON_회사명: { ko: '라이원소프트', en: 'RIWON' },
    RIWON_팀: {
      ko: (
        <>
          QA Engineer <SubText>(Intern)</SubText>
        </>
      ),
      en: (
        <>
          QA Engineer <SubText>(Intern)</SubText>
        </>
      ),
    },
    RIWON_기간: { ko: '2025.07 ~ 2025.08', en: 'Jul 2025 ~ Aug 2025' },
    RIWON_설명: {
      ko: `모바일 게임 '케로로 건슈팅' 출시 전 QA로 참여하여 약 3주간 테스트를 수행했습니다.
Redmine을 통해 50건 이상의 버그를 리포트하고, UI/UX 및 서버 연동 테스트를 진행하며 실제 서비스 품질 안정화 과정에 기여했습니다.
개발자와 협업하며 원인을 추적하고 개선안을 제시하며, QA가 단순 테스트를 넘어 사용자 경험과 완성도를 높이는 과정임을 체감했습니다.`,
      en: `Participated in pre-release QA for the mobile game “Keroro Gun Shooting” and executed testing for about three weeks.
Reported 50+ bugs via Redmine, conducted UI/UX and server-integration testing, and contributed to service quality stabilization.
By collaborating with developers to trace root causes and propose improvements, I learned QA is not just testing—it's about improving user experience and product completeness.`,
    },
    RIWON_업무설명: {
      ko: `테스트 케이스 작성, 기능 검증, 버그 재현 및 리포팅을 수행했습니다.
UI/UX 및 서버 연동 테스트를 통해 릴리즈 품질 안정화에 기여했습니다.`,
      en: `Created test cases, validated features, reproduced and reported bugs.
Contributed to release quality stabilization through UI/UX and server-integration testing.`,
    },
  },
}