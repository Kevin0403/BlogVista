import conf from "../conf/conf"
import axios from "axios";

class Database {
  constructor() {
    this.databaseUrl = conf.databaseUrl;
  }

  //createAccount
    async createAccount(email, password, name) {
        try {
        const response = await axios.post(`${this.databaseUrl}/user/register`, {
            email,
            password,
            name
        });
        return response.data;
        } catch (error) {
        console.log("error in create account : ", error.message);
        }
    }

    //login that verifies the user
    async login(email, password) {
        try {
        const response = await axios.post(`${this.databaseUrl}/user/login`, {
            email,
            password
        });
        return response.data;
        } catch (error) {
        console.log("error in login : ", error.message);
        throw error;
        }
    }

    //createDocument
    async createDocument(data) {
        try {
        const response = await axios.post(`${this.databaseUrl}/blog`, data);
        return response.data;
        } catch (error) {
        console.log("error in createDocument : ", error.message);
        }
    }

    //deleteDocument
    async deleteDocument(id) {
        try {
        const response = await axios.delete(`${this.databaseUrl}/blog/${id}`);
        return response.data;
        } catch (error) {
        console.log("error in deleteDocument : ", error.message);
        }
    }

    //update document
    async updateDocument(id, data) {
        try {
        const response = await axios.put(`${this.databaseUrl}/blog/${id}`, data);
        return response.data;
        } catch (error) {
        console.log("error in updateDocument : ", error.message);
        }
    }

    //getDocument
    async getDocument(id) {
        try {
        const response = await axios.get(`${this.databaseUrl}/blog/${id}`);
        return response.data;
        } catch (error) {
        console.log("error in getDocument : ", error.message);
        }
    }

    //listDocuments
    async listDocuments() {
        try {
        const response = await axios.get(`${this.databaseUrl}/blog`);
        return response.data;
        } catch (error) {
        console.log("error in listDocuments : ", error.message);
        }
    }

    //deleteDocument
    async deleteDocument(id) {
        try {
        const response = await axios.delete(`${this.databaseUrl}/blog/${id}`);
        return response.data;
        } catch (error) {
        console.log("error in deleteDocument : ", error.message);
        }
    }
}

const database = new Database();
export default database;