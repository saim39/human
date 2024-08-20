import React from 'react'

const page = () => {
  return(
     <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
     <img className="w-24 h-24 md:rounde rounded-full mx-auto" src="/UMER.jfif
     " alt="" width="384" height="512"/>
     <div className="pt-6 md:p-8 text-center space-y-4">
       <blockquote>
         <p className="text-lg font-medium">
           “My name is Muhammad Saim Umer and I am from jhang.I want to be a good human.My pasttime is reading books .
         </p>
       </blockquote>
       <figcaption className="font-medium">
         <div className="text-sky-500 dark:text-sky-400">
           Muhammad Saim Umer 
         </div>
         <div className="text-slate-700 dark:text-slate-500">
           AI Student,Pakistan 
         </div>
       </figcaption>
     </div>
   </figure></div>
  )
}

export default page