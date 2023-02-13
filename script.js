const main = document.querySelector('main')
const header = document.querySelector('header')
const modal = document.querySelector('.modal')
const containerModal = document.querySelector('.containerModal')
var numDias = 0

const membros = ["Wilson", "Paulinha", "Duda", "Lidiane", "Edvan", "Edmilson", "Kelviane", "Warley", "Thiago", , "Wesley", "Thalyson", "André"]

const _membro = localStorage.getItem('@membro')
const h1 = document.querySelector("h1").innerHTML = _membro

_membro == null ? containerModal.style.display = "flex" : containerModal.style.display = "none"

membros.map((membro) => {
    const button = document.createElement('button')
    button.className = 'btn_membro'
    button.innerHTML = membro
    modal.append(button)
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
                <span>Vozes:</span>
                
                <div>
                    ${item.vozes.map((vocal) => {
                            return `<span class=${vocal == _membro && "me"}>${vocal}</span>`
                        })}
                </div>
            </div>

                    <div class="instrumentos">
                    <span>Instrumentos:</span>
                    <div>
                    ${item.instrumentos.map((instrumentista) => {
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
            <div>
            ${item.louvores.map((louvor) => {
                            return `<span>${louvor}</span>`
                        })
                        }
            </div>
        `
                    const passou = verificaData(item.data)

                    if (passou) {
                        return
                    }

                    if (vocal || instrumentista) {
                        numDias++
                        main.innerHTML += escalaItem
                    }


                    const info = document.querySelector('.info')
                    if (numDias == 0) {
                        info.innerHTML = "Aguardando seleção do ir. Thalyson"
                    } else {

                        info.innerHTML = `${numDias} dias de louvor`
                    }

                })
            }))

}


function verificaData(data) {

    var dataArr = data.split('/')

    const [dia, mes] = dataArr
    const date = new Date()
    const futureDate = new Date(date.setMonth(date.getMonth() + 1));
    const datanew = new Date(2023, mes - 1, dia)

    return new Date(Date.now()) > datanew && datanew < futureDate;


}
