'use strict'
const API_URL =  'https://jsonplaceholder.typicode.com/users';

const getUsers = async (desireCompanyName)=>{
    try{
        const response  = await fetch(API_URL);
        const usersList = await response.json();
        const desireUser = usersList.filter(userInfo=>userInfo?.company.name === desireCompanyName);
        return {
            getAllUsers: usersList.map(user=>user.name),
            getUsersByCompanyName: desireUser.map(user=>user.name)
        }
    }
    catch(error){
        console.log(error)
    }
}
getUsers().then(result=>console.log(`list of users: ${result.getAllUsers}`));

getUsers("Johns Group").then(result=>console.log(`seeking user is: ${result.getUsersByCompanyName}`));