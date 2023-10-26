const userModel = require('../model/User.js');
const Sequelize = require('../util/database.js')

const getappntdata = async (req,res)=>{
     try{
            const userData = await userModel.findAll();
           
            let noOfRecords = userData.length;
            res.status(200).json(
                {
                    noOfRecords: noOfRecords,
                    data: userData,
                }
            );
            
     }catch(err){
        console.log(err);
     }
}

const postAppntdata = async (req,res)=>{
    try{
   
        let {name,email,phone}=req.body;
        
        let appntResponse = await userModel.create({
            name,email,phone,
        })
           
           res.status(200).json({
            error: false,
            message: 'Appiontments created Successfully',
            data: appntResponse
        })
           
    }catch(err){
       console.log(err);
    }
}

const updAppntdata = async (req,res)=>{
    try{
        let {id,name,email,phone}=req.body;
    
        let date = new Date();

        console.log(req.body);

        // const number = parseInt(id, 10)
        // console.log(number,typeof(number));
        // console.log(Number(id));
        // console.log(Sequelize.literal('CURRENT_TIMESTAMP'));
        
        const updateData = {
            name, email,phone
        }

        const deviceResponse = await userModel.update(
            {
                name: name,
                email: email,
                phone: phone,

              },
            {
                where: { id: id },
            })

            res.status(200).json(deviceResponse[1])
    }catch(err){
        console.log(err);
    }
}

const deleteAppntdata = async (req,res)=>{
    try{
        let id=req.params.id;
        console.log(id);
       let deleted= userModel.destroy({
            where: {
              id: id
            }
          })
       if(deleted){
            res.status(200).json({
                  error: false,
                  message: 'Appointment Deleted Successfully',
            })
       }
           
    }catch(err){
       console.log(err);
    }
}

module.exports={
    getappntdata,
    postAppntdata,
    updAppntdata,
    deleteAppntdata,
}