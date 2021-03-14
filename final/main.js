const urlAPI = 'https://gateway.marvel.com:443/v1/public/characters?name=Thor&ts=1&apikey=103a71cdd3f96a3d856bb66dbf6baf8e&hash=b77c0b3ebd4f78ecc0a1cedc6204963b';
const urlAPIHomemAranha = 'https://gateway.marvel.com:443/v1/public/characters/1009610?ts=1&apikey=103a71cdd3f96a3d856bb66dbf6baf8e&hash=b77c0b3ebd4f78ecc0a1cedc6204963b';
const urlAPIStoriesThor= 'https://gateway.marvel.com:443/v1/public/characters/1009664/stories?limit=2&ts=1&apikey=103a71cdd3f96a3d856bb66dbf6baf8e&hash=b77c0b3ebd4f78ecc0a1cedc6204963b';
const urlAPIStoriesHomemAranha = 'https://gateway.marvel.com:443/v1/public/characters/1009610/stories?limit=2&ts=1&apikey=103a71cdd3f96a3d856bb66dbf6baf8e&hash=b77c0b3ebd4f78ecc0a1cedc6204963b';





function ChamarAPI(urlRequest){
	fetch(urlRequest)
			.then(res => res.json())
			.then((json) =>{
				json.data.results.forEach(element => {
					const nome = element.name
					const imagem = element.thumbnail.path
					const imagemExtension = element.thumbnail.extension
						criaDiv(nome,imagem,imagemExtension)
					})

				})

	}
function ChamarAPIStorie(urlRequest,ID){
	fetch(urlRequest)
		.then(res => res.json())
		.then((json) =>{
			json.data.results.forEach(element=>{

				const StorieName = element.title
				console.log(StorieName)
				criaStorie(StorieName,ID)

			})




		})


}


function criaDiv(nome,image,extesion){
	var div = document.getElementById('mainContent')
	var content = `
				<div class="Hero" id="${nome}" >
					<a href="${nome}" target="_blank">
						<img src="${image}.${extesion}" alt="${nome}"  class="img-thumbnail" id="img-thumbnail-id">
					</a>
					<h3 class="title">${nome}</h3>
				</div>
			`
	div.innerHTML += content


}

function criaStorie(StorieName,ID){
	var div = document.getElementById(ID)
	var content = `
		<div class="Stories">
		<h4>${StorieName}</h4>

		</div>


	`
	div.innerHTML += content


}

