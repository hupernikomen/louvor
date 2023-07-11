const main = document.querySelector('main')

const h1 = document.querySelector("h1").innerHTML = "Escala Louvor"
localStorage.clear()

var numDias = 0

async function MontaEscala() {

	await fetch("./escala.json")
		.then((res) => res.json()
			.then((dados) => {
				dados.map((item) => {

					const passou = verificaData(item.data)

					if (!passou) {
						return
					}


					const containerItem = document.createElement('div')
					containerItem.className = "containerItem"
					if (item.culto == "EBD" || item.culto == "Oração/Doutrina") {
						containerItem.style.marginTop = "40px"
					}

					containerItem.append(DataCulto(item.data, item.culto))
					containerItem.append(VozesInstrumentos(item.musicos))
					containerItem.append(Louvores(item.preludio, item.louvores))
					containerItem.append(Obs(item.obs))


					if (item.musicos) {
						numDias++
						main.append(containerItem)
					}

					const info = document.querySelector('.info')


					info.innerHTML = `Cantem e toquem SEMPRE com ALEGRIA. Nosso Deus merece o nosso melhor`
					main.append(containerItem)

					console.log(containerItem, "containerItem")
				})
			}))
}


function DataCulto(data, culto) {

	let container = document.createElement('div')
	container.className = "ref"

	let _data = document.createElement('span')
	_data.className = "data"
	_data.innerHTML = data
	container.append(_data)



	let _culto = document.createElement('span')
	_culto.className = "culto"
	_culto.innerHTML = culto
	container.append(_culto)

	switch (culto) {
		case "Louvor e Pregação":
			_data.style.color = "#a72222"
			_culto.style.color = "#a72222"

			break;

		default:
			break;
	}

	return container

}

function VozesInstrumentos(musicos) {

	let container = document.createElement('div')

	let containerVI = document.createElement('div')
	containerVI.className = "vozesInstrumentos"


	musicos.map((item) => {
		let instrumento = document.createElement('span')
		instrumento.innerHTML = item

		containerVI.append(instrumento)
		instrumento.style.backgroundColor = "#ebffed50"
	})

	container.append(containerVI)

	return container

}

function Louvores(preludio, louvores) {

	const container = document.createElement('div')

	if (preludio) {

		let _container_preludio = document.createElement('div')
		_container_preludio.className = "preludio"

		let _titulo_preludio = document.createElement('span')

		let _preludio = document.createElement('span')
		_preludio.innerHTML = preludio

		_container_preludio.append(_titulo_preludio, _preludio)
		container.prepend(_container_preludio)
	}

	let _container_louvores = document.createElement('div')
	_container_louvores.className = "louvores"

	let _louvores = document.createElement('div')

	louvores.map((item) => {
		let _louvor = document.createElement('span')
		_louvor.innerHTML = item
		_louvores.append(_louvor)
	})

	let _titulo_louvor = document.createElement('span')
	_container_louvores.append(_titulo_louvor, _louvores)

	container.append(_container_louvores)

	return container

}

function Obs(obs) {

	const container = document.createElement('div')
	container.className = "container_obs"



	if (obs.length > 0) {
		container.style.paddingTop = "15px"
		container.style.borderTop = ".5px solid #ddd"

		let item_obs = document.createElement("div")
		item_obs.className = "item_obs"

		obs.map((item) => {
			let _obs = document.createElement('span')
			_obs.className = "obs"
			_obs.innerHTML = item

			item_obs.append(_obs)
		})
		container.prepend(item_obs)

	}
	return container
}


function verificaData(data) {

	var dataArr = data.split('/')

	const [dia, mes] = dataArr
	const date = new Date()
	const hoje = new Date(Date.now())

	const futureDate = new Date(date.setMonth(date.getMonth() + 1));
	const datanew = new Date(2023, mes - 1, dia)
	const ontem = new Date()
	ontem.setDate(hoje.getDate() - 1)

	if (ontem <= datanew && datanew < futureDate) {
		return true
	} else {
		return false
	}
}