import Link from "next/link"
import navUtils from "../utils/nav"
import { IoIosCloseCircle } from "react-icons/io"

const SideBar: React.FC<{ onClick: any }> = ({ onClick }) => {
  const { headerNav, footerNav } = navUtils
  const newHeaderNav = [
    {
      text: "Home",
      path: "/",
    },
    ...headerNav,
  ]

  return (
    <div className='h-svh w-1/2 p-16 bg-black fixed top-0 right-0'>
      <div className='relative text-6xl font-medium font-neue-montreal text-off-white text-left pt-14 pb-32'>
        <button
          className='absolute right-0 top-0 bg-black text-white'
          onClick={onClick}
        >
          <IoIosCloseCircle size={60} />
        </button>
        {newHeaderNav.map((e) => {
          return (
            <Link href={e.path} key={e.text} className='navlink'>
              <h6 style={{ color: "#F4F7FA" }}>{e.text}</h6>
            </Link>
          )
        })}
      </div>
      <div className='flex text-lg text-left text-off-white gap-8'>
        {footerNav.map((e) => {
          return (
            <Link href={e.path} key={e.text}>
              <h6 style={{ color: "#F4F7FA" }}>{e.text}</h6>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SideBar
