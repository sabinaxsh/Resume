const roles = [
  {
    period: "МАРТ 2024 — ФЕВРАЛЬ 2025",
    company: "FATIN&CO.",
    role: "Sales Manager",
    description:
      "B2C-продажи услуг: полный цикл сделки с холодными, тёплыми и повторными клиентами.",
    results: [
      "Стабильное выполнение 100% плана продаж",
      "10 закрытых сделок в месяц при среднем чеке $500",
      "Около 200 звонков в день",
      "Средняя конверсия из звонка в сделку — около 10%",
    ],
    tasks: [
      "Работа с холодными, тёплыми и повторными клиентами",
      "Ведение сделки от первого контакта до закрытия",
      "Управление воронкой продаж и клиентской базой в amoCRM",
    ],
    tags: ["B2C", "AMOCRM", "ПОЛНЫЙ ЦИКЛ СДЕЛКИ"],
  },
  {
    period: "ПОВЫШЕНИЕ В 2024",
    company: "FATIN&CO.",
    role: "Client Performance Manager",
    description:
      "Сопровождение действующих клиентов, повышение среднего чека и координация сделок между командами.",
    results: [
      "Минимальный финансовый KPI — $20 000 в месяц",
      "Конверсия работы с горячими клиентами — близкая к 100%",
      "Повышение среднего чека через подбор оптимальных решений",
    ],
    tasks: [
      "Работа с горячими клиентами с уже заключёнными сделками",
      "Апгрейд услуг и развитие клиентской выручки",
      "Координация клиентов между отделами аналитики и банками",
      "Участие в принятии клиентских решений и сопровождении сделок",
    ],
    tags: ["CLIENT SUCCESS", "UPSELL", "ФИНАНСОВЫЙ KPI"],
  },
  {
    period: "В РАМКАХ FATIN&CO.",
    company: "КОМАНДА ИЗ 4 ЧЕЛОВЕК",
    role: "Тимлид команды продаж",
    description:
      "Управление командой новых менеджеров по продажам и развитие качества коммуникации.",
    results: [
      "Стабильное выполнение командного плана",
      "Снижение количества ошибок в работе менеджеров",
    ],
    tasks: [
      "Контроль индивидуальных и командных KPI",
      "Ежедневные разборы звонков и работа над ошибками",
      "Еженедельный сравнительный анализ качества коммуникации",
    ],
    tags: ["TEAM LEAD", "KPI", "ОБУЧЕНИЕ КОМАНДЫ"],
  },
  {
    period: "МАРТ 2025 — СЕНТЯБРЬ 2025",
    company: "FATIN&CO.",
    role: "HR-специалист, рекрутер",
    description:
      "Полный цикл подбора менеджеров по работе с клиентами: от поиска до адаптации и оформления.",
    results: [
      "Закрыто 50 вакансий в отдел продаж",
      "Закрытие вакансий раньше дедлайнов — до 1 недели",
      "Снижение текучести персонала до ~20% спустя 3 месяца",
      "Подбор редких кандидатов, включая специалистов со знанием турецкого языка",
    ],
    tasks: [
      "Поиск, интервью и оценка кандидатов",
      "Сопровождение сотрудников на этапе адаптации",
      "Работа с документацией и оформлением",
      "Использование альтернативных каналов поиска",
    ],
    tags: ["FULL-CYCLE RECRUITING", "INTERVIEW", "АДАПТАЦИЯ"],
  },
]

const highlights = [
  {
    index: "01",
    name: "100%",
    type: "ВЫПОЛНЕНИЕ ПЛАНА",
    detail: "Стабильный результат в B2C-продажах",
    color: "lime",
  },
  {
    index: "02",
    name: "$20K",
    type: "ФИНАНСОВЫЙ KPI",
    detail: "Минимальный ежемесячный показатель",
    color: "cyan",
  },
  {
    index: "03",
    name: "50",
    type: "ЗАКРЫТЫХ ВАКАНСИЙ",
    detail: "Менеджеры по работе с клиентами",
    color: "violet",
  },
]

