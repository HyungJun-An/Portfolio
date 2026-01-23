import { dictionary } from './dictionary'

type Props = {
  lang: 'ko' | 'en'
}

export default function Education({ lang }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <td>{dictionary.education.학력_이름[lang]}</td>
          <td>{dictionary.education.세부[lang]}</td>
          <td>{dictionary.education.기간[lang]}</td>
          <td>{dictionary.education.비고[lang]}</td>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td className="font-semibold">
            <a href="https://www.hansung.ac.kr/" target="_blank" rel="noreferrer">
              {dictionary.education.한성대학교[lang]}
            </a>
          </td>

          <td>
            {dictionary.education.학력_학위[lang]}
            <div className="text-xs text-gray-500">{dictionary.education.학력_비고[lang]}</div>
          </td>

          <td className="text-center">{dictionary.education.학력_기간[lang]}</td>
          <td className="text-center">{dictionary.education.비고_내용[lang]}</td>
        </tr>
      </tbody>
    </table>
  )
}
