const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API Node and MySql',
        description : 'Nodjs + MySQL API',
    },
    host: 'localhost:8000',
    schemas : ['http'],
};

const outputFile = './path/swagger-output.json';
const endpointsFiles = ['./routes.js']

swaggerAutogen(outputFile,endpointsFiles,doc).then(()=>{
    require('./index.js')
})