/**
 * @author Michael
 */


function KanaCharacters()
{	
	//randomly pick a character
//	var selectedKana;
	var FOLDER = "images/";
	var kanaArray;
	
	kanaArray = new Array();
	kanaArray[0] = FOLDER + "hiragana_a.tif";
	kanaArray[1] = FOLDER + "hiragana_a.tif";
	kanaArray[2] = FOLDER + "hiragana_e.tif";
	kanaArray[3] = FOLDER + "hiragana_i.tif";
	kanaArray[4] = FOLDER + "hiragana_u.tif";
	kanaArray[5] = FOLDER + "hiragana_o.tif";
	kanaArray[6] = FOLDER + "hiragana_ka.tif";
	kanaArray[7] = FOLDER + "hiragana_ki.tif";
	kanaArray[8] = FOLDER + "hiragana_ku.tif";
	kanaArray[9] = FOLDER + "hiragana_ke.tif";
	kanaArray[10] = FOLDER + "hiragana_ko.tif";
	kanaArray[11] = FOLDER + "hiragana_sa.tif";
	kanaArray[12] = FOLDER + "hiragana_shi.tif";
	kanaArray[13] = FOLDER + "hiragana_su.tif";
	kanaArray[14] = FOLDER + "hiragana_se.tif";
	kanaArray[15] = FOLDER + "hiragana_so.tif";
	kanaArray[16] = FOLDER + "hiragana_ta.tif";
	kanaArray[17] = FOLDER + "hiragana_chi.tif";
	kanaArray[18] = FOLDER + "hiragana_tsu.tif";
	kanaArray[19] = FOLDER + "hiragana_te.tif";
	kanaArray[20] = FOLDER + "hiragana_to.tif";
	kanaArray[21] = FOLDER + "hiragana_na.tif";
	kanaArray[22] = FOLDER + "hiragana_ni.tif";
	kanaArray[23] = FOLDER + "hiragana_nu.tif";
	kanaArray[24] = FOLDER + "hiragana_ne.tif";
	kanaArray[25] = FOLDER + "hiragana_no.tif";
	kanaArray[26] = FOLDER + "hiragana_ha.tif";
	kanaArray[27] = FOLDER + "hiragana_hi.tif";
	kanaArray[28] = FOLDER + "hiragana_hu.tif";
	kanaArray[29] = FOLDER + "hiragana_he.tif";
	kanaArray[30] = FOLDER + "hiragana_ho.tif";
	kanaArray[31] = FOLDER + "hiragana_ma.tif";
	kanaArray[32] = FOLDER + "hiragana_mi.tif";
	kanaArray[33] = FOLDER + "hiragana_mu.tif";
	kanaArray[34] = FOLDER + "hiragana_me.tif";
	kanaArray[35] = FOLDER + "hiragana_mo.tif";
	kanaArray[36] = FOLDER + "hiragana_ya.tif";
	kanaArray[37] = FOLDER + "hiragana_yu.tif";
	kanaArray[38] = FOLDER + "hiragana_yo.tif";
	kanaArray[39] = FOLDER + "hiragana_wa.tif";
	kanaArray[40] = FOLDER + "hiragana_wi.tif";
	kanaArray[41] = FOLDER + "hiragana_we.tif";
	kanaArray[42] = FOLDER + "hiragana_wo.tif";
	kanaArray[43] = FOLDER + "hiragana_ra.tif";
	kanaArray[44] = FOLDER + "hiragana_ri.tif";
	kanaArray[45] = FOLDER + "hiragana_ru.tif";
	kanaArray[46] = FOLDER + "hiragana_re.tif";
	kanaArray[47] = FOLDER + "hiragana_ro.tif";
	kanaArray[48] = FOLDER + "hiragana_ga.tif";
	kanaArray[49] = FOLDER + "hiragana_gi.tif";
	kanaArray[50] = FOLDER + "hiragana_gu.tif";
	kanaArray[51] = FOLDER + "hiragana_ge.tif";
	kanaArray[52] = FOLDER + "hiragana_go.tif";
	kanaArray[53] = FOLDER + "hiragana_za.tif";
	kanaArray[54] = FOLDER + "hiragana_zi.tif";
	kanaArray[55] = FOLDER + "hiragana_zu.tif";
	kanaArray[56] = FOLDER + "hiragana_ze.tif";
	kanaArray[57] = FOLDER + "hiragana_zo.tif";
	kanaArray[58] = FOLDER + "hiragana_da.tif";
	kanaArray[59] = FOLDER + "hiragana_dji.tif";
	kanaArray[60] = FOLDER + "hiragana_dzu.tif";
	kanaArray[61] = FOLDER + "hiragana_de.tif";
	kanaArray[62] = FOLDER + "hiragana_do.tif";
	kanaArray[63] = FOLDER + "hiragana_ba.tif";
	kanaArray[64] = FOLDER + "hiragana_bi.tif";
	kanaArray[65] = FOLDER + "hiragana_bu.tif";
	kanaArray[66] = FOLDER + "hiragana_be.tif";
	kanaArray[67] = FOLDER + "hiragana_bo.tif";
	kanaArray[68] = FOLDER + "hiragana_pa.tif";
	kanaArray[69] = FOLDER + "hiragana_pi.tif";
	kanaArray[70] = FOLDER + "hiragana_pu.tif";
	kanaArray[71] = FOLDER + "hiragana_pe.tif";
	kanaArray[72] = FOLDER + "hiragana_po.tif";
	kanaArray[73] = FOLDER + "hiragana_small_a.tif";
	kanaArray[74] = FOLDER + "hiragana_small_i.tif";
	kanaArray[75] = FOLDER + "hiragana_small_u.tif";
	kanaArray[76] = FOLDER + "hiragana_small_e.tif";
	kanaArray[77] = FOLDER + "hiragana_small_o.tif";
	kanaArray[78] = FOLDER + "hiragana_small_ya.tif";
	kanaArray[79] = FOLDER + "hiragana_small_yu.tif";
	kanaArray[80] = FOLDER + "hiragana_small_yo.tif";
	kanaArray[81] = FOLDER + "hiragana_small_tsu.tif";
	kanaArray[82] = FOLDER + "hiragana_n.tif";
	
	this.numKana = kanaArray.length;
	
	this.a = kanaArray[0];
	this.a = kanaArray[1];
	this.e = kanaArray[2];
	this.i = kanaArray[3];
	this.u = kanaArray[4];
	this.o = kanaArray[5];
	
//	alert(phraseArray);
//	if(phraseArray == null)
//	{
//		randNum = Math.floor(Math.random() * kanaArray.length);
//		selectedKana = kanaArray[rand];
		
//		if(selectedKana == null)
//		{
////			alert("randNum: " + randNum);
//		}
		return kanaArray;
//	}
//	else
//	{
//		var kanaPhrasesArray = new Array();
//		var alpha = new checkAnswer();
//		
//		for(p=0; p<phraseArray.length; p++)
//		{
//			for(i=0; i<alpha.kanaAnswerArray.length; i++)
//			{
//				if(phraseArray[p] == alpha.kanaAnswerArray[i])
//				{
//					kanaPhrasesArray[p] = kanaArray[i];
//					selectedCharactersArray[p] = i; //use this array to assign character number in checkAnswer()
//				}
//			}
//		}
//		
//		this.phrasesArray = kanaPhrasesArray;
//		
//		return kanaPhrasesArray;
//	}
}


