// All Required Modules before launch
var Event = require("events");
const Discord = require('discord.js');
const { CommandInteraction, Permissions} = require('discord.js');
const { modal } = require('mongoose');

  const { connect } = require("mongoose");
    
///// Error log /////
var error = (err) => {
  throw new Error(err);
};

///// The Permission Configuration
// Function checkUserPerms is in this class
class PermConfig extends Event {
  ////
  constructor(client) {
    if (!client || typeof client != "object")
      return error("can't check any interactions without any clients!");
    try {
      super();
      this.client = client;
      this.client.on("ready", () => this.ready());
    } catch (e) {
      try {
        this.emit("error", null, e);
      } catch {}
    }
  }
  
 
  
  
  // VERSION 0.3.0!!!!!

  //// Client is required in order to use this system (Needed to fetch all the interactions required)

/**
 * 
 * @param {CommandInteraction} interaction @description Needed to check all the interaction related data
 * @param {String} Cmdtype @description 2 Types of CmdType: LIST: An array bassed system and PERM: A permission based system
 * @param {array} CustArr @description Looks at the array and sees if a user id is in that that array. 
 * @param {boolean} cusTT @description Boolean system is you want to use a LIST system or not
 * @param {Permissions} PermName @description A String system which uses the Discord's permission API. The text must be in CAPS and works for discord
  * @param {int} roleID @description A int based system for role systems and checker!
 * @param {string} errMsg @description A String based system which makes you able to use custom messagea for errors!
 * @param {string} mongodbURL @description A String based system that makes you able to connect to your mongodb database.
 * @param {File} mongoDATAfile @description A String based system that allows you to use a specific file from mongodb, you can fetch from a local file if you wish
 * param {string} mongoArrayName @description A string based system that looks at the array name and looks for it in your database
 * @Description For more information about everything, you can always check the readme.md for more information
 * @returns 
 */

  static async checkUserPerms(interaction, Cmdtype, cusTT, CustArr, PermName, roleID, mongoDATAfile, mongoArrayName, errMsg) {

    if(Cmdtype === "LIST"){

      if(cusTT === true){

        if(!CustArr){
          return error("You need to make a array with all the user ids listed.") && interaction.reply({content: `:x: Something went wrong with the code!!! Please contact this bot's developer`, ephemeral: true})
          
        }
        
        if(!cusTT === true && !cusTT === false){
          return error("This is a Boolean! It needs to be true of false!")
        }
        
        if(typeof CustArr === undefined){
                return error("It seems like your Array does not exist in your code" )
        }
        
        if(!typeof CustArr === array){
            return error("It seems like your Array does not exist in your code" )
        }

        if(!CustArr.includes(interaction.user.id)){

          if(errMsg){
            return interaction.reply({content: `${errMsg > 1990 ? errMsg.substring(0, 1990) + "..." : errMsg}`, ephemeral: true}) && false
          } else
  
          return interaction.reply({content: "" +" You need to be in a list to use this command!", ephemeral: true}) && false
          
          
              } else if(CustArr.includes(interaction.user.id)){
                  return true
              } 
  
  
      } else if(cusTT === false){
        return
      }

    }
    
          // If the CmdType is Perm, if the user has Perm permissions, it will let the interaction go but if there is no admin perms, a message will apear
          
          if(Cmdtype === "PERM"){
            
        
           
            if(!PermName){
             return error("You need to put the permname" )
            }
            
            if(!typeof PermName === Discord.Permission){
                  return error("The Permission might be invalid! Please type in a valid permission! Join discord.gg/Azury for help")
            }
            
            
              if(!interaction.member.permissions.has(`${PermName}`)){

                if(errMsg){
                  return interaction.reply({content: `${errMsg > 1990 ? errMsg.substring(0, 1990) + "..." : errMsg}`, ephemeral: true}) && false
                } else

                return interaction.reply({content: "" +` You need to have the ${PermName} to use this command!`, ephemeral: true}) && false
            }
            
            if(interaction.member.permissions.has(`${PermName}`)){
                return true
          

            }

            
              

          } 

          if(Cmdtype === "ROLES"){
            
            if(!roleID){
             return error("The role ID seems to be non existant! Join Discord.gg/Azury for help")
            }
            
            let roleFinder = interaction.guild.roles.cache.find(x => x.id === roleID)
            
            if(!roleFinder){
              return error("It seems like your role id is pretty invalid! Please use a valid id that is readable to your discord bot! Discord.gg/Azury for most assistance")
            }
            
            
            
              if(!interaction.member.roles.cache.has(`${roleID}`)){
                if(errMsg){
                   return interaction.reply({content: `${errMsg > 1990 ? errMsg.substring(0, 1990) + "..." : errMsg}`, ephemeral: true}) && false
                }
                
                else if(!errMsg){
                    return interaction.reply({content: "" + ` You need to have the <@&${roleID}> role to use this command!`, ephemeral: true}) && false
                }
              }
            
            else if(interaction.member.roles.cache.has(`${roleID}`)){
              return true
            }
          }
    
   if(Cmdtype === "MONGODB_ARRAY"){
    
    // BETA
     
    
    
if(!connect || !typeof connect === "object"){
  return error("(!) You must be connected to a database inorder to use mongodb features!")
}
     


     
     const fileSystem = require(`${mongoDATAfile}`)

     const arrayStuff = `${mongoArrayName}`
  

 let fileLooker = fileSystem.find( async(err, data) => {
  if(!data){
    return error("(!) Mongodb Data isn't available or found, it must exist")
  }
  
  if(!typeof data.arrayStuff === Array){
        return error("That isn't a array!")
      }

  
if(!typeof data.arrayStuff === "object"){

  return error("Your Array name isn't found in the database!")
} 

if(typeof data.arrayStuff === "object"){
  
    if(!arrayStuff.includes(interaction.user.id)){
      
      
    
      
      
        if(errMsg){
            return interaction.reply({content: `${errMsg > 1990 ? errMsg.substring(0, 1990) + "..." : errMsg}`, ephemeral: true}) && false
          } else
  
          return interaction.reply({content: "" +" You need to be in a list to use this command!", ephemeral: true}) && false
          
          
              } else if(arrayStuff.includes(interaction.user.id)){
                  return true
              } 
  
  
  
}

 }


 )
 
  
    

}
  
 


    
    
    
  }





  
  
  }



  ////


module.exports = {
  PermConfig,
};
