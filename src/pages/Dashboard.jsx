import React from "react";
import Card from "../components/Card";
import logo from '../images/logo.jpg';
export default function Dashboard(){
    return(
        <div className="px-4 py-10">
        <div className="max-w-screen-xl mx-auto">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <Card 
            image={logo}
            title={"test image"}
            description={"test conetnt to make reusable component"}
            className="flex w-full text-sm text-gray-600 "
        />
 <Card 
            image={logo}
            title={"test image"}
            description={"test conetnt to make reusable component"}
             className="flex w-full text-sm text-gray-600 "
        />
         <Card 
            image={logo}
            title={"test image"}
            description={"test conetnt to make reusable component"}
             className="flex w-full text-sm text-gray-600 "
        />
         <Card 
            image={logo}
            title={"test image"}
            description={"test conetnt to make reusable component"}
             className="flex w-full text-sm text-gray-600 "
        />
         <Card 
            image={logo}
            title={"test image"}
            description={"test conetnt to make reusable component"}
             className="flex w-full text-sm text-gray-600 "
        />
         <Card 
            image={logo}
            title={"test image"}
            description={"test conetnt to make reusable component"}
             className="flex w-full text-sm text-gray-600 "
        />
       
        </div>
        </div>
</div>

    );
};