const skills = [
  "B2C-продажи услуг",
  "Холодные и горячие лиды",
  "Закрытие сделок",
  "Повышение среднего чека",
  "Финансовые KPI",
  "amoCRM",
  "Переговоры",
  "Обработка возражений",
  "Управление командой",
  "Контроль KPI",
  "Microsoft Word",
  "PowerPoint",
  "Excel",
  "Adobe Premiere Pro",
]

const languages = [
  ["РУССКИЙ", "РОДНОЙ"],
  ["АНГЛИЙСКИЙ", "C1"],
  ["ПЕРСИДСКИЙ (ФАРСИ)", "B2"],
]

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="size-4"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d={diagonal ? "M4 12 12 4M6 4h6v6" : "M2.5 8h11M9.5 4l4 4-4 4"}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  )
}

function SectionLabel({
  index,
  children,
}: {
  index: string
  children: React.ReactNode
}) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span className="section-label__line" />
      <span>{children}</span>
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="logo" aria-label="На главную">
        Sharipova Sabina
      </a>
      <nav aria-label="Основная навигация">
        <a href="#results">Результаты</a>
        <a href="#experience">Опыт</a>
        <a href="#about">Профиль</a>
      </nav>
      <a className="status-pill" href="mailto:sabinaxsh@gmail.com">
        <span className="status-pill__dot" />
        ОТКРЫТА К ПРЕДЛОЖЕНИЯМ
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__meta reveal">
        <span>МАРКЕТИНГ • ПРОДАЖИ</span>
        <span>КОММУНИКАЦИИ</span>
      </div>
      <div className="hero__content">
        <p className="eyebrow reveal" />
        <h1 className="glitch reveal" data-text="SABINA">
          SABINA
        </h1>
        <div className="hero__footer reveal">
          <p>
            Специалист по продажам и клиентскому сопровождению с опытом в
            B2C-продажах, рекрутинге и управлении командой.
          </p>
          <a
            className="circle-link"
            href="#results"
            aria-label="Перейти к результатам"
          >
            <ArrowIcon />
          </a>
        </div>
      </div>
      <div className="orbit-mark" aria-hidden="true">
        <span className="orbit-mark__ring" />
        <span className="orbit-mark__core">+</span>
      </div>
      <div className="scroll-cue" aria-hidden="true">
        <span>ЛИСТАЙТЕ ДАЛЬШЕ</span>
        <i />
      </div>
    </section>
  )
}

