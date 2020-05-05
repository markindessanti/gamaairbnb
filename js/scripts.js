// Criação do objeto XMLHttpRequest.
var request = new XMLHttpRequest();

// Abrindo uma nova conexão GET, utilizando o endpoint da API
request.open('GET', 'https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true);

request.onload = function () {
	// Início da manipulação dos dados recebidos
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		const TotalMessage = document.getElementsByClassName('divTotalMessage')[0];

		TotalMessage.textContent = `Mais de ${data.length - (data.length % 10)} acomodações`;

		data.forEach(room => {
			// Criação da div card
			const card = document.createElement('div');
			card.setAttribute('class', 'card');

			// Criação da div da imagem
			const imageDiv = document.createElement('div');

			// Criação e configuração do elemento img e inserção do mesmo na imageDiv
			const imagem = document.createElement('img');
			imagem.src = room.photo;
			imagem.setAttribute('class', 'itemImage');
			imageDiv.appendChild(imagem);
			imageDiv.setAttribute('class', 'imageDiv');

			// Criação da div de avaliação
			const divAvaliacao = document.createElement('div');
			const totalAvaliadores = Math.floor(Math.random() * 160) + 41;
			const valorAvaliacao = (parseFloat(Math.random()) + 4).toFixed(2).toString().replace('.', ',');
			divAvaliacao.innerHTML = `<div class="divAvaliacao">
				<span class="spanMessageAvaliacao">
					<span class="spanStarSvg">
						<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false"
							style="height:14px;width:14px;fill:currentColor">
							<path
								d="M972 380c9 28 2 50-20 67L725 619l87 280c11 39-18 75-54 75-12 0-23-4-33-12L499 790 273 962a58 58 0 0 1-78-12 50 50 0 0 1-8-51l86-278L46 447c-21-17-28-39-19-67 8-24 29-40 52-40h280l87-279c7-23 28-39 52-39 25 0 47 17 54 41l87 277h280c24 0 45 16 53 40z">
							</path>
						</svg>
					</span>
					<span class="spanAvaliacao" aria-hidden="true">${valorAvaliacao}</span>
					<span class="spanTotalAvaliacoes" aria-hidden="true">&nbsp;(<!-- -->${totalAvaliadores}<!-- -->)</span>
				</span>
			</div>`;

			// Criação da div do nome da propriedade
			const nomeDiv = document.createElement('div');

			// Criação e configuração do elemento p e inserção do mesmo na nomeDiv
			const nome = document.createElement('p');
			nome.textContent = room.name;
			nomeDiv.appendChild(nome);
			nomeDiv.setAttribute('class', 'nomeDiv');

			// Criação da div do tipo da propriedade
			const tipoPropriedadeDiv = document.createElement('div');

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
			p.textContent = `R$${room.price},00`;
			p.style.fontWeight = '600';
			p.style.fontFamily = 'Roboto';

			const spamText = document.createElement('span');
			spamText.textContent = '/noite';
			spamText.style.fontWeight = "normal";
			p.appendChild(spamText);

			priceDiv.appendChild(p);

			// Cada carda recebe suas subseções
			card.appendChild(imageDiv);
			card.appendChild(divAvaliacao);
			card.appendChild(tipoPropriedadeDiv);
			card.appendChild(nomeDiv);
			card.appendChild(priceDiv);

			// Inserção do card ao container
			container.appendChild(card);
		})
	} else {
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Droga... Parece que não tá funcionando isso aqui...`;
		app.appendChild(errorMessage);
	}
}

// Envio da requisição
request.send();

const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'listaAcomodacoes');

app.appendChild(container);