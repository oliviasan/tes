//=============ใ Utama ใ================== //
global.owner = ['6281319339702'] 
global.mods = [] 
global.prems = [] 

//=============ใ Info Owner ใ============== //
global.nameowner = '๐๐ฅ๐๐ฏโงโฉโฉ'
global.numberowner = '6281319339702'
global.instagram = 'https://www.instagram.com/'
global.github = 'https://github.com/Olavitsme1'
global.dana = '085712789786'
global.pulsa = '081319339702'
global.gopay = '-'

//=============ใ Info Bot ใ=================//
global.namebot = 'AyuBot'
global.gc = 'https://chat.whatsapp.com/ElBB5NrJS637TYqjJLHuk2'
global.web = 'https://www.youtube.com/channel/UCZoVmApPxtLYgUWwBD4nbCw' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.price1 = '1 bulan = 10.000\n2 Minggu 7.000\n1 Minggu 5.000'

//=======ใ Tampilan Dan Lainnya ใ============//
global.fotonya1 = 'https://telegra.ph/file/48f203b814f84b34055c8.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/48f203b814f84b34055c8.jpg' //ini juga ganti 
global.lolkey = 'Papah-Chan' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = 'PENTABOT'
global.watermark = wm
global.wm2 = '                     ใ AYU_BOT ใ'
global.wm3 = 'ยฉ\nO\nL\nA\nV'
global.htki = 'โโโโโโใ' 
global.htka = 'ใโโโโโโ'
global.media = 'https://telegra.ph/file/48f203b814f84b34055c8.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.wait = 'Process...'
global.eror = 'ERROR'
global.benar = 'Benar โ\n'
global.salah = 'Salah โ\n'
global.stiker_wait = 'Stiker sedang dibuat'
global.packname = 'Created by'
global.author = 'O\nL\nA\nVโฉโฉ'

//=============ใ Apikey ใ================== //
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz', 
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  zenz: 'https://zenzapis.xyz/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'irsantod',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
  'https://zenzapis.xyz/' : 'e87e334de1ea',
}

//=============ใ RPG GAMES ใ================== //
global.multiplier = 69 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: 'โ๏ธ',
      money: '๐ต',
      potion: '๐ฅค',
      diamond: '๐',
      common: '๐ฆ',
      uncommon: '๐',
      mythic: '๐ณ๏ธ',
      legendary: '๐๏ธ',
      pet: '๐',
      sampah: '๐',
      armor: '๐ฅผ',
      sword: 'โ๏ธ',
      kayu: '๐ชต',
      batu: '๐ชจ',
      string: '๐ธ๏ธ',
      kuda: '๐',
      kucing: '๐' ,
      anjing: '๐',
      petFood: '๐',
      gold: '๐',
      emerald: '๐'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//===========ใ Jangan Di Ubah ใ================ //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
