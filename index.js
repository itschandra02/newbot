/* 

HAI BANG SCRIPT INI MURNI HASIL RECODE AN SENDIRI
BUKAN SC HASIL REUPLOAD
HARGAI PEMBUAT SC YA
MAU AMBIL CASE?SILAHKAN GW JG HASIL COPAS 🗿👍
REUPLOAD?CREDIT WOY
 THANKS TO
❑ Tuhan Ku
❑ Orang Tua Ku
❑ Bailyes
❑ Heroku
❑ Yudha [ BASE ] 
❑ Nayla [ FITUR Z,X,V,MAKER,DLL ]
❑ Zeeone [ FITUR AUTO ]
❑ Wolf CodeX [ CASE ASUPAN ] 
❑ Yeriko [ PENAMBAH FITUR ]
❑ Penyedia Apikey,Module,Dll
❑ Semua user script

Kalo Mau Edit Owner Di setiing.json sama ./src/setting2.json Ya

beberapa udh gw siapin buat bot v2 mweheh
*/

const {
    WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers,
} = require("@adiwajshing/baileys")
const moment = require("moment-timezone")
const speed = require('performance-now')
const { spawn, exec, execSync } = require("child_process")
const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');
const request = require('request');
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const axios = require("axios")
const fs = require("fs-extra")
const util = require('util')
const got = require("got");
const xa = require("xfarr-api")
const hx = require('hxz-api')
const qrcodes = require('qrcode');
const imgbb = require('imgbb-uploader');
const os = require('os');
const Mfake = fs.readFileSync ('./media/ganteng.jpg')
const Mthumb = fs.readFileSync('./media/ganteng.jpg')
const timeWib = moment.tz('Asia/Jakarta').format('DD/MM')	
// stickwm
const Exif = require('./lib/exif');
const exif = new Exif();

const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot, islamMenu, sertiMenu, ceritaMenu, makerMenu,dewasaMenu, toolsMenu} = require('./message/help.js')
const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')
const { color, bgcolor } = require('./lib/color')
const { mess } = require('./message/mess')
const { webp2mp4File } = require('./lib/webp2mp4')
const { Toxic } = require('./lib/Toxic.js')
const { cmdadd } = require('./lib/totalcmd.js')
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')
const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");
const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")
const { mediafireDl } = require('./lib/mediafire.js')
const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { yta, ytv, igdl, upload } = require('./lib/ytdl')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const afk = require("./lib/afk");
const premium = require("./lib/premium");
const set = JSON.parse(fs.readFileSync('./src/setting2.json'))
const tes = JSON.parse(fs.readFileSync('./src/settingsymbol.json'))
const api = JSON.parse(fs.readFileSync('./src/apikey.json'))
//Biarin
var kuis = false
hit_today = []
ky_ttt = []
const setGelud = require('./lib/gameGelud.js')
const game = require("./lib/game");
tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]

//Storage
let fakeimage = fs.readFileSync("./media/ganteng.jpg")
let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'
let setting = JSON.parse(fs.readFileSync('./setting.json'))
undef2 = fs.readFileSync('./tag1.webp')
owner = setting.owner
gamewaktu = setting.gamewaktu
petik = '```'
autovn = set.autovn
autoketik = set.autoketik
antidel = set.antidel
antical = set.antical
fake = set.FakeText

// Biarin Udh Nyambung Ke setting yg di src

NamaBot = set.NamaBot
NamaOwner = set.NamaOwner
NOwner = set.NomorOwner
NomorOwnz = set.NomorOwnz
NomorOwnc = set.NomorOwnc
GrubBot = set.GrubBot
GrubBot2 = set.GrubBot2
FakePdf = set.FakePdf
FakeYt = set.FakeYt
FakeText = set.FakeText
FakeLoc = set.FakeReply
TextDiButton = set.TextDiButton
HargaPermanen = set.HargaPermanen
HargaPerbulan = set.HargaPerbulan
HargaPerminggu = set.HargaPerminggu
HargaPremium = set.HargaPremium
NomorGopay = set.NomorGopay
NomorDana = set.NomorDana
NomorOvo = set.NomorOvo
NomorPulsa = set.NomorPulsa
// Symbol
atas = tes.Atas
bawah = tes.Bawah
bates = tes.Bates
buletan = tes.Buletan
garis = tes.Garis
kecil = tes.Kecil
in_fake = tes.Infake
kotak = tes.Kotak
ownerl = tes.Ownerl
adminl = tes.Adminl
freel = tes.freel
//apikey
apidapa = api.ApiDapa
apizen = api.ApiZen
//Vcard

const vcard = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN: ${NamaOwner}\n` 
            + `ORG: Contact ${NamaOwner};\n`
            + `TEL;type=CELL;type=VOICE;waid=${NomorOwnz}:${NomorOwnc}\n`
            + 'END:VCARD'

// Database
let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))
let ban = JSON.parse(fs.readFileSync('./database/user/ban.json'));
let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));
let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));
let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
const antivirtex = JSON.parse(fs.readFileSync("./database/antivirtex.json"))        
const antihidetg = JSON.parse(fs.readFileSync("./database/antihidetag.json"));    
let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))

     
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var tampilUcapan = '🌃Malam Kak'
                                        }
if(time2 < "19:00:00"){
var tampilUcapan = '🌇Petang Kak'
                                         }
if(time2 < "18:00:00"){
var tampilUcapan = '🌁️Sore Kak'
                                         }
if(time2 < "15:00:00"){
var tampilUcapan = '🌅Siang Kak'
                                         }
if(time2 < "11:00:00"){
var tampilUcapan = '🌄Pagi Kak'
                                         }
if(time2 < "05:00:00"){
var tampilUcapan = '🌃Malam Kak'
                                         }

// Sticker Cmd
const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    _scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return _scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(_scommand).forEach((i) => {
        if (_scommand[i].id === id) {
            status = true
        }
    })
    return status
}

module.exports = dha = async (dha, mek) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
		global.ky_ttt
		global.blocked
		mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
	    const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
		const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
        const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
		const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar()
		const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar()
		const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(mek.message[type].fileSha256.toString('base64')) !== null && getCmd(mek.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message[type].fileSha256.toString('base64')) : ""
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()	
		const command1 = body.slice(2).trim().split(/ +/).shift().toLowerCase()	
		const args = body.trim().split(/ +/).slice(1)
		hit_today.push(command)
		const arg = body.substring(body.indexOf(' ') + 1)
		const ar = args.map((v) => v.toLowerCase())
		const argz = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix) 
		if (isCmd) cmdadd()
		const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd
        const q = args.join(' ')
	    const query = (teks) => {dha.sendMessage(from, `Kasih Query Woy`, text, {quoted:mek,contextInfo: {forwardingScore: 508, isForwarded: true}})}				
        const botNumber = dha.user.jid
        const ownerNumber = [`${NOwner}`,`6282132242606@s.whatsapp.net`,`6281252440658@s.whatsapp.net`,`62881036247469@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? dha.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const totalchat = await dha.chats.all()
		const groupMetadata = isGroup ? await dha.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
	    const more = String.fromCharCode(8206)
	    const readd = more.repeat(4001)
        const conts = mek.key.fromMe ? dha.user.jid : dha.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? dha.user.name : conts.notify || conts.vname || conts.name || '-'
        const mentionByTag = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.mentionedJid : []
        const mentionByreply = type == "extendedTextMessage" && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.participant || "" : ""
        const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag
        mention != undefined ? mention.push(mentionByreply) : []
        const mentionUser = mention != undefined ? mention.filter(n => n) : []
		idttt = []
	    players1 = []
	    players2 = []
	    gilir = []
	    for (let t of ky_ttt){
	    idttt.push(t.id)
	    players1.push(t.player1)
	    players2.push(t.player2)
	    gilir.push(t.gilir)
}
	    const isTTT = isGroup ? idttt.includes(from) : false
	    isPlayer1 = isGroup ? players1.includes(sender) : false
        isPlayer2 = isGroup ? players2.includes(sender) : false
        const isOwner = ownerNumber.includes(senderr)
        const isAfkOn = afk.checkAfkUser(sender, _afk)
        const isPremium = premium.checkPremiumUser(sender, _premium)
        const isAntiLink = isGroup ? antilink.includes(from) : false
        const isAntihidetag = isGroup ? antihidetg.includes(from) : false
        const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
        const isWelkom = isGroup ? welkom.includes(from) : false
		const dfrply = fs.readFileSync(`./media/canss.jpg`)
		const fake = fs.readFileSync(`./media/canss.jpg`)
		const floc3 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "liveLocationMessage": { "caption": `Runtime : ${runtime(process.uptime())}\n*Command* : ${command}`} } }
////////////CONST GAME/RANDOM MATH
            const mekla1 = ['1','2','3','4','5','6','7','8','9']
            const mekla2 = ['1','2','3','4','5','6','7','8','9'] 
            const random1 = ['1','2','3','4','5','6','7','8','9'] 
            const random2 = ['1','2','3','4','5','6','7','8','9'] 
            const random3 = ['1','2','3','4','5','6','7','8','9'] 
            const random4 = ['1','2','3','4','5','6','7','8','9'] 
            const random5 = ['1','2','3','4','5','6','7','8','9'] 
            const mekla3 = mekla1[Math.floor(Math.random() * (mekla1.length))]
            const mekla4 = mekla2[Math.floor(Math.random() * (mekla2.length))]   
            const random6 = random1[Math.floor(Math.random() * (random1.length))]      
            const random7 = random2[Math.floor(Math.random() * (random5.length))]      
            const random8 = random3[Math.floor(Math.random() * (random5.length))]      
            const random9 = random4[Math.floor(Math.random() * (random5.length))]      
            const random10 = random5[Math.floor(Math.random() * (random5.length))]   
     
        // here button function
        selectedButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''

        responseButton = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''

        const gcount = setting.gcount
        
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = dha.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Pilih Disini","footerText": "SEMOGA DAPAT MEMBANTU","listType": "SINGLE_SELECT","sections": list}}, {})
            return dha.relayWAMessage(po, {waitForAck: true})
        }
        
        const isUrl = (url) => {
            return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
        }
        function monospace(string) {
            return '```' + string + '```'
        }   
        function jsonformat(string) {
            return JSON.stringify(string, null, 2)
        }
        function randomNomor(angka){
            return Math.floor(Math.random() * angka) + 1
        }
        const sendMess = (hehe, teks) => {
           dha.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
	    (id == null || id == undefined || id == false) ? dha.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : dha.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
 		}
        const sendText = (from, text) => {
           dha.sendMessage(from, text, MessageType.text)
        }
        const textImg = (teks) => {
           return dha.sendMessage(from, teks, text, {quoted: mek})
        }
        const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./media/sherlynn.jpg')
        }}}
       const math = (teks) => {
           return Math.floor(teks)
       }
       const kick = function(from, orangnya){
	       for (let i of orangnya){
	       dha.groupRemove(from, [i])
        }
        }
        const daftar1 = `Hai kak  ${pushname}\n\nSebelum Menggunakan Bot Verify Terlebih Dahulu Ya `
       const daftar2 = '```Ketik Tombol Di Bawah Untuk Verify Kak\nAtau #verify︎```'
       const daftar3 = [
          {
            buttonId: `#verify`,
            buttonText: {
              displayText: `𝘋𝘢𝘧𝘵𝘢𝘳 シ︎`,
            },
            type: 1,
          },]
//var hayuk0 = '[NOT VERIFIED]'
		///	if (isRegistered) {
	//		hayuk0 = '[√ VERIFIED]'
		//	}
       const kickMember = async(id, target = []) => {
           let group = await dha.groupMetadata(id)
           let owner = group.owner.replace("c.us", "s.whatsapp.net")
           let me = dha.user.jid
           for (i of target) {
           if (!i.includes(me) && !i.includes(owner)) {
           await dha.groupRemove(to, [i])
        } else {
           await dha.sendMessage(id, "Not Premited!", "conversation")
           break
        }
    }
}
       const add = function(from, orangnya){
	       dha.groupAdd(from, orangnya)
}
       const sendKontak = (from, nomor, nama, org = "") => {
	       const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
	       dha.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: mek})
}
      const hideTag = async function(from, text){
	       let anu = await dha.groupMetadata(from)
	       let members = anu.participants
	       let ane = []
	       for (let i of members){
	       ane.push(i.jid)
}
	       dha.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/sherlynn.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}  
      		    const katalog = (teks) => {
             res = dha.prepareMessageFromContent(from, { "orderMessage": { "itemCount": 2021, "message": teks, "footerText": "*𝙱𝚈 𝙸𝚃𝚂𝙲𝙷𝙰𝙽𝙳𝚁𝙰*", "thumbnail":fs.readFileSync(`./media/canss.jpg`), "surface": 'CATALOG' }}, {quoted:mek})
             dha.relayWAMessage(res)
             }
             const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('selesai');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        dha.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }
       const sendMediaURL = async(to, url, text="", mids=[]) =>{
           if(mids.length > 0){
           text = normalizeMention(to, text, mids)
}
           const fn = Date.now() / 10000;
           const filename = fn.toString()
           let mime = ""
           var download = function (uri, filename, callback) {
           request.head(uri, function (err, res, body) {
           mime = res.headers['content-type']
           request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
           download(url, filename, async function () {
           console.log('SUCCES');
           let media = fs.readFileSync(filename)
           let type = mime.split("/")[0]+"Message"
           if(mime === "image/gif"){
           type = MessageType.video
           mime = Mimetype.gif
}
           if(mime.split("/")[0] === "audio"){
           mime = Mimetype.mp4Audio
}
           dha.sendMessage(to, media, type, {quoted: mek, mimetype: mime, caption: text, thumbnail: Buffer.alloc(0), contextInfo: {"mentionedJid": mids}})
                     
           fs.unlinkSync(filename)
});
}
      const sendFileFromUrl = async(link, type, options) => {
           hasil = await getBuffer(link)
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       fetch(link).then((hasil) => {
	       dha.sendMessage(from, hasil, type, options).catch(e => {
	       dha.sendMessage(from, { url : link }, type, options).catch(e => {
	       reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
	       console.log(e)
})
})
})
})
}
      const promoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupMakeAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU DINAIKAN AKU BANGGA PADAMU`)
}
}
}
      const demoteAdmin = async function(to, target=[]){
           if(!target.length > 0) { return  reply("No target..") }
           let g = await dha.groupMetadata(to)
           let owner = g.owner.replace("c.us","s.whatsapp.net")
           let me = dha.user.jid
           for (i of target){
           if (!i.includes(me) && !i.includes(owner)){
           const res = await dha.groupDemoteAdmin(to, [i])
           reply(`Hm..... @${mentioned[0].split('@')[0]} JABATANMU TURUNKAN SAYA IKUT SEDIH`)
				
}
}
}
          let authorname = dha.contacts[from] != undefined ? dha.contacts[from].vname || dha.contacts[from].notify : undefined	
          if (authorname != undefined) { } else { authorname = groupName }	
          function addMetadata(packname, author) {	
          if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	
          let name = `${author}_${packname}`
          if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`
          const json = {	
         "sticker-pack-name": packname,
         "sticker-pack-publisher": author,
}
         const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
         const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	
         let len = JSON.stringify(json).length	
         let last	
         if (len > 256) {	
         len = len - 256	
         bytes.unshift(0x01)	
         } else {	
         bytes.unshift(0x00)	
}	
         if (len < 16) {	
         last = len.toString(16)	
         last = "0" + len	
         } else {	
         last = len.toString(16)	
}	
       const buf2 = Buffer.from(last, "hex")	
	   const buf3 = Buffer.from(bytes)	
	   const buf4 = Buffer.from(JSON.stringify(json))	
	   const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	
	   fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	
	   return `./sticker/${name}.exif`	
})	
}
 // FAKE REPLY BY YOGI PEWE
// PRODUCT
const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": dfrply //Gambarnye
					},
					"title": `${tampilUcapan} ${pushname}`, //Kasih namalu 
					"description": `Im Nataa Bot`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `© ɪᴛsᴄʜᴀɴᴅʀᴀ`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
// TROLI
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `sᴀʏᴀ ɪᴛsᴄʜᴀɴᴅʀᴀ ʙᴏᴛ`, //Kasih namalu
                            orderTitle: `ᴏᴡɴᴇʀᴇ ʙʏ ɪᴛsᴄʜᴀɴᴅʀᴀ`,
                            thumbnail: dfrply, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `${tampilUcapan} ${pushname}`,
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `${tampilUcapan} ${pushname}`, 
                    jpegThumbnail: dfrply
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${tampilUcapan} ${pushname}`,
			"groupName": `${tampilUcapan} ${pushname}`, 
            "caption": `${tampilUcapan} ${pushname}`, 
            'jpegThumbnail': dfrply
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": dfrply,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': dfrply
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `Hai ${pushname}`,
                 "title": `Saya Nata-Bot`,
                 'jpegThumbnail': dfrply
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
                     //By nayla / rimurubotz
			const reply = (teks) => {
			const B1C = {contentText: teks, footerText: `${TextDiButton}`, headerType: 1}      
			dha.sendMessage(from, B1C, MessageType.buttonsMessage, {quoted:floc3,contextInfo: {forwardingScore: 508, isForwarded: true}})}		
///Button Text
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
dha.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Button Images
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await dha.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await dha.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await dha.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
/// BY PEMUDA TEKNOLOGI TQ YA:v
const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await dha.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
dha.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// By Zeeone
//Auto Vn+Ktk
if (autovn) {
	if (autovn === false) return
await dha.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await dha.updatePresence(from, Presence.composing)
}
// By itsmevall
    antical = true
dha.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
dha.sendMessage(call, `*Sorry can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => dha.blockUser(call, "add"))
})
////Jan Di Jual
const replyfakelink = (teks) => {
dha.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `Bot By ${NamaOwner}`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
                "thumbnail": fake,
                "sourceUrl": ``
},mentionedJid:[sender]}, quoted : mek})
}
const replywa = (teks) => {
dha.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `${NamaBot}`,
                "body": `${FakePdf}`,
                "mediaType": "10",
                "mediaUrl": `${GrubBot}`,
                "thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
                "thumbnail": fake,
                "sourceUrl": `${GrubBot}`,
},mentionedJid:[sender]}, quoted : mek})
}
const fakeyt = (teks) => {
dha.sendMessage(from, teks, text,{contextInfo :{text: 'hi',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `${FakeYt}` ,
"body": `${FakeYt}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/JQ8x6mx/0e4d1b4b709c.jpg",
"mediaUrl": "https://youtu.be/uygjD8rqVLE",
"thumbnail": fs.readFileSync('./media/canss.jpg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : mek})
}
        colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		
		/////// ANTI LINK:)
                if (budy.includes("https://chat.whatsapp.com/")) {
				if (!isGroup) return
				if (!isAntiLink) return
				if (isGroupAdmins) return reply ('Admin Mah Bebas')
				var kic = `${sender.split("@")[0]}@s.whatsapp.net`
				reply(` *「 GROUP LINK DETECTOR 」*\nAwokawok Ngemis Member Gc😍\nByee ${sender.split("@")[0]}`)
				setTimeout(() => {
				dha.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
				}, 3000)
			    }
               if (isGroup && isAntiVirtex && !mek.key.fromMe) {
               if (budy.length > 10000) {
               if (isGroupAdmins) return reply('Admin Mah Bebas Bwang:v')
               reply("ANTIVIRTEX DETECTED!! MAAF ANDA AKAN DIKICK")
               dha.groupRemove(from, sender);
               }
               }
        
let {
    banChats,
} = setting

function banChat() {
    if (banChats == true) {
        return false
    } else {
        return true
    }
}
        
 //// CHAT
       const getpc = async function(totalchat){
   let pc = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && !d.includes('g.us')){
         b.push(d)
      }
   }
   return b
}

const getGroup = async function(totalchat){
   let grup = []
   let a = []
   let b = []
   for (c of totalchat){
      a.push(c.jid)
   }
   for (d of a){
      if (d && d.includes('g.us')){
         b.push(d)
      }
   }
   for (e of b){
      let ingfo = await dha.groupMetadata(e)
      grup.push(ingfo)
   }
   return grup
} 
            
              const getWin = (userId) => {
              let position = false
              Object.keys(_win).forEach((i) => {
              if (_win[i].jid === userId) {
              position = i
       }
        })
              if (position !== false) {
              return _win[position].win
            }
        }
// AFK
	if (isGroup) {
		if (!mek.key.fromMe && mek.key.fromMe) return
		for (let x of mentionUser) {
		    if (afk.checkAfkUser(x, _afk)) {
			const getId = afk.getAfkId(x, _afk)
			const getReason = afk.getAfkReason(getId, _afk)
			const getTime = afk.getAfkTime(getId, _afk)
			const cptl = `Ssst Ganggu Aja Dia Lagi ${getReason} Sejak ${getTime}`
      mentions(cptl, x, true)
    }}
		if (afk.checkAfkUser(sender, _afk) && !isCmd) {
		    const getTime = afk.getAfkTime(sender, _afk)
		    const getReason = afk.getAfkReason(sender, _afk)
		    const ittung = ms(await Date.now() - getTime)
		    const pep = `*${pushname}* Telah Kembali Online`
		    reply(pep)
		    _afk.splice(afk.getAfkPosition(sender, _afk), 1)
		    fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))
		}
	    }
	        function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }
      // CMD
        if (isCmd && !isGroup)		
            console.log(color('[ BOT ]'), color(time, 'red'), color(`${command} [${args.length}]`), 'from', color(pushname))
        
        if (isCmd && isGroup)            
            console.log(color('[ BOT ]'), color(time, 'red'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
            
            switch(command){
            
                        case 'menu': case 'help': case 'allmenu': case 'command':
            groups = dha.chats.array.filter(v => v.jid.endsWith('g.us'))
            privat = dha.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
            ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
            charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
            uptime = process.uptime();
            timestampe = speed();
            totalChat = await dha.chats.all()
            latensie = speed() - timestampe
            total = math(`${groups.length}*${privat.length}`)
            stst = await dha.getStatus(`${sender.split('@')[0]}@c.us`)
		    stst = stst.status == 401 ? '' : stst.status        
		    ptod = `${NOwner}`
		    utod = `${botNumber}`
            stod = `${sender}`
            allmenuuu =`
${tampilUcapan} *${pushname}*  



${atas} 
${bates} 🌹 _Bot & Owner Info_ 
${garis} *Nama Bot* : ${NamaBot}
${garis} *Owner* : ${NamaOwner}
${garis} *Tag Owner* : @${ptod.split('@')[0]}
${garis} *Tag Bot* : @${utod.split('@')[0]}
${garis} *Total Pc* : ${privat.length}
${garis} *Total Gc* : ${groups.length}
${garis} *Total Chat* : ${totalchat.length}
${garis} *Total Hit* : ${totalhit}
${garis} *Speed* : ${latensie.toFixed(4)} _sec_
${garis} *Runtime* : ${runtime(process.uptime())}
${garis} *Baterai* : ${baterai}
${garis} *Cas* : ${charger}
${garis} *Wa Version* : ${dha.user.phone.wa_version}
${garis} *Hostname* : ${os.hostname()}
${garis} *Platform* : ${os.platform()}
${garis}
${bates} 👤 _User Info_
${garis} *Nama* : ${pushname}
${garis} *Nomor* : wa.me/${stod.split('@')[0]}
${garis} *Tag* : @${stod.split('@')[0]}
${garis} *Bio* : ${stst}
${garis} *User Type* : ${isOwner ? 'OwnerBot' : 'Free'}
${garis}
${bates} 🗓️ _Today Info_
${garis} *Tanggal* : ${time} 
${garis} *Wib* : ${wib} 
${garis} *Wit* : ${wit}
${garis} *Wita* : ${wita}
${garis}
${bawah}   
`            
Sendbutdocument(from, allmenuuu, `${atas}
${bates} *ADMIN MENU* 🤴
${garis + kotak} ${prefix}welcome < enable/disable >
${garis + kotak} ${prefix}antilink < on/off >
${garis + kotak} ${prefix}kickall
${garis + kotak} ${prefix}promote
${garis + kotak} ${prefix}demote
${garis + kotak} ${prefix}listonline
${garis + kotak} ${prefix}tagall *teks*
${garis + kotak} ${prefix}leave
${garis + kotak} ${prefix}kick *reply*
${garis + kotak} ${prefix}add *+62xxxxxx*
${garis + kotak} ${prefix}setnamegc
${garis + kotak} ${prefix}setppgc
${garis + kotak} ${prefix}setdeskgc
${garis + kotak} ${prefix}sider *reply chat bot*
${garis + kotak} ${prefix}hidetag *teks/reply teks*
${garis + kotak} ${prefix}linkgc
${bawah}

${atas}
${bates} *OWNER MENU* 👑
${garis + kotak} ${prefix}autoread
${garis + kotak} ${prefix}auto vn/ketik on/off
${garis + kotak} ${prefix}bcnowm
${garis + kotak} ${prefix}bc
${garis + kotak} ${prefix}bc2
${garis + kotak} ${prefix}bcgc
${garis + kotak} ${prefix}bcgc2
${garis + kotak} ${prefix}clearall
${garis + kotak} ${prefix}setcmd
${garis + kotak} ${prefix}delcmd
${garis + kotak} ${prefix}premium add/del
${bawah}

${atas}
${bates} *DOWNLOAD MENU* 📥
${garis + kotak} ${prefix}ytmp3 < Link >
${garis + kotak} ${prefix}ytmp4 < Link >
${garis + kotak} ${prefix}mediafire < Link >
${garis + kotak} ${prefix}tiktok < link >
${garis + kotak} ${prefix}ttnowm < link >
${garis + kotak} ${prefix}ttwm < link >
${bawah}

${atas}
${bates} *SEARCHING MENU* 🔎
${garis + kotak} ${prefix}pinterest < Query >
${garis + kotak} ${prefix}playstore < nama apk >
${garis + kotak} ${prefix}linkwa < nama gc >
${garis + kotak} ${prefix}lirik < judul lagu >
${garis + kotak} ${prefix}wikipedia < query >
${garis + kotak} ${prefix}kbbi < query >
${garis + kotak} ${prefix}kodepos < nama kota >
${bawah}

${atas}
${bates} *TO MENU* 🔘
${garis + kotak} ${prefix}img2url < Reply Foto >
${garis + kotak} ${prefix}tourl < Reply Foto >
${garis + kotak} ${prefix}tovideo < ReplyStikerGif >
${garis + kotak} ${prefix}toimg < ReplyStiker >
${garis + kotak} ${prefix}tomp3 < ReplyVideo >
${garis + kotak} ${prefix}emoji2png < Emoji >
${bawah}

${atas}
${bates} *MUSIC EDIT* 🎶
${garis + kotak} ${prefix}bass < ReplyAudio/Vn >
${garis + kotak} ${prefix}balik < ReplyAudio/Vn >
${garis + kotak} ${prefix}gemuk < ReplyAudio/Vn >
${garis + kotak} ${prefix}robot < ReplyAudio/Vn >
${bawah}

${atas}
${bates} *MAKER MENU* 🖼️
${garis + kotak} ${prefix}halloween <text>
${garis + kotak} ${prefix}rainbow <text>
${garis + kotak} ${prefix}scfi <text>
${garis + kotak} ${prefix}blue <text>
${garis + kotak} ${prefix}juice <text>
${garis + kotak} ${prefix}purple <text>
${garis + kotak} ${prefix}toxic <text>
${garis + kotak} ${prefix}peridot <text>
${garis + kotak} ${prefix}metal <text>
${garis + kotak} ${prefix}realistic <text>
${garis + kotak} ${prefix}impressive <text>
${garis + kotak} ${prefix}cracked <text>
${garis + kotak} ${prefix}magma <text>
${garis + kotak} ${prefix}thunder <text>
${garis + kotak} ${prefix}berry <text>
${garis + kotak} ${prefix}transformer <text>
${garis + kotak} ${prefix}horror <text>
${garis + kotak} ${prefix}metallic <text>
${garis + kotak} ${prefix}circuit <text>
${garis + kotak} ${prefix}sketch <text>
${garis + kotak} ${prefix}lovelock <text>
${garis + kotak} ${prefix}cemeterygates <text>
${garis + kotak} ${prefix}planebanner <text>
${garis + kotak} ${prefix}christmas <text>
${garis + kotak} ${prefix}lightwriting <text>
${garis + kotak} ${prefix}rugbyball <text>
${garis + kotak} ${prefix}airballoon <text>
${garis + kotak} ${prefix}fortunecookie <text>
${garis + kotak} ${prefix}einstein <text>
${garis + kotak} ${prefix}pendant <text>
${garis + kotak} ${prefix}rustywriting <text>
${garis + kotak} ${prefix}neonsign <text>
${garis + kotak} ${prefix}beachsign <text>
${garis + kotak} ${prefix}bracelet <text>
${garis + kotak} ${prefix}nightmare <text>
${garis + kotak} ${prefix}denimembroidery <text>
${garis + kotak} ${prefix}lightgraffiti <text>
${garis + kotak} ${prefix}arrowsigns  <2 text>
${garis + kotak} ${prefix}birthdaycake <2 text>
${garis + kotak} ${prefix}footballplayer <2 text>
${garis + kotak} ${prefix}watercolor <2 text>
${garis + kotak} ${prefix}neonwriting  <2 text>
${garis + kotak} ${prefix}surfingboard <2 text>
${garis + kotak} ${prefix}airline <2 text>
${garis + kotak} ${prefix}chalkboard <2 text>
${bawah}

${atas}
${bates} *NSFW MENU* 🔐
${garis + kotak} ${prefix}ass
${garis + kotak} ${prefix}ahegao
${garis + kotak} ${prefix}bdsm
${garis + kotak} ${prefix}blowjob
${garis + kotak} ${prefix}cuckold
${garis + kotak} ${prefix}cum
${garis + kotak} ${prefix}ero
${garis + kotak} ${prefix}femdom
${garis + kotak} ${prefix}foot
${garis + kotak} ${prefix}gangbang
${garis + kotak} ${prefix}galsses
${garis + kotak} ${prefix}hentai
${garis + kotak} ${prefix}jahy
${garis + kotak} ${prefix}masturbation
${garis + kotak} ${prefix}neko
${garis + kotak} ${prefix}orgy
${garis + kotak} ${prefix}panties
${garis + kotak} ${prefix}pussy
${garis + kotak} ${prefix}thighs
${garis + kotak} ${prefix}yuri
${bawah}

${atas}
${bates} *ASUPAN MENU* 🗿
${garis + kotak} ${prefix}vietnam
${garis + kotak} ${prefix}malaysia
${garis + kotak} ${prefix}korea
${garis + kotak} ${prefix}japan
${garis + kotak} ${prefix}indonesia
${garis + kotak} ${prefix}thailand
${garis + kotak} ${prefix}china
${garis + kotak} ${prefix}hijaber
${garis + kotak} ${prefix}santuy
${garis + kotak} ${prefix}ukhti
${garis + kotak} ${prefix}bocil
${garis + kotak} ${prefix}ghea
${garis + kotak} ${prefix}rika
${bawah}

${atas}
${bates} *GAME MENU* 🎮
${garis + kotak} ${prefix}caklontong
${garis + kotak} ${prefix}tebakgambar
${garis + kotak} ${prefix}tictactoe @tag lawan
${garis + kotak} ${prefix}gelud @tag lawan
${garis + kotak} ${prefix}delsesittt
${garis + kotak} ${prefix}delsesigelud
${bawah}

${atas}
${bates} *RANDOM TAG MENU* 🎰
${garis + kotak} ${prefix}ganteng
${garis + kotak} ${prefix}cantik
${garis + kotak} ${prefix}jelek
${garis + kotak} ${prefix}goblok
${garis + kotak} ${prefix}bego
${garis + kotak} ${prefix}pinter
${garis + kotak} ${prefix}jago
${garis + kotak} ${prefix}babi
${garis + kotak} ${prefix}beban
${garis + kotak} ${prefix}baik
${garis + kotak} ${prefix}jahat
${garis + kotak} ${prefix}anjing
${garis + kotak} ${prefix}monyet
${garis + kotak} ${prefix}haram
${garis + kotak} ${prefix}kontol
${garis + kotak} ${prefix}pakboy
${garis + kotak} ${prefix}pakgirl
${garis + kotak} ${prefix}sadboy
${garis + kotak} ${prefix}sadgirl
${garis + kotak} ${prefix}wibu
${garis + kotak} ${prefix}nolep
${garis + kotak} ${prefix}hebat
${bawah}

${atas}
${bates} *V MENU* 👥
${garis + kotak} ${prefix}vsadboy
${garis + kotak} ${prefix}vpakboy
${garis + kotak} ${prefix}vbaik
${garis + kotak} ${prefix}vjago
${garis + kotak} ${prefix}vjelek
${garis + kotak} ${prefix}vcantik
${garis + kotak} ${prefix}vpinter
${garis + kotak} ${prefix}vbeban
${garis + kotak} ${prefix}vkontol
${garis + kotak} ${prefix}vhebat
${garis + kotak} ${prefix}vwibu
${garis + kotak} ${prefix}vharam
${garis + kotak} ${prefix}vbabi
${garis + kotak} ${prefix}vbego
${garis + kotak} ${prefix}vganteng
${garis + kotak} ${prefix}vanjing
${garis + kotak} ${prefix}vmonyet
${garis + kotak} ${prefix}vsadgirl
${garis + kotak} ${prefix}vpakgirl
${garis + kotak} ${prefix}vjahat
${garis + kotak} ${prefix}vnolep
${garis + kotak} ${prefix}vgoblok
${bawah}

${atas}
${bates} *X MENU* 👥
${garis + kotak} ${prefix}xsadboy <@tag>
${garis + kotak} ${prefix}xpakboy <@tag>
${garis + kotak} ${prefix}xbaik <@tag>
${garis + kotak} ${prefix}xjago <@tag>
${garis + kotak} ${prefix}xjelek <@tag>
${garis + kotak} ${prefix}xcantik <@tag>
${garis + kotak} ${prefix}xpinter <@tag>
${garis + kotak} ${prefix}xbeban <@tag>
${garis + kotak} ${prefix}xkontol <@tag>
${garis + kotak} ${prefix}xhebat <@tag>
${garis + kotak} ${prefix}xwibu <@tag>
${garis + kotak} ${prefix}xharam <@tag>
${garis + kotak} ${prefix}xbabi <@tag>
${garis + kotak} ${prefix}xbego <@tag>
${garis + kotak} ${prefix}xganteng <@tag>
${garis + kotak} ${prefix}xanjing <@tag>
${garis + kotak} ${prefix}xmonyet <@tag>
${garis + kotak} ${prefix}xsadgirl <@tag>
${garis + kotak} ${prefix}xpakgirl <@tag>
${garis + kotak} ${prefix}xjahat <@tag>
${garis + kotak} ${prefix}xnolep <@tag>
${garis + kotak} ${prefix}xgoblok <@tag>
${bawah}

${atas}
${bates} *Z MENU* 👥
${garis + kotak} ${prefix}zsadboy
${garis + kotak} ${prefix}zpakboy
${garis + kotak} ${prefix}zbaik
${garis + kotak} ${prefix}zjago
${garis + kotak} ${prefix}zjelek
${garis + kotak} ${prefix}zcantik
${garis + kotak} ${prefix}zpinter
${garis + kotak} ${prefix}zbeban
${garis + kotak} ${prefix}zkontol
${garis + kotak} ${prefix}zhebat
${garis + kotak} ${prefix}zwibu
${garis + kotak} ${prefix}zharam
${garis + kotak} ${prefix}zbabi
${garis + kotak} ${prefix}zbego
${garis + kotak} ${prefix}zganteng
${garis + kotak} ${prefix}zanjing
${garis + kotak} ${prefix}zmonyet
${garis + kotak} ${prefix}zsadgirl
${garis + kotak} ${prefix}zpakgirl
${garis + kotak} ${prefix}zjahat
${garis + kotak} ${prefix}znolep
${garis + kotak} ${prefix}zgoblok
${bawah}

${atas}
${bates} *CEK MENU* ✔️
${garis + kotak} ${prefix}gantengcek
${garis + kotak} ${prefix}cantikcek
${garis + kotak} ${prefix}jelekcek
${garis + kotak} ${prefix}goblokcek
${garis + kotak} ${prefix}begocek
${garis + kotak} ${prefix}pintercek
${garis + kotak} ${prefix}jagocek
${garis + kotak} ${prefix}nolepcek
${garis + kotak} ${prefix}babicek
${garis + kotak} ${prefix}bebancek
${garis + kotak} ${prefix}baikcek
${garis + kotak} ${prefix}jahatcek
${garis + kotak} ${prefix}anjingcek
${garis + kotak} ${prefix}haramcek
${garis + kotak} ${prefix}kontolcek
${garis + kotak} ${prefix}pakboycek
${garis + kotak} ${prefix}pakgirlcek
${garis + kotak} ${prefix}sangecek
${garis + kotak} ${prefix}bapercek
${bawah}

${atas}
${bates} *STICKER MENU* 📌
${garis + kotak} ${prefix}pmeme < reply foto text1|text2 >
${garis + kotak} ${prefix}smeme < reply stiker text1|text2 >
${garis + kotak} ${prefix}sticker < ReplyFoto >
${garis + kotak} ${prefix}sgif < ReplyVideo >
${bawah}

${atas}
${bates} *OTHER MENU* 🔓
${garis + kotak} ${prefix}donasi
${garis + kotak} ${prefix}script
${garis + kotak} ${prefix}runtime
${garis + kotak} ${prefix}premiumcheck
${garis + kotak} ${prefix}listpremium
${garis + kotak} ${prefix}speed
${garis + kotak} ${prefix}afk < alasan >
${garis + kotak} ${prefix}rules
${garis + kotak} ${prefix}snk
${bawah}

║▌│█║▌│ █║▌│█│║▌║
║▌│█║▌│ █║▌│█│║▌║

    © *${NamaOwner}*`, fs.readFileSync('./media/Loli Hot.pdf'), {mimetype:Mimetype.pdf, thumbnail:fs.readFileSync('./media/pdf.jpg'), filename:`${FakePdf}` }, [{buttonId:`!owner`,buttonText:{displayText:'I LOVE YOU'},type:1},{buttonId:`!donasi`,buttonText:{displayText:'YOU TO'},type:1},], {quoted:floc3, contextInfo: { mentionedJid: [utod,stod,ptod],}})
            break


//═════════════════════════ [ DOWNLOAD MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════


case 'ytmp3':
        
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalid')
            teks = args.join(' ')
            reply('Load')
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
☞ Title : ${res[0].judul}
☞ Ext : MP3
☞ Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
            break
     case 'ytmp4':
           
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalid')
            teks = args.join(' ')
            reply(`Wet`)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
☞ Title : ${res[0].judul}
☞ Ext : MP4
☞ Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
            break
case 'mediafire':
if (!isPremium) return reply('Fitur Ini Khusus User Premium Ingin Beli Premium?Hubungi Owner Yang Bersangkutan')
if (!q) return
reply(mess.wait)
awokkk = await fetchJson(`https://rest2yeriko.herokuapp.com/api/mediafire/?url=${q}&apikey=Yuzzu`)
sendFileFromUrl(awokkk.result.link, document, {mimetype: awokkk.result.mime, filename: awokkk.result.nama, quoted: mek})
break
case 'tiktok':
if (!q) return reply('Link Tiktok Nya Mana:v')
reply(mess.wait)
tthb = fs.readFileSync('./media/tiktok.jpg')
tiktok0 = ``
sendButLocation(from, tiktok0, "Pilih Type Di Bawah Ini", {jpegThumbnail:tthb,name:""}, [{buttonId:`#ttnowm ${q}`,buttonText:{displayText:'NO WM'},type:1},{buttonId:`#ttwm ${q}`,buttonText:{displayText:'WM'},type:1}])
break
case 'ttnowm': 
if (!isPremium) return reply('Fitur Ini Khusus User Premium Ingin Beli Premium?Hubungi Owner Yang Bersangkutan\nUntuk Download Tiktok User Free Hanya Bisa Akses TiktokWm')
if (!q) return
reply(mess.wait)
tiktok1 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/tiktok/?url=${q}&apikey=Yuzzu`)
tiktok4 = await getBuffer(tiktok1.result.nowatermark)
dha.sendMessage(from, tiktok4, video, {quoted: mek, caption:'Done'})
break
case 'ttwm':
if (!q) return
reply(mess.wait)
tiktok3 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/tiktok/?url=${q}&apikey=Yuzzu`)
tiktok5 = await getBuffer(tiktok3.result.watermark)
dha.sendMessage(from, tiktok5, video, {quoted: mek, caption:'Done'})
break

//═════════════════════════ [ SEARCH MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════


case 'playstore':
if(!q) return reply('lu nyari apa?')
let play = await hx.playstore(q)
let store = '❉─────────────────────❉\n'
for (let i of play){
store += `\n[ *PLAY STORE* ]\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(store)
break
case 'linkwa':
case 'grupwa':
case 'groupwa':
case 'gcwa':
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
case 'lirik':
            if(!q) return reply('lagu apa?')
            reply(mess.wait)
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break
case 'pinterest':
if (!q) return
reply(mess.wait)
foto = await fetchJson(`https://rest2yeriko.herokuapp.com/api/pinterest/?text=${q}&apikey=Yuzzu`)
fotoget = await getBuffer(foto.result)
sendButImage(from, `Foto *${q}* Nya Kak`, `Lagi? Klik Button Nya Kak⬇️`, fotoget, [{buttonId: `${prefix}pinterest ${q}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break
case 'wiki': case 'wikipedia':
if (!q) return
reply(mess.wait)
ilmu = await fetchJson(`https://rest2yeriko.herokuapp.com/api/wikipedia?search=${q}&apikey=Yuzzu`)
ilmu2 = `*Nama* : ${q}\n*Hasil* : ${ilmu.result.result}`
reply(ilmu2)
break
case 'kbbi':
if (!q) return
reply(mess.wait)
ilmu3 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kbbi?kata=${q}&apikey=Yuzzu`)
ilmu4 =`*Nama* : ${q}\n*Hasil* : ${ilmu3.result.arti}`
reply(ilmu4)
break
case 'kodepos': case 'codepos':
if (!q) return
reply(mess.wait)
ilmu5 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kodepos?kota=${q}&apikey=Yuzzu`)
ilmu6 = 'KODE POS\n'             
for (let nyz of ilmu5.result.data) {
ilmu6 += `${buletan} *PROVINCE* : ${nyz.province}\n`
ilmu6 += `${buletan} *CITY* : ${nyz.city}\n`
ilmu6 += `${buletan} *SUBDISTRICT* : ${nyz.subdistrict}\n`
ilmu6 += `${buletan} *URBAN* : ${nyz.urban}\n`
ilmu6 += `${buletan} *POSTALCODE* : ${nyz.postalcode}\n\n`            
}
reply(ilmu6)
break


//═════════════════════════ [ ADMIN MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


      case 'antilink':

        if (!isGroup) return reply(mess.only.group)
        if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
        if (args[0] == 'on') {
          if (isAntiLink) return reply('Sudah aktif!!')
          antilink.push(from)
          fs.writeFileSync(
            './database/antilink.json',
            JSON.stringify(antilink)
          )
          reply('Sukses mengaktifkan antilink!')
        } else if (args[0] == 'off') {
          antilink.splice(from, 1)
          fs.writeFileSync(
            './database/antilink.json',
            JSON.stringify(antilink)
          )
          reply('Sukses mematikan antilink!')
        } else if (!q) {
          sendButMessage(from, `FORMAT SALAH BANG!!!`, `Kalo Button Nya Gaada/Udah Di Klik Orang Gini :\nAktif : ${prefix}antilink on\nMati : ${prefix}antilink off\n\n\nKalo Bkn Admin Gwsh Banyak Tingkah Kalo Ga Bakalan Ke Kick!`, [
            {
              buttonId: `${prefix}antilink on`,
              buttonText: {
                displayText: `AKTIF`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antilink off`,
              buttonText: {
                displayText: `NON-AKTIF`,
              },
              type: 1,
            },
          ]);
        }
        break
       case 'welcome':
               if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
               if (!isGroup) return reply(mess.only.group)
               if (args.length < 1) return reply('!welcome on/off')
               if ((args[0]) === 'on') {
               if (isWelkom) return reply('Udah aktif')
               welkom.push(from)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses mengaktifkan fitur welcome di group ini ✔️')
               } else if ((args[0]) === 'off') {
               welkom.splice(from, 1)
               fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))
               reply('Sukses menonaktifkan fitur welcome di group ini ✔️')
               } else {
               reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')
}
               break
case 'linkgc':
//
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
				if (!isGroup) return reply(mess.only.group)
				linkgc = await dha.groupInviteCode (from)
				yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
				dha.sendMessage(from, yeh, text, {quoted: mek})
				break
            case 'kick':

             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if (!isGroup) return reply(mess.only.group)
             kick(from, mentionUser)
             break
      case 'add':

      if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
             entah = arg.split("|")[0]
             entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")
             entah = `${entah}@s.whatsapp.net`
             dha.groupAdd(from, [entah])
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             dha.groupAdd(from, [entah])
}
             break
case 'demote': case 'promote':
reply(`Fitur Ini Masih Error`)
break
       case 'setgrupname':

              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return 
              if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)
              dha.groupUpdateSubject(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setdesc':

              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)
              dha.groupUpdateDescription(from, q)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              break
       case 'setppgrup':

              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (isQuotedImage) {
              let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
              let media = await dha.downloadMediaMessage(encmedia)
              dha.updateProfilePicture(from, media)
             .then((res) => reply(jsonformat(res)))
             .catch((err) => reply(jsonformat(err)))
              } else {
              reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)
}
              break
case 'tagall':

              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              let arr = [];
              let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`
              for (let i of groupMembers){
              txti += `=> @${i.jid.split("@")[0]}\n`
              arr.push(i.jid)
}
              mentions(txti, arr, true)
              break
       case 'kickall':
 // Anti Banned
              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              for (let i of groupMembers) {
              await kickMember(from, [i.jid])
}
              break
       case 'leave':

              if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
              if (!isGroup) return reply(mess.only.group)
              setTimeout( () => {
              dha.groupLeave(from) 
              }, 2000)
              setTimeout( () => {
              reply('Byee...')
              }, 0)
              break
       case 'online':
       case 'listonline':
       case 'here':
                
             if (!isGroup) return reply(`Only group`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(dha.chats.get(ido).presences), dha.user.jid]
             dha.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case 'hidetag':

             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             try {
             quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
             hideTag(from, `${quotedText}`)
             } catch {
             hideTag(from, `${q}`)
}
             break
      case 'sider':

             if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
             if(!isGroup) return reply(mess.only.group)
             try {
             infom = await dha.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
             tagg = []
             teks = `*• Dibaca oleh:*\n\n`
             for(let i of infom.reads){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             teks += `*• Tersampaikan pada:*\n\n`
             for(let i of infom.deliveries){
             teks += '@' + i.jid.split('@')[0] + '\n'
             teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
             tagg.push(i.jid)
}
             mentions(teks, tagg, true)
             } catch (e) {
             console.log(color(e))
             reply('Reply chat bot!')
}
             break
case 'closetime':
	//	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return
if (!isBotGroupAdmins) return
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
dha.groupSettingChange (from, GroupSettingChange.messageSend, true);
}, timer)
break
case 'opentime':
	//	if (!isRegistered) return sendButRegis(from, daftar1, daftar2, daftar3, { quoted: ftrol})
if (!isGroup) return 
if (!isGroupAdmins) return 
if (!isBotGroupAdmins) return
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
dha.groupSettingChange (from, GroupSettingChange.messageSend, false);
}, timer)
break


//═════════════════════════ [ OWNER MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


				case 'bcnowm':
					dha.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await dha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, {caption: `${body.slice(7)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(7)}`)
						}
						reply('*Done*')
					}
					break
				case 'bc':
					dha.updatePresence(from, Presence.composing)
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					if (args.length < 1) return reply('Teksnya?')
					anu = await dha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
						} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
						}
						reply(`Sukses mengirim Broadcast ${body.slice(4)}`)
					} else {
						for (let _ of anu) {
							//sendMess(_.jid, `${body.slice(4)}`)
buttons = [{buttonId: `yoi`, buttonText: {displayText: 'OKEE'}, type: 1},{buttonId: `jjj`, buttonText: {displayText: 'SIPP'}, type: 1}]
const btnbc = {
    contentText: `${body.slice(4)}`,
    footerText: '*BROADCAST*',
    buttons: buttons,
    headerType: 1
}
await dha.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: ftrol})
						}
						reply(`Sukses mengirim Broadcast:\n${body.slice(4)}`)
					}
					break
				case 'bc2':
					dha.updatePresence(from, Presence.composing) 
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('.......')
					anu = await dha.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, {caption: `[ BROADCAST ]\nDari : Owner\nPada : ${timi}\nBuat : All Kontak\nPesan : ${body.slice(5)}`})
						}
						reply('')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `[ BROADCAST ]\nDari : Owner\nPada : ${timi}\nBuat : All Kontak\nPesan : ${body.slice(5)}`)
						}
						reply('*Done*')
					}
					break
				case 'bcgc':
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, {caption: `*「 BC GROUP 」*\n\n☞ Dari Grup : ${groupName}\n☞ Pengirim : Owner\n☞ Pesan : ${body.slice(6)}`})
						}
						reply('*Done')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `*「 BC GROUP 」*\n\n☞ Dari Grup : ${groupName}\n☞ Pengirim : Owner\n☞ Pesan : ${body.slice(6)}`)
						}
						reply('Done')
					}
					break
				case 'bcgc2':
				     if (!isOwner) return reply(mess.only.owner)
					if (args.length < 1) return reply('Teksnya mana bosku >_<')
					anu = await groupMembers
					nom = mek.participant
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await dha.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							dha.sendMessage(_.jid, buff, image, {caption: `${body.slice(7)}`})
						}
						reply('Done')
					} else {
						for (let _ of anu) {
							sendMess(_.jid, `${body.slice(7)}`)
						}
						reply('Done')
					}
					break
      case 'addcmd': 
       case 'setcmd':
              if (!isOwner) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
              if (!isOwner) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
				case 'clearall':
					if (!isOwner) return reply(mess.only.owner)
					anu = await dha.chats.all()
					dha.setMaxListeners(25)
					for (let _ of anu) {
						dha.deleteChat(_.jid)
					}
					reply('Succes')
					break
case 'premium': 
              if (!isOwner) return reply(mess.only.owner)
              if (args[0] === 'add') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid

              premium.addPremiumUser(mentioned[0], args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
                        
              } else {
                            
              premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)
              reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
}
              } else if (args[0] === 'del') {
              if (mek.message.extendedTextMessage != undefined) {
              mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            _premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
              } else {
            _premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)
              fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))
              reply(mess.success)
}
              } else {
              reply(mess.wrongFormat)
}
              break       


//═════════════════════════ [ EDIT MUSIC MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


				case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await dha.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply('Ulangi Kak Tadi Error')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'gemuk':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await dha.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'balik':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await dha.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await dha.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						dha.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break    
				
				    
//═════════════════════════ [ CONVERT MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


       case 'tourl':
               if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
               reply(mess.wait)
               boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               owgi = await dha.downloadMediaMessage(boij)
               res = await uploadImages(owgi)
               reply(res)
               } else {
               reply('kirim/reply gambar/video')
}
               break
       case 'imgtourl':
       case 'img2url':
               reply(mess.wait) 
               var imgbb = require('imgbb-uploader')
               var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               var media = await  dha.downloadAndSaveMediaMessage(encmedia)       
               imgbb('39d895963468b814fad0514bd28787e2', media)
              .then(data => {
               var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`
               ibb = fs.readFileSync(media)
               dha.sendMessage(from, ibb, image, { quoted: mek, caption: caps})
})
              .catch(err => {
               throw err
})
               break
        case 'tovideo':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
            case 'tomp3':
            if (!isPremium) return reply (mess.only.premium)
					dha.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply Video Nya Kak')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await dha.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply('Ulangi Kak Tadi Error')
						mhee = fs.readFileSync(ran)
						dha.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', duration: 359996400, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
case 'emoji2png':
reply(mess.wait)
emoji = args[0]
try {
emoji = encodeURI(emoji[0])
} catch {
emoji = encodeURI(emoji)
}
bufferg = await getBuffer(`https://api/dapuhy.xyz/api/maker/emojitopng?emoji=${emoji}&apikey=${apidapa}`)
dha.sendMessage(from, bufferg, image, {quoted: mek})
break
    case 'potomeme': case 'pmeme':
           if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
           try {
           if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY GAMBAR ATAU STICKER!!`)
           reply(mess.wait)
           var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
           var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
           var imgbb = require('imgbb-uploader')
           var enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
           var media = await dha.downloadAndSaveMediaMessage(enmedia)
           var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
           var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
           dha.sendMessage(from, resu, image, {quoted: mek})
           fs.unlinkSync(media)
           } catch (e) {
           return reply(`${e}`)
           console.log(e)
           }
           break    
     case 'smeme': case 'stickmeme': case 'sm': {
           var top = q.split('|')[0] ? q.split('|')[0] : ''
           var bottom = q.split('|')[1] ? q.split('|')[1] : ''
           reply(mess.wait)
           var imgbb = require('imgbb-uploader')
           if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
           ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           owgi = await  dha.downloadAndSaveMediaMessage(ger)
           anu = await imgbb("f0b190d67308d34811fab9c56fe8aba7", owgi)
           tekks = `${anu.display_url}`
           ranp = getRandom('.gif')
           rano = getRandom('.webp')
           anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${tekks}`
           sendWebp(from, `${anu1}`)
           } else {
           reply('Gunakan foto!')
           } 
           }
           break
				case 'stiker': 
				case 'sticker':
				case 's':
            
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dha.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Succes Gan')
								buffer = fs.readFileSync(ran)
								dha.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dha.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dha.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar/video/gif dengan caption \n${prefix}sticker (durasi sticker video 1-9 detik)`)
					}
					break
                  case 'toimg':

			     	if (!isQuotedSticker) return reply('Reply/tag sticker !')
			     	reply (mess.wait)
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await dha.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${media} ${ran}`, (err) => {
						fs.unlinkSync(media)
						if (err) return reply('Eror Kak')
						buffer = fs.readFileSync(ran)
						dha.sendMessage(from, buffer, image, {quoted: mek, caption: 'Nih kak... '})
						fs.unlinkSync(ran)
					})
					break
        case 'togif':
               if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
               reply(mess.wait)
               encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
               mediaaa = await dha.downloadAndSaveMediaMessage(encmediaaa)
               a = await webp2gifFile(mediaaa)
               mp4 = await getBuffer(a.result)
               dha.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: mek, caption: mess.success})
               fs.unlinkSync(mediaaa)
               } else {
               reply(mess.wrongFormat)
}
               break
            case 'stickergif':
			case 'stikergif':
			case 'sgif':
			            
					if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dha.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						await ffmpeg(`./${media}`)
							.input(media)
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								reply(mess.stick)
							})
							.on('end', function () {
								console.log('Subrek Fernazer')
								buffer = fs.readFileSync(ran)
								dha.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
					} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						const media = await dha.downloadAndSaveMediaMessage(encmedia)
						ran = getRandom('.webp')
						reply(`Wait Kak ${pushname}`)
						await ffmpeg(`./${media}`)
							.inputFormat(media.split('.')[1])
							.on('start', function (cmd) {
								console.log(`Started : ${cmd}`)
							})
							.on('error', function (err) {
								console.log(`Error : ${err}`)
								fs.unlinkSync(media)
								tipe = media.endsWith('.mp4') ? 'video' : 'gif'
								reply(ind.stikga())
							})
							.on('end', function () {
								console.log('Finish')
								buffer = fs.readFileSync(ran)
								dha.sendMessage(from, buffer, sticker, {quoted: mek})
								fs.unlinkSync(media)
								fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else {
						reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar`)
					}
					break  
					

//═════════════════════════ [ MAKER MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ MySelf API ] ═════════════════════════					

		case 'rainbow': case 'scfi': case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot': case 'metal': 
			case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': 
			case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween': 
			if (!q) return
			reply(mess.wait)						
			nyz5 = await fetchJson(`https://myselfff.herokuapp.com/docs/textpro/${command}?text=${q}`) 
			nyz4 = await getBuffer(nyz5.result)
			dha.sendMessage(from, nyz4, image, {caption:`NIH KAK`,quoted:mek}) 					
			break
case 'christmas': case 'cemeterygates': case 'planebanner': case 'lovelock': case 'pendant': case 'fortunecookie': case 'airballoon': case 'einstein': case 'rugbyball': case 'lightwriting': case 'rustywriting': case 'beachsign': case 'bracelet': case 'denimembroidery': case 'nightmare': case 'neonsign': case 'lightgraffiti':
if (!q) return reply(`Example : ${prefix + command} ${pushname}`)
reply(mess.wait)
makerny = await getBuffer(`https://api.dapuhy.xyz/api/photofunia/${command}?text=${q}&apikey=${apidapa}`)
dha.sendMessage(from, makerny, image, {quoted: mek, caption: `Nihh Hasil ${command} Nya`})
break
case 'chalkboard': case 'airline': case 'surfingboard': case 'neonwriting': case 'watercolor': case 'footballplayer': case 'birthdaycake': case 'arrowsigns': 
if (args.length === 0) return reply(`Example : ${prefix + command} ${pushname} gg\n\nHarus Ada 2 Text Ya Kk`)
reply(mess.wait)
txt1 = args[0]
txt2 = args[0]
makern = await getBuffer(`https://api.dapuhy.xyz/api/photofunia/${command}?text1=${txt1}&text2=${txt2}&apikey=${apidapa}`)
dha.sendMessage(from, makern, image, {quoted: mek, caption: `Nihh Hasil ${command} Nya`})
break

//═════════════════════════ [ 18+ MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ════════════════════════
//═════════════════════════ [ API GW ] ═════════════════════════

case 'ass': case 'ahegao': case 'bdsm': case 'blowjob': case 'cuckold': case 'cum': case 'ero': case 'femdom': case 'foot': case 'gangbang': case 'glasses': case 'hentai': case 'jahy': case 'masturbation': case 'neko': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': 
if (!isPremium) return reply('Fitur Ini Khusus User Premium Ingin Beli Premium?Hubungi Owner Yang Bersangkutan')
reply(mess.wait)
bikep = await fetchJson(`https://rest2yeriko.herokuapp.com/api/nsfw/${command}?apikey=Yuzzu`)
bokep = await getBuffer(bikep.result)
sendButImage(from, `JANGAN KE WC DULU BRO\nDOSA TANGGUNG USER SENDIRI`, `MAU LAGI?KLIK BUTTON DI BAWAH⬇️⬇️`, bokep, [{buttonId: `${prefix}${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},]);
break

//═════════════════════════ [ ASUPAN MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════

case 'vietnam': case 'malaysia': case 'korea': case 'indonesia': case 'japan': case 'thailand': case 'china':
reply(mess.wait)
cantik = await fetchJson(`https://rest2yeriko.herokuapp.com/api/cewe/${command}?apikey=Yuzzu`)
cantok = await getBuffer(cantik.result.url)
sendButImage(from, `Cewe *${command}* Wangy Wangy`, `LAGI? KLIK BUTTON DI BAWAH⬇️⬇️`, cantok, [{buttonId: `${prefix}${command}`,buttonText: {displayText: `AGAIN➡️`,},type: 1,},])
break

case 'hijaber': case 'santuy': case 'ukhti': case 'bocil': case 'ghea': case 'rikagusriani':
if (!isPremium) return reply('Fitur Ini Khusus User Premium Ingin Beli Premium?Hubungi Owner Yang Bersangkutan')
ini = await fetchJson(`https://kagoya-api.herokuapp.com/api/asupan/hijaber`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
sendButVideo(from, `*${command}* Mantaf:v`, `Mau Lagi?Klik Button Di Bawah⬇️`, buffer, [{buttonId: `${prefix}${command}`,buttonText: {displayText: `AGAIN➡️️`,},type: 1,},]);
break

//═════════════════════════ [ OTHER MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════


                    case 'admin':  
         	        case 'owner':  
         	        case 'creator':           	        		
		            const icontact = fs.readFileSync('./media/contact.jpg')
                    dha.sendMessage(from, {displayname: "Jeff", vcard: vcard}, MessageType.contact, { quoted: mek})
                    dha.sendMessage(from, icontact, image, {quoted: mek, caption: 'Tuhh Kak Kontak Owner Ku >_<'})
					break
case 'grubbot':
gcm =`
Grub 1 : ${GrubBot}
Grub 2 : ${GrubBot2}
Jangan Lupa Join Yahh *${pushname}*
`
reply(gcm)
break
case 'script':
const isc = fs.readFileSync('./media/sc.jpg')
mastahb =`*SCRIPT ${NamaBot}*

Script Ori : ɪᴛsᴄʜᴀɴᴅʀᴀ 
Recode1 : ʀᴀᴅᴊᴀ
Recode2 : ${NamaOwner}

Link Script : https://github.com/
`
dha.sendMessage(from, isc, image, {quoted: mek, caption: mastahb})
break
case 'donasi':
dona = fs.readFileSync('./media/donasi.jpg')
doni =`*╭─❒ 「 Donasi 」 ──────*
*│*
*│*⬡ *Mau donasi Kah?🤗*
*│*⬡ *GOPAY     :  ${NomorGopay}*
*│*⬡ *DANA    : ${NomorDana}*
*│*⬡ *OVO    : ${NomorOvo}*
*└───────────────────*
1Perak Donasi Kalian Juga Membantu Perkembangan Bot Kami:)`
dha.sendMessage(from, dona, image, { quoted: floc3, thumbnail: dona, caption: doni })
break
      case 'runtime':

        run = process.uptime()
        teks = `${kyun(run)}`
        reply(teks)
        break
      case 'speed':
      case 'ping':

        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8")
          const ssd = child.replace(/Memory:/, "Ram:")
          const pingnya = `*${ssd}Speed: ${latensi.toFixed(4)} Second*`
          reply(pingnya)
        })
        break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break
case 'premiumcheck':
       case 'cekpremium': 
              if (!isPremium) return reply(mess.only.premium)
              const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())
              reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)
              break
       case 'listprem':
       case 'listpremium':          
              let txt = `「 *PREMIUM USER LIST* 」\n\n`
              let men = [];
              for (let i of _premium){
              men.push(i.id)
              const checkExp = ms(i.expired - Date.now())
              txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`
}
              mentions(txt, men, true)
              break
      case 'delete':
      case 'del':
					case 'd':

					//if (!isOwner)return reply(mess.only.owner)
					//if (!isGroup)return reply(mess.only.group)
				if (!isGroupAdmins && !mek.key.fromMe) return reply("Khusus admin");
					dha.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
              case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n☞ *Username*: ${pushname}\n☞ *Alasan*: ${reason}`
              reply(aluty)
              break
              case 'bug':
              case 'report':
              case 'bugreport':
              if (args.length < 1) return reply(`Ex : ${prefix + command} [ Fitur Apa ] [ Error Gmn ]`)
              teks = args.join(' ')
              reply(`Done Send Report Bug To Owner ${NamaOwner}`)
              dha.sendMessage(`${NOwner}`,`*Bug Report:* ${teks}`, text)
              break
              case 'request':
              case 'saran':
              case 'req':
              if (args.length < 1) return reply(`Ex : ${prefix + command} [ Saran ]`)
              teks = args.join(' ')
              reply(`Done Send Request To Owner ${NamaOwner}`)
              dha.sendMessage(`${NOwner}`,`*Request*\n\n*${teks}*`, text)
              break
              case 'rate': case 'rating':
              sendButMessage(from, `Hai Makasih Udah Mau Berikan Kami Rating Silahkan Di Klik Bintang Yang Ada Di Bawah Sesuai Pendapat Anda`, `Berikan Rating Sesuai *Pendapat Anda* Terhadap Bot Kami`, [
              {
              buttonId: `${prefix}rate5`,
              buttonText: {
                displayText: `⭐⭐⭐⭐⭐`,
              },
              type: 1,
              },
              {
              buttonId: `${prefix}rate3`,
              buttonText: {
              displayText: `⭐⭐⭐`,
              },
              type: 1,
              },              
              {
              buttonId: `${prefix}rate1`,
              buttonText: {
              displayText: `⭐`,
              },
              type: 1,
              },
              ])              
              break
              case 'rate5':
              sendButMessage(from, `Widih Makasih Bintang 5 Nya Kak Yaaa`, `Makasih Bintang 5 Nya Kak ${pushname}`, [
              {
              buttonId: `${prefix}satujddjduaa`,
              buttonText: {
              displayText: `Sama Sama`,
              },
              type: 1,
              },
              {
              buttonId: `${prefix}ajahdhd`,
              buttonText: {
              displayText: `Yoi Bro🗿👍`,
              },
              type: 1,
              },
              ])    
              dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *5* Dari ${pushname}`, text)         
              break
              case 'rate3':
              sendButMessage(from, `Makasih Bintang 3 Nya Kak Yaaa\n_Ada Saran Nggak Kak Buat Bot Kami??_\n\nKalo Ada Ketik\n*${prefix}request* < Apa Yang Mau Di Request In >`, `Makasih Bintang 3 Nya Kak ${pushname}`, [
              {
              buttonId: `${prefix}satujddjduaa`,
              buttonText: {
              displayText: `Sama Sama`,
              },
              type: 1,
              },
              {
              buttonId: `${prefix}ajahdhd`,
              buttonText: {
              displayText: `Yoi Bro🗿👍`,
              },
              type: 1,
              },
              ])    
              dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *3* Dari ${pushname}\n\nAwokaowk Rate 3`, text)          
              break
              case 'rate1':
              sendButMessage(from, `Makasih Bintang 1 Nya Kak`, `Ada Saran Nggak Kak Buat Bot Kami??Kalo Ada Krim\n*${prefix}request* < Apa Yang Mau Di Request In >\nAda Keluh Kesah Buat Bot Kami?Kirim\n${prefix}report < Keluh Kesah Anda >`, [
              {
              buttonId: `${prefix}satujddjduaa`,
              buttonText: {
              displayText: `Sama Sama`,
              },
              type: 1,
              },
              {
              buttonId: `${prefix}ajahdhd`,
              buttonText: {
              displayText: `Yoi Bro🗿👍`,
              },
              type: 1,
              },
              ])  
              dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *1* Dari ${pushname}\n\n\nAwolawok Rate 1 Makanya Bot Nya On In 24Jam Biar Kek Rumah Sakit`, text)             
              break
              case 'rate5':
              teks = args.join(' ')
              dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *5* Dari ${pushname}`, text)
              break
              case 'rate3':
              teks = args.join(' ')
              dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *3* Dari ${pushname}\n\nAwokaowk Rate 3`, text)
              break 
              case 'rate1':
              teks = args.join(' ')
              dha.sendMessage(`${NOwner}`,`Kamu Dapet Rate *1* Dari ${pushname}\n\n\nAwolawok Rate 1 Makanya Bot Nya On In 24Jam Biar Kek Rumah Sakit`, text)
              break          
              case 'sewabot':
              case 'sewa':
sewabg =`
JASA SEWA BOT *${NamaBot}*

🔖 *PRICE HARGA*
_PERMANEN_ : ${HargaPermanen}
_PERBULAN_ : ${HargaPerbulan} 
_PERMINGGU_ : ${HargaPerminggu}

_SEWA PREMIUM_ : ${HargaPremium}

_BUY SC_ : https://github.com/
[ *SC FREE NO BUY* ]

💸 _PAYMENT_
 
💵 _GOPAY_ : *${NomorGopay}*
💶 _DANA_ : *${NomorDana}*
💷 _OVO_ : *${NomorOvo}*
💴 _PULSA_ : *${NomorPulsa}*

${petik} 
MINAT? HUBUNGI https://wa.me/${NomorOwnz}
`
reply(sewabg)
break                                   
//═════════════════════════ [ FUN MENU ] ═════════════════════════
//═════════════════════════ [ CASE BY NAYLA ] ═════════════════════════
//═════════════════════════ [ NO API ] ═════════════════════════
            case 'xkontol':	
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')				 	
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xganteng': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xcantik': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjelek': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xgoblok': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				  
            case 'xbego': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xpintar': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjago': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xnolep': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
		    case 'xmonyet':		     
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				                 	 
            case 'xbabi': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xbeban': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xbaik': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xjahat': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xanjing':  
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				
            case 'xharam': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	 	
			case 'xpakboy': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xpakgirl':  
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 				
            case 'xwibu': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(8)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xhebat': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(9)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
			case 'xsadboy': 
			if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(10)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break 	
		    case 'xsadgirl': 
		    if (!isGroup) return reply("ONLY GRUB")
			if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('TAG ORANG KAK')			
			dha.sendMessage(from, undef2, sticker, {quoted: { key: { fromMe: false, participant: `${body.slice(11)}@s.whatsapp.net`, ...({}) }, message: { "extendedTextMessage": { "text": `*Ehm.. gw ${command1} bro:v!*`} } }, contextInfo: {forwardingScore: 508, isForwarded: true} })   		
			break  
	 	    case 'vganteng': case 'vcantik': case 'vjelek': case 'vgoblok':  
            case 'vbego': case 'vpintar': case 'vjago': case 'vnolep': case 'vmonyet':                 	 
            case 'vbabi': case 'vbeban': case 'vbaik': case 'vjahat': case 'vanjing': 
            case 'vharam': case 'vkontol': case 'vpakboy': case 'vpakgirl': 
            case 'vwibu': case 'vhebat': case 'vsadboy': case 'vsadgirl':			
			if (!isGroup) return reply("ONLY GRUP")
 		    jds = []
		    const AS1 = groupMembers
 		    const CS1 = AS1[Math.floor(Math.random() * AS1.length)]	 	                      
 		    const vcardd = 'BEGIN:VCARD\n' 
            + 'VERSION:3.0\n' 
            + `FN:${command1}\n` 
            + `ORG: Yang Ter ${command1};\n`
            + `TEL;type=CELL;type=VOICE;waid=${CS1.jid.split('@')[0]}:+${CS1.jid.split('@')[0]}\n`
            + 'END:VCARD' 
            dha.sendMessage(from, {displayname: "Jeff", vcard: vcardd}, MessageType.contact, { quoted: mek})
            reply(`dia yang *ter${command1}* disini`)			
	 	    break	 	     
            case 'zganteng': case 'zcantik': case 'zjelek': case 'zgoblok':  
            case 'zbego': case 'zpintar': case 'zjago': case 'znolep': case 'zmonyet':                 	 
            case 'zbabi': case 'zbeban': case 'zbaik': case 'zjahat': case 'zanjing': 
            case 'zharam': case 'zkontol': case 'zpakboy': case 'zpakgirl': 
            case 'zwibu': case 'zhebat': case 'zsadboy': case 'zsadgirl':
            nyy = fs.readFileSync('./ztag.webp')
           	if (!isGroup) return reply("ONLY GRUB") 	 
		    const AS11 = groupMembers		     
 		    const CS21 = AS11[Math.floor(Math.random() * AS11.length)]	 	    		     
			dha.sendMessage(from, nyy, sticker, {quoted: { key: { fromMe: false, participant: `${CS21.jid.split('@')[0]}@s.whatsapp.net`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `aku adalah yang *ter${command1}* disini` }}})
			break
                   case 'ganteng': case 'cantik': case 'jelek': case 'goblok':  
                   case 'bego': case 'pinter': case 'jago': case 'nolep': case 'monyet':                 	 
                   case 'babi': case 'beban': case 'baik': case 'jahat': case 'anjing': 
                   case 'haram': case 'kontol': case 'pakboy': case 'pakgirl': 
               	   case 'wibu': case 'hebat': case 'sadboy': case 'sadgirl': 
  
				   if (!isGroup) return reply(`Ini Bukan Grub Ya Ajg🌹🤙`)
 				   jds = []
				   const A1 = groupMembers
  		 		   const B1 = groupMembers
 				   const C1 = A1[Math.floor(Math.random() * A1.length)]
				   D1 = `yang *ter${command}* disini adalah @${C1.jid.split('@')[0]}`                  
				   jds.push(C1.jid)
				   mentions(D1, jds, true)
				   break
                    case 'gantengcek':
                      	  
                    N = `KE *GANTENGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😎`
                    reply(N)
                    break 
                    case 'cantikcek':
                      	  
                    N = `KE *CANTIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}% 😁*`
                    reply(N)
                    break
                    case 'jelekcek':
                        	
                    N = `KE *J3L3K4N* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤢`
                    reply(N)
                    break 
                    case 'goblokcek':
                      	  
                    N = `KE *GOBLOKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤣`
                    reply(N)
                    break 
                    case 'begocek':
                      	 
                    N = `KE *BEGO* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😂`
                    reply(N)
                    break 
                    case 'pintercek':
                      	  
                    N = `KE *PINTARAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😗`
                    reply(N)
                    break 
                    case 'jagocek':
                      	 
                    N = `KE *JAGOAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 💪`
                    reply(N)
                    break 
                    case 'nolepcek':
                      	  
                    N = `KE *NOLEPAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🧐`
                    reply(N)
                    break 
                    case 'babicek':
                      	  
                    N = `KE *BABIAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤪`
                    reply(N)
                    break 
                    case 'bebancek':
                      	  
                    N = `KE *BEBANAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤬`
                    reply(N)
                    break 
                    case 'baikcek':
                      	  
                    N = `KE *BAIKAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😇`
                    reply(N)
                    break 
                    case 'jahatcek':
                      	  
                    N = `KE *JAHATAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😈`
                    reply(N)
                    break 
                    case 'anjingcek':
                      	   
                    N = `KE *ANJINGAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 👀`
                    reply(N)
                    break                      
                    case 'haramcek':
                      	  
                    N = `KE *HARAMAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🥴`
                    reply(N)
                    break  
                    case 'kontolcek':
                      	   
                    N = `KE *KOMTOLAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🙂`
                    reply(N)
                    break 
                    case 'pakboycek':
                      	   
                    N = `KE *PAKBOYZ* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break 
                    case 'pakgirlcek':
                    N = `KE *PAKGILR* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😏`
                    reply(N)
                    break             
                    case 'sangecek':                      	  
                    N = `JIWA *SANGE* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 🤤`
                    reply(N)
                    break
                    case 'bapercek':                    	  
                    N = `JIWA *BEPERAN* KAMU\n`
                    N += `ADALAH : *${mekla3}${mekla4}%* 😘`
                    reply(N)
                    break     


//═════════════════════════ [ GAME MENU ] ═════════════════════════
//═════════════════════════ [ COPAS AJA ] ═════════════════════════
//═════════════════════════ [ API RANDOM ] ═════════════════════════


         case 'gelud':
               if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
               if (!isGroup) return reply(mess.only.group)
               if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
               if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
               if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
               if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
					
               gelutSkuy = setGelud(`${from}`)
               gelutSkuy.status = false
               gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")
               gelutSkuy.Y = args[0].replace("@", "");
               fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
               starGame = `👑 Memulai Game Baku Hantam 👊🏻

• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud
[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`

               dha.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
               gameAdd(sender, glimit)
               break
        case 'delsesigelud':
               if (!isGroup) return reply(mess.only.group)
               if (fs.existsSync('./media/' + from + '.json')) {
               fs.unlinkSync('./media/' + from + '.json')
               reply('Berhasil Menghapus Sesi Gelud')
               } else {
               reply('Tidak ada sesi yang berlangsung')
}
               break
        case 'delsesittt':
               if (!isGroup) return reply(mess.only.group)
               if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')
               naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
               ky_ttt = naa 
               reply('Sukses Mereset Game')
               break
        case 'tictactoe':
        case 'ttt':
              if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)
              if (!isGroup) return reply(mess.only.group)
              if (args.length < 1) return reply('Tag Lawan Anda! ')
              if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')
              if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target Lawan!')
              ment = mek.message.extendedTextMessage.contextInfo.mentionedJid
              player1 = sender
              player2 = ment[0]
              angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]
              id = from
              gilir = player2
              ky_ttt.push({player1,player2,id,angka,gilir})
              dha.sendMessage(from, 
`*🎳 Memulai Game Tictactoe 🎲*

[@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥
Ketik Y/N untuk menerima atau menolak permainan

Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
              gameAdd(sender, glimit)
              break
case 'caklontong':
game1 = await fetchJson (`https://rest2yeriko.herokuapp.com/api/kuis/caklontong?apikey=Yuzzu`)
setTimeout( () => {
reply(`${kotak} *Soal* :\n${game1.result.result.soal}\n${kotak} *Waktu* : 60detik`)
}, 0)       
setTimeout( () => {
reply(`_Waktu Habis_\n${kotak} *Jawaban* :\n${game1.result.result.jawaban}\n${kotak} *Deskripsi*:\n${game1.result.result.desc}`)
}, 60000)    
break
case 'tebakgambar':
game2 = await fetchJson(`https://rest2yeriko.herokuapp.com/api/kuis/tebakgambar?apikey=Yuzzu`)
game3 = await getBuffer(game2.result.result.soalImg)
setTimeout( () => {
dha.sendMessage(from, game3, image, { quoted:mek, caption: 'Waktu 60detik'})
}, 0)   
setTimeout( () => { 
reply(`_Waktu Habis_\n${kotak} Jawaban :\n${game2.result.result.jawaban}`)
}, 60000)
break
//═════════════════════════ [ END ALL FITUR ] ═════════════════════════
//═════════════════════════ [ WHATSAPP BOT BY ITSCHANDRA ] ═════════════════════════
//═════════════════════════ [ COPAS? SILAHKAN 🗿👍 ] ═════════════════════════

//Tes New
case 'tes':
case 'test':
reply('On')
break
case 'premtes':
if (!isPremium) return reply(mess.only.premium)
reply('work')
break
case 'createcatalog':
if (args.length === 0) return reply(`Example : ${prefix + command} Nama Catalog|Isi Catalog|Nomor Pembuat Catalog\n*Awali Nomor Dengan 62*`)
var nnn = body.slice(15)
var namanye = nnn.split("|")[0]
var isinye = nnn.split("|")[1]
var nomernye = nnn.split("|")[2]
namae = `${namanye}`
ownereJid = `${nomernye}@s.whatsapp.net`
nomor = 1
stod = `${sender}`
stst = await dha.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
menunye = `${isinye}`
anu = dha.prepareMessageFromContent(from,{"productMessage": {"product": {"productImage": {"url": "https://mmg.whatsapp.net/d/f/Au9n7y-3XR4R0WUNdcQNNM2_mMcYLdVQQP9NkcG2sI-D.enc","mimetype": "image/jpeg","fileSha256": "ebKk5FKDC/fSbQKa4bmQ+EHbDZ/rqi78a+eYm4Z3TfQ=","fileLength": "20040","height": 390,"width": 390,"mediaKey": "+k8is4MAgrumDtQJQYfXtfN/haBmhmr4j4OKpM0Vl04=","fileEncSha256": "yu+xoTWjIR6UHVqdGNPINUyn6s50B+wDeZorjX1DP14=","jpegThumbnail": fs.readFileSync("./media/buat.jpg")},"productId": "9999999","title": `${namae}`, "description": `${menunye}`,"productImageCount": 1},"businessOwnerJid": `${ownereJid}`,"contextInfo": {"forwardingScore": 9999,"isForwarded": true}}},{quoted: mek, contextInfo: { mentionedJid: [stod]}})
dha.relayWAMessage(anu)
break
case 'catalog': 
nama = 'Tes Catalog'
ownerJid = `${NOwner}`
nomor = 1
stod = `${sender}`
stst = await dha.getStatus(`${sender.split('@')[0]}@c.us`)
stst = stst.status == 401 ? '' : stst.status
menunya = `Ngetes Uyy`
anu = dha.prepareMessageFromContent(from,{"productMessage": {"product": {"productImage": {"url": "https://mmg.whatsapp.net/d/f/Au9n7y-3XR4R0WUNdcQNNM2_mMcYLdVQQP9NkcG2sI-D.enc","mimetype": "image/jpeg","fileSha256": "ebKk5FKDC/fSbQKa4bmQ+EHbDZ/rqi78a+eYm4Z3TfQ=","fileLength": "20040","height": 390,"width": 390,"mediaKey": "+k8is4MAgrumDtQJQYfXtfN/haBmhmr4j4OKpM0Vl04=","fileEncSha256": "yu+xoTWjIR6UHVqdGNPINUyn6s50B+wDeZorjX1DP14=","jpegThumbnail": fs.readFileSync("./media/price.jpg")},"productId": "9999999","title": `${nama}`, "description": `${menunya}`,"productImageCount": 1},"businessOwnerJid": `${ownerJid}`,"contextInfo": {"forwardingScore": 9999,"isForwarded": true}}},{quoted: mek, contextInfo: { mentionedJid: [stod]}})
dha.relayWAMessage(anu)
break
default:
if (fs.existsSync(`./media/${from}.json`)) {
	gelutSkuy = setGelud(`${from}`)
	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
		gelutSkuy.status = true
		rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]
		winR = rand0m[Math.floor(Math.random() * rand0m.length)]
		fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))
		starGame = `👑 Gelud Game 🤙🏻 

Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}
• Pemenangnya adalah [ @${winR} ] `
	   dha.sendMessage(from, starGame, text, {quoted: troli, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})
		fs.unlinkSync("./media/" + from + ".json");
	} else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
		dha.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻
• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: troli, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})
		fs.unlinkSync("./media/" + from + ".json");
	}
}

if (isTTT && isPlayer2){
if (budy.startsWith('Y')){
  tto = ky_ttt.filter(ghg => ghg.id.includes(from))
  tty = tto[0]
  angka = tto[0].angka
  ucapan = 
`*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=❎
Player2 @${tty.player2.split('@')[0]}=⭕

Giliran = @${tty.player1.split('@')[0]}

   ${angka[1]}${angka[2]}${angka[3]}
   ${angka[4]}${angka[5]}${angka[6]}
   ${angka[7]}${angka[8]}${angka[9]}`
  dha.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
  }
if (budy.startsWith('N')){
tto = ky_ttt.filter(ghg => ghg.id.includes(from))
tty = tto[0]
naa = ky_ttt.filter(toek => !toek.id.includes(from)) 
ky_ttt = naa
dha.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:troli,contextInfo:{mentionedJid:[tty.player2]}})
}
}

if (isTTT && isPlayer1){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '❎'
main[0].angka[nuber] = s
main[0].gilir = main[0].player1
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = 
`*🎳Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dha.sendMessage(from, ucapan1, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()

if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()

if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()

if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()

if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()

if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()

if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()

if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()

if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*_Permainan Seri ??👌_*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player2 @${tty.player2.split('@')[0]}=⭕
Player1 @${tty.player1.split('@')[0]}=❎

Giliran = @${tty.player2.split('@')[0]}

${ttt}`
dha.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
}
if (isTTT && isPlayer2){
nuber = parseInt(budy)
if (isNaN(nuber)) return
if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')
main = ky_ttt.filter(hjh => hjh.id.includes(from)) 
if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')
if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')
s = '⭕'
main[0].angka[nuber] = s
main[0].gilir = main[0].player2
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
ky_ttt = naa
pop = main[0]
ky_ttt.push(pop)
tto = ky_ttt.filter(hgh => hgh.id.includes(from))
tty = tto[0]
angka = tto[0].angka
ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`

ucapmenang = () => {
ucapan1 = `*🎳 Result Game Tictactoe 🎲*

*Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n
*Ingin bermain lagi? ${prefix}tictactoe*`
ucapan2 = `*🎳 Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
dha.sendMessage(from, ucapan1, text, {quoted:troli, contextInfo:{mentionedJid: [tty.player2]}})
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}

if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()
if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()
if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()
if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()
if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()
if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()
if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()
if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()
if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !
ttt.includes('5️⃣') && !
ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){
ucapan1 = `*🎳Result Game Tictactoe 🎲*

*_Permainan Seri🗿👌*`
ucapan2 = `*🎳 Result Game Tictactoe 🎲*

*Hasil Akhir:*

${ttt}`
reply(ucapan1)
naa = ky_ttt.filter(hhg => !hhg.id.includes(from))
return ky_ttt = naa
}
ucapan = `*🎳 Game Tictactoe 🎲*

Player1 @${tty.player1.split('@')[0]}=⭕
Player2 @${tty.player2.split('@')[0]}=❎
   
Giliran = @${tty.player1.split('@')[0]}

${ttt}`
 dha.sendMessage(from, ucapan, text, {quoted: troli, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})
} else {
}
if (budy.startsWith('>')){
if (!mek.key.fromMe && !isOwner) return
try {
return dha.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}
if (!isOwner) return
if (budy.startsWith('+')) {
try {
console.log(color('[ EVAL ]', 'pink'), color(time), budy, color('dari', 'yellow'), pushname, color('di'), isGroup ? groupName : 'Private Chat')
reply(require('util').format(eval(`;(async () => { ${budy.slice(2)} })()`)))
} catch(e) {
console.log(e)
err = String(e)
js = JSON.stringify(e, null, 2)
if (js == '{}') js = { err }
js = JSON.stringify(js, null, 2)
js = '```' + js + '```'
reply('_' + err + '_\n\n' + js)
}
}
if (!isGroup && isCmd && !mek.key.fromMe){
teks = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`
dha.sendMessage(from, {text:teks, jpegThumbnail:fs.readFileSync('./media/canss.jpg')}, 'extendedTextMessage', {sendEphemeral:true, quoted:mek, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
}
	} 
if (isGroup && budy != undefined) {
} else {
console.log('[',color('TEXT','teal'),']',`Message : ${budy} From`, color(pushname))
}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	}
}



