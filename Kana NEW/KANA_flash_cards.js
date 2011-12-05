/*
 * generate a sequence of KANA characters
 */

var count = 0;
var finishedMsg = "You've done " + count + " Kana";
//var kanaArray;
var kanaAnswerArray;
var phraseArray;
var randNum;
// = document.getElementById("speed").Value;
var answer;
var answerResult;
var answerInput;

var answerDisplay;
var answerDisplayPhrase = document.getElementById("kanaText");
var answerDisplaySpan = document.getElementById("trKanaText");

var imgPhrase = new Array();
var randomPhrase;

var selectedCharactersArray = new Array();

var chosenRandomAnswer;
var correctAnswerBox;

window.onload = 
function getKana(secondsInput)
{
	doGet();
};

function doGet()
{	
	var randomAnswer_1 = document.getElementById("randAnswer_1");
	var randomAnswer_2 = document.getElementById("randAnswer_2");
	var randomAnswer_3 = document.getElementById("randAnswer_3");
	
	var timeOut = document.getElementById("speed");
	//timeOut.value = timeOut.value * 1000;
	var time = setTimeout("doGet()", 5000); //1/1000 for ms
	inputFocus();
	
//	alert("setFocus: answerInput");
	var modeSelect = document.getElementById("mode");
	var kanaImg = document.getElementById("imgKana");
	var phraseImg = document.getElementById("phraseKana");

	var modeTitle = document.getElementById("txt_enter_answer");
	
	phraseImg.innerHTML = "";

//	if(modeSelect.checked) //phrase mode selected
	if(getModeRadio() == "phrase")
	{
		//modeTitle.innerHTML = "Enter the Phrase:";
		kanaImg.innerHTML = "";
		var phrases = new KanaCharacters();
		
		var phraseListArray = new phraseList();
		randomPhrase = Math.floor(Math.random() * phraseListArray.list.length);
		var phrase = getPhrase(randomPhrase); //get a phrase
		
		imgPhrase = getNextPhrase(phrase); //this is the array of KanaCharacter images

		for(i=0; i<imgPhrase.length; i++)
		{
			phraseImg.innerHTML += '<img class=\"drag\" width="200" height="200" src="' + imgPhrase[i] + '" id="img_"' + i + ' onmouseover=answer_highlight()/>';
		}
		
	}
	else
	{
		//modeTitle.innerHTML = "Enter the Kana:";
		var randomNumber = getRandomNum();
		phraseImg.innerHTML = "";
		var imgNext = getNextImg();
		var img = imgNext;
//		kanaImg.innerHTML = '<img id=\"imgPaste\" class=\"drag\" src="' + img + '" />';		
		kanaImg.innerHTML = '<img id=\"imgPaste\" src="' + img + '" />';		
		
//		randomAnswer_1.ondrop = ondropAlert;
		
		//FOR THE DRAG DROP MECHANISM - LISTEN FOR DRAGS AND DROPS	
		var imgPaste = document.getElementById("imgPaste");

		if(imgPaste.addEventListener)
		{
			imgPaste.addEventListener ("dragstart", DumpInfo, false);
			imgPaste.addEventListener ("draggesture", DumpInfo, false);
			imgPaste.addEventListener ("drag", DumpInfo, false);
			imgPaste.addEventListener ("dragend", DumpInfo, false);
//			alert("attached event listeners - drag");
		}
		
		if(randomAnswer_1.addEventListener)
		{
			randomAnswer_1.addEventListener("dragenter", DumpInfo, false);
			randomAnswer_1.addEventListener("dragover", DumpInfo, false);
			randomAnswer_1.addEventListener("drop", DumpInfo, false);
//			randomAnswer_1.addEventListener("dragdrop", DumpInfo, false);
//			
			randomAnswer_2.addEventListener("dragenter", DumpInfo, false);
			randomAnswer_2.addEventListener("dragover", DumpInfo, false);
			randomAnswer_2.addEventListener("drop", DumpInfo, false);
//			randomAnswer_2.addEventListener("dragdrop", DumpInfo, false);
//			
			randomAnswer_3.addEventListener("dragenter", DumpInfo, false);
			randomAnswer_3.addEventListener("dragover", DumpInfo, false);
			randomAnswer_3.addEventListener("drop", DumpInfo, false);
//			randomAnswer_3.addEventListener("dragdrop", DumpInfo, false);
//			alert("attached event listeners - drop");
		}
		
//		alert("randNum = " +randNum);
		setRandomAnswers(); //setup the answer boxes
	}
	
//	if(chosenRandomAnswer == correctAnswerBox)
//	{
//		alert("Correct!");
//	}
	{
		
	}
	var entered = null;
	
	answerDisplay = document.getElementById("answer");
	answerDisplay.innerHTML = "";
	answerDisplayPhrase = document.getElementById("kanaText");
	answerDisplayPhrase.innerHTML = "";
}

