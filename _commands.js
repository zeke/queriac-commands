var basicCSV = require("basic-csv")
var fs = require("fs")
var fmt = require("util").format

basicCSV.readCSV("_commands.csv", function (error, rows) {
  rows.forEach(function(row){
    var keyword = row[0]
    var script = row[1]
    var title = row[2]
    var body = row[3]
    var filename = keyword+".js"
    var content = ""

    if (keyword.match(/\//)) return
    if (keyword.match(/Keyword/)) return

    if (title)
      content += fmt("// %s\n\n", title)

    if (body)
      content += fmt("/*\n%s\n*/\n\n", body)

    content += script

    // console.log(filename)
    // console.log("\n\n\n\n", filename, content)
    fs.writeFileSync(filename, content)
  })
})
