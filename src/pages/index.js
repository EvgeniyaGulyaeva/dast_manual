import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{
        background:
          'linear-gradient(135deg, #001A33 0%, #00498E 40%, #3CA1FF 100%)',
        color: '#EFF7FF',
      }}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title || 'DAST — Руководство пользователя'}
        </Heading>
        <p className="hero__subtitle">
          Atom After-Sales Diagnostic and Service Tool — ваш помощник
          в диагностике и обслуживании электронных систем автомобиля
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{
              backgroundColor: '#3CA1FF',
              borderColor: '#3CA1FF',
              color: '#001A33',
            }}
            to="/docs/intro">
            Перейти к руководству по DAST
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section
      className={styles.featuresSection}
      style={{backgroundColor: '#EFF7FF', padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          {/* Карточка 1 */}
          <div className="col col--4">
            <div
              className={clsx('card', styles.featureCard)}
              style={{
                height: '100%',
                border: 'none',
                backgroundColor: '#DBEEFF',
              }}>
              <div className="card__image" style={{textAlign: 'center'}}>
                {/* Плейсхолдер для картинки */}
                <img
                  src="/img/device-desktop-analytics.svg"
                  alt="Подключение DAST к автомобилю"
                  style={{maxWidth: '160px', marginTop: '1.5rem'}}
                />
              </div>
              <div className="card__body">
                <h3 style={{color: '#001A33'}}>Диагностика автомобиля</h3>
                <p>
                  DAST позволяет подключаться к автомобилю по Ethernet и осуществлять полный цикл диагностических процедур: 
                  считывать диагностические коды неисправностей (DTC), отслеживать действительные значения
                  в реальном времени и получать служебную информацию об электронных
                  блоках управления.
                </p>
              </div>
            </div>
          </div>

          {/* Карточка 2 */}
          <div className="col col--4">
            <div
              className={clsx('card', styles.featureCard)}
              style={{
                height: '100%',
                border: 'none',
                backgroundColor: '#BFE0FF',
              }}>
              <div className="card__image" style={{textAlign: 'center'}}>
                {/* Плейсхолдер для картинки */}
                <img
                  src="/img/cloud-computing.svg"
                  alt="Интеграция с Atom Automotive Cloud"
                  style={{maxWidth: '160px', marginTop: '1.5rem'}}
                />
              </div>
              <div className="card__body">
                <h3 style={{color: '#001A33'}}>Интеграция с облачными сервисами Атом</h3>
                <p>
                  Инструмент получает информацию об автомобиле и истории его обслуживания из облачных сервисов Атом и
                  передает в облако диагностические протоколы и сведения об
                  инцидентах для последующего анализа качества и поддержки
                  гарантийных решений.
                </p>
              </div>
            </div>
          </div>

          {/* Карточка 3 */}
          <div className="col col--4">
            <div
              className={clsx('card', styles.featureCard)}
              style={{
                height: '100%',
                border: 'none',
                backgroundColor: '#9BCFFF',
              }}>
              <div className="card__image" style={{textAlign: 'center'}}>
                {/* Плейсхолдер для картинки */}
                <img
                  src="/img/book-upload.svg"
                  alt="Послепродажное обслуживание и документация"
                  style={{maxWidth: '160px', marginTop: '1.5rem'}}
                />
              </div>
              <div className="card__body">
                <h3 style={{color: '#001A33'}}>Поддержка сервисного инженера</h3>
                <p>
                  DAST предлагает бользователю быстрые ссылки на гарантийный и сервисный порталы,
                  каталог запасных частей и техническую документацию, а также
                  позволяет отправлять данные в техническую поддержку Атом.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительный текстовый блок */}
        <div className="row" style={{marginTop: '3rem'}}>
          <div className="col col--12">
            <div
              className={styles.featureText}
              style={{
                padding: '2rem',
                borderRadius: '12px',
                backgroundColor: '#DBEEFF',
                border: '1px solid #BFE0FF',
              }}>
              <h2 style={{color: '#00264A', marginBottom: '0.75rem'}}>
                
              </h2>
              <p>
                DAST помогает сервисным специалистам Атом быстро и безопасно
                проходить полный цикл работы с обращением клиента: от первичного
                считывания кодов неисправностей и анализа полученных данных до
                выполнения сервисных операций, обновления программного
                обеспечения и фиксации результатов в облаке.
              </p>
              <p>
                Это руководство пользователя расскажет, как подключить
                автомобиль, выполнить диагностику, провести необходимые
                процедуры и оформить результаты так, чтобы данные были доступны
                для последующего анализа качества и гарантийной поддержки.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title || 'DAST — Руководство пользователя'}
      description="Руководство пользователя по системе Atom After-Sales Diagnostic and Service Tool (DAST)">
      <HomepageHeader />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
