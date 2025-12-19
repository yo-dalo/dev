import React from 'react'

const UserDashboard = () => {
    return (

        <div className='w-screen  h-screen flex-col flex'>



            <div className='flex w-full justify-between h-14 bg-[#FF321F]  items-center px-10 '>


                <div className='flex justify-center items-center'>
                    <div className='w-7 fill-white  h-7'><img src="img/logo/Sign-Up/Group.svg" alt="" /></div>
                    <h1 className='text-2xl   text-[#fdfdfd] font-bold italic '>CTRMExpertPlatform</h1>
                </div>


                <h2>Home</h2>



                <div className="flex justify-center gap-3 items-center ">

                    <div className=" bg-slate-500 flex justify-center items-center w-10 h-10  px-1 rounded-xl">


                        <div className=" w-4 h-4">
                            <img src="img/logo/hd/admin.svg" alt="" />

                        </div>
                    </div>


                    <div className=" bg-slate-500 flex justify-center items-center w-10 h-10  px-1 rounded-xl">


                        <div className="">
                            <img src="img/logo/hd/Bell.svg" alt="" />

                        </div>

                    </div>




                    <div className="w-10 h-10 ml-4 rounded-full bg-white"></div>


                </div>



            </div>



            <div className="w-full flex   h-full bg-slate-400">

                <div className="w-64 py-2  flex-col gap-2 px-1  flex h-full  bg-slate-200">
                    {[1, 1, 1, 1].map((e, i) => (



                        <div className="w-full flex justify-center gap-3 rounded-lg items-center bg-gray-400 h-10">
                            <div className="">
                                <img src="img/svg/ff.svg" alt="" />
                            </div>
                            <h3>Home </h3>

                        </div>



                    ))


                    }


                </div>









                <div className="flex-1">

                </div>




            </div>









        </div>






    )
}

export default UserDashboard