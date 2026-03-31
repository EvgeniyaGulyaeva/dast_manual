import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header
      className={clsx('hero', styles.heroBanner)}
      style={{
        background:
          'linear-gradient(135deg, #183038 0%, #24515B 48%, #69D6CC 100%)',
    color: '#F4FCFC',
      }}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title || 'АТОМ ДИС — Руководство пользователя'}
        </Heading>
        <p className="hero__subtitle">
          АТОМ Диагностический Инструмент — ваш помощник
          в диагностике и обслуживании электронных систем автомобиля
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{
             backgroundColor: '#A9ECE5',
             borderColor: '#A9ECE5',
             color: '#213B43',
            }}
            to="/docs/intro">
            Перейти к руководству АТОМ ДИС
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
      style={{backgroundColor: '#EEF8F8', padding: '4rem 0'}}>
      <div className="container">
        <div className="row">
          {/* Карточка 1 */}
          <div className="col col--4">
            <div
              className={clsx('card', styles.featureCard)}
              style={{
                height: '100%',
                border: 'none',
                backgroundColor: '#E8F7F5',
              }}>
              <div className="card__image" style={{textAlign: 'center'}}>
                {/* Плейсхолдер для картинки */}
                <img
                  src={useBaseUrl('/img/device-desktop-analytics.svg')}
                  alt="Подключение к автомобилю"
                  style={{width: '160px', marginTop: '1.5rem'}}
                />
              </div>
              <div className="card__body">
                <h3 style={{color: '#18353A'}}>Диагностика автомобиля</h3>
                <p>
                  АТОМ ДИС позволяет подключаться к автомобилю по Ethernet и осуществлять полный цикл диагностических процедур: 
                  считывать диагностические коды событий, отслеживать действительные значения
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
                backgroundColor: '#E2F4F2',
              }}>
              <div className="card__image" style={{textAlign: 'center'}}>
                {/* Плейсхолдер для картинки */}
                <img
                  src={useBaseUrl('/img/cloud-computing.svg')}
                  alt="Интеграция с Atom Automotive Cloud"
                  style={{width: '160px', marginTop: '1.5rem'}}
                />
              </div>
              <div className="card__body">
                <h3 style={{color: '#18353A'}}>Интеграция с облачными сервисами Атом</h3>
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
                backgroundColor: '#DCF1EF',
              }}>
              <div className="card__image" style={{textAlign: 'center'}}>
                {/* Плейсхолдер для картинки */}
                <img
                  src={useBaseUrl('/img/book-upload.svg')}
                  alt="Послепродажное обслуживание и документация"
                  style={{width: '160px', marginTop: '1.5rem'}}
                />
              </div>
              <div className="card__body">
                <h3 style={{color: '#18353A'}}>Поддержка сервисного инженера</h3>
                <p>
                  АТОМ ДИС предлагает бользователю быстрые ссылки на гарантийный и сервисный порталы,
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
                backgroundColor: '#EDF8F7',
                border: '1px solid #CFE6E3',
              }}>
              <h2 style={{color: '#15444B', marginBottom: '0.75rem'}}>
                
              </h2>
              <p>
                АТОМ ДИС помогает сервисным специалистам Атом быстро и безопасно
                проходить полный цикл работы с обращением клиента: от первичного
                считывания диагностической информации и анализа полученных данных до
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
      title={siteConfig.title || 'АТОМ ДИС — Руководство пользователя'}
      description="Руководство пользователя по системе АТОМ Диагностический Инструмент">
      <HomepageHeader />
      <main>
        <FeaturesSection />
      </main>
    </Layout>
  );
}
