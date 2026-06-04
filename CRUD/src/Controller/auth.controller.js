import pract from "../Model/schema.js";
import bcrypt  from 'bcrypt'
import jwt from 'jsonwebtoken'


export const registerUser = async (req, res) => {
    const { name, age, password } = req.body

    const hashPassword = await bcrypt.hash(password, 10)
    const user = await pract.create({
        name, age, password: hashPassword
    });


    res.status(201).json({
        message: "schema created successfully",
        data: user
    })
}


export const loginUser =  async (req,res)=>{

    const {name,password}= req.body;

    const user = await pract.findOne({name});

    if (!user){
        return res.json({message:"wrong id and password"});

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "Invalid email or password" });
    }
    }

    const token = jwt.sign(
    {userid: user._id},
    process.env.JWT_SECRET_KEY,
    {expiresIn : '1h'}
    )

    res.json({
        message:"LOGIN SUCCESS",
        token
    });
}