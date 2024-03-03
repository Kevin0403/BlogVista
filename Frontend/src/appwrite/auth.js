import conf from "../conf/conf.js"

// import { Client, Account, ID } from "appwrite";
import database from "./database.js";

export class AuthService {
    account;

    constructor(){
        

        this.account = database
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.createAccount( email, password, name)
           

            if(userAccount){
                //call another method
                return this.login({email, password});
            }
            else{
                return userAccount;
            }
        } catch (error) {
            console.log("error in create account : " , error.message);
        }
    }

    async login({email, password}){
        try {
            const user = await this.account.login(email, password)

            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(user));
            
            return user;
        } catch (error) {
            console.log( 'error in login : '  , error.message);
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return JSON.parse(localStorage.getItem('user'));
        } catch (error) {
            console.log('error in getCurrentUser' ,error);
        }

        return null;
    }

    async logout(){
        try{
            localStorage.clear();
        }catch(error){
            console.log(error);
        }
    }
}


const authService = new AuthService();

export default authService;