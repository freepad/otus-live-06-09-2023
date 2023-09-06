

```shell
# Проверим, что все обязательные инструменты установлены:
# https://git-scm.com/downloads
# https://desktop.github.com/
git -v
# https://nodejs.org/en
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
# https://jestjs.io/
npm install --save-dev jest
# создам файл конфигурации jest (jest.config.js)
npx jest --init

# создим первый тест и добавим команду для запуска jest в package.json
npm run test

# Зафиксируем сделанное
git status

# создадим файл .gitignore
# gitignore
# http://gitignore.io
touch .gitignore
echo "node_modules" >> .gitignore

git add .gitignore
git status
git commit -m "add .gitignore"

git add .
git commit -m "add jest"

# добавим .editorconfig
# https://EditorConfig.org
git add .editorconfig
git commit -m "add editorconfig"

# добавим ещё 1 тест
# добавим дополнение для jest, jest-runner
# включим автосохранение файлов

# добавим линтер
npm init @eslint/config

# расскажем линтеру про jest
# https://github.com/jest-community/eslint-plugin-jest
npm install -D eslint-plugin-jest

# добавим библиотеку supertest, для написания API теста
npm install supertest --save-dev

# добавим faker для генерации тестовых данных
npm install @faker-js/faker --save-dev
```
