const mineflayer = require('mineflayer')

// Bot settings
const bot = mineflayer.createBot({
  host: 'Lifestealcrack.aternos.me', // Your Aternos IP
  port: 46262, // Your server port
  username: 'AFK_Bot', // Bot name (for cracked server)
  version: '1.21.6' // Exact version to avoid mismatch
})

bot.on('spawn', () => {
  console.log('✅ Bot joined Lifestealcrack 1.21.6 and is keeping it alive.')
  bot.chat('AFK bot is online to keep the server alive!')
})

// Move every 50s to prevent AFK kick
setInterval(() => {
  bot.setControlState('forward', true)
  setTimeout(() => bot.setControlState('forward', false), 1000)
}, 50000)
