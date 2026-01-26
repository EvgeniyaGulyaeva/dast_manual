--- 
sidebar_position: 7
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Обслуживание блоков управления

## замена 

## обновление ПО

### со страницы ЭБУ

жмайте на сервисные операции в боковой панели, выберите Обновление ПО

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ECU-flashing-select.png')}
    alt="Выберите операцию **Обновление ПО блока управления**"
  />
  <figcaption>Выберите операцию **Обновление ПО блока управления**</figcaption>
</figure>

загрузите файлы обновления

<mark>где их взять? на странице блока по клику на иконку скачать рядом с версией ПО? можно ли взять где-то еще? нужно ли что-то проверить?</mark>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ECU-flashing-upload-file.png')}
    alt="Загрузите файл обновления ПО"
  />
  <figcaption>Загрузите файл обновления ПО</figcaption>
</figure>

<mark>как много времени занимает процесс обновления? можно ли уйти на другую страницу? какие меры предосторожности? </mark>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ECU-flashing-in-progress.png')}
    alt="Индикация процесса обновления ПО"
  />
  <figcaption>Индикация процесса обновления ПО</figcaption>
</figure>

увидите уведомление об успешном завершении - жмайте Завершить операцию 

<mark>что будет, если не нажать Завершить операцию?</mark>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/ECU-flashing-success.png')}
    alt="Завершение обновления ПО блока управления"
  />
  <figcaption>Завершение обновления ПО блока управления</figcaption>
</figure>

### со страницы сервисных операций 

<mark>когда удобнее одно и когда другое?</mark>

сервисные операции -> иные операции -> Обновление ПО блока управления

<figure className="img-card">
  <img
    src={useBaseUrl('/img/service-operations-flashing-select.jpg')}
    alt="Выбор операции **Обновление ПО блока управления**"
  />
  <figcaption>Выбор операции **Обновление ПО блока управления**</figcaption>
</figure>

выберите блок 

<mark>нужно знать, к какой конструкционной группе принадлежит блок?</mark>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/service-operations-flashing-multiple-ecu.png')}
    alt="Выбор ЭБУ для обновления ПО"
  />
  <figcaption>Выбор ЭБУ для обновления ПО</figcaption>
</figure>

далее загрузите файлы и прошейте как описано выше 

**Ошибки обновления ПО**

| Ошибка | Возможные причины | Способы устранения |
| :----- | :------- | :------- |
| Ошибка проверки контрольной суммы файлов. Файлы были повреждены во время передачи или хранения. Используйте оригинальные файлы Flashdriver и Application. | | |
| Новое ПО не было загружено. Для обновления ПО проведите операцию повторно.| | |


## сервисные операции?