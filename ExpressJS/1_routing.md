# ExpressJS Web Framework

## การติดตั้ง
การติดตั้งทำได้โดยการติดตั้งผ่าน `npm` โดยให้ทำการติดตั้ง `express-generator` ก่อน ดังนี้

```
bower install express-generator -g
```

## สร้าง Project ใหม่

```
express myApp
cd myApp
npm install
```
เริ่มใช้งาน โดยใช้คำสั่ง
```
npm start
```
จากนั้นเปิดเบราเซอร์แล้วไปที่  `http://localhost:3000`

## ไฟล์สำหรับการใช้งานอยู่ในโฟลเดอร์ routes
- `index.js`  Routing หลัก สำหรับ /
- `users.js`  Routing สำหรับ /users

## Routing

```
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

```
จากด้านบนเวลาเรียกใช้งานผ่านเบราเซอร์จะเรียกผ่าน http://localhost:3000/
`res.render()` สำหรับเรียกใช้งานไฟล์ view ในโฟลเดอร์ views/index.jade พร้อมกับการส่งค่าตัวแปรไปให้ view ผ่านตัวแปร title

## การทำงานของ ExpressJS
การทำงานของ Express ทำงานในรูปแบบ MVC (Model/View/Controller) เหมือน Framework ทั่วไป


    USER ---> CONTROLLER---> MODEL(Database)
          \        |
            \      |
              \    v
                  VIEW (Jade)


## Routing Method

- `app.get()`
- `app.post()`
- `app.head()`
- `app.put()`
- `app.delete()`
- `app.patch()`
- `app.all()`

## Routing Path

```
app.get('/', function (req, res) { ... })  --> /
app.get('/users', function (req, res) { ... })  --> /users
app.get('/user.list', function (req, res) { ... })  --> /users.listing
app.get('/users/detail/:id', function (req, res) { ... })  --> /users/detail/10
```

## Static file

ใช้สำหรับกำหนดให้สามารถเรียกใช้งานไฟล์ ผ่านทาง url ได้โดยตรง โดยไม่ผ่าน routing เช่น CSS, JavaScript

```
app.use(express.static('public'));
```

`public` คือ โฟลเดอร์ที่เก็บไฟล์

## Middleware
Middlewere เป็นฟังก์ชั่นที่ใช้ทำงานร่วมกับ request และ response  ฟังก์ชัน โดยจะทำงานก่อนที่จะทำการ render view โดยสามารถทำการรันคำสั่ง หรือ ตรวจสอบตัวแปรก่อนจะส่งให้ view ต่อไป ตัวอย่างการใช้งานเช่น การทำระบบ authen โดยการตรวจสอบ session ก่อนจะทำการใช้งาน controller หรือ view โดยจะใช้ method  `next()` เพื่อให้ทำงานในฟังก์ชั่น ต่อไป
### การใช้งาน

```
app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});
```
จากตัวอย่างทุกครั้งที่เรียกใช้งาน url อะไรก็ตาม express จะแสดงเวลาออกสู่หน้า console ทุกครั้ง
เราสามารถกำหนด middleware ให้เป็นชื่อฟังก์ชัน เพื่อให้ง่ายต่อการใช้งาน

```
var auth = function (req, res, next) {
    if (req.session.username) {
        next();
    } else {
        res.redirect('/login');
    }
};

app.use('/users', auth, users);
```
