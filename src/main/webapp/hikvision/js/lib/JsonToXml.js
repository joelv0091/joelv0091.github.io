(function () {
  /**
   * 构造函数:JSON对象转XML字符串
   * @param isPretty {Boolean} optional,是否添加分隔内容，如\n,\t等
   * @param separator {String} optional,分隔内容
   */
  window.JsonToXml = function (isPretty, separator) {
    this.result = [];
    this.isPretty = !!isPretty;
    this.separator = separator || '';
  }
  window.JsonToXml = JsonToXml;

  /**
   * 特殊字符
   */
  JsonToXml.prototype.spacialChars = ['&', '<', '>', '\"', '\''];
  /**
   * 特殊字符转义字符
   */
  JsonToXml.prototype.validChars = ['&amp;', '&lt;', '&gt;', '&quot;', '&apos;'];

  /**
   * 生成xml字符串
   * @return  {String}
   */
  JsonToXml.prototype.toString = function () {
    return this.result.join('');
  };
  /**
   * 替换特殊字符
   * @param s {String} 需要执行替换的字符串
   * @return  {String}
   */
  JsonToXml.prototype.replaceSpecialChar = function (s) {
    var len = this.spacialChars.length;
    for (var i = 0; i < len; i++) {
      s = s.replace(new RegExp(this.spacialChars[i], 'g'), this.validChars[i]);
    }
    return s;
  };
  /**
   * 添加字符串到XML中
   * @param s {String} 需要添加的字符串
   */
  JsonToXml.prototype.appendText = function (s) {
    s = this.replaceSpecialChar(s);
    this.result.push(s);
  };

  /**
   * 添加开始标签
   * @param s {String} 标签名称
   */
  JsonToXml.prototype.appendFlagBegin = function (s) {
    this.result.push('<' + s + '>');
  };

  /**
   * 添加结束标签
   * @param s {String} 标签名称
   */
  JsonToXml.prototype.appendFlagEnd = function (s) {
    this.result.push('</' + s + '>');
    if (this.isPretty) {
      this.result.push(this.separator);
    }
  };

  JsonToXml.prototype.each = function (arr, cb) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      cb(i, arr[i]);
    }
  };

  /**
   * 格式化xml成标准格式
   * @param xml {String}
   * @return {String} 标准格式的XML
   * @reference http://stackoverflow.com/questions/376373/pretty-printing-xml-with-javascript
   */
  JsonToXml.prototype.formatXml = function (xml) {
    var formatted = [];
    var reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1' + this.separator + '$2$3');
    var pad = 0;
    var self = this;
    this.each(xml.split(this.separator), function (index, node) {
      var indent = 0;
      if (node.match(/.+<\/\w[^>]*>$/)) {
        indent = 0;
      } else if (node.match(/^<\/\w/)) {
        if (pad != 0) {
          pad -= 1;
        }
      } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
        indent = 1;
      } else {
        indent = 0;
      }
      var padding = '';
      for (var i = 0; i < pad; i++) {
        padding += '  ';
      }
      formatted.push(padding + node + self.separator);
      pad += indent;
    });
    return formatted.join('');
  };

  JsonToXml.prototype.toXml = function (json) {
    this._toXml(json);

    if (this.isPretty) {
      return this.formatXml(this.toString());
    }
    return this.toString();
  };

  JsonToXml.prototype._toXml = function (json) {
    for (var tag in json) {
      //need to handle Array object specially
      var p = json[tag];
      if (null != p) { //不为空
        if (Array === p.constructor) {
          var len = p.length;
          for (var i = 0; i < len; i++) {
            this.appendFlagBegin(tag);
            var item = p[i];
            if (item.constructor === Object) {
              this._toXml(item);
            } else if (item.constructor === Array) {
              var obj = {};
              obj[tag] = item;
              this._toXml(obj);
            } else if (item.constructor === String) {
              this.appendText(item);
            } else if (Number === item.constructor) {
              this.appendText('' + item + '');
            } else if (Boolean === item.constructor) {
              this.appendText('' + item + '');
            }
            this.appendFlagEnd(tag);
          }
        } else {
          this.appendFlagBegin(tag);
          if (Object === p.constructor) {
            this._toXml(p);
          } else if (String === p.constructor) {
            this.appendText(p);
          } else if (Number === p.constructor) {
            this.appendText('' + p + '');
          } else if (Boolean === p.constructor) {
            this.appendText('' + p + '');
          }
          this.appendFlagEnd(tag);
        }
      } else { //为空时
        this.appendFlagBegin(tag);
        this.appendFlagEnd(tag);
      }
    }
  };
})();