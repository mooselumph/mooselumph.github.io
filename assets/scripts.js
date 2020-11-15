var coll = document.getElementsByClassName("toggle-proof");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Loop throw tag classes

document.addEventListener('KatexRendered',function(){

var eq_labels = {};
var eq_num = 1;

var tags = document.getElementsByClassName("tag");

for (i = 0; i < tags.length; i++) {
    var span = tags[i].children[1].children[1]
    
    if (span.hasChildNodes()){
        
        var label = span.children[0].id;
        
        var child = document.createElement('a');
        child.href = label;
        span.appendChild(child);
        
        eq_labels[label] = eq_num;
    }
    
    span.innerHTML += eq_num.toString();
    eq_num += 1;
}

var refs = document.getElementsByClassName("eq-ref");

for (i = 0; i < refs.length; i++) {
    var ref = refs[i]
    
    ref.classList.forEach(function(label){
        if (eq_labels.hasOwnProperty(label)){

            var child = document.createElement('a');
            child.href = "#" + label;
            child.innerHTML +=  "(" + eq_labels[label].toString()  +")";
            ref.appendChild(child);

        }
    });
}

});