function DumpInfo (event) 
{
    var firedOn = event.target ? event.target : event.srcElement;
    
    if (firedOn.tagName === undefined) 
    {
        firedOn = firedOn.parentNode;
    }

    var info = document.getElementById ("info");
    
    var imgPaste = document.getElementById ("imgPaste");

    if(event.type == 'drag')
    {
    	imgPaste.style.Class = "drag";
    }
    if(event.type == 'dragend')
    {
    	
    }
    
    if (event.type == "dragover") 
    {
            // the dragover event needs to be canceled to allow firing the drop event
        if (event.preventDefault) 
        {
            event.preventDefault ();
        }
    }
    
    if (event.type == "dragenter") 
    {
            // the dragover event needs to be canceled to allow firing the drop event
        if (event.preventDefault) 
        {
            event.preventDefault ();
        }
    }
    
    if(event.type == "drop")
    {
    	if (firedOn.id == "randAnswer_1") 
        {
//          info.innerHTML += "<span style='color:#008000'>" + firedOn.id + "</span>, ";
    		chosenRandomAnswer = 1;
        }
        else if(firedOn.id == "randAnswer_2")
        {
//          info.innerHTML += "<span style='color:#800000'>" + firedOn.id + "</span>, ";
        	chosenRandomAnswer = 2;
        }
        else
        {
        	chosenRandomAnswer = 3;
        }
    	
//    	checkDropAnswer(chosenRandomAnswer, correctAnswerBox)? answerCorrectDrop() : answerIncorrectDrop();
    	checkDropAnswer(chosenRandomAnswer, correctAnswerBox)? checkAnswer(true) : checkAnswer(false);
    
//    	alert("chosenRandomAnswer = " + chosenRandomAnswer + " event.type = " + event.type);
    }   

}

function checkDropAnswer(chosenAnswer, correctAnswer)
{
	return chosenAnswer == correctAnswer? true : false;
}

function setRandomAnswers()
{
	var romanjiRandom = new romanjiCharacters();
	correctAnswerBox = setCorrectAnswerBox(); //1, 2 or 3
	
	var incorrectNo1 = setCorrectAnswerBox();
	
	while(incorrectNo1 == correctAnswerBox) //make sure not the same as correct number
	{
		incorrectNo1 = setCorrectAnswerBox();
	}
	
	var incorrectNo2 = setCorrectAnswerBox(); //make sure not same as correct number or already chosen number
	
	while(incorrectNo2 == correctAnswerBox || incorrectNo2 == incorrectNo1)
	{
		incorrectNo2 = setCorrectAnswerBox();
	}
//	alert("correctAnswerBox = " + correctAnswerBox + " incorrectNo1 = " + incorrectNo1 + " incorrectNo2 = " + incorrectNo2);
	
	var randomCorrect = document.getElementById("randAnswer_" + correctAnswerBox);
	var randomIncorrect1 = document.getElementById("randAnswer_" + incorrectNo1);
	var randomIncorrect2 = document.getElementById("randAnswer_" + incorrectNo2);
	randomCorrect.innerHTML = romanjiRandom.romanjiCharactersArray[randNum];
	//choose a random romanji character to set as incorrect answers
	randomIncorrect1.innerHTML = romanjiRandom.romanjiCharactersArray[setIncorrectAnswerbox(romanjiRandom.romanjiCharactersArray.length)];
	randomIncorrect2.innerHTML = romanjiRandom.romanjiCharactersArray[setIncorrectAnswerbox(romanjiRandom.romanjiCharactersArray.length)];
//	alert("correct answer box = " + randomCorrect.id);
}

