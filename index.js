/*
    第一題
    input 輸入
    func1(2)
    func1(4)
    func1(8)

    output 輸出
    6
    12
    24

*/
function func1(num){
    return num*3
}
console.log( func1(2) )
console.log( func1(4) )
console.log( func1(8) )

/*
    第二題
    input 輸入
    func2("a,b,c")
    func2("hi,hello")

    output 輸出
    ["a","b","c"]
    ["hi","hello"]
*/
function func2(str){
    return str.split(",")
}
console.log( func2("a,b,c") )
console.log( func2("hi,hello") )

/*
    第三題
    BMI計算: BMI = 體重(公斤) / 身高2(公尺2)
    // input 輸入 bmi(cm,kg)
    bmi(178,20)
    bmi(178,65)
    bmi(178,77)
    bmi(178,89)
    bmi(178,100)
    bmi(178,200)
    // BMI(身高,體重)

    // output 輸出
    "體重過輕"
    "正常範圍"
    "異常範圍"
    "異常範圍"
    "異常範圍"
    "異常範圍"
*/
function bmi(height, weight){
    let bmi = Number((weight / Math.pow(height / 100, 2)).toFixed(2));
    return detection(bmi)
}
function detection(num){
    let temp = ''
    if(num>=35) temp = '異常範圍'
    else if(num>=30&&num<35) temp = '異常範圍'
    else if(num>=27&&num<30) temp = '異常範圍'
    else if(num>=24&&num<27) temp = '異常範圍'
    else if(num>=18.5&&num<24) temp = '正常範圍'
    else if(num<18.5) temp = '體重過輕'
    
    return temp
}
console.log( bmi(178,20))
console.log( bmi(178,65))
console.log( bmi(178,77))
console.log( bmi(178,89))
console.log( bmi(178,100))
console.log( bmi(178,200))

/*
    第四題
    是不是 08 開頭
    input 輸入
    checkPhoneNumber("0855717222")
    checkPhoneNumber("331")
    checkPhoneNumber("01839398")
    checkPhoneNumber("0877121333")
    
    output 輸出
    true
    false
    false
    true
*/

function checkPhoneNumber(str){
    let phoneRex = /^(08)/
    return phoneRex.test(str)
}

console.log(checkPhoneNumber("0855717222"))
console.log(checkPhoneNumber("331"))
console.log(checkPhoneNumber("01839398"))
console.log(checkPhoneNumber("0877121333"))


/*
    第五題
    input 輸入
    multiplication8(3)
    multiplication8(5)

    output 輸出 為字串格式
    multiplication(3)
    8x1=8
    8x2=16
    8x3=24

    multiplication(5)
    8x1=8
    8x2=16
    8x3=24
    8x4=32
    8x5=40
*/
function multiplication8(num){
    let str = ''
    for(let i =1 ; i<= num ;i ++){
        str += `8x${i}=${i*8}\n`
    }
    return str
}
console.log(multiplication8(3))
console.log(multiplication8(5))

/*
    第六題
    判斷帶入參數是否有陣列中有大於的值
    const numAry = [1,3,4,6,8];
    // input 輸入
    checkNum(0)
    checkNum(3)
    checkNum(6)
    checkNum(20)


    // output 輸出 obj 的結果
    []
    [1,3]
    [1,3,4,6]
    [1,3,4,6,8]

*/
function checkNum(num){
    const numAry = [1,3,4,6,8];
    return numAry.filter((item)=>num >=item)
}

console.log(checkNum(0))
console.log(checkNum(3))
console.log(checkNum(6))
console.log(checkNum(20))

/*
    第七題
    選出從1到指定數字範圍裡面的奇數
    // input 輸入
    prime(7)
    prime(15)


    // output  請以字串來顯示
    "1,3,5,7"
    "1,3,5,7,9,11,13,15"
*/
function prime(num){
    let temp = []
    for(let i=1 ; i<=num ; i++){
        temp.push(i)
    }
    return temp.filter((item)=> item%2 != 0).toString();
}
console.log(prime(7))
console.log(prime(15))

/*
    第八題

    請宣告一個 obj 函式，並 return 回傳 obj 的第一個參數
    obj(2).y()
    obj(50).y()

    // output 輸出
    2
    50
*/
function obj(num){
    return {
        first:num,
        y:function(){
        //    return this.first
            return num
        }
    }
}
console.log(obj(2).y())
console.log(obj(50).y())

/*
    第九題 兩個陣列尋找相同數字
    請找出 a 陣列裡面，若有相同數值，則篩選出來成為一個陣列
    const a = [1,3,4,6,8];

    // input 輸入
    checkSame([3,4,9])
    checkSame([1,2,3,4,5,6,9])


    // output 輸出 obj 的結果
    [3,4]
    [1,3,4,6]
*/
function checkSame(array){
    const a = [1,3,4,6,8];
    let result = []
    let temp = new Set([...array])
    temp.forEach((item)=>{
      const find = a.find((findItem)=>findItem===item)
      if(find===undefined) return
      result.push(find)
    })
    return result
}
console.log(checkSame([3,4,9]))
console.log(checkSame([1,2,3,4,5,6,9]))
// console.log(checkSame([1,2,3,4,4,4,5,6,9]))

/*
    彩球共 10 顆，分別是 1~10 號
    新規則：執行 lotto 函式會隨機顯示 4 個號碼
    // input 輸入
    lotto()
    lotto()
    lotto()


    // output  下方為範例隨機選號
    // 第一筆
    1,3,8,9
    3,2,8,10
    4,5,7,9
*/

function isRepet(arr,num){
    return arr.includes(num)
}
function lotto(){
    let temp = [];
    let count = 0;
    while (count < 4) {
        let num = Math.floor(Math.random() * 10) + 1; //隨機生成 1~10數字
        if ( !isRepet(temp,num) ) { // 透過 isRepet 判斷 所生成的該數字是否在陣列裡，有則重跑while ，沒有push到temp裡面，計次+1
            temp.push(num);
            count++;
        }
    }
    return temp.toString();
}

console.log( lotto() )
console.log( lotto() )
console.log( lotto() )