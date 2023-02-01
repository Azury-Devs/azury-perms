# Azury Permission System 🔥

![permImage](https://media.discordapp.net/attachments/920619280326877187/1069248937590018089/azury_perms.png)

# How to install?

```sh
$ npm install azury-perms
```


# What can it do?

- Control command permissions via interaction
- Supports custom array permissions
- Supports Discord's role id system
- Supports Disord's Permission
- Simple to use with functions!
- Mongodb DB support!
- Can check if its true or false!


# How to use it in code?


```js
/* ---~~~---~~~---~~~--- Example code provided by azury ---~~~---~~~---~~~--- */

const { Client, Intents } = require("discord.js"); // Install discord's package
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_INVITES,
  ],
});

var { PermConfig } = require("azury-perms"); // Install our package



var azPermList = ["1", "2", "3"] // Discord user ids

client.on("ready", () => {
  console.log(`The bot ${client.user.tag} is now up and running!`)
});

var permConfig = new PermConfig(client);


// Assuming that you have the id admin registered in your bot

if (commandName === 'admin') {

PermConfig.checkUserPerms(interaction, "LIST", true, azPermList) // Example for adding arrays

}


```

# Special variables?


Examples:
```js
PermConfig.checkUserPerms(interaction, "LIST", true, azPermList) // Example for adding arrays
PermConfig.checkUserPerms(interaction, "PERMS", false, 0, "ADMINISTRATOR") // Example for admin perms
PermConfig.checkUserPerms(interaction, "ROLES", false, "0", "0", "nothing", roleId) // Example for role specific users 
PermConfig.checkUserPerms(interaction, "MONGODB_ARRAY", false, "0", "0", "nothing", 0, myMongodbConnectCmd, myMongodbModelFile, myMongodbArrayName) // Example for mongodb users who want to fetch from their database
```
- Ex 1: Uses the Array system and checks the array's value and looks at a users discord id and checks if its there
- Ex 2: Uses the discord permission system built in into discord and just reads and checks if the user has a valid permission
- Ex 3: Uses the discord role system built in into discord and of course checks if you have the needed role or not?
- Ex 4: Fetches and connects to your mongodb database and looks at your model file and looks for your array via the name!



# Version 0.5.0!

## What has changed?

- Bug Fixing
- Mongodb DB Is now supported! You can know connect to your database and look at array data (Beta!)
- Improvements to readme.md
- New Number means some updates have be made!




- Join discord.gg/azury and go to the suggestions channel! We would love to hear your ideas!
- All bugs discovered have been patched but if you see one lurking around, please join discord.gg/azury and go to suggestions please!

## What is coming soon?
- Your ideas can become into reality for this project! What can you do? go to discord.gg/azury and submit some ideas in the suggestions channels!!!

### Need Help

#### Your welcome to join discord.gg/Azury and go to code-help!


# Azury Permission System - Documentation 🔥

![permImage](https://media.discordapp.net/attachments/920619280326877187/1069248937590018089/azury_perms.png)

#### Learn how the bot really works

## How does the check system really work
- > There are two systems that you can use, the *permission system*, *array system*, *role system* and *mongodb_array system* (BETA) with both unique features you can use

- First the **permission** system, it uses **discord's permission API** inside a guild and checks if a user has the permissions required to run the cmd
- The **array system** uses your own *array system* and checks all the ids inside the *array system* and sees if the user's id is in it or not.
- The **ROLE SYSTEM** system which allows you to use discord roles systems!
- The **MONGODB ARRAY** system which allows you to fetch a array from your mongodb database

### Methods to use the function
- > There are lots of things in this function currently. There is a cmdType that we just talked about now, cusTT, a boolean system which makes you either able to use a List system or not as a activator, CustArr which is basically the location of the array which you can define, Permname which is used if you really want to use the permission system and there is the errMsg system which is basically allows you to make messages if a user doesn't meet the requirements and of course roleID which checks if a user has a role or not via the role id (the bot must see the role and be in the guild with the role!) though it requires the cmdType to be ROLES!
- All of this stuff is pretty easy to use and i'll document how you can both use all the methods!
- 1. CusTT is a boolean type, you can use true if you wish to use a Array but if you don't, you can leave it at false! 
- 2. CustArr is a array type if you didn't know from the name, you can use any array with discord ids included! It must require a discord id, *_any amout below 0!_*
- 3. PermName is a string type, you can type any permission, it just has to be a permission or it won't work!
- 4. ErrMsg is a string type aswell except you can write anything, doesn't matter, you can write literally anything
- 5. roleID is a int type and you can put your discord role ids for interactions!
- 7. MongodbDataFILE is a string type which is to look a specific modal .
- 8. MongodbArray Name is a string type that allows you to write the name of the array inside of your modal

### Examples to those methods
- > **We are going to showcase some code about all this methods and how to use them**

1. The CusTT
```js
PermConfig.checkUserPerms(interaction, "LIST", true) // true and false can enable and disable the list feature!
```
2. The CusARR
```js

const myArray = ["discordid1", "discordid2"]

PermConfig.checkUserPerms(interaction, "LIST", true, myArray) // it will look at the myArray and look for the user's id and check if its in the array or not
```
3. PermName
```js
PermConfig.checkUserPerms(interaction, "PERM", false, "0", "ADMINISTRATOR") // It will check if the user has the ADMin perm or not (Note, the LIST methods will not matter if the cmdType is PERM)
```
4. ErrMsg
```js

const myArray = ["discordid1", "discordid2"]

PermConfig.checkUserPerms(interaction, "LIST", true, myArray, "", "Test test") // Err msg works for both PERM and LIST types! heres another example


PermConfig.checkUserPerms(interaction, "PERM", false, "0", "ADMINISTRATOR", "test Test")
```

5. roleID
```js

PermConfig.checkUserPerms(interaction, "ROLES", false, "0", "0", "nothing", 203947364839847) // must be in a int, no strings included ok! also replace the numbers without the string with your real discord role id!
 

```


7. MongodbDataFIle 
```js


PermConfig.checkUserPerms(interaction, "MONGODB_ARRAY", false, "0", "0", "nothing", 0, myMongodbConnectCmd, myMongodbModelFile, myMongodbArrayName) // The Mongodb Data file is where the modal is with all your stuff 


```

8. MongodbArray
```js

PermConfig.checkUserPerms(interaction, "MONGODB_ARRAY", false, "0", "0", "nothing", 0, myMongodbConnectCmd, myMongodbModelFile, myMongodbArrayName) // The Mongodb Array is the last part of the array system!

```

### Join discord.gg/azury if you wish to have your concepts and ideas come to reality!


#### *Made with 🔥 By Azury*
