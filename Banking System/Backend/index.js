const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname+"/public")));


mongoose.connect('mongodb+srv://admin_hammad:test123@cluster0.tlbhe.mongodb.net/banking_system')


const customersSchema = new mongoose.Schema({
    name: {type:String},
    email: {type:String},
    current_balance: {type:Number}
},
    {collection: "customers"}
)

const transfersSchema = new mongoose.Schema({
    sender_name: {type:String},
    reciver_name: {type:String},
    transferred_amount: {type:Number}
},
    {collection: "transfers"}
)

const Customer = mongoose.model("customers", customersSchema);
const Transfer = mongoose.model("transfers", transfersSchema);

app.post("/api/transfer",async (req,res) => {
        const reciever = await Customer.findOne({ name: req.body.reciever }).exec();
        const sender = await Customer.findOne({ _id: req.body.sender }).exec();
        const newAmountReciever = parseInt(reciever.current_balance) + parseInt(req.body.text);
        const newAmountSender = sender.current_balance - req.body.text;    
        await Customer.updateOne({ _id : reciever._id  }, { current_balance: newAmountReciever});
        await Customer.updateOne({ _id : sender._id  }, { current_balance: newAmountSender});
        res.redirect("/customers");
  });

app.post("/api/transfer_history",async(req,res)=>{
    const sender = await Customer.findOne({ _id: req.body.sender }).exec();
    const sender_name = sender.name;
    const amount = parseInt(req.body.text);
    const reciever_name = req.body.reciever;
    const transfer = new Transfer({
    sender_name: sender_name,
    reciver_name: reciever_name,
    transferred_amount : amount
        });
    transfer.save();
    })

app.get('/api/get-data',async (req,res) => {
    const customers = await Customer.find({});
    try{
        return res.json(customers);
    }catch(error){
        console.log(error);
    }

});

app.get('/api/get-transfers',async (req,res) => {
    const transfers = await Transfer.find({});
    try{
        return res.json(transfers);
    }catch(error){
        console.log(error);
    }
});


let port = process.env.PORT;
if(port==null || port==""){
    port=3001;
}
app.listen(port, function(){
    console.log("Server started on port 3001");
})