function Results() {
  return (
    <section id="results" className="content-section">
      <SectionLabel index="01">КЛЮЧЕВЫЕ РЕЗУЛЬТАТЫ</SectionLabel>
      <div className="project-list">
        {highlights.map((highlight) => (
          <a className="project" href="#experience" key={highlight.index}>
            <span className="project__index">[{highlight.index}]</span>
            <div
              className={`project__visual project__visual--${highlight.color}`}
            >
              <span className="project__shape" />
              <span className="project__grid" />
            </div>
            <div className="project__copy">
              <span>{highlight.type}</span>
              {highlight.index !== "01" && <h2>{highlight.name}</h2>}
              <p>{highlight.detail}</p>
            </div>
            <span className="project__arrow">
              <ArrowIcon diagonal />
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="content-section experience">
      <SectionLabel index="02">ОПЫТ РАБОТЫ</SectionLabel>
      <div className="experience__grid">
        <div className="experience__intro">
          <h2>
            ПРОДАЖИ.
            <br />
            КЛИЕНТЫ.
            <br />
            <span>КОМАНДА.</span>
          </h2>
          <p>
            Прошла путь от менеджера по продажам до Client Performance Manager,
            тимлида и рекрутера полного цикла.
          </p>
        </div>
        <div className="timeline">
          {roles.map((item, index) => (
            <article className="role" key={item.role}>
              <div className="role__node">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="role__body">
                <span className="role__period">{item.period}</span>
                <div className="role__title">
                  <h3>{item.role}</h3>
                  <span>{item.company}</span>
                </div>
                <p>{item.description}</p>
                <div className="role__details">
                  <div>
                    <strong>РЕЗУЛЬТАТЫ</strong>
                    <ul>
                      {item.results.map((result) => (
                        <li key={result}>{result}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <strong>ЗАДАЧИ</strong>
                    <ul>
                      {item.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="content-section about">
      <SectionLabel index="03">ПРОФИЛЬ И КОМПЕТЕНЦИИ</SectionLabel>
      <div className="about__grid">
        <div className="profile-card">
          <div className="profile-card__top">
            <span>ПРОФИЛЬ // SS-2025</span>
            <span>VERIFIED</span>
          </div>
          <div className="profile-card__portrait" aria-label="Фото Шариповой Сабины">
            <img
              src="/sabina-profile.jpg"
              alt="Шарипова Сабина"
              className="absolute inset-0 size-full object-cover object-center contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <span className="portrait__cross portrait__cross--one">+</span>
            <span className="portrait__cross portrait__cross--two">+</span>
          </div>
          <div className="profile-card__data">
            <span>ОРИЕНТАЦИЯ НА РЕЗУЛЬТАТ</span>
            <span>БЫСТРАЯ АДАПТАЦИЯ</span>
            <span>СИСТЕМНАЯ РАБОТА</span>
          </div>
        </div>
        <div className="about__copy">
          <h2>
            СИЛЬНА В ЦИФРАХ.
            <br />
            ТОЧНА В <span>КОММУНИКАЦИИ.</span>
          </h2>
          <p>
            Работаю с холодными и горячими клиентами, веду полный цикл сделки —
            от первого контакта до закрытия и повышения чека. Управляю воронкой
            продаж в amoCRM, выполняю и контролирую KPI. Имею опыт тимлидства и
            полного цикла подбора персонала для отдела продаж. Быстро вхожу в
            процессы и ориентирована на результат.
          </p>
          <div className="skill-grid">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="credentials">
        <article>
          <span>ОБРАЗОВАНИЕ</span>
          <h3>НИУ ВШЭ · МОСКВА</h3>
          <p>
            Бакалавриат, Факультет креативных индустрий
            <br />
            Образовательная программа «Медиакоммуникации»
          </p>
          <small>ВЫПУСК · 2029</small>
        </article>
        <article>
          <span>ДОПОЛНИТЕЛЬНОЕ ОБРАЗОВАНИЕ</span>
          <h3>AMERICAN COUNCILS</h3>
          <p>
            Study with US program · 2019–2020
            <br />
            College Preparation Program · 2020–2021
          </p>
        </article>
        <article>
          <span>ЯЗЫКИ</span>
          <div className="language-list">
            {languages.map(([language, level]) => (
              <p key={language}>
                <b>{language}</b>
                <span>{level}</span>
              </p>
            ))}
          </div>
        </article>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact">
      <div className="footer__noise" aria-hidden="true" />
      <p>{"\u00A0\u00A0"}</p>
      <a className="footer__headline" href="mailto:sabinaxsh@gmail.com">
        ДАВАЙТЕ
        <br />
        <span>СВЯЖЕМСЯ.</span>
      </a>
      <div className="footer__bottom">
        <span>© 2025 ШАРИПОВА САБИНА</span>
        <div>
          <a href="https://t.me/slxlsh" target="_blank" rel="noreferrer">
            TELEGRAM <ArrowIcon diagonal />
          </a>
          <a href="tel:+79804597634">
            +7 980 459-76-34 <ArrowIcon diagonal />
          </a>
          <a href="mailto:sabinaxsh@gmail.com">
            EMAIL <ArrowIcon diagonal />
          </a>
        </div>
        <a href="#top">НАВЕРХ ↑</a>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <main>
      <div className="scanlines" aria-hidden="true" />
      <Header />
      <Hero />
      <Results />
      <Experience />
      <About />
      <Footer />
    </main>
  )
}