function setCorrectAnswerBox()
{
	var randBox = Math.floor(Math.random() * 3);
	return randBox + 1;
}

function setIncorrectAnswerbox(romanLength)
{
	var randBox = Math.floor(Math.random() * romanLength);
	return randBox + 1;
}

function getModeRadio()
{
	var radioLength = document.forms[0].mode.length;
	var selectedMode;
	
	for(i=0; i<radioLength; i++)
	{
		if(document.forms[0].mode[i].checked)
		{
			selectedMode = document.forms[0].mode[i].value;
		}
	}
	return selectedMode;
}

function getPhrase(phraseNo)
{
//	alert(phraseNo); WORKS
	var phrases = new phraseList();
	var selectedPhrase = phrases.list[phraseNo];
	var splitPhrase = parsePhrase(selectedPhrase);
//	alert("splitphrase = " + splitPhrase);
	return splitPhrase;
}

function phraseList()
{
	var phraseList = new Array();
	phraseList[0] = "ko n ni chi wa";
	phraseList[1] = "ko n ba n wa";
	phraseList[2] = "a ri ga to go za i ma su";
	phraseList[3] = "o ya su mi na sa i";
	phraseList[4] = "ha ji me ma shi te";
	phraseList[5] = "wa ta shi wa ma i ke ru de su";
	phraseList[6] = "su mi ma se n";
	
	this.list = phraseList;
//	alert("phraseList = " + phraseList[no]);
//	return phraseList[no];
}

function parsePhrase(phraseSplit)
{
	//splits the phrase into each kana element
	var split = phraseSplit.split(" ");
//	var currentSplit = new Array();
//	alert("parsing: split = " + split);
//	
//	for(ps=0; ps<split.length; ps++)
//	{
//		if(	split[ps] == "a" ||
//			split[ps] == "i" ||
//			split[ps] == "e" ||
//			split[ps] == "o" ||
//			split[ps] == "u" ||
//			split[ps] == "n")
//		{
//			var delim = split[ps];
//			currentSplit[ps] = phraseSplit.split(delim);
//	
//			phraseSplit = phraseSplit.substr(ps);
//			alert("phraseSplit " + ps + " = " + phraseSplit);
//		}
//	}
	return split;
}

function inputFocus()
{
//	alert("focus");
	answerInput = document.getElementById("entered_answer");
	answerInput.focus(true);
	answerInput.value = "";
//	answerInput.focus;
}

function checkPause()
{
	answer = document.getElementById('entered_answer');

	if(answer.innerHTML !== "")
	{
//		alert("answer= " +answer.innerHTML);
		return answer.innerHTML;
	}
	else 
	{
		return null;
	}
}

function pause(time, answerUp)
{
	var answer = document.getElementById('entered_answer');
//	alert('answer: ' + answer.innerHTML);
	if(answer.innerHTML == null)
	{
		clearTimeout(time);
		setTimeout('pause()', 500);
//		alert('pause: true');
	}
	else
	{
//		alert('pause: true');
		return answer;
	}

}

function getRandomNum()
{
	var numKanaCharacters = new KanaCharacters();
	randNum = Math.floor(Math.random() * numKanaCharacters.length);
	return randNum;
}

function getNextImg()
{
	var selectedPhrase = KanaCharacters();

	var selectedKana = selectedPhrase[randNum];
	
	return selectedKana;
}

function getNextPhrase(phraseNo)
{
	var phrase = new Array();
//	alert("getPhrase: " + phraseNo);
	if(phraseNo == null)
	{
//		alert("phraseNo = " + phraseNo);
		var selectedKana = KanaCharacters();
		return selectedKana;
	}
	else
	{
		phrase = processPhrase(phraseNo);
	}
	
	return phrase;
}

function processPhrase(phraseArray)
{
	var kanaPhrasesArray = new Array();
	var kanaArray = new KanaCharacters();
	var romanji = new romanjiCharacters();
	
	for(p=0; p<phraseArray.length; p++)
	{
		for(i=0; i<romanji.romanjiCharactersArray.length; i++)
		{
			if(phraseArray[p] == romanji.romanjiCharactersArray[i])
			{
				kanaPhrasesArray[p] = kanaArray[i];
				selectedCharactersArray[p] = i; //use this array to assign character number in checkAnswer()
			}
		}
	}
	
	this.phrasesArray = kanaPhrasesArray;
	
	return kanaPhrasesArray;
}

