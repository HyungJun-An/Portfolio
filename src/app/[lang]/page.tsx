/* eslint-disable @next/next/no-img-element */
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment, PropsWithChildren } from 'react'

import { APPLICATION_NAME } from '../../common/constants'
import { PageProps } from '../../common/types'
import PlanbyLogo from '../../svg/PlanbyLogo'
import { getISODate } from '../../util/date'

import Certificates from './Certificates'
import { dictionary, 작성일 } from './dictionary'
import Education from './Education'
import Hero from './Hero'
import LanguageUpdate from './LanguageUpdate'
import OtherCertificates from './OtherCertificates'
import Portpolio from './Portpolio'
import TechStack from './TechStack'
import WorkExperiences, { TechBadge } from './WorkExperiences'

export async function generateStaticParams() {
  return [{ lang: 'ko' }, { lang: 'en' }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const lang = (await params).lang as 'ko' | 'en'

  if (lang === 'ko') return { title: APPLICATION_NAME }
  if (lang === 'en') return { title: `HyungJun An ${getISODate(new Date())} Resume Portpolio` }

  return { title: APPLICATION_NAME }
}

const ProjectCard = ({title, period, description, techs, achievements} : {title:string, period:string, description:string, techs:string[], achievements:string[]}) => (
    <div className="mb-6 p-4 bg-neutral-900 rounded-lg border border-neutral-700">
        <div className="flex justify-between whitespace-nowrap gap-4 my-4 text-gray-100">
          <h4>{title}</h4>
          <div className="text-gray-300">{period}</div>
        </div>
        <div className="text-gray-300">{description}</div>

        <div className="flex flex-wrap gap-1 my-3">
            {techs.map(tech => <TechBadge key={tech} tech={tech} />)}
        </div>
        <ul className="list-disc list-inside space-y-1">
            {achievements.map(ach => <li key={ach}>{ach}</li>)}
        </ul>
    </div>
)

export default async function HomePage({ params }: PageProps) {
  const lang = (await params).lang as 'ko' | 'en'
  const date = 작성일[lang]

  return (
    <main className="mx-auto max-w-[720px]">
      <LanguageUpdate lang={lang} />

      <div className="flex justify-end items-center">
        <h1 className="sr-only">{dictionary.general.이력서[lang]}</h1>
        <div className="flex whitespace-nowrap gap-2">
          <Link href="/ko">한국어</Link>
          <Link href="/en">English</Link>
        </div>
      </div>

      {/* Hero Section */}
      <section id="hero" className="mb-12">
        <h2 className="text-2xl my-6 text-center">
          <span className="hero-highlight">{dictionary.general.히어로태그라인[lang]}</span>
        </h2>
        <Hero lang={lang} />
        <p className="my-4 text-gray-200">{dictionary.general.한줄소개[lang]}</p>
      </section>

      {/* 경력 */}
      <section id="work-experience" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>

          <h2 className="text-2xl font-bold">
            {dictionary.general.개발경력[lang]}{' '}
            <span className="text-sm font-semibold text-gray-400">{dictionary.general.경력기간[lang]}</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-neutral-700" />
          <WorkExperiences lang={lang} />
        </div>
      </section>

      {/* 프로젝트 */}
      <section id="personal-project" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h2 className="text-2xl font-bold">{dictionary.project.개인프로젝트[lang]}</h2>
        </div>

        <ProjectCard
            title="중고사자"
            period="2025.05.02 - 2025.05.08"
            description={lang === 'ko' ? "지역기반 중고 거래 플랫폼" : "Location-based used trading platform"}
            techs={['Java 21', 'Spring Boot', 'JPA', 'WebSocket', 'HTML5', 'CSS3', 'JavaScript', 'Thymeleaf', 'MySQL(SSH 터널링)', 'IntelliJ', 'Git', 'Gradle']}
            achievements={lang === 'ko' ? [
                "WebSocket 기반 실시간 커뮤니티·1:1 채팅 및 게시글 기반 1:N 채팅 기능 전체 구현",
                "채팅방 생성·참여·메시지 송수신 구조 설계",
                "사용자 거래 협의를 위한 지연 없는 실시간 소통 환경 구축",
                "팀 내 채팅 기능 단독 담당으로 서비스 주요 기능 완성도 향상",
            ] : [
                "Full implementation of real-time community, 1:1 chat, and post-based 1:N chat functions based on WebSocket",
                "Designed the structure for creating, joining, and sending/receiving messages in chat rooms",
                "Established a real-time communication environment without delay for user transaction negotiations",
                "Improved the completeness of the service's main functions by exclusively managing the chat function within the team",
            ]}
        />
        
        <ProjectCard
            title="Eventory"
            period="2025.07.24 - 2025.08.22"
            description={lang === 'ko' ? "SaaS 기반 박람회 관리 플랫폼" : "SaaS-based exhibition management platform"}
            techs={['Docker', 'Jenkins', 'GitHub Webhook', 'Nginx', 'Prometheus', 'Grafana', 'Spring Boot', 'React', 'Vite', 'MySQL', 'Redis']}
            achievements={lang === 'ko' ? [
                "Docker 기반 백엔드·프론트엔드 컨테이너 이미지 자동 빌드 및 배포 구조 구축",
                "GitHub Webhook + Jenkins를 활용한 CI/CD 파이프라인 설계 및 자동화",
                "Bridge Network 기반 내부망 구성으로 DB 서버 외부 접근 차단",
                "Prometheus·Grafana 기반 서버 모니터링 대시보드 구축",
                "GitHub Webhook 연동으로 배포·장애 실시간 알림 환경 구현",
                "자동화 파이프라인 구축을 통해 배포 시간 80% 절감 및 서비스 운영 안정성 향상",
            ] : [
                " 구축 Established an automated build and deployment structure for backend and frontend container images based on Docker",
                "Designed and automated CI/CD pipeline using GitHub Webhook + Jenkins",
                "Blocked external access to the DB server by configuring an internal network based on Bridge Network",
                "Built a server monitoring dashboard based on Prometheus and Grafana",
                "Implemented a real-time notification environment for deployment and failures by integrating GitHub Webhook",
                "Reduced deployment time by 80% and improved service operation stability by establishing an automated pipeline",
            ]}
        />

      </section>

      {/* 학력 */}
      <section id="education" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
          <h2 className="text-2xl font-bold">{dictionary.general.학력[lang]}</h2>
        </div>
        <Education lang={lang} />
      </section>

      {/* 자격증 */}
      <section id="certificate" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
          <h2 className="text-2xl font-bold">{dictionary.general.자격증[lang]}</h2>
        </div>
        <Certificates lang={lang} />
        <OtherCertificates lang={lang} />
      </section>

      {/* 기술 스택 */}
      <section id="skill" className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          <h2 className="text-2xl font-bold">{dictionary.general.기술스택[lang]}</h2>
        </div>
        <TechStack />
      </section>

      {/* 작성일/작성자 */}
      <div className="w-full text-center text-sm text-slate-300 mt-8">작성일: {date}</div>
      <div className="w-full text-center text-sm text-slate-300">{dictionary.general.작성자[lang]}</div>
      <div className="my-8" />
      <Portpolio date={date} />
    </main>
  )
}