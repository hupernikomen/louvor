const main = document.querySelector('main')
const header = document.querySelector('header')
const modal = document.querySelector('.modal')
const containerModal = document.querySelector('.containerModal')
header.append("Fevereiro")
var numDias = 0


const membros = ["Wilson", "Paulinha", "Duda", "Lidiane", "Edvan", "Edmilson", "Kelviane", "Warley", "Thiago", , "Wesley", "Thalyson", "André"]


const _membro = localStorage.getItem('@membro')


_membro == null ? containerModal.style.display = "flex" : containerModal.style.display = "none"

const escala = [
    {
        "data": "10/02",
        "culto": "Doutrina",
        "louvores": ["Renova-me", "Digno de Glória"],
        "louvor_extra": "Ao único",
        "vocais": ["Edvan", "Duda", "Lais"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "12/02",
        "culto": "EBD",
        "louvores": ["Cantor Cristão 545", "Autoridade e Poder"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Kelviane", "Edvan"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "12/02",
        "culto": "Louvor e Pregação",
        "louvores": ["Não há Deus maior", "Meu Mestre", "Jó"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Kelviane", "Edmilson"],
        "instrumentistas": ["Thalyson", "Wesley"]
    },
    {
        "data": "17/02",
        "culto": "Oração",
        "louvores": ["Cria em Mim", "Alto Preço"],
        "louvor_extra": "Ao único",
        "vocais": ["Edvan", "Duda", "Lidiane"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "19/02",
        "culto": "EBD",
        "louvores": ["Cantor Cristão 545", "Eu navegarei"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Laís", "Edvan"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "19/02",
        "culto": "Louvor e Pregação",
        "louvores": ["Vem esta é a hora", "Isaías 9", "Rendido Estou"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Edmilson", "Paulinha", "Laís"],
        "instrumentistas": ["Thalyson", "Wesley"]
    },
    {
        "data": "24/02",
        "culto": "Doutrina",
        "louvores": ["Ao único", "Ele é exaltado"],
        "louvor_extra": "Ao único",
        "vocais": ["Edvan", "Lidiane", "Duda"],
        "instrumentistas": ["Thalyson", "Wesley", "André"]

    },
    {
        "data": "26/02",
        "culto": "EBD",
        "louvores": ["Cantor Cristão 545", "Bom estarmos aqui"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Kelviane", "Edvan"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "26/02",
        "culto": "Louvor e Pregação",
        "louvores": ["Maranata", "Poder pra salvar", "Em Espírito, Em Verdade", "Alvo mais que a neve", "Porque Ele vive"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Edmilson", "Lidiane"],
        "instrumentistas": ["Thalyson", "Wesley"]
    },
]




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

function MontaEscala() {


    escala.map((item) => {

        const instrumentista = item.instrumentistas.find((inst) => inst == _membro)
        const vocal = item.vocais.find((inst) => inst == _membro)


        const escalaItem = `
    
        <div class="containerItem ${item.culto == "EBD" ? "ebd" :
                item.culto == "Doutrina" ? "doutrina" :
                    item.culto == "Louvor e Pregação" ? "louvorepregacao" :
                        item.culto == "Oração" ? "oracao" :
                            "outro"
            }">
            <div class="ref">
                <div>
                    <span class="data">${item.data}</span>
                    <span>${item.culto}</span>
                </div>
            </div>

                <div class="vocais">
                <span>Vozes:</span>
                
                <div>
                    ${item.vocais.map((vocal) => {
                return `<span class=${vocal == _membro && "me"}>${vocal}</span>`
            })}
                </div>
            </div>

                    <div class="instrumentos">
                    <span>Instrumentos:</span>
                    <div>
                    ${item.instrumentistas.map((instrumentista) => {
                return `<span class=${instrumentista == _membro && "me"}>${instrumentista}</span>`
            })
            }
                
                </div>
                </div>
        <div class="louvores">
            <span>Louvores:</span>
            <div>
            ${item.louvores.map((louvor) => {
                return `<span>${louvor}</span>`
            })
            }
        
            
            </div>
            </div>
            <span class="extra">Música Reserva: [ ${item.louvor_extra} ]</span>
            </div>
        
        `



        if (vocal || instrumentista) {
            numDias++
            main.innerHTML += escalaItem
        }

        document.querySelector('.info').innerHTML = `${_membro} - ${numDias} dias de louvor`



    })


}
