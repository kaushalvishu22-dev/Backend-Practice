import express from "express"
import nodemailer from "nodemailer"
import dotenv from "dotenv"

const app = express();
app.use(express.json())
dotenv.config()

const transporter = nodemailer.createTransport({
    service :"gmail",

    auth:{
     user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    }
});

transporter.verify((error,success)=>{ 
    if(error){
        console.log("ERROR AGYA")
        console.log(error)
    }
    else{"SERVER READY"}
});

app.post('/send',async(req,res)=>{
    
    const {to,subject,message}=req.body;


if(!to || !subject || !message){
    return res.status(400).json({
        success:false,
        message:"ALL IS REQUIRED"
    });
}

const Mail = {
      from: process.env.EMAIL_USER, 

      to: to, 

      subject: subject,

      text: message, 
    };

    const info = await transporter.sendMail(Mail);

    res.status(200).json({
        success: true,
      message: "Email sent successfully",
      messageId: info.messageId,
    });
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
