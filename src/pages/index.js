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
          в диагностике и обслуживании электронных систем автомобиля.
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
                  src="/img/placeholder-dast-connection.png"
                  alt="Подключение DAST к автомобилю"
                  style={{maxWidth: '160px', marginTop: '1.5rem'}}
                />
              </div>
              <div className="card__body">
                <h3 style={{color: '#001A33'}}>Диагностика автомобиля</h3>
                <p>
                  DAST подключается к автомобилю по Ethernet или Wi-Fi и
                  считывает диагностические коды неисправностей (DTC), параметры
                  в реальном времени и служебную информацию об электронных
                  блоках (ECU и HPC).
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
                  src="/img/placeholder-dast-cloud.png"
                  alt="Интеграция с Atom Automotive Cloud"
                  style={{maxWidth: '160px', marginTop: '1.5rem'}}
                />
              </div>
              <div className="card__body">
                <h3 style={{color: '#001A33'}}>Интеграция с облаком Atom</h3>
                <p>
                  Инструмент получает историю по VIN из Atom Automotive Cloud и
                  отправляет туда диагностические протоколы и сведения об
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
                  src="/img/placeholder-dast-portals.png"
                  alt="Послеcервисные порталы и документация"
                  style={{maxWidth: '160px', marginTop: '1.5rem'}}
                />
              </div>
              <div className="card__body">
                <h3 style={{color: '#001A33'}}>Поддержка сервисного инженера</h3>
                <p>
                  Через DAST можно открывать гарантийный и сервисный порталы,
                  каталог запасных частей и техническую документацию, а также
                  отправлять данные в техническую поддержку Atom для работы со
                  сложными случаями.
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
                Что даёт вам DAST
              </h2>
              <p>
                DAST помогает сервисным специалистам Atom быстро и безопасно
                проходить полный цикл работы с жалобой клиента: от первичного
                считывания кодов неисправностей и анализа живых параметров до
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
