function replaceText(fromString, toString){
  getTextNodes().forEach(function(node){
    node.nodeValue = node.nodeValue.replace(new RegExp(quote(fromString), 'g'), toString);
  });

  function getTextNodes(){
    var node_list = [];

    (function scan(node){
      //If there's a word (length != 0)
      if(node.childNodes.length) 
        //Loop through all words
        for(var i = 0; i < node.childNodes.length; i++) {
          //Scan the word
          scan(node.childNodes[i]);
		}
      //If it's a word???
      else if(node.nodeType == Node.TEXT_NODE) {
        node_list.push(node);
	  }
    })(document);

    return node_list;
  }

  function quote(str){
    return (str+'').replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
  }
}

setTimeout(function () {
	for (let key in dictionary) {
		replaceText(dictionary[key], key);
	}
}, 3000);
