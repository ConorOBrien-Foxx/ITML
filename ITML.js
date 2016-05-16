var attr = {
	0: "accept",
	1: "accept-charset",
	2: "accesskey",
	3: "action",
	4: "align",
	5: "alt",
	6: "async",
	7: "autocomplete",
	8: "autofocus",
	9: "autoplay",
	10: "autosave",
	11: "bgcolor",
	12: "border",
	13: "buffered",
	14: "challenge",
	15: "charset",
	16: "checked",
	17: "cite",
	18: "class",
	19: "code",
	20: "codebase",
	21: "color",
	22: "cols",
	23: "colspan",
	24: "content",
	25: "contenteditable",
	26: "contextmenu",
	27: "controls",
	28: "coords",
	29: "data",
	30: "data-*",
	31: "datetime",
	32: "default",
	33: "defer",
	34: "dir",
	35: "dirname",
	36: "disabled",
	37: "download",
	38: "draggable",
	39: "dropzone",
	40: "enctype",
	41: "for",
	42: "form",
	43: "formaction",
	44: "headers",
	45: "height",
	46: "hidden",
	47: "high",
	48: "href",
	49: "hreflang",
	50: "http-equiv",
	51: "icon",
	52: "id",
	53: "ismap",
	54: "itemprop",
	55: "keytype",
	56: "kind",
	57: "label",
	58: "lang",
	59: "language",
	60: "list",
	61: "loop",
	62: "low",
	63: "manifest",
	64: "max",
	65: "maxlength",
	66: "media",
	67: "method",
	68: "min",
	69: "multiple",
	70: "muted",
	71: "name",
	72: "novalidate",
	73: "open",
	74: "optimum",
	75: "pattern",
	76: "ping",
	77: "placeholder",
	78: "poster",
	79: "preload",
	80: "radiogroup",
	81: "readonly",
	82: "rel",
	83: "required",
	84: "reversed",
	85: "rows",
	86: "rowspan",
	87: "sandbox",
	88: "scope",
	89: "scoped",
	90: "seamless",
	91: "selected",
	92: "shape",
	93: "size",
	94: "sizes",
	95: "span",
	96: "spellcheck",
	97: "src",
	98: "srcdoc",
	99: "srclang",
	100: "srcset",
	101: "start",
	102: "step",
	103: "style",
	104: "summary",
	105: "tabindex",
	106: "target",
	107: "title",
	108: "type",
	109: "usemap",
	110: "value",
	111: "width",
	112: "wrap",
	113: "onabort",
	114: "onblur",
	115: "onchange",
	116: "onclick",
	117: "onclose",
	118: "oncontextmenu",
	119: "ondblclick",
	120: "onerror",
	121: "onfocus",
	122: "oninput",
	123: "onkeydown",
	124: "onkeypress",
	125: "onkeyup",
	126: "onload",
	127: "onmousedown",
	128: "onmousemove",
	129: "onmouseout",
	130: "onmouseover",
	131: "onmouseup",
	132: "onreset",
	133: "onresize",
	134: "onscroll",
	135: "onselect",
	136: "onsubmit"
};

