const PDFMerger = require('pdf-merger-js')

var merger = new PDFMerger();

const mergedPDF = async (file1, file2)=>{
    await merger.add(file1)
    await merger.add(file2)
    let date = new Date().getTime()
        await merger.save(`public/${date}.pdf`)
    return date
}

module.exports = {mergedPDF}