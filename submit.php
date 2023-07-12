<?php

// Подключение к базе данных
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "DB";

$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Получение данных из AJAX-запроса
$name = $_POST['name'];
$email = $_POST['email'];
$telegram = $_POST['telegram'];

// Подготовка SQL-запроса для вставки данных в базу данных
$sql = "INSERT INTO users (name, email, telegram) VALUES ('".$name."', '".$email."', '".$telegram."')";

// Выполнение SQL-запроса
if ($conn->query($sql) === TRUE) {
    echo "Данные успешно добавлены в базу данных";
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

// Закрытие соединения с базой данных
$conn->close();
?>