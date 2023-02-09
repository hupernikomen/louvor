const main = document.querySelector('main')
const header = document.querySelector('header')
const modal = document.querySelector('.modal')
const containerModal = document.querySelector('.containerModal')
header.append("Fevereiro")


const membro = localStorage.getItem('@membro')


membro==null ? containerModal.style.display= "flex" :containerModal.style.display= "none"  

const escala = [
    {
        "data": "25/12",
        "culto": "Doutrina",
        "louvores": ["Jó", "Celebrai"],
        "louvor_extra": "Ao único",
        "vocais": ["Paulinha", "Duda", "Lais"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "25/12",
        "culto": "EBD",
        "louvores": ["Jó", "Celebrai"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Duda", "Outra"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "25/12",
        "culto": "Louvor e Pregação",
        "louvores": ["Jó", "Celebrai"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Duda", "Outra"],
        "instrumentistas": ["Thalyson", "Wesley"]
    },
    {
        "data": "25/12",
        "culto": "Doutrina",
        "louvores": ["Jó", "Celebrai"],
        "louvor_extra": "Ao único",
        "vocais": ["Paulinha", "Duda", "Lais"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "25/12",
        "culto": "EBD",
        "louvores": ["Jó", "Celebrai"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Duda", "Outra"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "25/12",
        "culto": "Louvor e Pregação",
        "louvores": ["Jó", "Celebrai"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Duda", "Outra"],
        "instrumentistas": ["Thalyson", "Wesley"]
    },
    {
        "data": "25/12",
        "culto": "Doutrina",
        "louvores": ["Jó", "Celebrai"],
        "louvor_extra": "Ao único",
        "vocais": ["Paulinha", "Duda", "Lais"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "25/12",
        "culto": "EBD",
        "louvores": ["Jó", "Celebrai"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Duda", "Outra"],
        "instrumentistas": ["Thalyson", "Wesley"]

    },
    {
        "data": "25/12",
        "culto": "Louvor e Pregação",
        "louvores": ["Jó", "Celebrai"],
        "louvor_extra": "Todavia me Alegrarei",
        "vocais": ["Paulinha", "Duda", "Outra"],
        "instrumentistas": ["Thalyson", "Wesley"]
    },
]


const membros = ["Wilson", "Paulinha", "Outro"]


membros.map((membro) => {
    const button = document.createElement('button')
    button.className ='btn_membro'
    button.innerHTML = membro
    modal.append(button)


})

const arrBtn =document.querySelectorAll('.btn_membro')


arrBtn.forEach((btn) => {
    btn.addEventListener('click', ()=> {

        localStorage.setItem('@membro', btn.innerHTML)
        containerModal.style.display = 'none'

    })

})


escala.map((item) => {

    const escalaItem = `
    
    <div class="containerItem ${item.culto == "EBD" ? "ebd" :
            item.culto == "Doutrina" ? "doutrina" :
                item.culto == "Louvor e Pregação" ? "louvorepregacao" :
                    "outro"
        }">
    <div class="ref">
            <div>
            <span class="data">${item.data}</span>
                <span>${item.culto}</span>
            </div>
        </div>

        <div class="vocais">
            <span>Vocais:</span>
            <div>
        ${item.vocais.map((vocal) => {
            return `<span>${vocal}</span>`
        })
        }

            </div>
        </div>

        <div class="instrumentos">
        <span>Instrumentistas:</span>
        <div>
        ${item.instrumentistas.map((instrumentista) => {
        return `<span>${instrumentista}</span>`
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
            <span class="extra">[ ${item.louvor_extra} ]</span>
        </div>

        </div>

    `

    main.innerHTML += escalaItem


})