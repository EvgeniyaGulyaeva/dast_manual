--- 
sidebar_position: 7
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Обслуживание блоков управления

## Обновление ПО

Обновление прошивки блоков управления доступно как на **странице конкретного ЭБУ**, так и в разделе **Сервисные операции**. 

### На странице ЭБУ

Чтобы обновить ПО блока управления:

1. Откройте страницу соответствующего блока: перейдите в раздел **Блоки управления** -> кликните на блок в списке или на схеме; при необходимости воспользуйтесь поиском по названию ЭБУ -> нажмите **Описание и функции** в правой панели. 

 <figure className="img-card">
      <img
        src={useBaseUrl('/img/ECU-Sidebar.jpg')}
        alt="Список ЭБУ"
      />
      <figcaption>Выбор ЭБУ</figcaption>
    </figure>

2. На странице блока управления раскройте список **сервисных операций** на панели справа и выберите операцию **Обновление ПО блока управления**. 

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ECU-flashing-select.png')}
    alt="Выберите операцию **Обновление ПО блока управления**"
  />
  <figcaption>Выберите операцию **Обновление ПО блока управления**</figcaption>
</figure>

3. Загрузите файлы обновления.

<mark>где их взять - на странице блока по клику на иконку "скачать" рядом с текущей версией ПО? можно ли взять где-то еще? нужно ли что-то проверить? версия указана в названии файла?</mark>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ECU-flashing-upload-file.png')}
    alt="Загрузите файл обновления ПО"
  />
  <figcaption>Загрузите файл обновления ПО</figcaption>
</figure>

4. Дождитесь окончания загрузки файлов и нажмите кнопку **Следующий шаг**. 

<mark>как много времени занимает процесс обновления? можно ли уйти на другую страницу? какие меры предосторожности? </mark>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ECU-flashing-in-progress.png')}
    alt="Индикация процесса обновления ПО"
  />
  <figcaption>Индикация процесса обновления ПО</figcaption>
</figure>

5. После успешного завершения обновления нажмите кнопку **Завершить операцию**. <mark>что будет, если не нажму?</mark>

 <mark>если я ушла на другую страницу, я увижу попапчик?</mark>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ECU-flashing-success.png')}
    alt="Завершение обновления ПО блока управления"
  />
  <figcaption>Завершение обновления ПО блока управления</figcaption>
</figure>

### В разделе сервисных операций 

:::tip
<mark>когда удобнее одно и когда другое?</mark>
:::

Для обновления ПО блока управления:

1. Перейдите в раздел **Сервисные операции** и выберите **Иные операции** -> **Обновление ПО блока управления**.

<figure className="img-card">
  <img
    src={useBaseUrl('/img/service-operations-flashing-select.jpg')}
    alt="Выбор операции **Обновление ПО блока управления**"
  />
  <figcaption>Выбор операции **Обновление ПО блока управления**</figcaption>
</figure>

2. Выберите конструкционную группу и ЭБУ для обновления прошивки. 

<mark>нужно знать, к какой конструкционной группе принадлежит блок?</mark>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/service-operations-flashing-multiple-ecu.png')}
    alt="Выбор ЭБУ для обновления ПО"
  />
  <figcaption>Выбор ЭБУ для обновления ПО</figcaption>
</figure>

3. Загрузите файлы ПО.
4. Запустите обновление, нажав кнопку **Следующий шаг**.
5. Дождитесь завершения обновления и нажмите **Завершить операцию**.

:::info
<mark>что произойдет, если я нажму Отменить операцию после окончания обновления?</mark>
:::

### Возможные проблемы и ограничения

| Ошибка | Возможные причины | Способы устранения |
| :----- | :------- | :------- |
| Ошибка проверки контрольной суммы файлов. Файлы были повреждены во время передачи или хранения. Используйте оригинальные файлы Flashdriver и Application. | | |
| Новое ПО не было загружено. Для обновления ПО проведите операцию повторно.| | |

## замена блока

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ecu-replacement-1.jpg')}
    alt="Выбор ЭБУ для обновления ПО"
  />
  <figcaption>тут какая-то подпись</figcaption>
</figure>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ecu-replacement-2.png')}
    alt="Выбор ЭБУ для обновления ПО"
  />
  <figcaption>тут какая-то подпись</figcaption>
</figure>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ecu-replacement-3.png')}
    alt="Выбор ЭБУ для обновления ПО"
  />
  <figcaption>тут какая-то подпись</figcaption>
</figure>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ecu-replacement-4.png')}
    alt="Выбор ЭБУ для обновления ПО"
  />
  <figcaption>тут какая-то подпись</figcaption>
</figure>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ecu-replacement-5.png')}
    alt="Выбор ЭБУ для обновления ПО"
  />
  <figcaption>тут какая-то подпись</figcaption>
</figure>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ecu-replacement-6.png')}
    alt="Выбор ЭБУ для обновления ПО"
  />
  <figcaption>тут какая-то подпись</figcaption>
</figure>

## сервисные операции?

для обслуживания блоков управления есть predefined сервисные операции -> сходите в раздел меню и в раздел мануала