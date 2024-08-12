const mongoose =require("mongoose");
const SkillSchema=new mongoose.Schema({
    skill:{
        type:String,
        required:true,
    },
    
    
},{timestamps:true});
module.exports=mongoose.model("Skill",SkillSchema);