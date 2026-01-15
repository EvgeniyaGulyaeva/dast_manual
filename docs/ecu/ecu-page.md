--- 
sidebar_position: 3
---

# Диагностика блока управления

можно перейти на страницу конкретного блока 

тут отображаются идентификационные данные, данные об ошибках, найденных при считывании, и список диагностических операций:
- тесты исполнительных механизмов
- мониторинг действительных значений
- сервисные операции
- тесты 
- рутины

## Идентификация блока управления

## диагностические операции
выберите операцию -> выберите еще что-нибудь -> следуйте инструкциям 



What?
ECU Page is a sort of "home page" of an ECU allowing to find all the info related to the selected ECU and all the actions that can be performed with it in one place.

What for?
Let to have all related to an ECU in one place that is easy to access. This facilitates getting useful information for Service engineer, search and provide access to ECU functions via DAST.

DAST should display list of service operations
Operations on the 'SO List' should be reflected according to the ECU to which they are linked via ECU Related parameter from CMS.
'ECU Identification' Widget should contain title.
'ECU Identification' Widget should contain a message about the relevance of the data
'ECU Identification' Widget should contain a ECU identification data update button.
'ECU Identification' Widget should contain the list of DID and their parameters:

'Read ECU Part Number'
'Read ECU manufacturing date'
'Read ECU Serial Number'
'Read complete VIN'
'Operational reference'
'Bootloader version number'
'ECU application software (ASW) part number'
'Supplier ECU hardware part number'
'DTC List' should contain title.
'DTC List' should display a code of the corresponding Fault.
'DTC List' should display a name of the corresponding Fault.
'DTC List' -  Value should have an "Empty List" message if no Faults are presented for the ECU.
'DTC List' should display a status of the corresponding Fault.
Clicking on the Fault item should open corresponding DTC page
If DTC reading has not been performed, DAST should display a message indicating that the DTC reading has not been conducted.
Each item of faults list should contain DTC status:

active or
confirmed
DTC Code List Item should be highlighted in color depending on its status.
