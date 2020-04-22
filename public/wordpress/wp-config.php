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
define( 'DB_NAME', 'database_name_here' );

/** MySQL database username */
define( 'DB_USER', 'username_here' );

/** MySQL database password */
define( 'DB_PASSWORD', 'password_here' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

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
define( 'AUTH_KEY',         'pU%p@tLrL*7@o+k3k/X+guW$.$Oz*)5qbChZK6HV`L`iz;`OD>_fCd?(-,Cw+ByW' );
define( 'SECURE_AUTH_KEY',  '&W|&h-c1)mZr Llf29/j2LB1c=am.w[J=LQK,x.r7+/>h#@9E2B`?1Fm(0vUS}? ' );
define( 'LOGGED_IN_KEY',    '1$J|@&v^ijV&]~hGfD@BJ92x;C{-5GA8*~jeE) 1USG@CS>eOXOiFf=!uyC{Hg=X' );
define( 'NONCE_KEY',        't;GHh-u[#PrU!&vGB`s9qk@Ce]kSz|.4.AoKJ-QD*e.=Kv7|A9TG>~E/P#DL >@5' );
define( 'AUTH_SALT',        '>,RN%Nve0Onmk `ioWGqGk}NT{/-zK(v22.<+QGR)Pz$y:iTq4k`+|;YK-5z9*h-' );
define( 'SECURE_AUTH_SALT', 'yi;`l$CeAk)Ot:qE)f|Cwa3`z|y0-EhOs<3q.Qo?CjuTATB4>?/?46njn&Ul@J,H' );
define( 'LOGGED_IN_SALT',   '_EZQbp*xsgc%0KPY/x{I4%VptxK#5jM+yvpVPv1C|>uZCz-c2*-C6G{rG{,LLm(S' );
define( 'NONCE_SALT',       'S{!7mx+w-As~yA+t_aG:/y|d(=wBfRTJX-!|H<iN8-eO8{T? ^-}!bE>SsiUKgvX' );

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
