---
sidebar_position: 2
---

# Информация об ошибке

расширенная информация помогает в анализе хода событий, причин возникновения неисправностей, их взаимосвязях.

DTC page is for starting DTC root cause analysis with at least minimum amount of DTC related information gathered from the Car using only the analytical abilities of the diagnostician, in contrast to Guided troubleshooting that provide assistance and guidance in the root cause analysis as well as info from other source like technical documentation.
Without this page it is nearly impossible to understand how to work with DTC, work on the customer complaint and resolve troubles with the Car.

## общая информация 

- код ошибки (стандартный?) DTC number + ECU name – Display ECU number (e g B108017) and the name of ECU where it happened (e g MCU - Motor Control Unit)
- активная – присутствует сейчас, сохраненная – была выявлена ранее, но сейчас нет? Two statuses are displayed to the user: Active and Confirmed. ([RU] Активная и Сохраненная) At the UDS level these are: Active = Test failed + Confirmed; Stored = Confirmed
- описание
- условия появления
- условия перехода в статус «сохраненная»
- приоритет – как определяется приоритет? что означают разные приоритеты?
- влияние на функции автомобиля – просто справочная инфа?
- информирование водителя (да/нет)

### параметры на момент события

DTC Snapshot (DTC Freeze frame) Is a set of additional data stored when the fault code is set, which has 
an auxiliary role in fault repair.

Snapshot information can be classified into global snapshots and local snapshots according to the application scope. For each ECU that can store fault information, global snapshots must be supported, while local snapshots are optional. The snapshot information supported by the ECU (including global snapshot and local snapshot) should be described in detail in the parts diagnostic specification

- таймстемп – когда ошибка зафиксирована? слева направо от недавних к более ранним?
- пробег 
- напряжение бортовой сети
- скорость автомобиля
- состояние автомобиля
- включенная передача
- состояние ВВ системы
- ?

скачать пдф - для чего?

### план проверок

DAST генерирует план проверок (guided troubleshooting, step-by-step), можно в него провалиться и что-то там поделать 

если плана проверок нет, нужно почитать документацию и проверить все самостоятельно