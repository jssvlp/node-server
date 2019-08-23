const path = require('path')
const express = require('express')
const admin = express(),
            ADMIN_DIST_DIR = __dirname+'/build-admin',
            ADMIN_HTML_FILE = path.join(ADMIN_DIST_DIR, '/index.html')

const client = express(),
            CLIENT_DIST_DIR = __dirname+'/build-client',
            CLIENT_HTML_FILE = path.join(CLIENT_DIST_DIR, '/index.html')


admin.use(express.static(ADMIN_DIST_DIR))
client.use(express.static(CLIENT_DIST_DIR))

client.get('*', (req, res) => {
    res.sendFile(CLIENT_HTML_FILE)
})

admin.get('*', (req, res) => {
    res.sendFile(ADMIN_HTML_FILE)
})
const ADMIN_PORT = process.env.PORT || 8080
const CLIENT_PORT = process.env.PORT || 8081

admin.listen(ADMIN_PORT, () => {
    console.log(`App listening to ${ADMIN_PORT}....`)
    console.log('Press Ctrl+C to quit.')
});

client.listen(CLIENT_PORT,()=>{
  console.log(`App listening to ${CLIENT_PORT}....`)
  console.log('Press Ctrl+C to quit.')
});