function checkAnswer(isCorrect)
{
	answerInput = document.getElementById("entered_answer").value;
	var modeSelect = document.getElementById("mode");
	var count=0;

	var kanaAnswer;
//	this.kanaAnswerArray = new romanjiCharacters();
	kanaAnswerArray = new romanjiCharacters();

	answerResult = new resultObject();
	
//	if(modeSelect.checked) //phrase mode selected
	if(getModeRadio() == "phrase")
	{
//		alert("randomPhrase no: " + randomPhrase); //WORKS
		var list = new phraseList(randomPhrase);
//		alert(list); //WORKS
		var phraseListList = list.list;
//		alert("phraseList: " + phraseListList); //WORKS

		var splitAnswer = answerInput.split();
//		alert(splitAnswer);
			for(list=0; list<phraseListList.length; list++)
			{
				for(ans=0; ans<splitAnswer; ans++)
				{
					count += phraseListList[list].indexOf(splitAnswer[ans]);
				}
			}
			
			//check the answer given
//			answerResult.kana = phraseListList[randomPhrase];
			for(img=0; img<imgPhrase.length; img++)
			{
				//alert("imgPhrase" + img + imgPhrase);
				
				answerResult.kanaArray[img] = kanaAnswerArray.romanjiCharactersArray[selectedCharactersArray[img]];
			}
			
			if(count < 0)
			{
				answerResult.bool = false;
				answerIncorrect_phrase(answerResult.kanaArray);
			}
			else
			{
				answerResult.bool = true;
				answerCorrect_phrase(answerResult.kanaArray);
			}
	}
	else
	{
		//check the answer given
		
		answerResult.kana = kanaAnswerArray.romanjiCharactersArray[randNum];
		
		if(kanaAnswerArray.romanjiCharactersArray[randNum] == answerInput 
				|| isCorrect)
		{
			answerResult.bool = true;
			answerCorrect(answerResult.kana);
		}
		else
		{
			answerResult.bool = false;
			answerIncorrect(answerResult.kana);
		}
		
//		return answerResult;
	}
	
}

function resultObject()
{
	this.bool;
	this.kana;
	this.kanaArray = new Array();
}

function answerCorrect(kana)
{
	answerDisplay = document.getElementById("answer");
	answerDisplay.innerHTML = kana;
	answerDisplay.className = "answer_correct";
	bounceElement("imgKana");
}

function answerIncorrect(kana)
{
	var kanaImg = document.getElementById("imgKana");
	
	answerDisplay = document.getElementById("answer");
	answerDisplay.className = "answer_incorrect";
	answerDisplay.innerHTML = kana;
	shakeElement("imgKana");
}

function answerCorrectDrop()
{
	answerDisplay = document.getElementById("answer");
	answerDisplay.innerHTML = kanaAnswerArray.romanjiCharactersArray[randNum];
	answerDisplay.className = "answer_correct";
}

function answerIncorrectDrop()
{
	answerDisplay = document.getElementById("answer");
	answerDisplay.className = "answer_incorrect";
	answerDisplay.innerHTML = kanaAnswerArray.romanjiCharactersArray[randNum];
}

function answerCorrect_phrase(kana)
{
	for(k=0; k<kana.length; k++)
	{
		answerDisplayPhrase.innerHTML += '<span id="kana_' + k + '">' + kana[k] + " " + '</span>';
//		answerDisplaySpan.innerHTML += '<td><div id="kana_' + k + '">' + kana[k] + " " + '</div></td>';
//		answerDisplayPhrase.innerHTML += '<span id="kana_' + k + '">' + kana[k] + " " + '</span>';

		answerDisplayPhrase.className = "answer_correct_phrase";
	}
	
}

function answerIncorrect_phrase(kana)
{
	for(k=0; k<kana.length; k++)
	{
		answerDisplayPhrase.innerHTML += kana[k] + " ";
		answerDisplayPhrase.className = "answer_incorrect_phrase";
	}
}

function answer_highlight()
{
	alert("mouseover");
	var imgDiv = document.getElementById("kana_" + 0);
	imgDiv.className = "answer_highlight";
}




