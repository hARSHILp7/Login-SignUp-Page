import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LeftPanel from '../components/LeftPanel'
import RightPanel from '../components/RightPanel'

export default function Home() {
  return (
    <div className='flex justify-evenly'>
      <Head>
        <title>Login / Sign Up</title>
      </Head>
      
        {/* Left Panel */}
        <div className='w-[40%] h-screen bg-[#FFFFFF]'>
          <LeftPanel/>
        </div>

        {/* Right Panel */}
        <div className='w-[60%] h-screen bg-[#293241]'>
          <RightPanel />
        </div>
    </div>
  )
}