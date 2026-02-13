---
sidebar_position: 2
---

# Глоссарий

## Глоссарий DAST

- **DTC (Diagnostic Trouble Code, Диагностический код неисправности)** — В автомобильной промышленности коды, предписанные стандартами SAE, помогают отслеживать проблемы в автомобиле, обнаруженные его бортовым компьютером.
- **Стоп-кадр (Freeze Frame, Параметры на момент события)** — Snapshot of relevant sensor and vehicle information at the time a diagnostic trouble code (DTC) is triggered. A Freeze Frame is a snapshot of parameter values recorded at the time a diagnostic trouble code (DTC) was captured. Note: non-volatile PIDs are not supported in freeze frames. If a freeze frame is defined by the application to contain a non-volatile PID, this PID is ignored by the PFF feature when capturing or accessing the freeze frame data. The main limitation of freeze frame is it captures only when the code triggered and not the events that occurred before or after. Also, freeze frame data is limited to standardized codes and there is typically never freeze frame information for body or chassis codes.
- **Действительные значения (Live data, Диагностические данные в реальном времени)** — Значения диагностических параметров, получаемых в режиме реального времени.
- **ЭБУ (ECU, Электронный блок управления)** — Device embedded in automotive electronics that controls one or more electrical systems or subsystems.
- TBD

## Системы и блоки автомобиля

<div className="fixed-col-table">
| Аббревиатура | EN | RU | 
| ------------ | :---------- | :----------|
| **ACU** | Airbag Control Unit | Блок управления подушками безопасности |
| **ADCU** | ADAS Control Unit | Блок управления ассистентами водителя |
| **AGS** | Active Grill Shutter | |
| **ALM** | Ambient Lighting Module | |
| **AQS** | Air Quality Sensor | |
| **ARC_F** | All Round Camera Front | |
| **ARC_R** | All Round Camera Rear | |
| **ARC_SL** | All Round Camera Left Side | |
| **ARC_SR** | All Round Camera Right Side | |
| **AVAS** | Acoustic Vehicle Alarm Unit | Блок управления звуковой сигнализации |
| **BCM** | Body Control Module | Блок управления электрооборудованием кузова | 
| **BMS** | Battery Management System | Блок управления высоковольтной аккумуляторной батареей |
| **BPM** | B-plan module | Дополнительный блок управления электрооборудованием кузова |
| **BS** | Battery Sensor | |
| **CBM** | Central Bluetooth Module | Центральный модуль Bluetooth |
| **CCV** | Coolant Control Valve | |
| **CCU** | Central Control Unit | |
| **CGW** | Central GateWay | Центральный блок управления коммуникацией |
| **DCC** | Driver Control Camera | | 
| **DCM** | Door Control Module | Блок управления двери |
| **DIM** | Digital Interior Mirror | Электронное зеркало заднего вида |
| **EPS** | Electric Power Steering | Электрический усилитель рулевого управления |
| **ERA** | ERA Glonass | Модуль ЭРА-ГЛОНАСС |
| **EVCOM** | Compressor | Электрический компрессор системы климат-контроля |
| **EXV** | Electronic Extension Valve | |
| **F_USB** | Front USB | |
| **FRC** | Front Roof Console | |
| **FRL** | Front Roof Lamp | |
| **FWA** | Front Wheel Actuator ( SbW system) | |
| **HLL** | Head Lamp Left | Электроника фары левой |
| **HLR** | Head Lamp Right | Электроника фары правой |
| **HOD** | Hands off detection | Датчик распознания рук на руле и подогрев рулевого колеса |
| **HUD** | Head-Up Display | Проекционный дисплей лобового стекла |
| **HVAC** | Heating ventilation Air Condition | Блок управления подогревом и системой кондиционирования |
| **HVCH** | High Voltage Coolant Heater | |
| **HWA** | Hand Wheel Actuator ( SbW system) | |
| **IBS** | Integrated Brake System | Блок управления тормозной системы |
| **IMC** | Internal Mirror Camera | |
| **IVI** | In Vehicle Infotainment | Информационно-развлекательная система |
| **LRR** | Long Range Radar | |
| **MFP_FC** | MultiFunction Display Front Central | Многофункцональный дисплей передний центральный |
| **MFP_RC** | MultiFunction Display Rear Central | Многофункцональный дисплей задний центральный |
| **MFP_RR** | MultiFunction Display Rear Right | |
| **MFP_RL** | MultiFunction Display Rear Left | |
| **MFP_FR** | MultiFunction Display Front Right | |
| **MFP_FL** | MultiFunction Display Front Left | |
| **MCU** | Motor Control Unit | Блок управления тяговым электродвигателем |
| **MFC** | Main Forward Camera | |
| **NDT** | NFC Dynamic Tag | |
| **NFC** | Near-Field Communication | NFC-антенна |
| **OBC** | On Board Charger | |
| **PAT** | Power Adjust Type (Column) | Регулировка рулевой колонки |
| **POD** | Power On Board | Блок управления распределением электрического питания |
| **PRND** | PRND | Селектор выбора режимов движения |
| **RLS** | Rain Light Sensor | |
| **RMC** | Rearview Mirror Camera | |
| **RSC_L** | Rearward-Looking Side Camera Left | |
| **RSC_R** | Rearward-Looking Side Camera Right | |
| **RRL** | Rear Roof Lamp | |
| **SCM** | Clock Spring Mechanism | |
| **SCUL** | Seat Control Unit Left | Блок управления сиденьем водителя|
| **SCUR** | Seat control unit Right | Блок управления сиденьем пассажира |
| **SDS** | Side Door Sensor | |
| **SFI** | Safety Island | |
| **SGT** | Sub-Gigahertz Transceiver | |
| **SGW** | Security GateWay | Блок управления системой безопасности коммуникации электромобиля |
| **Switches** | Steering Wheel Switch | Подрулевые переключатели |
| **SWP** | Steering Wheel Panel | Дисплей на рулевом колесе |
| **SRR_FL** | Short Range Radar Front Left | |
| **SRR_FR** | Short Range Radar Front Right | |
| **SRR_RL** | Short Range Radar Rear Left | |
| **SRR_RR** | Short Range Radar Rear Right | |
| **T-BOX** | Telematic Box | Блок управления телематикой |
| **TCU** | Thermal Control Unit | Блок управления системой терморегулирования |
| **USS_FCL** | Ultra Sonic Sensor Front Center Left | |
| **USS_FCR** | Ultra Sonic Sensor Front Center Right | |
| **USS_FOL** | Ultra Sonic Sensor Front Outer Left | |
| **USS_FOR** | Ultra Sonic Sensor Front Outer Right | |
| **USS_FS**L | Ultra Sonic Sensor Front Side Left | |
| **USS_FSR** | Ultra Sonic Sensor Front Side Right | |
| **USS_RCL** | Ultra Sonic Sensor Rear Center Left | |
| **USS_RCR** | Ultra Sonic Sensor Rear Center Right | |
| **USS_ROL** | Ultra Sonic Sensor Rear Outer Left | | 
| **USS_ROR** | Ultra Sonic Sensor Rear Outer Right | |
| **USS_RSL** | Ultra Sonic Sensor Rear Side Left | |
| **USS_RSR** | Ultra Sonic Sensor Rear Side Right | |
| **VCU** | Vehicle Control Unit | Блок управления электромобилем |
| **WCBS1** | Wireless Charger LH | Беспроводное зарядное устройство слева |
| **WCBS2** | Wireless Charger LR | Беспроводное зарядное устройство справа |
| **WL** | Window Lifter | |
| **WS** | Window Lifter Switches | |
</div>

