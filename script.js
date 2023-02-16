const main = document.querySelector('main')
const header = document.querySelector('header')
const modal = document.querySelector('.modal')
const containerModal = document.querySelector('.containerModal')
const container = document.querySelector('.containerItem')
var numDias = 0

const membros = ["Wilson", "Paulinha", "Duda", "Lidiane", "Edvan", "Edmilson", "Laís", "Kelviane", "Annes", "Warley", "Thiago", , "Wesley", "Thalyson", "André"]

const _membro = localStorage.getItem('@membro')
const h1 = document.querySelector("h1").innerHTML = _membro

_membro == null ? containerModal.style.display = "flex" : containerModal.style.display = "none"

membros.sort().map((membro) => {
    const button = document.createElement('button')
    button.className = 'btn_membro'
    button.innerHTML = membro
    modal.append(button)
})

var posicaoInicial = document.querySelector('main');
var i = posicaoInicial.getBoundingClientRect()

window.addEventListener('scroll', () => {

    posicoes = posicaoInicial.getBoundingClientRect()

    if (posicoes.y < 60) {
        header.style.boxShadow = "0px 0px 10px #aaaaaa50"
    } else {
        header.style.boxShadow = "none"
    }
})


const arrBtn = document.querySelectorAll('.btn_membro')

arrBtn.forEach((btn) => {
    btn.addEventListener('click', () => {

        const load = document.querySelector('.containerloader')

        load.style.display = 'flex'

        localStorage.setItem('@membro', btn.innerHTML)
        containerModal.style.display = 'none'

        window.location.reload(true);
        MontaEscala()
    })
})

function Limpar() {
    localStorage.removeItem("@membro");
    window.location.reload(true);
}

async function MontaEscala() {


    await fetch("./json/escala.json")
        .then((res) => res.json()
            .then((dados) => {

                dados.map((item) => {


                    if (!item.status) return


                    const instrumentista = item.instrumentos.find((inst) => inst == _membro)
                    const vocal = item.vozes.find((inst) => inst == _membro)



                    const escalaItem = `
    
        <div class="containerItem ${item.culto == "EBD" ? "ebd" :
                            item.culto == "Oração/Doutrina" ? "sexta" :
                                item.culto == "Louvor e Pregação" ? "louvorepregacao" :
                                    "outro"
                        }">
            <div class="ref">
                <div>
                    <span class="data">${item.data}</span>
                    <span>${item.culto}</span>
                </div>
            </div>

                <div class="vozes">
                
                <div>
                    ${item.vozes.sort().map((vocal) => {
                            return `<span class=${vocal == _membro && "me"}>${vocal}</span>`
                        })}
                </div>
            </div>

                    <div class="instrumentos">
                    <div>
                    ${item.instrumentos.sort().map((instrumentista) => {
                            return `<span class=${instrumentista == _membro && "me"}>${instrumentista}</span>`
                        })
                        }
                
                </div>
                </div>
                ${!!item.preludio ?
                            `<div>
                <span>Prelúdio:</span>
                <span>${item.preludio}</span>

                </div>`
                            : ""
                        }

        <div class="louvores">
            <span>Louvores:</span>
            <div class="louvor">
            ${item.louvores.map((louvor) => {

                            return `<span>${louvor}</span>`
                        })
                        }
            </div>

            
            
            </div>

            ${item.obs &&
                        `<span class="obs">Obs.: ${item.obs}</span>`
                        }
            
            `
                    const info = document.querySelector('.info')
                    const passou = verificaData(item.data)

                    if (!passou) {
                        return
                    }

                    if (vocal || instrumentista) {
                        numDias++
                        main.innerHTML += escalaItem
                    }


                    if (numDias == 0) {
                        info.innerHTML = "Aguardando seleção do ir. Thalyson"
                    } else {
                        info.innerHTML = `Você está escalado(a) para ${numDias} dia${numDias > 1 ? "s" : ""} de louvor nos próximos 30 dias`
                    }

                    if (_membro == "Wilson") {
                        info.innerHTML = "Administrador"
                        main.innerHTML += escalaItem
                    }
                })
            }))
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