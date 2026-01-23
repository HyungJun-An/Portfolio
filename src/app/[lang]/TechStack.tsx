import {
  siJava,
  siSpring,
  siFastapi,
  siMysql,
  siMariadb,
  siRedis,
  siMongodb,
  siNginx,
  siJenkins,
  siAmazonrds,
  siGithubactions,
  siJira,
  siSlack,
  siFigma,
  siGit,
  siGrafana,
  siC,
  siJavascript,
} from 'simple-icons'

type TechItem = {
  name: string
  href: string
  icon: null | { hex: string; path: string }
}

type TechCategory = {
  title: string
  icon: JSX.Element
  color: string
  iconColor: string
  items: TechItem[]
  featured?: string[]
}

const techCategories: TechCategory[] = [
  {
    title: 'Language',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    color: 'border-blue-100',
    iconColor: 'text-blue-600',
    items: [
      { name: 'Java', href: 'https://www.java.com/', icon: siJava },
      { name: 'C', href: 'https://en.wikipedia.org/wiki/C_(programming_language)', icon: siC },
      { name: 'JavaScript', href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', icon: siJavascript },
    ],
  },
  {
    title: 'Backend',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    color: 'border-green-100',
    iconColor: 'text-green-600',
    items: [
      { name: 'Spring Boot', href: 'https://spring.io/projects/spring-boot', icon: siSpring },
      { name: 'FastAPI', href: 'https://fastapi.tiangolo.com/', icon: siFastapi },
      { name: 'Spring Data JPA', href: 'https://spring.io/projects/spring-data-jpa', icon: siSpring },
      { name: 'SQLAlchemy', href: 'https://www.sqlalchemy.org/', icon: null },
      { name: 'QueryDSL', href: 'http://querydsl.com/', icon: null },
    ],
  },
  {
    title: 'Infra/DB',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
    color: 'border-sky-100',
    iconColor: 'text-sky-600',
    items: [
      { name: 'MySQL', href: 'https://www.mysql.com/', icon: siMysql },
      { name: 'MariaDB', href: 'https://mariadb.org/', icon: siMariadb },
      { name: 'Redis', href: 'https://redis.io/', icon: siRedis },
      { name: 'MongoDB', href: 'https://www.mongodb.com/', icon: siMongodb },
      { name: 'Nginx', href: 'https://www.nginx.com/', icon: siNginx },
      { name: 'Jenkins', href: 'https://www.jenkins.io/', icon: siJenkins },
      { name: 'AWS EC2 + RDS', href: 'https://aws.amazon.com/ec2/', icon: siAmazonrds },
      { name: 'GitHub Actions', href: 'https://github.com/features/actions', icon: siGithubactions },
    ],
  },
  {
    title: 'ETC',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    color: 'border-orange-100',
    iconColor: 'text-orange-600',
    items: [
      { name: 'Jira', href: 'https://www.atlassian.com/software/jira', icon: siJira },
      { name: 'Slack', href: 'https://slack.com/', icon: siSlack },
      { name: 'Figma', href: 'https://www.figma.com/', icon: siFigma },
      { name: 'Git', href: 'https://git-scm.com/', icon: siGit },
      { name: 'Grafana', href: 'https://grafana.com/', icon: siGrafana },
    ],
  },
]

export default function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-2">
      {techCategories.map((category, index) => (
        <div
          key={index}
          className={`flex flex-col gap-2 rounded-xl bg-gradient-to-br ${category.color} border p-4`}
        >
          {/* Header */}
          <div className="flex items-center gap-1">
            <div className={`p-2 rounded-lg bg-white ${category.iconColor}`}>{category.icon}</div>
            <h4 className="text-lg font-semibold text-sky-300">{category.title}</h4>
          </div>

          {/* Tech Items */}
          <div className="flex flex-wrap gap-y-2 gap-x-3">
            {category.items.map((item, itemIndex) => (
              <a
                key={itemIndex}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 p-2 py-1 text-sm text-sky-100 font-medium hover:text-sky-200 transition"
              >
                {item.icon && (
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill={`#${item.icon.hex}`}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={item.icon.path} />
                  </svg>
                )}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}