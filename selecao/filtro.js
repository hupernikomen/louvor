const escala = [
  {
    "louvor": {
      "nome": "Não há Deus maior",
      "escala_musical": "F",
      "equipe": ["Edmilson", "Edvan", "Kelviane", "Duda", "Paulinha", "Annes", "André", "Wesley"],
      "avaliacao": 4
    }
  },
  {
    "louvor": {
      "nome": "Foi por amor",
      "escala_musical": "Ab",
      "equipe": ["Edmilson", "Edvan", "Kelviane", "Duda", "Paulinha", "Annes", "André", "Wesley"],
      "avaliacao": 3
    }
  },
  {
    "louvor": {
      "nome": "Em Espírito em verdade",
      "escala_musical": "F#m",
      "equipe": ["Edvan", "Edmilson", "Kelviane", "Fernanda", "Paulinha", "Annes", "André", "Wesley"],
      "avaliacao": 4
    }
  },
  {
    "louvor": {
      "nome": "Pra sempre",
      "escala_musical": "",
      "equipe": ["Edvan", "Edmilson", "Kelviane", "Fernanda", "Paulinha", "Annes", "André", "Wesley"],
      "avaliacao": 4
    }
  },
  {
    "louvor": {
      "nome": "Renova-me",
      "escala_musical": "C",
      "equipe": ["Edvan", "Edmilson", "Kelviane", "Fernanda", "Paulinha", "Annes", "André", "Wesley"],
      "avaliacao": 4
    }
  },
  {
    "louvor": {
      "nome": "Jesus em Tua presença",
      "escala_musical": "E",
      "equipe": ["Edvan", "Lidiane", "Kelviane", "Laís"],
      "avaliacao": 1
    }
  },
  {
    "louvor": {
      "nome": "Ao único",
      "escala_musical": "Am",
      "equipe": [],
      "avaliacao": 0
    }
  },
  {
    "louvor": {
      "nome": "Quebrantado",
      "escala_musical": "C",
      "equipe": ["Edvan", "Lidiane", "Kelviane", "Laís"],
      "avaliacao": 1
    }
  },
]



const equipe = [
  ["Fernanda", "Duda", "Edmilson", "Edvan"], //0
  ["Paulinha", "Lidiane", "Edmilson", "Edvan"], //1
  ["Paulinha", "Laís", "Edmilson", "Edvan"], //2
  ["Fernanda", "Kelviane", "Edmilson", "Edvan"], //3
  ["Kelviane", "Duda", "Edmilson", "Edvan"], //4
  ["Fernanda", "Lidiane", "Edmilson", "Edvan"], //5
  ["Paulinha", "Laís", "Edmilson", "Edvan"], //6
  ["Paulinha", "Kelviane", "Edmilson", "Edvan"], //7 
  ["Fernanda", "Duda", "Edmilson", "Edvan"], //8
  ["Paulinha", "Lidiane", "Edmilson", "Edvan"], //9
  ["Fernanda", "Laís", "Edmilson", "Edvan"] //10
]



function BuscarEquipePorMusica(louvor) {

  const louvores = escala.filter((item) => {
    return item.louvor.nome === louvor
  })

  louvores.map((item) => {
    console.log(item.louvor.equipe)
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

  escala.filter((item) => {

    const encontraVocal = arrVocal.map((vocal) => {
      return item.louvor.equipe.indexOf(vocal) > -1 && item.louvor.avaliacao >= avaliacao
    })

    if (encontraVocal.every((item) => item === true)) {
      console.log({
        nome: item.louvor.nome,
        escala_musical: item.louvor.escala_musical,
        avaliacao: item.louvor.avaliacao
      })
    }
  })
}

// Pra executar busca teclar F1 e cucar em "Run Code"

// Passar Lista de Vocais + Avaliação Desejada
BuscarMusicaPorEquipe(equipe[4], 2)


// Passar a média desejada
// BuscarMusicasMedia(3)