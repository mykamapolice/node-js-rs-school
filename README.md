# Запуск программы

Чтобы запустить программу, в командной строке введите команду `node index.js`


# Параметры

### -i input

Если исходный текст находится в файле, то необходимо создать файл в root директории проекта и туда ввести тест для перевода, после этого добавить параметр -i "path". `node index.js -i "input.txt"`
Если файл не будет обнаружен текст можно ввести в консоли.

### -o output

Если вы хотите чтобы тест был зашифрован в отдельный файл, нужно создать этот файл в root директории и после параметра -o передать путь `node index.js -o "output.txt". 
Если файл не будет обнаружен текст будет выведен в консоли.


## -c config

Для того чтобы определить какой будет шифр нужно ввести конфиг после команды -c : `node index.js -c "A-C1-C1-R1`
Если не ввести конфиг, будет получена ошибка 
