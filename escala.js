const main = document.querySelector('main')
const header = document.querySelector('header')
const modal = document.querySelector('.modal')
const containerModal = document.querySelector('.containerModal')
header.append("FEV")
var numDias = 0


const membros = ["Wilson", "Paulinha", "Duda", "Lidiane", "Edvan", "Edmilson", "Kelviane", "Warley", "Thiago", , "Wesley", "Thalyson", "André"]


const _membro = localStorage.getItem('@membro')

const h1 = document.querySelector("h1").innerHTML=_membro


_membro == null ? containerModal.style.display = "flex" : containerModal.style.display = "none"

const escala = [

    {
        "data": "12/02",
        "culto": "EBD",
        "preludio":"",
        "louvores": ["Cantor Cristão 545", "Autoridade e Poder"],
        "louvor_extra": "Todavia me Alegrarei",
        "vozes": ["Paulinha", "Kelviane", "Edvan"],
        "instrumentos": ["Thalyson", "Wesley"]
        
    },
    {
        "data": "12/02",
        "culto": "Louvor e Pregação",
        "preludio":"",
        "louvores": ["Não há Deus maior", "Meu Mestre", "Jó"],
        "louvor_extra": "Todavia me Alegrarei",
        "vozes": ["Paulinha", "Kelviane", "Edmilson"],
        "instrumentos": ["Thalyson", "Wesley"]
    },
    {
        "data": "17/02",
        "culto": "Oração",
        "preludio":"",
        "louvores": ["Cria em Mim", "Alto Preço"],
        "louvor_extra": "Ao único",
        "vozes": ["Edvan", "Duda", "Lidiane"],
        "instrumentos": ["Thalyson", "Wesley"]
        
    },
    {
        "data": "19/02",
        "culto": "EBD",
        "preludio":"",
        "louvores": ["Cantor Cristão 545", "Eu navegarei"],
        "louvor_extra": "Todavia me Alegrarei",
        "vozes": ["Paulinha", "Laís", "Edvan"],
        "instrumentos": ["Thalyson", "Wesley"]
        
    },
    {
        "data": "19/02",
        "culto": "Louvor e Pregação",
        "preludio":"",
        "louvores": ["Vem esta é a hora", "Isaías 9", "Rendido Estou"],
        "louvor_extra": "Todavia me Alegrarei",
        "vozes": ["Edmilson", "Paulinha", "Laís"],
        "instrumentos": ["Thalyson", "Wesley"]
    },
    {
        "data": "24/02",
        "culto": "Doutrina",
        "preludio":"",
        "louvores": ["Ao único", "Ele é exaltado"],
        "louvor_extra": "Ao único",
        "vozes": ["Edvan", "Lidiane", "Duda"],
        "instrumentos": ["Thalyson", "Wesley"]
        
    },
    {
        "data": "26/02",
        "culto": "EBD",
        "preludio":"",
        "louvores": ["Cantor Cristão 545", "Bom estarmos aqui"],
        "louvor_extra": "Todavia me Alegrarei",
        "vozes": ["Paulinha", "Kelviane", "Edvan"],
        "instrumentos": ["Thalyson", "Wesley"]
        
    },
    {
        "data": "26/02",
        "culto": "Louvor e Pregação",
        "preludio":"",
        "louvores": ["Maranata", "Poder pra salvar", "Em Espírito, Em Verdade", "Alvo mais que a neve", "Porque Ele vive"],
        "louvor_extra": "Todavia me Alegrarei",
        "vozes": ["Paulinha", "Edmilson", "Lidiane"],
        "instrumentos": ["Thalyson", "Wesley"]
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

        const instrumentista = item.instrumentos.find((inst) => inst == _membro)
        const vocal = item.vozes.find((inst) => inst == _membro)


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
                <div>
                <span>Prelúdio:</span>
                <span>${item.preludio}</span>

                </div>

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

        document.querySelector('.info').innerHTML = `${numDias} dias de louvor`



    })


}


function verificaData(data) {

    var dataArr = data.split('/')

    const [dia, mes] = dataArr

    const datanew = new Date(2023, mes - 1, dia)

    return new Date(Date.now()).toLocaleDateString() > datanew.toLocaleDateString();


}
