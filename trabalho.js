
function montarTabela(resp){
	var table = document.createElement("table");
	var tHead = document.createElement("thead");
	var trowh = document.createElement("tr");
	var thid = document.createElement("th");
	var thnome = document.createElement("th");
	var thp1 = document.createElement("th");
	var thp2 = document.createElement("th");
	var thmed = document.createElement("th");
	thid.innerHTML = "ID";
	thnome.innerHTML = "NOME";
	thp1.innerHTML = "P1";
	thp2.innerHTML = "P2";
	thmed.innerHTML = "MEDIA";
	var vetObj = resp.dados;
	var tBody = document.createElement("tbody");
	for (var i=0; i < vetObj.length; i++) {
		var tr = document.createElement("tr");
		var tdId = document.createElement("td");
		var tdNome = document.createElement("td");
		var tdP1 = document.createElement("td");
		var tdP2 = document.createElement("td");
		var tdMed = document.createElement("td");
		tdId.innerHTML = vetObj[i].id;
		tdNome.innerHTML = vetObj[i].nome;
		tdP1.innerHTML = vetObj[i].p1;
		tdP2.innerHTML = vetObj[i].p2;
		tdMed.innerHTML = 0.5*(vetObj[i].p1+vetObj[i].p2);
		tr.appendChild(tdId);
		tr.appendChild(tdNome);
		tr.appendChild(tdP1);
		tr.appendChild(tdP2);
		tr.appendChild(tdMed);
		tBody.appendChild(tr);
	}
	tHead.appendChild(thid);
	tHead.appendChild(thnome);
	tHead.appendChild(thp1);
	tHead.appendChild(thp2);
	tHead.appendChild(thmed);
	table.appendChild(tHead);
	table.appendChild(tBody);
	var div = document.querySelector(".table");
	div.appendChild(table);
}

function iniciarTabela(){
	montarTabela({dados: [{id:1,nome:"Mayra",p1:6,p2:5}
						 ,{id:2,nome:"Pedro",p1:8,p2:8}
						 ,{id:3,nome:"Wesley",p1:10,p2:10}
						 ,{id:5,nome:"Roxelly",p1:10,p2:10}]});
}