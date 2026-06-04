const express = require('express')

const app = express()

const user = require('./user')

app.use(express.json())

app.use('/user', user)

const Userdata = require('./data')
const connectDB = require('./db')

connectDB()

// CREATE USER
app.post("/", async (req, res) => {
    try {
        const data = req.body;

        const newUser = new Userdata({
            name: data.name,
            email: data.email,
            password: data.password
        });

        await newUser.save();

        res.send(newUser);
    } catch (err) {
        res.status(500).send("Error creating user");
    }
});


// ✅ UPDATE PASSWORD USING PUT
app.put("/user/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const { password } = req.body;

        const updatedUser = await Userdata.findByIdAndUpdate(
            userId,
            { password: password },
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).send("User not found");
        }

        res.send({
            message: "Password updated successfully"
        });

    } catch (err) {
        res.status(500).send("Error updating password");
    }
});

// DELETE PASSWORD USING DELETE


app.delete("/user/:id", async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await Userdata.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send("User not found");
        }

        res.send({
            message: "User deleted successfully",
           
        });

    } catch (err) {
        res.status(500).send("Error deleting user");
    }
});
        
app.listen(4000, () => {
    console.log('chll gyaa')
}); 