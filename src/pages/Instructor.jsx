import React from "react"
import { FaGraduationCap, FaUsers } from "react-icons/fa"
import { GiEvilBook, GiWorld } from "react-icons/gi"

export const Instructor = () => {
  return (
    <>
      <section className='instructor mb-16'>
        <div className='container'>
          <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
            <h1 className='text-3xl font-semibold text-black'>Qu’est-ce que Skilline ?</h1>
            <span className='text-[14px] mt-2 block'>Des conneries à propos de moi, vieux mucker, des bulles et des grincements flagrants, un Hanky ​​Panky, un pot de cheminée douteux, un chav bevvy, un pot de cheminée, un rouge plâtré, un coup fracassant, je dis au kyver qu'il l'a fait saigner joyeusement,</span>
          </div>
          <div className='content grid grid-cols-2 gap-5 md:grid-cols-1'>
            <div className='images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10'>
              <img src='https://bdevs.net/wp/educal/wp-content/uploads/2021/09/what-1.jpg' alt='' className='rounded-t-lg object-cover w-full h-72' />
              <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                <h2 className='text-3xl text-white font-semibold'>Apprentissage principalement en ligne</h2>
                <button className='text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white'>Commencer un cours aujourd'hui</button>
              </div>
            </div>
            <div className='images rounded-lg relative overflow-hidden h-72 w-ful before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10'>
              <img src='https://bdevs.net/wp/educal/wp-content/uploads/2021/09/what-2.jpg' alt='' className='rounded-t-lg object-cover w-full h-72 relative' />
              <div className='categ flex flex-col gap-4 absolute top-5 z-30 m-3 p-8 items-center justify-center text-center'>
                <h2 className='text-3xl text-white font-semibold'>Devenez instructeur</h2>
                <button className='text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white'>Commencer un cours aujourd'hui</button>
              </div>
            </div>
          </div>
          <div className='content'>
            <div className='heading py-12 text-center w-2/3 m-auto md:w-full'>
              <h1 className='text-3xl font-semibold text-black'>Nous sommes fiers</h1>
              <span className='text-[14px] mt-2 block'>Vous n'êtes pas obligé de lutter seul, vous avez notre aide et notre aide.</span>
            </div>
            <div className='content grid grid-cols-4 gap-5 md:grid-cols-2'>
              <InstructorCard color='text-red-500' icon={<FaUsers size={40} />} title='63' desc='Students Enrolled' />
              <InstructorCard color='text-orange-500' icon={<GiEvilBook size={40} />} title='20' desc='Total Courses' />
              <InstructorCard color='text-purple-500' icon={<FaGraduationCap size={40} />} title='4' desc='Online Learners' />
              <InstructorCard color='text-indigo-500' icon={<GiWorld size={40} />} title='4' desc='Online Learners' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export const InstructorCard = (props) => {
  return (
    <div className={`box p-5 py-5 rounded-md`}>
      <div className={`${props.color}`}>{props.icon}</div>
      <div className='text mt-2'>
        <h4 className='text-lg font-semibold text-black'>{props.title}</h4>
        <p className='text-[15px]'>{props.desc}</p>
      </div>
    </div>
  )
}
