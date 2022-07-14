const fs = require('fs');
const colors = require('colors/safe');

const createFile = (base = 5) => {
    return new Promise((resolve, reject) => {
        try {
            let buffer = '';

            console.log(colors.green('================='));
            console.log('Table of ', colors.blue(base));
            console.log(colors.green('================='));

            for (let i = 1; i <= 10; i++) {
                buffer += `${base} x ${i} = ${base * i}\n`;
            }
            
            console.log(buffer);
        
            // fs.writeFile(`table-${base}.txt`, buffer, (error) => {
            //     if (error) throw error;
            //     console.log('File created');
            // });
        
            // console.log(`File table-${base}.txt created`);

            fs.writeFileSync(`table-${base}.txt`, buffer);
            // const created = fs.writeFileSync(`table-${base}.txt`, buffer);
            // console.log('created: ', created);
            // console.log('typeof created: ', typeof created);
            resolve(`table-${base}.txt`);
        } catch (error) {
            // console.log('error: ', error);
            // console.log('typeof error: ', typeof error);
            reject(error);
        }
    });
};

const createFileAsync = async ({b: base = 5, l: list = false, t: to = 10}) => {
    try {
        
        let buffer, bufferText = '';
        
        for (let i = 1; i <= to; i++) {
            buffer += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
            bufferText += `${base} x ${i} = ${base * i}\n`;
        }
    
        if (list) {
            console.log(colors.green('================='));
            console.log('Table of '.green, colors.blue(base));
            console.log(colors.green('================='));
            
            console.log(buffer);
        }
    
        // fs.writeFile(`table-${base}.txt`, buffer, (error) => {
        //     if (error) throw error;
        //     console.log('File created');
        // });
    
        // console.log(`File table-${base}.txt created`);

        fs.writeFileSync(`./output/table-${base}.txt`, bufferText);
        // const created = fs.writeFileSync(`table-${base}.txt`, buffer);
        // console.log('created: ', created);
        // console.log('typeof created: ', typeof created);
        return `table-${base}.txt`;
    } catch (error) {
        // console.log('error: ', error);
        // console.log('typeof error: ', typeof error);
        throw error;
    }
};

module.exports = {
    // createFile: createFile
    createFile,
    createFileAsync
};