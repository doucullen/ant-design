webpackJsonp([196],{1692:function(t,e){t.exports={content:["section",["p","\u7ea7\u8054\u9009\u62e9\u6846\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["ul",["li",["p","\u9700\u8981\u4ece\u4e00\u7ec4\u76f8\u5173\u8054\u7684\u6570\u636e\u96c6\u5408\u8fdb\u884c\u9009\u62e9\uff0c\u4f8b\u5982\u7701\u5e02\u533a\uff0c\u516c\u53f8\u5c42\u7ea7\uff0c\u4e8b\u7269\u5206\u7c7b\u7b49\u3002"]],["li",["p","\u4ece\u4e00\u4e2a\u8f83\u5927\u7684\u6570\u636e\u96c6\u5408\u4e2d\u8fdb\u884c\u9009\u62e9\u65f6\uff0c\u7528\u591a\u7ea7\u5206\u7c7b\u8fdb\u884c\u5206\u9694\uff0c\u65b9\u4fbf\u9009\u62e9\u3002"]],["li",["p","\u6bd4\u8d77 Select \u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u6d6e\u5c42\u4e2d\u5b8c\u6210\u9009\u62e9\uff0c\u6709\u8f83\u597d\u7684\u4f53\u9a8c\u3002"]]]],meta:{category:"Components",type:"Data Entry",title:"Cascader",subtitle:"\u7ea7\u8054\u9009\u62e9",filename:"components/cascader/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4f55\u65f6\u4f7f\u7528",title:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u65b9\u6cd5",title:"\u65b9\u6cd5"},"\u65b9\u6cd5"]]],api:["section",["h2","API"],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Cascader</span> <span class="token attr-name">options</span><span class="token attr-value"><span class="token punctuation">=</span>{options}</span> <span class="token attr-name">onChange</span><span class="token attr-value"><span class="token punctuation">=</span>{onChange}</span> <span class="token punctuation">/></span></span>'},["code","<Cascader options={options} onChange={onChange} />"]],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","allowClear"],["td","\u662f\u5426\u652f\u6301\u6e05\u9664"],["td","boolean"],["td","true"]],["tr",["td","autoFocus"],["td","\u81ea\u52a8\u83b7\u53d6\u7126\u70b9"],["td","boolean"],["td","false"]],["tr",["td","changeOnSelect"],["td","\u5f53\u6b64\u9879\u4e3a true \u65f6\uff0c\u70b9\u9009\u6bcf\u7ea7\u83dc\u5355\u9009\u9879\u503c\u90fd\u4f1a\u53d1\u751f\u53d8\u5316\uff0c\u5177\u4f53\u89c1\u4e0a\u9762\u7684\u6f14\u793a"],["td","boolean"],["td","false"]],["tr",["td","className"],["td","\u81ea\u5b9a\u4e49\u7c7b\u540d"],["td","string"],["td","-"]],["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u7684\u9009\u4e2d\u9879"],["td","string","[","]"],["td","[","]"]],["tr",["td","disabled"],["td","\u7981\u7528"],["td","boolean"],["td","false"]],["tr",["td","displayRender"],["td","\u9009\u62e9\u540e\u5c55\u793a\u7684\u6e32\u67d3\u51fd\u6570"],["td",["code","(label, selectedOptions) => ReactNode"]],["td",["code","label => label.join(' / ')"]]],["tr",["td","expandTrigger"],["td","\u6b21\u7ea7\u83dc\u5355\u7684\u5c55\u5f00\u65b9\u5f0f\uff0c\u53ef\u9009 'click' \u548c 'hover'"],["td","string"],["td","'click'"]],["tr",["td","getPopupContainer"],["td","\u83dc\u5355\u6e32\u67d3\u7236\u8282\u70b9\u3002\u9ed8\u8ba4\u6e32\u67d3\u5230 body \u4e0a\uff0c\u5982\u679c\u4f60\u9047\u5230\u83dc\u5355\u6eda\u52a8\u5b9a\u4f4d\u95ee\u9898\uff0c\u8bd5\u8bd5\u4fee\u6539\u4e3a\u6eda\u52a8\u7684\u533a\u57df\uff0c\u5e76\u76f8\u5bf9\u5176\u5b9a\u4f4d\u3002",["a",{title:null,href:"https://codepen.io/afc163/pen/zEjNOy?editors=0010"},"\u793a\u4f8b"]],["td","Function(triggerNode)"],["td","() => document.body"]],["tr",["td","loadData"],["td","\u7528\u4e8e\u52a8\u6001\u52a0\u8f7d\u9009\u9879\uff0c\u65e0\u6cd5\u4e0e ",["code","showSearch"]," \u4e00\u8d77\u4f7f\u7528"],["td",["code","(selectedOptions) => void"]],["td","-"]],["tr",["td","notFoundContent"],["td","\u5f53\u4e0b\u62c9\u5217\u8868\u4e3a\u7a7a\u65f6\u663e\u793a\u7684\u5185\u5bb9"],["td","string"],["td","'Not Found'"]],["tr",["td","options"],["td","\u53ef\u9009\u9879\u6570\u636e\u6e90"],["td","object"],["td","-"]],["tr",["td","placeholder"],["td","\u8f93\u5165\u6846\u5360\u4f4d\u6587\u672c"],["td","string"],["td","'\u8bf7\u9009\u62e9'"]],["tr",["td","popupClassName"],["td","\u81ea\u5b9a\u4e49\u6d6e\u5c42\u7c7b\u540d"],["td","string"],["td","-"]],["tr",["td","popupPlacement"],["td","\u6d6e\u5c42\u9884\u8bbe\u4f4d\u7f6e\uff1a",["code","bottomLeft"]," ",["code","bottomRight"]," ",["code","topLeft"]," ",["code","topRight"]],["td","Enum"],["td",["code","bottomLeft"]]],["tr",["td","popupVisible"],["td","\u63a7\u5236\u6d6e\u5c42\u663e\u9690"],["td","boolean"],["td","-"]],["tr",["td","showSearch"],["td","\u5728\u9009\u62e9\u6846\u4e2d\u663e\u793a\u641c\u7d22\u6846"],["td","boolean"],["td","false"]],["tr",["td","size"],["td","\u8f93\u5165\u6846\u5927\u5c0f\uff0c\u53ef\u9009 ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]]],["tr",["td","style"],["td","\u81ea\u5b9a\u4e49\u6837\u5f0f"],["td","string"],["td","-"]],["tr",["td","value"],["td","\u6307\u5b9a\u9009\u4e2d\u9879"],["td","string","[","]"],["td","-"]],["tr",["td","onChange"],["td","\u9009\u62e9\u5b8c\u6210\u540e\u7684\u56de\u8c03"],["td",["code","(value, selectedOptions) => void"]],["td","-"]],["tr",["td","onPopupVisibleChange"],["td","\u663e\u793a/\u9690\u85cf\u6d6e\u5c42\u7684\u56de\u8c03"],["td",["code","(value) => void"]],["td","-"]]]],["p",["code","showSearch"]," \u4e3a\u5bf9\u8c61\u65f6\uff0c\u5176\u4e2d\u7684\u5b57\u6bb5\uff1a"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","filter"],["td","\u63a5\u6536 ",["code","inputValue"]," ",["code","path"]," \u4e24\u4e2a\u53c2\u6570\uff0c\u5f53 ",["code","path"]," \u7b26\u5408\u7b5b\u9009\u6761\u4ef6\u65f6\uff0c\u5e94\u8fd4\u56de true\uff0c\u53cd\u4e4b\u5219\u8fd4\u56de false\u3002"],["td",["code","function(inputValue, path): boolean"]],["td"]],["tr",["td","matchInputWidth"],["td","\u641c\u7d22\u7ed3\u679c\u5217\u8868\u662f\u5426\u4e0e\u8f93\u5165\u6846\u540c\u5bbd"],["td","boolean"],["td"]],["tr",["td","render"],["td","\u7528\u4e8e\u6e32\u67d3 filter \u540e\u7684\u9009\u9879"],["td",["code","function(inputValue, path): ReactNode"]],["td"]],["tr",["td","sort"],["td","\u7528\u4e8e\u6392\u5e8f filter \u540e\u7684\u9009\u9879"],["td",["code","function(a, b, inputValue)"]],["td"]]]],["h2","\u65b9\u6cd5"],["table",["thead",["tr",["th","\u540d\u79f0"],["th","\u63cf\u8ff0"]]],["tbody",["tr",["td","blur()"],["td","\u79fb\u9664\u7126\u70b9"]],["tr",["td","focus()"],["td","\u83b7\u53d6\u7126\u70b9"]]]],["style","\n.ant-cascader-picker {\n  width: 300px;\n}\n"],["blockquote",["p","\u6ce8\u610f\uff0c\u5982\u679c\u9700\u8981\u83b7\u5f97\u4e2d\u56fd\u7701\u5e02\u533a\u6570\u636e\uff0c\u53ef\u4ee5\u53c2\u8003 ",["a",{title:null,href:"https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17"},"china-division"],"\u3002"]]]}}});