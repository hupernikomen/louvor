const escala = [
  {
    "louvor": "Não há Deus maior",
    "escala_musical": "F",
    "equipe": ["Edmilson", "Edvan", "Kelviane", "Duda", "Paulinha", "Annes", "André", "Wesley"],
    "avaliacao": 4
  },
  {
    "louvor": "Foi por amor",
    "escala_musical": "Ab",
    "equipe": ["Edmilson", "Edvan", "Kelviane", "Duda", "Paulinha", "Annes", "André", "Wesley"],
    "avaliacao": 3
  },
  {
    "louvor": "Em Espírito em verdade",
    "escala_musical": "F#m",
    "equipe": ["Edvan", "Edmilson", "Kelviane", "Fernanda", "Paulinha", "Annes", "André", "Wesley"],
    "avaliacao": 4
  },
  {
    "louvor": "Pra sempre",
    "escala_musical": "",
    "equipe": ["Edvan", "Edmilson", "Kelviane", "Fernanda", "Paulinha", "Annes", "André", "Wesley"],
    "avaliacao": 4
  },
  {
    "louvor": "Renova-me",
    "escala_musical": "C",
    "equipe": ["Edvan", "Edmilson", "Kelviane", "Fernanda", "Paulinha", "Annes", "André", "Wesley"],
    "avaliacao": 4
  },
  {
    "louvor": "Jesus em Tua presença",
    "escala_musical": "E",
    "equipe": ["Edvan", "Lidiane", "Kelviane", "Laís"],
    "avaliacao": 1
  },
  {
    "louvor": "Ao único",
    "escala_musical": "Am",
    "equipe": ["Laís", "Lidiane", "Edvan", "Edmilson"],
    "avaliacao": null
  },
  {
    "louvor": "Quebrantado",
    "escala_musical": "C",
    "equipe": ["Edvan", "Lidiane", "Kelviane", "Laís"],
    "avaliacao": 1
  },
  {
    "louvor": "Quero que valorise",
    "escala_musical": "",
    "equipe": [],
    "avaliacao": null
  },
  {
    "louvor": "Cria em mim",
    "escala_musical": "",
    "equipe": ["Edmilson", "Edvan", "Paulinha", "Laís"],
    "avaliacao": 1
  },
  {
    "louvor": "Jó",
    "escala_musical": "",
    "equipe": ["Paulinha", "Laís", "Edmilson", "Edvan"],
    "avaliacao": null
  },
  {
    "louvor": "Vem esta é a hora",
    "escala_musical": "",
    "equipe": ["Edvan", "Lidiane", "Kelviane", "Laís"],
    "avaliacao": null
  },
  {
    "louvor": "CC 154 - Firme nas promessas",
    "escala_musical": "F",
    "equipe": ["Paulinha", "Edvam", "Edmilson", "Lidiane", "Laís"],
    "avaliacao": 3
  },
  {
    "louvor": "CC 46 - Jesus me transformou",
    "escala_musical": "G",
    "equipe": ["Paulinha", "Edvam", "Edmilson", "Lidiane", "Laís"],
    "avaliacao": 3
  },
  {
    "louvor": "CC 456 - O Estandarte",
    "escala_musical": "G",
    "equipe": ["Paulinha"],
    "avaliacao": ""
  },
  {
    "louvor": "CC 422 - Trabalho Cristão",
    "escala_musical": "G",
    "equipe": ["Paulinha"],
    "avaliacao": ""
  },
]



const equipes = [
  ["Fernanda", "Duda", "Edmilson", "Edvan"], //1
  ["Fernanda", "Laís", "Edmilson", "Edvan"], //2
  ["Fernanda", "Kelviane", "Edmilson", "Edvan"], //3
  ["Fernanda", "Lidiane", "Edmilson", "Edvan"], //4
  ["Paulinha", "Duda", "Edmilson", "Edvan"], //5
  ["Paulinha", "Laís", "Edmilson", "Edvan"], //6
  ["Paulinha", "Kelviane", "Edmilson", "Edvan"], //7 
  ["Paulinha", "Lidiane", "Edmilson", "Edvan"], //8
]



function BuscarEquipePorLouvor(louvor) {

  const louvores = escala.filter((item) => {
    return item.louvor === louvor
  })

  louvores.map((item) => {
    console.log(item.equipe)
  })

}


function BuscarMusicasMedia(media) {
  escala.filter((item) => {
    if (item.louvor.avaliacao >= media) {
      console.log({
        nome: item.louvor.nome,
        escala_musical: item.louvor.escala_musical,
        avaliacao: item.louvor.avaliacao
      })
    }
  })
}


async function BuscarMusicaPorEquipe(arrVocal, avaliacao) {


  console.log(`\n`)
  console.log("Equipe: ", arrVocal)

  escala.filter((item) => {

    const encontraVocal = arrVocal.map((vocal) => {
      return item.equipe.indexOf(vocal) > -1 && item.avaliacao >= avaliacao
    })


    if (encontraVocal.every((item) => item === true)) {
      console.log({
        louvor: item.louvor,
        escala_musical: item.escala_musical,
        avaliacao: item.avaliacao
      })
    }
  })
}

// Pra executar busca teclar F1 e cucar em "Run Code"


equipes.map((equipe) => {
  BuscarMusicaPorEquipe(equipe, 3)
})



// Passar a média desejada
// BuscarMusicasMedia(3)


// Passar o louvor
// BuscarEquipePorLouvor("Não há Deus maior")