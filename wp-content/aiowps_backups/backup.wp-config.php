<?php
/** Enable W3 Total Cache */
define('WP_CACHE', true); // Added by W3 Total Cache


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
define('DB_NAME', 'u0480146_dailyco');

/** Имя пользователя MySQL */
define('DB_USER', 'u0480146');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'Alsu_dailyconf_001');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

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
define('AUTH_KEY',         'dF. `w=&^L*1Dmn!sllHST-Ay`}-#oM&+z&F67w+%4Bb@UewC4gi*9b)A}Wo MB;');
define('SECURE_AUTH_KEY',  'tj}, EG(as#yW}V15@i,~!qP6P(WagU{LvZ4b3PbO N? ?0[I9NCn]dZ( 0=U+`W');
define('LOGGED_IN_KEY',    'G$+5!l6eZ|QTQ:K4?18/S-3<$~kDTs_,N5MeoefdB=&7gP*2x*#ASTO7wAN[ipx+');
define('NONCE_KEY',        '~~b4heHP~c#WY$B=c&?RqJz2)t*+.2+-d52#ZPnDwdcV<>>LGb5u3W!F])_j-rb|');
define('AUTH_SALT',        ',X]hh:]RNcKKIZQEF/XeFFzd--2Gk~Y/:txvZ ]%g;l(sSY%&DY@Z}>Kb]/oks#-');
define('SECURE_AUTH_SALT', 'nHsL*+0d7xI5epr,kRg{,l9lXKLpf(+EM(>n0|-+1|GPL.0%mY7k H[S]/Uf;zNl');
define('LOGGED_IN_SALT',   'YYZL@?lkEy35_<,@7up5X3XyjLQ*Srf`zaZAXn6Xv.dr3OdzBNm4(>[A]^{:qXU;');
define('NONCE_SALT',       '-3-K_<M:q)j5~K!g$%BK]b#9sfgp5;;S9f;JzF0*<9wAw)>HiRCl]g!dbz#{K9BA');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'dc_';

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
