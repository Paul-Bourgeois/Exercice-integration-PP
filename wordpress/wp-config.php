<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'dauphin' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%z$~cogbIx2x7Twyh>^,3*mDv]4x1s=l|M6T?w,2<IP?>HOHv=0}a(G`Tk Kv&Mc' );
define( 'SECURE_AUTH_KEY',  '*}ADHMCEp*l.V;CJn..$7xDLMRigL/FK!eZXGfoK5QeST$I[xE,I98{&yb#e,[ZK' );
define( 'LOGGED_IN_KEY',    'P1#+PvbbEElu#_r=<LY3DxQO$+d>scO>geq@%?&aikq%A.3Me*j%phJF(Cet[soZ' );
define( 'NONCE_KEY',        'nX8k}9vv^/4YUVC;Ox+2|^~?7iz%:-s3}:i$t^QD-EEH!);rQxY2u:MdFP`>F>ox' );
define( 'AUTH_SALT',        'Lm-lsIeEQv!,d Vya_P+(SF?L@q@[Vc((E(/JhEbrC{ZPMIr<}cf8zX2@A{,^Xwf' );
define( 'SECURE_AUTH_SALT', '/[Sz|fdV6!~l^ca[LU<e< Oyk=Z^fAHc>[j$oBl5jDAbfSQ`{*<Vr1$M!e.RU;cQ' );
define( 'LOGGED_IN_SALT',   'AvrrTqvy5z/T4A__8/-Dq95$fELb&dUoEb$029]mV*N+aH;}4>)48U/bISWYik^(' );
define( 'NONCE_SALT',       't$lJ4>PB7dyr=J::W`jQ )i>[rcSN|AKPdinwH]&LIJ>CZ@Wkswnyou)jE|Q/&Ff' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
