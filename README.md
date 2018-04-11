# Bigdesk

UPDATE: Server proxy to avoid cors

## USAGE

requirement: > node 8

```shell
$ cp config/default.js config/development.js
$ vi config/development.js
$ node .
```

<hr>

Live charts and statistics for Elasticsearch 2.x /5.x cluster.
## 2016-10-30
- How to use for ES5.x

  site plugins are not supported. Run bigdesk standalone
  
  modify elasticsearch.yml,enable CORS
  
	http.cors.enabled: true
	
	http.cors.allow-origin: "*"
	
   Check Elasticsearch documentation on this parameter: `https://www.elastic.co/guide/en/elasticsearch/reference/current/modules-http.html#modules-http`
   
   then open index.html in browser
   
   or run on another web server

## 2016-03-23
- Modify and relayout some metrics and charts

## 2016-03-21
- Support for Elasticsearch 2.x

## Installation Instructions

navigate to `<ES_HOME>` and execute the following command on command line

Online Install Elasticsearch master

    $ ./bin/plugin install hlstudio/bigdesk

Online Install a special/previous version eg: v2.2.a

    $ ./bin/plugin install hlstudio/bigdesk/v2.2.a

Offline Install, download release zip file or master zip file, copy to a directory eg:/tmp

    $ ./bin/plugin install file:/tmp/bigdesk-master.zip

## How to use Bigdesk

Open your web browser to access `http://127.0.0.1:9200/_plugin/bigdesk` by default.

Now you should see cluster name and list of its nodes. You can switch between nodes in the cluster, new nodes are added
and old nodes are removed automatically on the fly.

You can change the Bigdesk **refresh interval** and **amount of data** that is displayed by charts.


## Screenshots

![Bigdesk ES2.x](https://github.com/hlstudio/bigdesk/raw/master/bigdesk_es2.png)


## Supported Web Browsers

Bigdesk should work in all modern web browsers as long as they support SVG. It has been tested in Safari, Firefox and Chrome.

## Credits

Lukas Vlcek and [contributors](https://github.com/lukas-vlcek/bigdesk/contributors).

Modified by hlstudio.
