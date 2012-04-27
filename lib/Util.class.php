<?php 

class Util {
  
  static function get_browser_info($u_agent) {
      $bname = 'Unknown';
      $browser_class_name = '';
      $platform = 'Unknown';
      $version= "";

      //First get the platform?
      if (preg_match('/linux/i', $u_agent)) {
          $platform = 'linux';
      }
      elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
          $platform = 'mac';
      }
      elseif (preg_match('/windows|win32/i', $u_agent)) {
          $platform = 'windows';
      }

      // Next get the name of the useragent yes seperately and for good reason
      $ub = null;
      if(preg_match('/MSIE/i',$u_agent) && !preg_match('/Opera/i',$u_agent))
      {
          $bname = 'Internet Explorer';
          $ub = "MSIE";
          $browser_class_name = 'ie';
      }
      elseif(preg_match('/Firefox/i',$u_agent))
      {
          $bname = 'Mozilla Firefox';
          $ub = "Firefox";
          $browser_class_name = 'ff';
      }
      elseif(preg_match('/Chrome/i',$u_agent))
      {
          $bname = 'Google Chrome';
          $ub = "Chrome";
          $browser_class_name = 'webkit chrome';
      }
      elseif(preg_match('/(iPhone|iPad|iPod)/i',$u_agent, $vs_matches)) // because some devices don't include Safari in the UiWebview ua string
      {
          $bname = 'Apple Mobile Safari';
          $ub = $vs_matches[1];
          $browser_class_name = 'webkit safari';
      }
      elseif(preg_match('/Safari/i',$u_agent))
      {
          $bname = 'Apple Safari';
          $ub = "Safari";
          $browser_class_name = 'webkit safari';
      }
      elseif(preg_match('/Opera/i',$u_agent))
      {
          $bname = 'Opera';
          $ub = "Opera";
          $browser_class_name = 'opera';
      }
      elseif(preg_match('/Netscape/i',$u_agent))
      {
          $bname = 'Netscape';
          $ub = "Netscape";
          $browser_class_name = 'netscape';
      }

      // finally get the correct version number
      $known = array('Version', $ub, 'other');
      if (!stristr($bname, 'mobile safari')) {
        $pattern = '#(?<browser>' . join('|', $known) . ')[/ ]+(?<version>[0-9.|a-zA-Z.]*)#';
      
      } else {
        $pattern = '#(?<browser>' . join('|', $known) . ').*?OS\s(?<version>[0-9a-zA-Z._]*)#';
      }

      if (!preg_match_all($pattern, $u_agent, $matches)) {
          // we have no matching number just continue
      }


      if($ub != null){
        // see how many we have
        $i = count($matches['browser']);

        if ($i != 1) {
            //we will have two since we are not using 'other' argument yet
            //see if version is before or after the name
            if (strripos($u_agent,"Version") < strripos($u_agent,$ub)){
                $version= str_replace('_', '.', $matches['version'][0]); //$matches['version'][0];
            }
            else {
                $version = str_replace('_', '.', $matches['version'][1]);
            }
        } else {
            $version= str_replace('_', '.', $matches['version'][0]); //$matches['version'][0];
        }

      // check if we have a number
      if ($version==null || $version=="") {$version="?";}
      }

      return array(
          'userAgent' => $u_agent,
          'name'      => $bname,
          'version'   => $version,
          'platform'  => $platform,
          'pattern'    => $pattern,
          'class_name' => $browser_class_name
      );
  }
  
  /**
   * Thank you CakePHP =)  I borrowed this code from CakePHP.
   * 
   * Prints out debug information about given variable.
   *
   * @param boolean $var Variable to show debug information for.
   * @param boolean $showHtml If set to true, the method prints the debug data in a screen-friendly way.
   * @param boolean $showFrom If set to true, the method prints from where the function was called.
   */
  	function debug($var = false, $showHtml = false, $showFrom = true) {
  			$ROOT = '';
  			if ($showFrom) {
  				$calledFrom = debug_backtrace();
  				echo '<strong>' . substr($calledFrom[0]['file'], 1) . '</strong>';
  				echo ' (line <strong>' . $calledFrom[0]['line'] . '</strong>)';
  			}
  			echo "\n<pre>\n";

  			$var = print_r($var, true);
  			if ($showHtml) {
  				$var = str_replace('<', '&lt;', str_replace('>', '&gt;', $var));
  			}
  			echo $var . "\n</pre>\n";
  		
  	}
  
}

?>
