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
    "avaliacao": 5
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
    "louvor": "CC 154 - Firme nas promessas",
    "escala_musical": "F",
    "equipe": ["Paulinha", "Edvan", "Edmilson", "Lidiane", "Laís"],
    "avaliacao": 3
  },
  {
    "louvor": "CC 46 - Jesus me transformou",
    "escala_musical": "G",
    "equipe": ["Paulinha", "Edvan", "Edmilson", "Lidiane", "Laís"],
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
  {
    "louvor": "Maranata",
    "escala_musical": "Bm",
    "equipe": ["Fernanda", "Paulinha", "Laís", "Wilson", "André", "Annes", "Wesley"],
    "avaliacao": 4
  },
  {
    "louvor": "Vem, esta é a hora - Vineyard",
    "escala_musical": "D",
    "equipe": ["Fernanda", "Paulinha", "Laís", "Wilson", "André", "Annes", "Wesley"],
    "avaliacao": 4
  },
  {
    "louvor": "Cria em mim",
    "escala_musical": "C",
    "equipe": ["Fernanda", "Paulinha", "Laís", "Wilson", "André", "Annes", "Wesley"],
    "avaliacao": 4
  },
  {
    "louvor": "Jó",
    "escala_musical": "",
    "equipe": ["Edvan", "Edmilson", "Kelviane", "Fernanda", "Paulinha", "Annes", "André", "Wesley"],
    "avaliacao": 5
  },
  {
    "louvor": "Jesus é o caminho",
    "escala_musical": "",
    "equipe": ["Edvan", "Edmilson", "Kelviane", "Fernanda", "Paulinha", "Annes", "André", "Wesley"],
    "avaliacao": 5
  },
]



const equipes = [
  ["Fernanda", "Duda", "Edmilson", "Edvan"], // 0
  ["Paulinha", "Laís", "Edmilson", "Edvan"], // 1
  ["Fernanda", "Kelviane", "Edmilson", "Edvan"], // 2 ----> Parei aqui
  ["Paulinha", "Lidiane", "Edmilson", "Edvan"], // 3
  ["Paulinha", "Duda", "Edmilson", "Edvan"], // 4
  ["Fernanda", "Laís", "Edmilson", "Edvan"], // 5
  ["Paulinha", "Kelviane", "Edmilson", "Edvan"], // 6
  ["Fernanda", "Lidiane", "Edmilson", "Edvan"], // 7
  ["Edvan","Kelviane","Lais","Lidiane","Andre","Warley","Wesley"], //8 //SEXTA
  ["Edmilson",
  "Edvan",
  "Lidiane",
  "Duda",] //9 Essa pode ser montada da forma que eu quizer
]



function BuscarEquipePorLouvor(louvor) {

  const louvores = escala.filter((item) => {
    return item.louvor === louvor
  })

  louvores.map((item) => {
    console.log(item.equipe)
  })

}



function BuscarMusicaPorEquipe(arrVocal, avaliacao) {


  console.log(`\n`)
  console.log("Vocais: ", ...Object.values(arrVocal))

  escala.filter((item) => {

    const encontraVocal = arrVocal.map((vocal) => {
      return item.equipe.indexOf(vocal) > -1 && item.avaliacao >= avaliacao
    })

    if (encontraVocal.every((item) => item === true)) {
      console.log(
        item.louvor + " - " + item.escala_musical + " - " + item.avaliacao
      )
    }
  })
}

// Pra executar busca teclar F1 e cucar em "Run Code"


//VER TODAS AS EQUIPES

// equipes.map((equipe) => {
//   BuscarMusicaPorEquipe(equipe, 3)
// })




// BUSCAR APENAS 1 EQUIPE

BuscarMusicaPorEquipe(equipes[9], 3)





// BUSCAR EQUIPES POR LOUVOR

// BuscarEquipePorLouvor("Não há Deus maior")