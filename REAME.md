

```shell
# Проверим, что все обязательные инструменты установлены:
git -v
node -v
npm -v

# Создадим первый проект:

# создали папку
mkdir otus-live-06-09-2023
# открыли папку 
cd otus-live-06-09-2023

# Подключим git:
git init
git remote add origin git@github.com:ВАШ_ЛОГИН/НАЗВАНИЕ_РЕПОЗИТОРИЯ.git


# создали package.json
npm init

# Зафиксируем сделанное
git status
git add package.json
git commit -m "init"
git branch -M main
git push -u origin main

# установим зависимости
npm install --save-dev jest
# создам файл конфигурации jest (jest.config.js)
npx jest --init

# создим первый тест и добавим команду для запуска jest в package.json
```
