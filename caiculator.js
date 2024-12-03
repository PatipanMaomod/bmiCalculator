const express = require('express');
var bodyParser = require('body-parser')
const app = express();


app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res)=>{
   res.sendFile(__dirname + "/index.html");
} );

app.get("/bmiCalculator",(req,res)=>{
   res.sendFile(__dirname + "/bmiCalculator.html")
})
app.post("/",(req ,res)=>{
   console.log(req.body.num1);
   console.log(req.body.num2);
   var result = Number(req.body.num1) + Number(req.body.num2)
   res.send("บวกกันได้ = "+result);
})

app.post("/bmiCalculator",(req ,res)=>{
   console.log(req.body.heigth);
   console.log(req.body.weigth);

   


   var MBI = Number(req.body.weigth) /((Number(req.body.heigth)*0.01) ** 2);



   if (MBI < 18.5) {
      description = "ผอมเกินไป (เสี่ยงต่อการได้รับสารอาหารไม่เพียงพอ)";
   } else if (MBI >= 18.6 && MBI <= 22.9) {
      description = "น้ำหนักปกติ เหมาะสม (มีความเสี่ยงต่อโรคต่ำที่สุด)";
   } else if (MBI >= 23 && MBI <= 24.9) {
      description = "น้ำหนักเกิน (ถือว่ามีความเสี่ยงมากกว่าคนปกติ)";
   } else if (MBI >= 25 && MBI <= 29.9) {
      description = "อ้วน (ยังมีความเสี่ยงต่อการเกิดโรค)";
   } else {
      description = "อ้วนอันตราย (เสี่ยงต่อการเกิดโรคสูง)";
   }
   res.send("คุณมีค่า BMI = " +  MBI.toFixed(2) + " , คุณอยู่ในเกณฑ์ = " + description)
})

app.listen(3000, ()=> {
   console.log ("Server is running on port 3000");
});