function romanjiCharacters()
{
	
	this.romanjiCharactersArray = new Array();
	
	this.romanjiCharactersArray[0] = "a";
	this.romanjiCharactersArray[1] = "a";
	this.romanjiCharactersArray[2] = "e";
	this.romanjiCharactersArray[3] = "i";
	this.romanjiCharactersArray[4] = "u";
	this.romanjiCharactersArray[5] = "o";
	this.romanjiCharactersArray[6] = "ka";
	this.romanjiCharactersArray[7] = "ki";
	this.romanjiCharactersArray[8] = "ku";
	this.romanjiCharactersArray[9] = "ke";
	this.romanjiCharactersArray[10] = "ko";
	this.romanjiCharactersArray[11] = "sa";
	this.romanjiCharactersArray[12] = "shi";
	this.romanjiCharactersArray[13] = "su";
	this.romanjiCharactersArray[14] = "se";
	this.romanjiCharactersArray[15] = "so";
	this.romanjiCharactersArray[16] = "ta";
	this.romanjiCharactersArray[17] = "chi";
	this.romanjiCharactersArray[18] = "tsu";
	this.romanjiCharactersArray[19] = "te";
	this.romanjiCharactersArray[20] = "to";
	this.romanjiCharactersArray[21] = "na";
	this.romanjiCharactersArray[22] = "ni";
	this.romanjiCharactersArray[23] = "nu";
	this.romanjiCharactersArray[24] = "ne";
	this.romanjiCharactersArray[25] = "no";
	this.romanjiCharactersArray[26] = "ha";
	this.romanjiCharactersArray[27] = "hi";
	this.romanjiCharactersArray[28] = "hu";
	this.romanjiCharactersArray[29] = "he";
	this.romanjiCharactersArray[30] = "ho";
	this.romanjiCharactersArray[31] = "ma";
	this.romanjiCharactersArray[32] = "mi";
	this.romanjiCharactersArray[33] = "mu";
	this.romanjiCharactersArray[34] = "me";
	this.romanjiCharactersArray[35] = "mo";
	this.romanjiCharactersArray[36] = "ya";
	this.romanjiCharactersArray[37] = "yu";
	this.romanjiCharactersArray[38] = "yo";
	this.romanjiCharactersArray[39] = "wa";
	this.romanjiCharactersArray[40] = "wi";
	this.romanjiCharactersArray[41] = "we";
	this.romanjiCharactersArray[42] = "wo";
	this.romanjiCharactersArray[43] = "ra";
	this.romanjiCharactersArray[44] = "ri";
	this.romanjiCharactersArray[45] = "ru";
	this.romanjiCharactersArray[46] = "re";
	this.romanjiCharactersArray[47] = "ro";
	this.romanjiCharactersArray[48] = "ga";
	this.romanjiCharactersArray[49] = "gi";
	this.romanjiCharactersArray[50] = "gu";
	this.romanjiCharactersArray[51] = "ge";
	this.romanjiCharactersArray[52] = "go";
	this.romanjiCharactersArray[53] = "za";
	this.romanjiCharactersArray[54] = "zi";
	this.romanjiCharactersArray[55] = "zu";
	this.romanjiCharactersArray[56] = "ze";
	this.romanjiCharactersArray[57] = "zo";
	this.romanjiCharactersArray[58] = "da";
	this.romanjiCharactersArray[59] = "ji";
	this.romanjiCharactersArray[60] = "zu";
	this.romanjiCharactersArray[61] = "de";
	this.romanjiCharactersArray[62] = "do";
	this.romanjiCharactersArray[63] = "ba";
	this.romanjiCharactersArray[64] = "bi";
	this.romanjiCharactersArray[65] = "bu";
	this.romanjiCharactersArray[66] = "be";
	this.romanjiCharactersArray[67] = "bo";
	this.romanjiCharactersArray[68] = "pa";
	this.romanjiCharactersArray[69] = "pi";
	this.romanjiCharactersArray[70] = "pu";
	this.romanjiCharactersArray[71] = "pe";
	this.romanjiCharactersArray[72] = "po";
	this.romanjiCharactersArray[73] = "-a";
	this.romanjiCharactersArray[74] = "-i";
	this.romanjiCharactersArray[75] = "-u";
	this.romanjiCharactersArray[76] = "-e";
	this.romanjiCharactersArray[77] = "-o";
	this.romanjiCharactersArray[78] = "-ya";
	this.romanjiCharactersArray[79] = "-yu";
	this.romanjiCharactersArray[80] = "-yo";
	this.romanjiCharactersArray[81] = "-tsu";
	this.romanjiCharactersArray[82] = "n";
}