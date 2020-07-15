fx_version "adamant"
game "gta5"

client_script {
    "client/client.lua",
    "config.lua"
}

server_script {
    "@mysql-async/lib/MySQL.lua",
    "server/banking.lua"
}

ui_page "web/html/index.html"

files {
    "web/html/index.html",
    "web/html/main.js"
}