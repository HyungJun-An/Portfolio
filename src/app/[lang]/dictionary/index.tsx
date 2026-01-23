import { PropsWithChildren } from 'react'
import 'server-only'
import { formatDate } from './utils'

const SubText = ({ children }: PropsWithChildren) => (
  <span className="text-gray-500 font-medium text-xs">{children}</span>
)

export const 작성일 = {
  ko: formatDate(2024, 9, 1, 'ko'),
  en: formatDate(2024, 9, 1, 'en'),
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
    한성대학교: {
      ko: '한성대학교',
      en: 'Hankook Foreign Univ.',
    },
    학력_학위: {
      ko: '정보통신공학과',
      en: 'BCompSc',
    },
    학력_기간: {
      ko: '2021.03 ~ 2024.08',
      en: 'Mar. 2021 - Aug. 2026',
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
          Java와 Spring 기반 백엔드 개발을 주력으로 하며, 서비스의 안정성과 데이터 흐름을 중심으로 시스템을 설계해 온 개발자입니다. 실무 인턴십을 통해 실시간 데이터 처리와 메시징 시스템을 경험하며 백엔드 역량을 강화했고, 책임감 있는 업무 수행으로 정규직 전환이라는 성과를 얻었습니다. 이후 성능과 안정성을 함께 고려하는 개발자가 되고자 다양한 백엔드 프로젝트를 수행하며 실시간 통신, 인증, 캐싱 구조 등을 직접 구현해 왔습니다. 또한 운영 환경에 대한 이해를 높이기 위해 CI/CD 자동화와 모니터링 경험을 쌓으며 서비스 전반을 바라보는 시야를 넓혀가고 있습니다.
        </>
      ),
      en: (
        <>
          I am a developer specializing in Java and Spring-based backend development, designing systems with a focus on service stability and data flow. Through a hands-on internship, I gained experience with real-time data processing and messaging systems, which strengthened my backend capabilities and led to a full-time position as a result of my responsible work ethic. Aspiring to become a developer who considers both performance and stability, I have since undertaken various backend projects, implementing real-time communication, authentication, and caching structures. I have also broadened my perspective on overall service operations by gaining experience in CI/CD automation and monitoring.
        </>
      ),
    },
    히어로태그라인: {
      ko: 'Backend Developer',
      en: 'Backend Developer',
    },
    개발경력: {
      ko: '경력',
      en: 'Work Experience',
    },
    경력기간: {
      ko: `(1년 2개월, ${작성일.ko} 기준)`,
      en: `(1 year 2 months, as of ${작성일.en})`,
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
      ko: '작성자: 안형준',
      en: 'Author: HyungJun An',
    },
  },
  hero: {
    이름: {
      ko: '안형준',
      en: 'HyungJun An (안형준)',
    },
    생일: {
      ko: '2000.02.24 (한국인)',
      en: 'Feburary 24, 2000 (Korean)',
    },
    학위: {
      ko: '한성대학교 전자정보 공학과',
      en: 'Hansung University,  Electron and Electronic Information',
    },

    주소: {
      ko: '경기도 고양시 일산동구 마두동',
      en: 'Madu dong, Gyeongkki',
    },

    jobTitle: {
      ko: 'Backend Developer',
      en: 'Backend Developer',
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
      ko: 'OTT감상',
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
      ko: '프로젝트',
      en: 'Projects',
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

    // H2O System Technology - Staff
    H2O_STAFF_회사명: { ko: '에이치투오시스템테크놀로지', en: 'H2O System Technology' },
    H2O_STAFF_팀: {
      ko: (
        <>
          금융사업부 <SubText>(사원)</SubText>
        </>
      ),
      en: (
        <>
          Finance Division <SubText>(Staff)</SubText>
        </>
      ),
    },
    H2O_STAFF_기간: { ko: '2024.03 ~ 2024.09', en: 'Mar 2024 ~ Sep 2024' },
    H2O_STAFF_설명_증권사_실시간_시세_체결_프로세스_시각화: {
        ko: '증권사 실시간 시세/체결 프로세스 시각화',
        en: 'Visualization of real-time stock price/trade process for securities firm'
    },
    H2O_STAFF_설명_DDS_기반_실시간_시세_체결_데이터를_시뮬레이션하는_프로세스_구축: {
        ko: 'DDS 기반 실시간 시세·체결 데이터를 시뮬레이션하는 프로세스 구축',
        en: 'Established a process to simulate real-time price and trade data based on DDS'
    },
    H2O_STAFF_설명_데이터_흐름을_시각화하여_고객사에_새로운_프로젝트_방향성_제시: {
        ko: '데이터 흐름을 시각화하여 고객사에 새로운 프로젝트 방향성 제시',
        en: 'Presented a new project direction to the client by visualizing data flow'
    },
    H2O_STAFF_설명_실시간_데이터_처리_병목_지점을_확인할_수_있는_분석_기반_마련: {
        ko: '실시간 데이터 처리 병목 지점을 확인할 수 있는 분석 기반 마련',
        en: 'Laid the foundation for analysis to identify bottlenecks in real-time data processing'
    },
    H2O_STAFF_설명_증권사_시세_체결_모듈_설계_및_검증: {
        ko: '증권사 시세/체결 모듈 설계 및 검증',
        en: 'Design and verification of securities firm\'s price/trade module'
    },
    H2O_STAFF_설명_DDS_기반_실시간_데이터_처리_구조_분석: {
        ko: 'DDS 기반 실시간 데이터 처리 구조 분석',
        en: 'Analysis of DDS-based real-time data processing structure'
    },
    H2O_STAFF_설명_Shared_Memory_해시체이닝_기법을_사용한_캐싱_구조_테스트_및_성능_검토: {
        ko: 'Shared Memory 해시체이닝 기법을 사용한 캐싱 구조 테스트 및 성능 검토',
        en: 'Testing and performance review of caching structure using Shared Memory hash-chaining technique'
    },
    H2O_STAFF_설명_증권사_Google_OTP_도입: {
        ko: '증권사 Google OTP 도입',
        en: 'Introduction of Google OTP for a securities firm'
    },
    H2O_STAFF_설명_Google_OTP_기반_2FA_인증_로직_구현: {
        ko: 'Google OTP 기반 2FA 인증 로직 구현',
        en: 'Implementation of 2FA authentication logic based on Google OTP'
    },
    H2O_STAFF_설명_JNI_연동을_통한_보안_모듈_적용으로_인증_구조_강화: {
        ko: 'JNI 연동을 통한 보안 모듈 적용으로 인증 구조 강화',
        en: 'Strengthened authentication structure by applying security module through JNI integration'
    },
    H2O_STAFF_설명_중복_로그인_방지_솔루션_검증: {
        ko: '중복 로그인 방지 솔루션 검증',
        en: 'Verification of duplicate login prevention solution'
    },
    H2O_STAFF_설명_Docker_기반_Redis_Sentinel_Master_Slave_클러스터_환경_구성: {
        ko: 'Docker 기반 Redis Sentinel + Master/Slave 클러스터 환경 구성',
        en: 'Configuration of Docker-based Redis Sentinel + Master/Slave cluster environment'
    },
    H2O_STAFF_설명_단일_마스터_복제_기법으로_데이터베이스를_이중화하여_안정성_향상: {
        ko: '단일 마스터 복제 기법으로 데이터베이스를 이중화하여 안정성 향상',
        en: 'Improved stability by duplicating the database with a single master replication technique'
    },
    H2O_STAFF_설명_중복_로그인_방지_구조_테스트_및_세션_처리_방식_검토: {
        ko: '중복 로그인 방지 구조 테스트 및 세션 처리 방식 검토',
        en: 'Testing of duplicate login prevention structure and review of session handling method'
    },
    H2O_STAFF_설명_Failover_세션_만료_정책_검증을_통해_안정적인_사용자_인증_구조_설계_지원: {
        ko: 'Failover·세션 만료 정책 검증을 통해 안정적인 사용자 인증 구조 설계 지원',
        en: 'Supported design of stable user authentication structure through failover and session expiration policy verification'
    },

    // H2O System Technology - Intern
    H2O_INTERN_회사명: { ko: '에이치투오시스템테크놀로지', en: 'H2O System Technology' },
    H2O_INTERN_팀: {
      ko: (
        <>
          솔루션사업부 <SubText>(인턴)</SubText>
        </>
      ),
      en: (
        <>
          Solution Division <SubText>(Intern)</SubText>
        </>
      ),
    },
    H2O_INTERN_기간: { ko: '2023.07 ~ 2024.03', en: 'Jul 2023 ~ Mar 2024' },
    H2O_INTERN_설명_서버_모니터링_환경_구축: {
        ko: '서버 모니터링 환경 구축',
        en: 'Establishment of server monitoring environment'
    },
    H2O_INTERN_설명_서버_네트워크_및_메시지_송신_현황을_분석하기_위해_Grafana_기반_모니터링_환경을_구성하고_운영_시나리오_테스트: {
        ko: '서버 네트워크 및 메시지 송신 현황을 분석하기 위해 Grafana 기반 모니터링 환경을 구성하고 운영 시나리오 테스트',
        en: 'Configured Grafana-based monitoring environment to analyze server network and message transmission status and tested operational scenarios'
    },
    H2O_INTERN_설명_서버_상태를_시각적으로_파악할_수_있는_대시보드를_구현하여_장애_대응_프로세스_개선_가능성을_제시: {
        ko: '서버 상태를 시각적으로 파악할 수 있는 대시보드를 구현하여 장애 대응 프로세스 개선 가능성을 제시',
        en: 'Proposed the possibility of improving the failure response process by implementing a dashboard that allows visual identification of server status'
    },
    H2O_INTERN_설명_상용_라이선스_비용_이슈에_대응하기_위한_오픈소스_대체_방안_검토: {
        ko: '상용 라이선스 비용 이슈에 대응하기 위한 오픈소스 대체 방안 검토',
        en: 'Reviewed open source alternatives to address commercial license cost issues'
    },
    H2O_INTERN_설명_메세징_솔루션_SDK_연동_검증: {
        ko: '메세징 솔루션 SDK 연동 검증',
        en: 'Verification of messaging solution SDK integration'
    },
    H2O_INTERN_설명_자회사에서_제공하는_메시징_SDK_Android_iOS_기능_검증을_위한_테스트_앱_개발: {
        ko: '자회사에서 제공하는 메시징 SDK(Android/iOS) 기능 검증을 위한 테스트 앱 개발',
        en: 'Developed a test app to verify the messaging SDK (Android/iOS) functions provided by a subsidiary'
    },
    H2O_INTERN_설명_Android_Java_Kotlin_Flutter_Dart_기반으로_샘플_앱을_직접_제작하고_SDK를_연동하여_메시지_송수신_알림_푸시_동작_등_핵심_기능_정상_여부_검증: {
        ko: 'Android(Java/Kotlin), Flutter(Dart) 기반으로 샘플 앱을 직접 제작하고 SDK를 연동하여 메시지 송·수신, 알림·푸시 동작 등 핵심 기능 정상 여부 검증',
        en: 'Directly produced a sample app based on Android (Java/Kotlin), Flutter (Dart) and integrated the SDK to verify the normal operation of core functions such as message transmission/reception, notification/push actions'
    },
    H2O_INTERN_설명_단말_OS_환경별_메시지_전달_지연_누락_등의_문제를_재현하여_분석_및_테스트_리포트_작성: {
        ko: '단말·OS 환경별 메시지 전달 지연, 누락 등의 문제를 재현하여 분석 및 테스트 리포트 작성',
        en: 'Reproduced, analyzed, and wrote test reports on issues such as message delivery delays and omissions for each terminal/OS environment'
    },
    H2O_INTERN_설명_SDK_안정성_검증을_통해_실제_서비스_적용_시_발생_가능한_호환성_성능_이슈_사전_방지에_기여: {
        ko: 'SDK 안정성 검증을 통해 실제 서비스 적용 시 발생 가능한 호환성·성능 이슈 사전 방지에 기여',
        en: 'Contributed to the prevention of compatibility and performance issues that may occur during actual service application through SDK stability verification'
    },
  },
}
