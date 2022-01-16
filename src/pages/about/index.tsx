import config from 'config'

import * as styles from './styles.css'

import PageSEO from '#components/shared/SEO/PageSEO'
import SocialIcon from '#components/icons'

function About() {
  return (
    <>
      <PageSEO title="About" url="https://tigger.dev/about" />
      <section className={styles.container}>
        <article className={styles.articleContainer}>
          <h1 className={styles.title}>{config.about.title}</h1>
          <p className={styles.description}>{config.about.description}</p>
          <SocialIcon kind="github" href={config.author.contacts.github} />
          <SocialIcon kind="linkedin" href={config.author.contacts.linkedin} />
        </article>
        <article className={styles.articleContainer}>
          <h2 className={styles.subtitle}>경력 👨🏻‍💻</h2>
          <div className={styles.experienceContainer}>
            <div className={styles.companyContainer}>
              <h3 className={styles.companyTitle}>프립(프렌트립)</h3>
              <span className={styles.companySubtitle}>Frontend Engineer</span>
              <span className={styles.companySubtitle}>2021. 06 ~ 현재</span>
            </div>
            <div className={styles.companyDescriptionContainer}>
              <div className={styles.companyDescription}>
                <h4 className={styles.projectTitle}>프립 웹 서비스 개편</h4>
                <span className={styles.proejctSubtitle}>2021. 07 ~ 2022. 01</span>
                <div>
                  <strong className={styles.projectDescription}>
                    프립 웹 서비스와 관련된 개발 진행
                  </strong>
                  <ul className={styles.proejctItems}>
                    <li>ContextAPI와 Hook을 이용한 상태관리</li>
                    <li>
                      Redux와 Redux-saga를 ContextAPI와 Hook을 이용한 상태관리ContextAPI와 Hook을
                      이용한 상태관리
                    </li>
                    <li>REST API에서 GraphQL Apollo로 전환</li>
                  </ul>
                  <ul className={styles.projectStacks}>
                    <li className={styles.projectStack}>Typescript</li>
                    <li className={styles.projectStack}>React</li>
                    <li className={styles.projectStack}>Redux</li>
                    <li className={styles.projectStack}>Redux-saga</li>
                  </ul>
                </div>
              </div>
              <div className={styles.companyDescription}>
                <h4 className={styles.projectTitle}>프립 웹 서비스 개편</h4>
                <span className={styles.proejctSubtitle}>2021. 07 ~ 2022. 01</span>
                <div>
                  <strong className={styles.projectDescription}>
                    프립 웹 서비스와 관련된 개발 진행
                  </strong>
                  <ul className={styles.proejctItems}>
                    <li>ContextAPI와 Hook을 이용한 상태관리</li>
                    <li>
                      Redux와 Redux-saga를 ContextAPI와 Hook을 이용한 상태관리ContextAPI와 Hook을
                      이용한 상태관리
                    </li>
                    <li>REST API에서 GraphQL Apollo로 전환</li>
                  </ul>
                  <ul className={styles.projectStacks}>
                    <li className={styles.projectStack}>Typescript</li>
                    <li className={styles.projectStack}>React</li>
                    <li className={styles.projectStack}>Redux</li>
                    <li className={styles.projectStack}>Redux-saga</li>
                    <li className={styles.projectStack}>Typescript</li>
                    <li className={styles.projectStack}>React</li>
                    <li className={styles.projectStack}>Redux</li>
                    <li className={styles.projectStack}>Redux-saga</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.experienceContainer}>
            <div className={styles.companyContainer}>
              <h3 className={styles.companyTitle}>프립(프렌트립)</h3>
              <span className={styles.companySubtitle}>Frontend Engineer</span>
              <span className={styles.companySubtitle}>2021. 06 ~ 현재</span>
            </div>
            <div className={styles.companyDescriptionContainer}>
              <div className={styles.companyDescription}>
                <h4 className={styles.projectTitle}>프립 웹 서비스 개편</h4>
                <span className={styles.proejctSubtitle}>2021. 07 ~ 2022. 01</span>
                <div>
                  <strong className={styles.projectDescription}>
                    프립 웹 서비스와 관련된 개발 진행
                  </strong>
                  <ul className={styles.proejctItems}>
                    <li>ContextAPI와 Hook을 이용한 상태관리</li>
                    <li>
                      Redux와 Redux-saga를 ContextAPI와 Hook을 이용한 상태관리ContextAPI와 Hook을
                      이용한 상태관리
                    </li>
                    <li>REST API에서 GraphQL Apollo로 전환</li>
                  </ul>
                  <ul className={styles.projectStacks}>
                    <li className={styles.projectStack}>Typescript</li>
                    <li className={styles.projectStack}>React</li>
                    <li className={styles.projectStack}>Redux</li>
                    <li className={styles.projectStack}>Redux-saga</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
    </>
  )
}

export default About
