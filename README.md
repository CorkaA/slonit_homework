# Git. Базовые команды и понятия.

## Основные понятия
- рабочая директория - директория с файлами проекта
- index - промежуточная область между рабочей директорией и репозиторием, где сохраняются все изменения
- репозиторий - хранилище добавленных коммитами изменений
- алиасы - псевдонимы для конкретных команд или их фрагментов  
*.gitignore - файл со списком игнорируемых файлов*  


## 1. Инициализация репозитория
Инициализация нового репозитория. После этого в папке проекта появится скрытая папка ".git".
```
git init
```

## 2. Состояние репозитория
Проверяет состояние репозитория. Указывает на наличие неотслеживаемых файлов, а также изменённых, удалённых файлов.
```
git status
```

## 3. Добавление файлов в "index"

<u>**Добавить все файлы:**</u>
```
git add .
```
<u>**Добавить конкретный файл:**</u>
```
git add имя_файла
```
<u>**Не добавлять файл:**</u>
```
git reset HEAD имя_файла
```
<u>**Добавить файл из папки игнорируемых файлов:**</u>
```
git add -f путь/до/имя_файла
```
<u>**Опрос по файлу:**</u>  
Опрашивает для каждого изменённого фрагмента файла, добавлять ли его в index
```
git add -p имя_файла
```

## 4. Удаление и переименование файлов
<u>**Удаление:**</u>
```
git rm -r имя_файла
```
Удаляет из рабочей директории и сохраняет в index.
```
git rm --cached имя_файла
```
Удаляет из index, но оставляет в рабочей директории (убирает из отслеживания).

<u>**Переименование:**</u>
```
git mv старое_имя_файла новое_имя_файла
```
Переименовывает файл и добавляет его в index.

## 5. Сохранение изменений в репозитории (коммит)
Вносит изменения в репозиторий проекта.

<u>**Коммит:**</u>
```
git commit
```
После отправки команды открывается редактор для добавления описания коммита.

<u>**Быстрый коммит:**</u>
```
git commit -m "сообщение"
```
Вариант коммита без редактора.

<u>**Упрощённое сохранение изменений:**</u>
```
git commit -a -m "сообщение"
```
Добавляет все изменения в ранее отслеживаемых файлах в index и коммитит без редактора.
```
git commit -m "сообщение" имя_файла
```
Добавляет изменения в ранее отслеживаемом файле в index и коммитит без редактора.

<u>**История коммитов:**</u>
```
git log
```
Позволяет просмотреть историю коммитов.

<u>**Просмотр текущего коммита:**</u>
```
git show --pretty=fuller
```
Позволяет просмотреть ntreobq коммит c подробностями.

## 6. Ветки
<u>**Переименование ветки:**</u>
```
git branch -M main
```

## 7. Конфигурация
<u>**Настройка:**</u>  
`git config user.name "имя"` - настраивает имя пользователя  
`git config user.email почта` - настраивает почту пользователя  
`git config core.editor "строка_для_конкретного_редактора"` - настраивает открываемый текстовый редактор  
`git config core.editor "code --wait"` - для редактора *Visual Studio Code*

<u>**Параметры конфигураций:**</u>  
`--local` - локальные настройки для данного проекта  
`--global` - глобальные настройки для всех проектов  
`--system` - системные настройки гит

<u>**Просмотр конфигураций:**</u>  
*Просмотр настроек:*
```
cat .git/config
```
*Просмотр файла конфига:*
```
cat ~/.gitconfig
```

<u>**Алиасы:**</u>  
Алиасы позволяют заменять фрагменты кода более краткими
```
git config alias.краткое_имя 'полное_имя'
```
Для нескольких строк кода:
```
git config alias.краткое_имя '!строка_1; строка_2'
```

## 8. Взаимодействие с github
<u>**Добавление адреса:**</u>
```
git remote add origin ссылка_на_гитхаб_репозиторий
```
Связывает локальный репозиторий с репозиторием github (удалённый сервер).

<u>**Отправка на сервер:**</u>
```
git push -u имя_удаленного_репозиторий имя_ветки
```
```
git push -u origin main
```
Загружает данные с локального репозитория на удалённый.

<u>**Загрузка с сервера:**</u>
```
git push -u origin main
```
Загружает данные с удалённого репозитория на локальный.