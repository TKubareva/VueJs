###### Домашнее задание 1. Карточка обучающего курса.

Создать компонент – карточку курса. Компонент должен отображать детальную информацию о курсе.

**Поля карточки:**

 _Id_
 
 _Тематика курса (string)_ 
 
 _Название курса (string)_
 
 _Описание курса (string)_
 
 _Дата старта (date)_
 
 _Ссылка на видео (string)_
 
 _Список учащихся (Array<Student>)_
 
Основные данные должны храниться в компоненте в виде объекта course.

Реализовать добавление и удаление учащихся.
Список учащихся (Array<Student>) хранится в local storage.

**Student:**

_Фамилия_

_Имя_

_Отчество_

При нажатии на кнопку добавить, появляется форма с полями учащегося (ФИО) и кнопа
сохранить. При сохранении формы учащийся записывается в local storage, а форма очищается
и скрывается.
Кнопка удалить есть у каждого учащегося. При нажатии на кнопку учащийся удаляется из
списка и из local storage.
