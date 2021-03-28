// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName("todo");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
$(document).on('click','.todo',function(){
// $('.todo').on('click',function(){
	$(this).toggleClass('checked');
});

// var list = document.querySelector('ul');
// list.addEventListener('click', function(ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);


// Create a new list item when clicking on the "Add" button
$('.addBtn').on('click',function(){
	let li = $('<li></li>').addClass('todo');
	let inputval = $('#myInput').val();

	li.text(inputval);
	if(inputval === '') {
		alert("내용을 입력해주세요");
	}else {
		$('#myUL').append(li);
	}

	$('#myInput').val("");

	span = $('<span></span>').text("\u00D7").addClass('close');
	li.append(span);
});

$(document).on('click','.close',function(){
// $('.close').on('click',function(){
	$(this).closest('li').css({"display": "none"});
});

// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("내용을 입력해주세요");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }
