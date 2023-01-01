/* Creditos a https://github.com/unptoadrih15/UPABOT-MD */
let handler = async (m, { conn, isBotAdmin }) => {
if (!isBotAdmin) throw 'No soy admin, no puedo realizar la acción'
conn.groupParticipantsUpdate(m.chat, [m.sender], 'demote')}
handler.tags = ['owner']
handler.command = handler.help = ['deladmin', 'desadmin']
handler.rowner = true 
export default handler