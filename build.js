const fs = require('fs'), 
    path = require('path'),
    { mdToPdf } = require('md-to-pdf'), 
    build_dir = './build/', 
    docs_dir = './docs/';

(() => {
    if (!fs.existsSync(build_dir)) {
        fs.mkdirSync(build_dir);
    } else { 
        fs.rmdirSync(build_dir, { recursive: true });
        fs.mkdirSync(build_dir);
    }

    fs.readdirSync(docs_dir).forEach(doc => { 
        toPdf(doc);
    });
})()

async function toPdf(md_filename) {
    const pdf = await mdToPdf({ path:  path.join(docs_dir, md_filename) }).catch(console.error);

    if (fs.existsSync(path.join(build_dir, md_filename))) {
        fs.rmSync(path.join(build_dir, md_filename));
    }

    fs.writeFileSync(path.join(build_dir, `${md_filename.replace('.md', '')}.pdf`), pdf.content);
}   