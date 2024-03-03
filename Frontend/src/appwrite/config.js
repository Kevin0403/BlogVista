import conf from "../conf/conf";
import database from "./database";
// import { Client, Databases, Storage, Query, ID } from "appwrite";

export class Service {
    // client = new Client();
    databses;
    // bucket;

    constructor(){
        // this.client
        // .setEndpoint(conf.appwriteUrl)
        // .setProject(conf.appwriteProjectId)

        this.databses = database
        // this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, status}){
        try {
            return await this.databses.createDocument(
                {
                    id : slug,
                    title,
                    content,
                    status,
                    user : JSON.parse(localStorage.getItem('user'))
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error ", error)
        }
    }

    async updatePost(slug, data){
        try {

            // return null;
            return await this.databses.updateDocument(
                // conf.appwriteDatabaseId, 
                // conf.appwriteCollectionId, 
                slug,
                data
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error ", error)
        }
    }

    async deletePost(slug){
        try {
            await this.databses.deleteDocument(
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error ", error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databses.getDocument(
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error ", error)
        }
    }

    async getPosts(){
        try {
            return await this.databses.listDocuments()
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error ", error)
            return false;
        }
    }

    // file upload service

    // async uploadFile(file){
    //     try {
    //         return await this.bucket.createFile(
    //             conf.appwriteBucketId,
    //             ID.unique(),
    //             file
    //         )
    //     }
    //     catch(error){
    //         console.log("Appwrite service :: uploadFile :: error ", error)
    //     }
    // }
    
    // delete file service

    // async deleteFile(fileId){
    //     try {
    //         await this.bucket.deleteFile(
    //             conf.appwriteBucketId,
    //             fileId
    //         )
    //         return true;
    //     }
    //     catch(error){
    //         console.log("Appwrite service :: deleteFile :: error ", error)
    //         return false;
    //     }
    // }   

    // getFilePreview(fileId){
    //     return this.bucket.getFilePreview(
    //         conf.appwriteBucketId,
    //         fileId
    //     );
    // }

}

   
const service = new Service();
export default service;