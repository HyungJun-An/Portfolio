import { PropsWithChildren, ReactNode } from 'react'

import { dictionary } from './dictionary'

type Props = {
  lang: 'ko' | 'en'
}

const TimelineDot = ({
  children,
  className = 'bg-blue-100 text-blue-700',
}: {
  children: ReactNode
  className?: string
}) => (
  <div
    className={`absolute left-0 top-2 w-16 h-16 rounded-full flex items-center justify-center ${className}`}
  >
    <span className="text-xs font-bold">{children}</span>
  </div>
)

const ExperienceCard = ({ children }: PropsWithChildren) => (
  <div className="ml-24 bg-white rounded-xl border-2 border-gray-200 p-6">{children}</div>
)

export const TechBadge = ({ tech }: { tech: string }) => (
  <span className="px-2 py-1 bg-gray-100 rounded text-xs">{tech}</span>
)


const Achievement = ({ children }: PropsWithChildren) => (
  <div className="flex items-start gap-2">
    <span className="text-blue-500 mt-px">•</span>
    <div>{children}</div>
  </div>
)

const PositionDetails = ({
  title,
  team,
  period,
  open = true,
  children,
}: {
  title: string
  team: ReactNode
  period: string
  open?: boolean
  children: ReactNode
}) => (
  <details className="group" open={open}>
    <summary className="cursor-pointer list-none">
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
        <div>
          <h4 className="font-semibold">{title}</h4>
          <p className="text-sm text-gray-700">{team}</p>
        </div>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
    </summary>
    <div className="p-4 space-y-3">{children}</div>
  </details>
)

export default function WorkExperiences({ lang }: Props) {
  return (
    <ul className="space-y-8">
      {/* H2O Staff */}
      <li className="relative">
        <TimelineDot>{dictionary.workExperiences.과거[lang]}</TimelineDot>

        <ExperienceCard>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold">
              {dictionary.workExperiences.H2O_STAFF_회사명[lang]}
            </h3>
            <span className="text-sm text-gray-500">
              {dictionary.workExperiences.H2O_STAFF_기간[lang]}
            </span>
          </div>

          <PositionDetails
            title="금융사업부 (사원)"
            team={dictionary.workExperiences.H2O_STAFF_팀[lang]}
            period={dictionary.workExperiences.H2O_STAFF_기간[lang]}
          >
            <div className="space-y-2 mt-2">
              <Achievement>
                <p className="text-sm text-gray-600">
                  {dictionary.workExperiences.H2O_STAFF_설명_증권사_실시간_시세_체결_프로세스_시각화[lang]}
                </p>
              </Achievement>
              <Achievement>
                <p className="text-sm text-gray-600">
                  {dictionary.workExperiences.H2O_STAFF_설명_DDS_기반_실시간_시세_체결_데이터를_시뮬레이션하는_프로세스_구축[lang]}
                </p>
              </Achievement>
              <Achievement>
                <p className="text-sm text-gray-600">
                  {dictionary.workExperiences.H2O_STAFF_설명_증권사_Google_OTP_도입[lang]}
                </p>
              </Achievement>
               <Achievement>
                <p className="text-sm text-gray-600">
                  {dictionary.workExperiences.H2O_STAFF_설명_중복_로그인_방지_솔루션_검증[lang]}
                </p>
              </Achievement>
            </div>
          </PositionDetails>
        </ExperienceCard>
      </li>

      {/* H2O Intern */}
      <li className="relative">
        <TimelineDot className="bg-gray-100 text-gray-700">
          {dictionary.workExperiences.과거[lang]}
        </TimelineDot>

        <ExperienceCard>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-lg font-bold">
              {dictionary.workExperiences.H2O_INTERN_회사명[lang]}
            </h3>
            <span className="text-sm text-gray-500">
              {dictionary.workExperiences.H2O_INTERN_기간[lang]}
            </span>
          </div>

          <PositionDetails
            title="솔루션사업부 (인턴)"
            team={dictionary.workExperiences.H2O_INTERN_팀[lang]}
            period={dictionary.workExperiences.H2O_INTERN_기간[lang]}
          >
             <div className="space-y-2 mt-2">
              <Achievement>
                <p className="text-sm text-gray-600">
                  {dictionary.workExperiences.H2O_INTERN_설명_서버_모니터링_환경_구축[lang]}
                </p>
              </Achievement>
              <Achievement>
                <p className="text-sm text-gray-600">
                  {dictionary.workExperiences.H2O_INTERN_설명_메세징_솔루션_SDK_연동_검증[lang]}
                </p>
              </Achievement>
            </div>
          </PositionDetails>
        </ExperienceCard>
      </li>
    </ul>
  )
}