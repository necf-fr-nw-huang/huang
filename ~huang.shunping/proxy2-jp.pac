function FindProxyForURL(url, host)
 {
 if (isPlainHostName(host))
 return "DIRECT";

  
  
  
  
  
 else if (shExpMatch(url, "https://sts-vrf.a01.fastretailing.com/*"))
 return "DIRECT";
 else if (shExpMatch(url, "https://sts-prd.a01.fastretailing.com/*"))
 return "DIRECT";

 else if (shExpMatch(url, "http://*.brightcove.co.jp/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*.brightcove.co.jp/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*.bcove.me*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*.bcove.me*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*brightcove*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*brightcove*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*.shoprun.jp/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*.shoprun.jp/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*.fastretailing.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*.fastretailing.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*.service-now.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*.service-now.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*.force.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*.force.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*.salesforce.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*.salesforce.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://www.forest.co.jp/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*workday.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*workday.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*myworkdaygadgets.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*myworkdaygadgets.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(host, "*pj.frc.root.local*" ) )
 return "PROXY cn-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://*.stylehint.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://*.stylehint.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://stylehint.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://stylehint.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "http://dashboard.automaton.fastretailing.io/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 else if (shExpMatch(url, "https://dashboard.automaton.fastretailing.io/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "https://preview.uniqlo.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 else if (shExpMatch(url, "https://www.uniqlo.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";
 
 else if (shExpMatch(url, "https://www.gu-global.com/*"))
 return "PROXY tky-storeproxy.fastretailing.com:8080";

 //Gsuite
 if (shExpMatch(host, "*.google.*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*.gstatic.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*.googleapis.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*.googleusercontent.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*.ggpht.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*sconnectivitycheck.android.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*cros-omahaproxy.appspot.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*gweb-gettingstartedguide.appspot.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*omahaproxy.appspot.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*toolbox.googleapps.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*doubleclick.net*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*googleadservice.net*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*googledrive.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*gmail.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*google-analytics.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*googlegroups.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";
 if (shExpMatch(host, "*s.ytimg.com*" ) )
 return "PROXY gsuite-chinaproxy.fastretailing.com:8080";

 else
 return "DIRECT";
 }
