
function montarTabela(resp){
	var table = document.createElement("table");
	var tHead = document.createElement("thead");
	var trowh = document.createElement("tr");
	var thid = document.createElement("th");
	var thnome = document.createElement("th");
	var thpreco1 = document.createElement("th");
	var thpreco2 = document.createElement("th");
	var thmed = document.createElement("th");
	thid.innerHTML = "ID";
	thnome.innerHTML = "Lanches";
	thpreco1.innerHTML = "Lanchonete da Cidade";
	thpreco2.innerHTML = "Lanches Requinte";
	thmed.innerHTML = "Media dos Preços";
	var vetObj = resp.dados;
	var tBody = document.createElement("tbody");
	for (var i=0; i < vetObj.length; i++) {
		var tr = document.createElement("tr");
		var tdId = document.createElement("td");
		var tdNome = document.createElement("td");
		var tdPreco1 = document.createElement("td");
		var tdPreco2 = document.createElement("td");
		var tdMed = document.createElement("td");
		tdId.innerHTML = vetObj[i].id;
		tdNome.innerHTML = vetObj[i].nome;
		tdPreco1.innerHTML = vetObj[i].preco1;
		tdPreco2.innerHTML = vetObj[i].preco2;
		tdMed.innerHTML = 0.5*(vetObj[i].preco1+vetObj[i].preco2);
		tr.appendChild(tdId);
		tr.appendChild(tdNome);
		tr.appendChild(tdPreco1);
		tr.appendChild(tdPreco2);
		tr.appendChild(tdMed);
		tBody.appendChild(tr);
	}
	tHead.appendChild(thid);
	tHead.appendChild(thnome);
	tHead.appendChild(thpreco1);
	tHead.appendChild(thpreco2);
	tHead.appendChild(thmed);
	table.appendChild(tHead);
	table.appendChild(tBody);
	var div = document.querySelector(".table");
	div.appendChild(table);
}

	function iniciarTabela(){
				montarTabela({dados: [{id:1,nome:"Hot Dog", preco1:2.00, preco2:8.00}
						 ,{id:2,nome:"Misto Quente", preco1:3.00, preco2:9.00}
						 ,{id:3,nome:"Hamburguer", preco1:5.00, preco2:10.00}
						 ,{id:4,nome:"X-Salada", preco1:6.00, preco2:12.00}]});

}
function openCity (evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    document.body.style.backgroundColor = " #ffffe6";
       }
 
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}



