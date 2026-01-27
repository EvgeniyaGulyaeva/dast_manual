---
sidebar_position: 9
---

# Сервисные операции

Раздел **Сервисные операции** предназначен для работы с операциями диагностики и обслуживания компонентов автомобиля Атом в рамках текущей диагностической сессии DAST.

Используйте этот раздел, чтобы:
- просмотреть полный список доступных сервисных операций;
- найти нужную операцию по названию или конструкционной группе;
- запустить сервисную операцию;
- отследить статус выполнения операций в рамках текущей сессии.

Доступ к отдельным операциям возможен также через страницы конкретных ЭБУ, однако список сервисных операций является основной точкой навигации.

После перехода на вкладку «Сервисные операции» система отображает список всех операций, доступных для подключенного автомобиля. Для каждой операции отображается статус выполнения в текущей диагностической сессии. 


What?

DAST Service Operations List Screen is a sort of interface where the user can view and interact with list of available Service operations related to the Atom car.

What for?

DAST Service Operations List Screen is created to be a central screen to navigate through and see list of all Service Operations, their statuses within current DAST diagnostic session. It should be designed to provide quick and intuitive access to required Service operations.

Without DAST Service Operations List Screen it will be impossible to see list of Service Operations in one place. Alternative way to reach required Service оperation- via ECU menu (аllocation of Service operations to ECU/HPC should be additionally studied).

DAST Service Operations List Screen must provide the possibility to launch any Service operation from the List. Navigation (using groups) and search by name should also be provided to the user.

During diagnostic session status of Service operation completion should be available for each operation. 

Data description
List of Construction groups / Sub-groups
Often it is necessary to see the entire list of available Service operations related to the Construction group / Sub-group (Конструкционная группа).



Such division is required by AS and organized at the moment in excel file Конструкционные группы_V2.xlsx

It is useful for providing logical connection of Service operation with the corresponding sections of the Repair Manual, the Labor time catalogue, the Spare Parts Catalog, etc.

AS Diagnostics team is responsible for Construction groups / Sub-groups naming (RU, EN), naming of Service operations (EN+RU) and linking Service operations both to Construction groups / Sub-groups and to an ECU/HPC.

List of service operations
The AS Diagnostics team will provide names of service operations (RU, EN)

Service operations in list should be named as provided. Names of Service operations should be displayed in the language corresponding to DAST interface.

For Service operations within diagnostic session following statuses should be organized (description in table below):

 

| Статус сервисной операции | Определение AS | Комментарии DAST (Логика при выборе Сервисной операции на экране в DAST) | Комментарии и требования AS |
|:----|:-----|:-----|:-----|
| Не выполнено | Не запускалась в рамках текущей сессии. | Запускаем выбранную сервисную операцию. Просим подтвердить/дополнить логику. | Подтверждаю. |
| В процессе | Выполняется в данный момент | Запускаем выбранную сервисную операцию. Просим подтвердить/дополнить логику. | Подтверждаю. |
| Прервано | прервано Пользователем | Пользователь отменил, что делаем при выборе операции с подобным статусом сервисной операции? Нужна информация о причине прерывания? Например, в виде саммари или отсылки к экрану на котором пользователь прервал операцию? | Предлагаю пока не усложнять задачу. Максимум – показать предупреждение типа «Данная СО выполнялась в текущей сессии. Запустить повторно?» Предполагается, что Пользователь сможет просмотреть (при желании) ход и результаты процедуры в диагностическом протоколе. |
| Успешно |операция окончилась с правильным результатом (или вариант отображения OK) | Не определена. Нужно показать саммари или экран успешного завершения? | Предлагаю пока не усложнять задачу. Максимум – показать предупреждение типа «Данная СО выполнялась в текущей сессии. Запустить повторно?» Предполагается, что Пользователь сможет просмотреть (при желании) ход и результаты процедуры в диагностическом протоколе. |
| Не успешно |операция окончилась с неправильным результатом (ошибка выполнения, результат не достигнут и т.п.) (или вариант отображения NOK) | Не определена. Нужно ввести такой статус. Нужна информация о причине? Нужно дать возможность перезапуска сервисной операции с этой страницы? |Возможен только перезапуск процедуры с самого начала. Предлагаю пока не усложнять задачу информацией о причине. Максимум – показать предупреждение типа «Данная СО выполнялась в текущей сессии. Запустить повторно?» Предполагается, что Пользователь сможет просмотреть (при желании) ход и результаты процедуры в диагностическом протоколе.|

Search
The search should work on the entire list of available Service operations.

Should show the list of matches when entering characters (from 2nd without pressing Enter).

Link to technical support
Link is to be provided by AS IT. Additional study is required to provide details of technical support process.

After user opens the tab containing service operation, the system should show him the list of all service operations.

For each operation shown to the user, the system should display its status. 

The page should provide the user with the ability to search among the listed Service operations.

## Список/Выбор сервисной операции

на основании чего инженер выбирает операции?

что для этого нужно знать?

одна операция по диагностике/обслуживанию = одна сервисная операция в UI?

## Проведение сервисных операций

пошаговые инструкции

некоторые шаги или операции требуют квалификации 

некоторые требуют особых мер предосторожности 