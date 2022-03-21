require('dotenv').config();
let jsonArr = [];
let localData = {
  err: jsonArr,
};

const f = require('fs');
let inputFile = process.env.INPUT_FILE;
let outputFile = process.env.OUTPUT_FILE;

// 비동기처리
// f.readFile(inputFile, 'utf-8', function (err, data) {
//   if (err) {
//     console.log('read file err')
//     console.log(err)
//   } else {
//     let dataArr = data.split('\n')
//     dataArr.pop()
//     dataArr.map((data, index, arr) => {
//       let tempJson = JSON.parse(data);
//       tempJson.id = index;
//       jsonArr.push(tempJson);
//     })
//     f.writeFile(outputFile, JSON.stringify(localData), () => { })
//   }
// })

try {
  let readText = f.readFileSync(inputFile, 'utf-8');
  let dataArr = readText.split('\n')
  dataArr.pop()
  dataArr.map((data, index, arr) => {
    let tempJson = JSON.parse(data);
    tempJson.id = index;
    jsonArr.push(tempJson);
  })
  f.writeFileSync(outputFile, JSON.stringify(localData))
}
catch (e) {
  console.log(e)
}

const jsonServer = require('json-server');
const server = jsonServer.create()
const router = jsonServer.router(outputFile)
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

server.listen(7000, () => {
  console.log('JSON Server is running')
})