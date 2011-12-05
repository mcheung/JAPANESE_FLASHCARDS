var _startX = 0;
var _startY = 0;
var _offsetX = 0;
var _offsetY = 0;
var _dragElement;
var _oldZIndex = 0;
var _debug = $('debug');
//var _debug = document.getElementById('debug');

InitDragDrop();

function InitDragDrop()
{
	document.onmousedown = OnMouseDown;
	document.onmouseup = OnMouseUp;
}

function OnMouseDown(e)
{
	//IE needs event object passing
	if(e == null)
	{
		e = window.event;
	}
	
	//IE uses srcElement
	var target = e.target != null ? e.target : e.srcElement;
//	alert("target=" + target);
//	alert("e=" + e);
//	_debug.innerHTML = target.className == 'drag'? 'draggable element clicked': 'Non-Draggable element clicked';
//	alert('_debug.innerhtml = ' + _debug.innerHTML);
//	alert('e.button = ' + e.button + ' target.classname = ' + target.classname);
	//IE left click is 1, Firefox is 0
	if((e.button == 1 && window.event != null 
			|| e.button == 0) && target.className == 'drag')
	{
		//get mouse position
		_startX = e.clientX;
		_startY = e.clientY;

//		alert('mouse position x = ' + _startX + ' mouse position y = ' + _startY);
		
		//get clicked element
		_offsetX = ExtractNumber(target.style.left);
		_offsetY = ExtractNumber(target.style.top);
		
		//bring element to front
		_oldZIndex = target.style.zIndex;
		target.style.zIndex = 10000;
		
		//access element in OnMouseDown
		_dragElement = target;
		//start moving element
		document.onmousemove = OnMouseMove;
		//cancel text selection
		document.body.focus();
		//prevent text and image select in IE
		document.onselectstart = 
			function()
			{
				return false;
			};
		target.ondragstart = 
			function()
			{
				return false;
			};
		//prevent text selection 
		return false;
	}
}

function OnMouseMove(e)
{
	if(e == null)
	{
		var e = window.event;
	}
	
	//the actual drag code
	_dragElement.style.left = (_offsetX + e.clientX - _startX) + 'px';
	_dragElement.style.top = (_offsetY + e.clientY - _startY) + 'px';
	
//	_debug.innerHTML = '(' + _dragElement.style.left + ', ' + _dragElement.style.top + ')';
}

function OnMouseUp(e)
{
	if(_dragElement != null)
	{
		_dragElement.style.zIndex = _oldZIndex;
		
		document.onmousemove = null;
		document.onselectstart = null;
		_dragElement.ondragstart = null;
		
		//this is how we know we're not dragging
		_dragElement = null;
//		_debug.innerHTML = 'mouse up';
	}
}


function ExtractNumber(value)
{
	var n = parseInt(value);
	return n == null || isNaN(n) ? 0 : n;
}

function $(id)
{
	return document.getElementById(id);
}




function DumpInfo1 (event) 
{
    var firedOn = event.target ? event.target : event.srcElement;
    
    if (firedOn.tagName === undefined) 
    {
        firedOn = firedOn.parentNode;
    }

    if (event.type == "dragover") 
    {	// the dragover event needs to be canceled to allow firing the drop event
        if (event.preventDefault) 
        {
            event.preventDefault ();
        }
    }
    
    if (event.type == "dragenter") 
    {	// the dragover event needs to be canceled to allow firing the drop event
        if (event.preventDefault) 
        {
            event.preventDefault ();
        }
    }
}

function ondropAlert()
{
	alert("dropped!");
}












