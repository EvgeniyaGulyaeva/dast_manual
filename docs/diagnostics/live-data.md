---
sidebar_position: 2
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# Действительные значения

## для чего нужно 

DAST Real-time monitoring (Live data) function is created to support the following actions:
- View specific parameters values for any ECU/HPC of the Atom Car and how they change in real time when Car is connected to DAST; 
- Record live data and save locally/ in AAC when Car is connected to DAST;
- Playback earlier saved records with/without Car connection to DAST.

Real-time monitoring (Live data) function should be available with/without Car connection to the Internet.

Real-time monitoring (Live data) function should be available when Car moves. There should be no additional preconditions that limits the reading parameters values.

Real-time monitoring (Live data) of ATOM parameter values from the specific vehicle ​​in real time via DAST is for accurate car events diagnostics, effective troubleshooting and preventive maintenance.

It will help to detect hidden faults while driving (accompanied by DTC or not), including intermittent failures, system response to loads and operating conditions.

Allows to link customers perception of symptoms, assess them linking with real-time data from Car and decide how to resolve the issue.

## мониторинг действительных значений
### выбрать параметр(ы)

This section is to provide ability for the user to see list of available parameters of ECU/HPC.

To Select/deselect parameters to be displayed in Live data display section.

Parameters and allocation to ECU/HPC are from Ref. data from DiagCore.

Max number of monitored parameters on the page: 4 in both table and graphical view.

<figure className="img-card">
  <img
    src={useBaseUrl('/img/Monitoring-Add-Data-Parameter.png')}
    alt="Выбор параметров для мониторинга"
  />
  <figcaption>Выбор параметров для мониторинга</figcaption>
</figure>

### отображение данных мониторинга

данные отображаются в виде таблицы со значениями и в виде графиков

(максимум 4 на странице) 

<figure className="img-card">
  <img
    src={useBaseUrl('/img/Monitoring-Data-Chart.png')}
    alt="Отображение данных мониторинга"
  />
  <figcaption>Отображение данных мониторинга</figcaption>
</figure>

графики можно совмещать

<figure className="img-card">
  <img
    src={useBaseUrl('/img/chart-merge-control.jpg')}
    alt="Совмещение графиков"
  />
  <figcaption>Совмещение графиков</figcaption>
</figure>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/merged-charts.jpg')}
    alt="Совмещенные графики"
  />
  <figcaption>Совмещенные графики</figcaption>
</figure>

на графиках можно отображать отклонение от предельных значений (см секцию ниже)

### предельные значения
#### установить / изменить

<figure className="img-card">
  <img
    src={useBaseUrl('/img/add-thresholds-control.png')}
    alt="Добавление предельных значений"
  />
  <figcaption>Добавление предельных значений (жмайте на иконку)</figcaption>
</figure>

<figure className="img-card">
  <img
    src={useBaseUrl('/img/add-thresholds-popup.png')}
    alt="Добавление предельных значений"
  />
  <figcaption>Добавление предельных значений (заполните поля)</figcaption>
</figure>

#### отклонения

отображаются на графике выбранным цветом 

<figure className="img-card">
  <img
    src={useBaseUrl('/img/thresholds-chart.png')}
    alt="Отклонения графика от предельных значений"
  />
  <figcaption>Отклонения графика от предельных значений</figcaption>
</figure>

## запись

This section is to provide ability to Start/Stop recording, save/rename records of Live data from Car.

### включить запись

можно вручную жмать кнопку Запись или настроить автовключение при отклонении от предельных значений 

<figure className="img-card">
  <img
    src={useBaseUrl('/img/live-data-recording-in-progress.png')}
    alt="Запись действительных значений"
  />
  <figcaption>Запись действительных значений</figcaption>
</figure>

### просмотреть записи

This section is to provide ability to choose records from local storage, AAC and to Start/Stop playback of previously saved Live data, pause and scroll records. Change visualization during monitoring and playback. 

жмать Записи - провалиться в запись - жмать плей

можно двигать ползунок

можно скачать (в каком-то формате)

### редактировать записи

только переименовать и удалить