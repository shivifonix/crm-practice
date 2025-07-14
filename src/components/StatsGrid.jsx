import React from 'react'
import { BsArrowDownRight, BsArrowRight } from 'react-icons/bs'
import { FaDollarSign, FaShoppingCart, FaBoxOpen, FaUserPlus } from "react-icons/fa";

 const stats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: FaDollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-600",
  },
  {
    title: "Total Orders",
    value: "1,240",
    change: "+8.3%",
    trend: "up",
    icon: FaShoppingCart,
    color: "from-indigo-500 to-blue-600",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-600",
  },
  {
    title: "Products Sold",
    value: "560",
    change: "+3.4%",
    trend: "up",
    icon: FaBoxOpen,
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-100",
    textColor: "text-pink-600",
  },
  {
    title: "New Customers",
    value: "348",
    change: "+2.1%",
    trend: "up",
    icon: FaUserPlus,
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-100",
    textColor: "text-purple-600",
  }
];
export default function StatsGrid() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 '>

   {stats.map((stats,index)=>{
    return(
         <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border 
    border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20
     trannsition-all duration-300 group ' key={index}>
    <div className='flex items-start justify-between'>
        <div className="flex-1">
        <p className='text-sm font-medium text-slate-600 dark:text-slate-400 mb-2'>
            {stats.title}
        </p>
     <p className='text-3xl font-bold text-slate-800 dark:text-white mb-4'>
           {stats.value}
        </p>
        <div className='flex items-center space-x-2'>
           {stats.trend === "up" ?(
             <BsArrowRight className='w-4 h-4 text-emerald-500'/>
           ) :(
            <BsArrowDownRight className='w-4 h-4 text-red-500' />
           )} 
                <span className={`text-sm font-semibold ${stats.trend ==="up" ? `
                text-emerald-500` :" text-red-500"}`}>{stats.change}</span>
                <span className='text-sm text-slate-500 dark:text-slate-400'>
                    vs Last month
                </span>
            
        </div>
        </div>
        <div className={`p-3 rounded-xl ${stats.bgColor} group-hover:scale-110 transition-all duration-300`}>
                {<stats.icon className={`w-6 h-6 ${stats.textColor}`}/>}
        </div>
    </div>
 <div className='mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden'>
  <div
    className={`h-full bg-gradient-to-r ${stats.color} rounded-full transition-all duration-300`}
    style={{ width: stats.trend === "up" ? "75%" : "45%" }}
  ></div>
</div>
    </div>
    );
   })}
   
    </div>
  )
}
