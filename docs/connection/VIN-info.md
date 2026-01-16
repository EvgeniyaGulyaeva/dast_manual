--- 
sidebar_position: 3
---
import useBaseUrl from '@docusaurus/useBaseUrl';

# Просмотр данных автомобиля по VIN

:::note
comes in handy when ... ?

можно ввести VIN и посмотреть комплектацию и историю (?), работать нельзя

что хранится в облаке и как туда передается? 
:::

## что нужно делать и/или знать
ввести VIN (N символов, которые можно найти где-то)

<img
  src={useBaseUrl('/img/enter-VIN.png')}
  className="img-card"
  alt="Ввод VIN"
/>

какая инфа доступна и для чего она нужна?

<img
  src={useBaseUrl('/img/About-car-Cloud.jpg')}
  className="img-card"
  alt="VIN cloud info"
/>

## что может пойти не так

ошибки: нет связи с облачным хранилищем, доступ к автомобилю ограничен, неправильный номер (?)

:::tip 
можно подключить несколько автомобилей и переключаться между ними?
:::