define([], function() {
    "use strict";

    function dataObj(rawData) {
        this.rawData = rawData;
    };
    dataObj.prototype.getWords = function() {
        var words = [], varianceStep, wordcount, i, j, k, w;
        for(i=0; i < this.rawData.length; i++) {
            wordcount = this.rawData[i].words.length;
            varianceStep = this.rawData[i].variance ? this.rawData[i].variance / wordcount * -1 : -1; 
            for(w=0; w < wordcount; w++) {
                words.push({
                    text: this.rawData[i].words[w],
                    importance: this.rawData[i].importance + varianceStep * w,
                    category: this.rawData[i].category
                })
            }
        }
        return words;
    }

    return new dataObj([
        // Languages
        { words: "PHP, JavaScript, SQL".split(/, */), importance: 80, variance: 40, category: "language" },
        { words: "HTML 5, SASS, CSS, JSON".split(/, */), importance: 40, variance: 10, category: "language"},
        { words: "XSLT, SVG, XML, XSL-FO".split(/, */), importance: 20, category: "language"},
        { words: "Ruby, Python, Perl, Shellskripte".split(/, */), importance: 10, variance: 5, category: "language"},
        { words: ["Java"], importance: 1, category: "language"},
    
        // Libraries
        { words: "Symfony 2, Doctrine, jQuery, Twig, RegEx".split(/, */), importance: 60, variance: 20, category: "library"},
        { words: "Zend Framework, Composer, Capistrano, PHPUnit, backbone.js, require.js, underscore.js".split(/, */), importance: 30, variance: 16, category: "library"},
        { words: "Drupal, Smarty, Ant, Phing, Bootstrap, PEAR, QUnit, JSHint, Assetic".split(/, */), importance: 20, category: "library"},
        { words: "Gearman, bower, jqPlot, Behat, Cucumber".split(/, */), importance: 10, category: "library"},
        
        // Software
        { words: "Git".split(/, */), importance: 55, category: "software"},
        { words: "Asterisk, Mac OS X, Linux, Firebug, Vim, SVN, MySQL, Netbeans, PHPStorm, Sublime Text, SQLite, Apache".split(/, */), importance: 30, category: "software"},
        { words: "Windows, Solr, GraphViz".split(/, */), importance: 20, variance:9, category: "software"},
        { words: "Eclipse, MongoDB, Nginx, PostgreSQL, LiquiBase".split(/, */), importance: 10, variance: 10, category: "software"}
    ]);
    
});