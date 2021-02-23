fx_version "adamant"
game "gta5"

client_script {
    "client/client.js"
}

server_script {
    "@mysql-async/lib/MySQL.lua",
    "server/banking.lua"
}

ui_page "html/index.html"

files {
    "html/index.html",
    "html/*.js"
}