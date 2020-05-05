// Criação do objeto XMLHttpRequest.
var request = new XMLHttpRequest()

// Abrindo uma nova conexão GET, utilizando o endpoint da API
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true)

request.onload = function () {
	// Início da manipulação dos dados recebidos
	var data = JSON.parse(this.response)

	console.log(document.styleSheets);
	

	if (request.status >= 200 && request.status < 400) {
		data.forEach(room => {
			// Criação da div card
			const card = document.createElement('div')
			card.setAttribute('class', 'card')

			// Criação da div da imagem
			const imageDiv = document.createElement('div')

			// Criação e configuração do elemento img e inserção do mesmo na imageDiv
			const imagem = document.createElement('img');
			imagem.src = room.photo;
			imagem.setAttribute('class', 'itemImage');
			imageDiv.appendChild(imagem);
			imageDiv.setAttribute('class', 'imageDiv');

			// Criação da div do nome da propriedade
			const nomeDiv = document.createElement('div')

			// Criação e configuração do elemento p e inserção do mesmo na nomeDiv
			const nome = document.createElement('p');
			nome.textContent = room.name;
			nomeDiv.appendChild(nome);
			nomeDiv.setAttribute('class', 'nomeDiv');

			// Criação da div do tipo da propriedade
			const tipoPropriedadeDiv = document.createElement('div')

			// Criação e configuração do elemento p e inserção do mesmo na tipoPropriedadeDiv
			const tipoPropriedade = document.createElement('p');
			tipoPropriedade.textContent = room.property_type;
			tipoPropriedadeDiv.appendChild(tipoPropriedade);
			tipoPropriedadeDiv.setAttribute('class', 'tipoPropriedadeDiv');

			// Criação da div do valor da diária
			const priceDiv = document.createElement('div');
			priceDiv.setAttribute('class', 'priceDiv');

			// Criação e configuração do elemento p e inserção do mesmo na priceDiv
			const p = document.createElement('p');
			p.textContent = `R$${room.price},00`
			p.style.fontWeight = '600';
			p.style.fontFamily = 'Roboto';

			const spamText = document.createElement('span');
			spamText.textContent = '/noite';
			spamText.style.fontWeight = "normal";
			p.appendChild(spamText);

			priceDiv.appendChild(p);

			// Cada carda recebe suas subseções
			card.appendChild(imageDiv)
			card.appendChild(tipoPropriedadeDiv)
			card.appendChild(nomeDiv)
			card.appendChild(priceDiv)

			// Inserção do card ao container
			container.appendChild(card)
		})
	} else {
		const errorMessage = document.createElement('marquee')
		errorMessage.textContent = `Droga... Parece que não tá funcionando isso aqui...`
		app.appendChild(errorMessage)
	}
}

// Envio da requisição
request.send()

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'listaAcomodacoes');

app.appendChild(container);