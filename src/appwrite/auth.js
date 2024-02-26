import conf from "../conf/conf.js"

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client ;
    account;

    constructor(){
        this.client = new Client()
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
           

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
            const user = await this.account.createEmailSession(email, password)
            
            return user;
        } catch (error) {
            console.log( 'error in login : '  , error.message);
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
            console.log('error in getCurrentUser' ,error);
        }

        return null;
    }

    async logout(){
        try{
            await this.account.deleteSessions();
        }catch(error){
            console.log(error);
        }
    }
}


const authService = new AuthService();

export default authService;