const main = document.querySelector('main')
const header = document.querySelector('header')
const modal = document.querySelector('.modal')
const _scroll = document.querySelector('.scroll')
const containerModal = document.querySelector('.containerModal')
const container = document.querySelector('.containerItem')
const select = document.querySelector('.select')

var numDias = 0

localStorage.setItem('@statusmembros', false)

const lista_membros = ["Todos", "Paulinha", "Duda", "Lidiane", "Fernanda", "Edvan", "Edmilson", "Laís", "Kelviane", "Annes", "Warley", "Thiago", , "Wesley", "Thalyson", "André"]

const _membro = localStorage.getItem('@membro')
const h1 = document.querySelector("h1").innerHTML = _membro
const nomeMembro = lista_membros.indexOf(_membro)
const posicao = 0;

const element = lista_membros.splice(nomeMembro, 1)[0];
lista_membros.splice(posicao, 0, element);

lista_membros.map((membro, index) => {
	const button = document.createElement('button')
	button.className = index == posicao ? 'btn_zero' : 'btn_membro'
	button.innerHTML = membro
	_scroll.append(button)
})

var posicaoInicial = document.querySelector('main');
var i = posicaoInicial.getBoundingClientRect()

window.addEventListener('scroll', () => {

	const posicoes = posicaoInicial.getBoundingClientRect()

	if (posicoes.y < 60) {
		header.style.boxShadow = "0px 0px 10px #aaaaaa50"
	} else {
		header.style.boxShadow = "none"
	}
})


const arrBtn = document.querySelectorAll('.btn_membro')

arrBtn.forEach((btn) => {
	btn.addEventListener('click', () => {

		localStorage.setItem('@membro', btn.innerHTML)

		window.location.reload(true);
		MontaEscala()
	})
})

function Selecionar() {

	const _status = JSON.parse(localStorage.getItem('@statusmembros'))

	_scroll.style.height = _status ? "0px" : "70px"
	localStorage.setItem('@statusmembros', _status ? false : true)

}

async function MontaEscala() {

	await fetch("./json/escala.json")
		.then((res) => res.json()
			.then((dados) => {
				dados.map((item) => {

					const passou = verificaData(item.data)

					if (!passou || !item.status) {
						return
					}

					const instrumentista = item.instrumentos.find((inst) => inst == _membro)
					const vocal = item.vozes.find((inst) => inst == _membro)

					const containerItem = document.createElement('div')
					containerItem.className = "containerItem"

					containerItem.append(DataCulto(item.data, item.culto))
					containerItem.append(VozesInstrumentos(item.vozes, item.instrumentos, _membro))
					containerItem.append(Louvores(item.preludio, item.louvores, _membro))
					containerItem.append(Obs(item.obs))


					if (vocal || instrumentista) {
						numDias++
						main.append(containerItem)
					}

					const info = document.querySelector('.info')

					if (!_membro) {
						info.innerHTML = "Selecione seu nome no menu acima para ver sua escala"
					} else {
						if (numDias == 0) {
							info.innerHTML = "Aguardando seleção do ir. Thalyson"
						} else {
							info.innerHTML = `Você está escalado(a) para ${numDias} dia${numDias > 1 ? "s" : ""} de louvor nos próximos 30 dias`
						}

						if (_membro == "Todos") {
							info.innerHTML = "Escala dos proximos 30 dias de todos os membros"
							main.append(containerItem)
						}
					}
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
	_culto.innerHTML = culto
	container.append(_culto)

	return container

}

function VozesInstrumentos(vozes, instrumentos, membro) {

	let container = document.createElement('div')

	let containerV = document.createElement('div')
	let containerI = document.createElement('div')
	containerV.className = "vozes"
	containerI.className = "instrumentos"

	vozes.map((item) => {
		let voz = document.createElement('span')
		if (item == membro) { voz.className = "me" }
		voz.innerHTML = item
		containerV.append(voz)
	})

	instrumentos.map((item) => {
		let instrumento = document.createElement('span')
		if (item == membro) { instrumento.className = "me" }
		instrumento.innerHTML = item

		containerI.append(instrumento)
	})

	container.append(containerV, containerI)

	return container

}

function Louvores(preludio, louvores) {

	const container = document.createElement('div')

	if (preludio) {

		let _container_preludio = document.createElement('div')
		_container_preludio.className = "preludio"

		let _titulo_preludio = document.createElement('span')
		_titulo_preludio.innerHTML = "Prelúdio:"

		let _preludio = document.createElement('span')
		_preludio.innerHTML = preludio

		_container_preludio.append(_titulo_preludio, _preludio)
		container.prepend(_container_preludio)
	}

	let _container_louvores = document.createElement('div')
	_container_louvores.className="louvores"

	let _louvores = document.createElement('div')

	louvores.map((item) => {
		let _louvor = document.createElement('span')
		_louvor.innerHTML = item
		_louvores.append(_louvor)
	})

	let _titulo_louvor = document.createElement('span')
	_titulo_louvor.innerHTML = "Louvores:"
	_container_louvores.append(_titulo_louvor, _louvores)

	container.append(_container_louvores)

	return container

}

function Obs(obs) {

	const container = document.createElement('div')

	let _obs = document.createElement('span')
	_obs.className="obs"
	_obs.innerHTML = obs
	container.append(_obs)

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