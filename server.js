require('dotenv').config();
let errArr = [];
let infoArr = [];
let infoArr1 = [], infoArr2 = [], infoArr3 = [], infoArr4 = [], infoArr5 = [], 
infoArr6 = [], infoArr7 = [], infoArr8 = [], infoArr9 = [], infoArr10 = [], infoArr11 = [], 
infoArr12 = [], infoArr13 = [], infoArr14 = [], infoArr15 = [], infoArr16 = [],
infoArr17 = [], infoArr18 = [], infoArr19 = [], infoArr20 = [], infoArr21 = [],
infoArr22 = [], infoArr23 = [], infoArr24 = [], infoArr25 = [], infoArr26 = [],
infoArr27 = [], infoArr28 = [], infoArr29 = [], infoArr30 = [], infoArr31 = [];

let localData = {
  err: errArr,
  infoArr: infoArr,
  infoArr1: infoArr1,
  infoArr2: infoArr2,
  infoArr3: infoArr3,
  infoArr4: infoArr4,
  infoArr5: infoArr5,
  infoArr6: infoArr6,
  infoArr7: infoArr7,
  infoArr8: infoArr8,
  infoArr9: infoArr9,
  infoArr10: infoArr10,
  infoArr11: infoArr11,
  infoArr12: infoArr12,
  infoArr13: infoArr13,
  infoArr14: infoArr14,
  infoArr15: infoArr15,
  infoArr16: infoArr16,
  infoArr17: infoArr17,
  infoArr18: infoArr18,
  infoArr19: infoArr19,
  infoArr20: infoArr20,
  infoArr21: infoArr21,
  infoArr22: infoArr22,
  infoArr23: infoArr23,
  infoArr24: infoArr24,
  infoArr25: infoArr25,
  infoArr26: infoArr26,
  infoArr27: infoArr27,
  infoArr28: infoArr28,
  infoArr29: infoArr29,
  infoArr30: infoArr30,
  infoArr31: infoArr31,
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
    if (tempJson.hasOwnProperty('error'))
      errArr.push(tempJson);
    else {
      let logDate = new Date(tempJson.time).getDate();
      // let logDateKey = 'infoArr' + logDate;

      // 일별 서비스 콜 수 조회용
      switch (logDate) {
        case 1: infoArr1.push(tempJson); break;
        case 2: infoArr2.push(tempJson); break;
        case 3: infoArr3.push(tempJson); break;
        case 4: infoArr4.push(tempJson); break;
        case 5: infoArr5.push(tempJson); break;
        case 6: infoArr6.push(tempJson); break;
        case 7: infoArr7.push(tempJson); break;
        case 8: infoArr8.push(tempJson); break;
        case 9: infoArr9.push(tempJson); break;
        case 10: infoArr10.push(tempJson); break;
        case 11: infoArr11.push(tempJson); break;
        case 12: infoArr12.push(tempJson); break;
        case 13: infoArr13.push(tempJson); break;
        case 14: infoArr14.push(tempJson); break;
        case 15: infoArr15.push(tempJson); break;
        case 16: infoArr16.push(tempJson); break;
        case 17: infoArr17.push(tempJson); break;
        case 18: infoArr18.push(tempJson); break;
        case 19: infoArr19.push(tempJson); break;
        case 20: infoArr20.push(tempJson); break;
        case 21: infoArr21.push(tempJson); break;
        case 22: infoArr22.push(tempJson); break;
        case 23: infoArr23.push(tempJson); break;
        case 24: infoArr24.push(tempJson); break;
        case 25: infoArr25.push(tempJson); break;
        case 26: infoArr26.push(tempJson); break;
        case 27: infoArr27.push(tempJson); break;
        case 28: infoArr28.push(tempJson); break;
        case 29: infoArr29.push(tempJson); break;
        case 30: infoArr30.push(tempJson); break;
        case 31: infoArr31.push(tempJson); break;
      }

      //Grafana 대시보드용
      infoArr.push(tempJson)
    }
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