var elem = {
	0:"html",
	1:"base",
	2:"head",
	3:"link",
	4:"meta",
	5:"script",
	6:"style",
	7:"title",
	8:"address",
	9:"article",
	10:"body",
	11:"aside",
	12:"footer",
	13:"header",
	14:"h1",
	15:"h2",
	16:"h3",
	17:"h4",
	18:"h5",
	19:"h6",
	20:"hgroup",
	21:"nav",
	22:"section",
	23:"dd",
	24:"dl",
	25:"dt",
	26:"div",
	27:"figcaption",
	28:"hr",
	29:"li",
	30:"ol",
	31:"ul",
	32:"menu",
	33:"main",
	34:"p",
	35:"pre",
	36:"a",
	37:"abbr",
	38:"b",
	39:"bdi",
	40:"bdo",
	41:"br",
	42:"cite",
	43:"code",
	44:"data",
	45:"time",
	46:"dfn",
	47:"em",
	48:"i",
	49:"kbd",
	50:"mark",
	51:"q",
	52:"blockquote",
	53:"rp",
	54:"ruby",
	55:"rt",
	56:"rtc",
	57:"rb",
	58:"s",
	59:"del",
	60:"ins",
	61:"samp",
	62:"small",
	63:"span",
	64:"strong",
	65:"sub",
	66:"sup",
	67:"u",
	68:"var",
	69:"wbr",
	70:"area",
	71:"map",
	72:"audio",
	73:"source",
	74:"track",
	75:"video",
	76:"embed",
	77:"object",
	78:"param",
	79:"canvas",
	80:"noscript",
	81:"caption",
	82:"table",
	83:"col",
	84:"colgroup",
	85:"tbody",
	86:"tr",
	87:"thead",
	88:"tfoot",
	89:"td",
	90:"th",
	91:"button",
	92:"datalist",
	93:"option",
	94:"fieldset",
	95:"label",
	96:"form",
	97:"input",
	98:"legend",
	99:"meter",
	100:"optgroup",
	101:"select",
	102:"output",
	103:"progress",
	104:"textarea",
	105:"details",
	106:"dialog",
	107:"menuitem",
	108:"summary",
	109:"content",
	110:"element",
	111:"shadow",
	112:"template",
	113:"acronym",
	114:"applet",
	115:"basefont",
	116:"font",
	117:"big",
	118:"blink",
	119:"center",
	120:"command",
	121:"dir",
	122:"frame",
	123:"frameset",
	124:"isindex",
	125:"keygen",
	126:"listing",
	127:"marquee",
	128:"noembed",
	129:"plaintext",
	130:"spacer",
	131:"strike",
	132:"tt",
	133:"xmp",
};

function ITMLcompile(text){
	var comp = "function Strip(){this.array={0:0},this.index=0,this.get=function(){return\"undefined\"==typeof this.array[this.index]&&this.set(0),this.array[this.index]},this.over=function(){this.get()>255?this.set(this.get()%256):this.get()<0&&this.set((256+this.get())%256)},this.set=function(t){this.array[this.index]=t,this.over()},this.inc=function(){this.set(this.get()+1)},this.dec=function(){this.set(this.get()-1)},this.rgt=function(){this.index++},this.lft=function(){this.index--},this.getChar=function(){return String.fromCharCode(this.get());}}I=new Strip;";
	comp += "H="+JSON.stringify(elem)+";";
	comp += "A="+JSON.stringify(attr)+";";
	comp += "var c=document.body.parentElement;var e=\"html\";var h=\"accept\";var p=\"\";";
	for(var i = 0; i < text.length; i++){
		switch(text[i]){
			case "+":
				comp += "I.inc();";
				break;
			case "-":
				comp += "I.dec();";
				break;
			case ">":
				comp += "I.rgt();";
				break;
			case "<":
				comp += "I.lft();";
				break;
			case "[":
				comp += "while(I.get()){";
				break;
			case "]":
				comp += "}";
				break;
			case ".":
				comp += "c.appendChild(document.createTextNode(I.getChar()));";
				break;
			case ",":
				comp += "I.set(prompt().charCodeAt(0));";
				break;
			case "!":
				comp += "c.innerHTML+=I.getChar();";
				break;
			case "?":
				comp += "c[h]=c[h]||\" \";c[h]+=I.getChar();"
				break;
			case "#":
				comp += "c=c.children[I.get()]||c;";
				break;
			case "$":
				comp += "c=c.parentElement;";
				break;
			case "@":
				comp += "r=c.appendChild(document.createElement(H[I.get()]||\"span\"));c=r;";
				break;
			case "&":
				comp += "h=A[I.get()];";
				break;
			case "_":
				comp += "p+=I.getChar();";
				break;
			case "=":
				comp += "c.appendChild(document.createTextNode(p));";
				break;
			case "^":
				comp += "c.innerHTML += p;";
				break;
			case "~":
				comp += "c[h]=c[h]||\" \";c[h]+=p;";
				break;
			case ":":
				comp += "c[h]=p;"
				break;
			case "`":
				comp += "p=new Function(p);"
				break;
			case ";":
				comp += "p=\"\";";
				break;
		}
	}
	return comp;
}
