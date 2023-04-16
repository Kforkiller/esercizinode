const fs = require("fs")
fs.writeFile("outPutFile.txt", "Ciao (file creato)", (err) => {
    if (err) throw(err)
    console.log("write a file...")
})