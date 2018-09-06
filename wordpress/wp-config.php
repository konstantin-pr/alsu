<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'xplrrjm1');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'alamakota123');

/** Имя сервера MySQL */
define('DB_HOST', '178.183.120.135');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '3#HlZG-M~/wjD4CS/^;~<Ki9cF:gGn>R1fEn}2uv)3I(.arKPSe./tEtod+YT-AF');
define('SECURE_AUTH_KEY',  '{nq!c<sVslQJ|gV  eN{w4Woew`wcP;0T:k=~eFVgi|(#LGzUWt>Zb$z AA8MCxh');
define('LOGGED_IN_KEY',    ';jZe$X-[G5*{E98rJ*@OM<_,vmLTsb(~r*@J5uzi,9&/C=rg9aF7sdTu(&Km+ePk');
define('NONCE_KEY',        'hwKP>dXl#I5;av7`QJ{#$i3&}wJ>uyH<=k9lI5renS~S}$O^XHJ}^Pw,cbm}=7/Q');
define('AUTH_SALT',        'v+Cmi8@*<Bqdc3:M0f_e@T,P~-y;>h?-|HeBCG|@HvXn (^dr~d%E}XMmq#iUxyK');
define('SECURE_AUTH_SALT', 'YmPo& kfLX%6_#Y<c :I`4R {uTGCB*Tm=Y^}B@KRSU}|(<FvM<cNXp9cX.Yb+om');
define('LOGGED_IN_SALT',   'JC#c3OigwdLG;qZo(E0q>@1StsduR ^Mr5cYWMP-/WzVbVtGyA*Q]8=1#]}S-D|f');
define('NONCE_SALT',       '<[<Twa+5L<0Ts!XihQ= u},@~T<,xPD8P1Ftr:b+0%GrosO,[3WD0xQ>CpilkroV');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_701394';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
