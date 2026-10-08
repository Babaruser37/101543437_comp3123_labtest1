const fs = require('fs');
const path = require('path');

const createLogFiles = (data) => {
    if(fs.existsSync(path.join(__dirname, 'logs')) === false){
        console.log("Logs dir doesnt exist");
        fs.mkdirSync(path.join(__dirname, 'logs'))
    }

    for (let i = 0; i < 11; i++) {
        data += "\r\n"
        fs.appendFileSync(path.join(__dirname, `logs/log${i}.txt`), data, (err) => {
            if(err){
                throw err
            }
        })
        console.log(`created file: log${i}`);
    
    }
    
}

const deleteLogFiles = () => {
    const logsDir = path.join(__dirname, 'logs')
    if(fs.existsSync(logsDir) === true){

        fs.readdir(logsDir, (err, files) => {
            if(err){
                throw err
            }
            let remaining = files.length
            const removeDir = () => {
                fs.rmSync(logsDir, { recursive: true, force: true });
                console.log("deleted logs directory");
            }
            if(remaining === 0){
                removeDir()
            }
            files.forEach(file => {
                console.log(`deleting file: ${file}`);
                fs.unlink(path.join(logsDir, file), (err) => {
                    if(err){
                        throw err
                    }
                    remaining--
                    if(remaining === 0){
                        removeDir()
                    }
                })
            });
        });
    }
}

createLogFiles("Hello world")
deleteLogFiles()