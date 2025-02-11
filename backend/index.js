import express from 'express';
import cookieParser from "cookie-parser"
import cors from 'cors'
import mongoose from "mongoose"
import dotenv from 'dotenv'


import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
import doctorRoute from "./routes/doctor.js"
import inventoryRoute from "./routes/inventory.js"
import bookingRoute from "./routes/booking.js"

dotenv.config()

const app=express()
const port=process.env.PORT || 8000

const corsOptions={
    origin:true
}

app.get('/',(req, res)=>{
    res.send("Api is test working")
})


//database conection
mongoose.set('strictQuery',false)
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            
        })

        console.log('mongoDB is conected') 
    }catch (err){
        console.log('mongoDB is conection failed true ') 
    }
}
//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute); //domain/api/v1/auth/register
app.use('/api/v1/users',userRoute); //domain/api/v1/users/...
app.use('/api/v1/doctors',doctorRoute); //domain/api/v1/doctors/
app.use('/api/v1/inventory',inventoryRoute); //domain/api/v1/inventory/
app.use('/api/v1/bookings',bookingRoute); //domain/api/v1/auth/register



app.listen(port,()=>{
    connectDB();
    console.log("server running on port: "+port)
})




