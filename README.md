# notesApp

### Для запуска проекта локально
Для установки и запуска проекта выполните следующие шаги:

1. Клонируйте репозиторий на свой локальный компьютер:  
git clone https://github.com/Rushannn/notesApp.git
cd notesApp
3. Убедитесь, что у вас установлен Node.js и npm.
4. Установите зависимости проекта:  
npm install
4.Запустите локальный сервер:  
npm run start

После выполнения команды веб-браузер откроется автоматически. Если этого не произошло откройте веб-браузер и перейдите по адресу http://localhost:4200 для просмотра приложения.

### Пользовательский функционал

- **Боковая панель:** отображается списко заметок загружаемых с сервера.
- **Область просмотра:** отображается текст выбранной заметки.
- **Добавление заметки:** возможность добавить новую заметку. Форма включает заголовок и содержание. При добавлении заметки, происходит запрос отправки на сервер.
- **Просмотр отдельной заметки:** возможность читать заметки по ссылке. При отсутствии заметки в состоянии приложения, происходит запрос на сервер и последующее отображение.

### Swagger API для проекта

Документация API проекта доступна по адресу: [https://x8ki-letl-twmt.n7.xano.io/api:ylt-M_BT](https://x8ki-letl-twmt.n7.xano.io/api:ylt-M_BT)  
Вы можете использовать Swagger для ознакомления с доступными эндпоинтами, параметрами запросов и моделями данных вашего проекта.

### Используемые технологии

- **NGRX:** Для управления состоянием приложения используется NGRX - библиотека для реактивного управления состоянием в Angular приложениях.
- **NGRX Router Store:** Для управления состоянием маршрутизатора используется NGRX Router Store - интеграция NGRX с Angular Router для управления состоянием маршрутов.
- **NGRX Entity:** NGRX Entity используется для упрощения работы с коллекциями данных в сторе и автоматического управления сущностями.
- **Фасад для работы с хранилищем:** Для работы с NGRX стором используется паттерн фасад, который предоставляет упрощенный интерфейс для взаимодействия с хранилищем.
- **Кэширование через NGRX Store:** Для улучшения производительности и снижения количества запросов к серверу реализовано кэширование подгруженных новостей через NGRX Store
