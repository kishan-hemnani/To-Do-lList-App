// Create a new list item when clicking on the "Add" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Write something first!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
  var span = document.createElement("SPAN");
  var i = document.createElement("I");
  i.className = "fa fa-trash"
  span.className = "close";
  span.appendChild(i);
  li.appendChild(span);
      
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.parentNode.removeChild(div);
      }
    }
  }

  // Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
 
for (var a = 0; a < myNodelist.length; a++) {
  var span = document.createElement("SPAN");
  var i = document.createElement("I");
  i.className = "fa fa-trash"
  span.className = "close";
  span.appendChild(i);
  myNodelist[a].appendChild(span);
}

  // Click on a delete button to remove the current list item
let close = document.getElementsByClassName("close");
for (var a = 0; a < close.length; a++) {
  close[a].onclick = function() {
   var div = this.parentElement;
   div.parentNode.removeChild(div); 

  }
}

 
  // Add a "checked" symbol when clicking on a list item
  var list = document.querySelector('ul');
  list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
  
