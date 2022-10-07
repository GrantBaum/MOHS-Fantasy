if(!process.argv[2]) {
    console.log('Please, specify a folder to serve')
    process.exit();
  }
  
  require('./app.js')(process.argv[2]);
  