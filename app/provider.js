"use client";
import { useUser } from "@clerk/nextjs";
import {db} from '@/configs/db';
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
 import axios from "axios";  
// import { d } from "drizzle-kit/index-BAUrj6Ib";
import React, { useEffect } from "react";

function Provider({ children }) {
  const { user } = useUser();

  useEffect(() => {
    user&&CheckIsNewUser(); //This effect will run whenever the user object changes.
  }, [user]);
  //If the user becomes available (i.e., the user logs in), the effect will run, triggering the CheckIsNewUser() function.

  {
    /*High-Level Flow Overview
    Frontend (provider.js): Checks if the user is logged in and triggers a POST request to an API endpoint.
    API Endpoint (/api/create-user/route.js): Receives the user data from the frontend, fires an event (user.create) using Inngest.
    Inngest Function (CreateNewUser): Listens for the user.create event, checks the database for the user, and adds them to the database if they don’t exist.
    */
  }
  const CheckIsNewUser = async () => {
    const resp = await axios.post("/api/create-user", { user: user }); //is a method used to send data to a server via an HTTP POST request.
    console.log(resp.data);


    // const result=await db.select().from(USER_TABLE)
    // .where(eq(USER_TABLE.email,user?.primarymailAddress?.emailAddress));

    // if(result?.length==0){
    //   const userResp= await db.insert(USER_TABLE).values({
    //     name: user?.fullName,
    //     email: user?.primaryEmailAddress?.emailAddress,
        
       
    //   }).returning({id:USER_TABLE.id})
    // }
  };

  return <>{children}</>; //This will render whatever child components (like pages) are passed to the Provider component.
}

export default Provider;
