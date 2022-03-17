const exec = require("child_process").exec;

function init(){
    console.log(process.argv);

    const processer = exec(`node src/${process.argv[2]}.js`);
    processer.stdout.on("data",function(data){
        console.log(data.toString());
    })

    processer.stderr.on("data",function(data){
        console.error(data.toString());
    })

}

init();

