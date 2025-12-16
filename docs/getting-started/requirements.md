---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Требования и меры предосторожности

Доступ к порталу Aftersales

Роль “Диагност”

Установленное ПО DAST / доступ к веб-версии

Диагностический кабель и ноутбук

Автомобиль поставлен в сервисный режим

Зарегистрированный доступ к автомобилю (владелец передал в сервис)

## Системные требования
### Аппаратные

OBD2+Ethernet cable (информация от EE)
У автомобиля диагностический разъем будет стандартный OBD-II, Ethernet заведен на 12,13 и 1,9 пины.

Требование к переходнику для DAST:
Переходник OBD-II на Ethernet должен соответствовать схеме со стороны автомобиля распиновка ниже:
<img
  src={useBaseUrl('/img/obdii.png')}
  className="img-card"
  alt="Распиновка коннектора"
/>

Длина кабеля: 2-10м (поддерживается любая длина)
Тип входного коннектора: OBD-II
Тип выходного коннектора: RJ45
Требования к скорости передачи данных: 10/100 м/бит
Требования к герметичности: нет

Laptop or other computing device with an Ethernet port (the possibility to use type-C to Ethernet adapter to be checked)
Minimal and Recommended requirements to the device HW, OS, browser, other special requirements
Common requirements
A computing device with an Ethernet port
Super VGA display with a resolution not less than 1024 x 768 pixels
Windows or Linux based 64-bit operating system
Component
Minimum
Recommended
Processor	1.9 GHz x64-bit dual core processor with SSE2 instruction set	2.3 GHz or faster x64-bit dual core processor with SSE2 instruction set
Browser	Chrome 119
Edge 119
Firefox 120	Chrome 121 or newer
Edge 120 or newer
Firefox 122 or newer
RAM	512 MB RAM available for application\browser tab	2048 MB RAM available for application\browser tab
Stable internet in the repair zone and the DAST is an on-line tool
Requirements to Internet and minimal and recommended speed
Component
Minimum
Recommended
Network	Bandwidth 300 Kbit/s
Latency under 150 ms	Bandwidth 10 Mbit/s
Latency under 50 ms

Приложение запускается на экземпляре DAST (компьютер), который прошёл процедуру регистрации (Доработка DAST для поддержки системы аппаратной привязки и лицензирования 202510291810.pdf https://confluence.e-kama.com/download/attachments/183413856/Доработка%20DAST%20для%20поддержки%20системы%20аппаратной%20привязки%20и%20лицензирования%20202510291810.pdf?version=1&modificationDate=1763469942921&api=v2)

тип устройства  

ОС 

память 

интерфейсы

требования к сети 

### Программные
нужно ли какое-нибудь дополнительное ПО? 

На первый год, точно будет нужно специальное приложение DAST Agent

## Требования к квалификации

Планируется 3 уровня диагноста. Точно будет требования по доступу до 1000Вольт

На стороне СП. Сотрудник СП прошёл обучение для роли Электрик+Диагност.
Приложение запускается на экземпляре DAST (компьютер), который прошёл процедуру регистрации (Доработка DAST для поддержки системы аппаратной привязки и лицензирования 202510291810.pdf)

### Для одних операций
### Для других операций

## Меры предосторожности

- работа с напряжением 
- работа с электронными блоками 
- инструменты
- квалификация
- в случае чего звоните в поддержку

Касающиеся работы с высоковольтным оборудованием (возможно надо у юристов уточниться)
Строгое следование инструкциям и предупреждениям, выводимым DAST в процессе работы, а также указаниям в Руководстве по ремонту (есть опасность получения травм при активации исполнительных механизмов; ожоги/возгорание при нарушении правил обращения с техническими жидкостями, электрическими компонентами, горячими частями/жидкостями; опасность повреждения деталей/элементов автомобиля при игнорировании указаний DAST и Руководства по ремонту).