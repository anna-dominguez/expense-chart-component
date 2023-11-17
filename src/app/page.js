import Image from 'next/image'
import data from '../../public/data.json'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-cream px-4">
      <section className="bg-softRed text-white p-5 flex w-full justify-between rounded-[10px] lg:rounded-[20px] max-w-[540px] mb-4 lg:mb-6">
        <div>
          <h1 className="text-[15px] lg:text-lg mt-2">My balance</h1>
          <p className="text-2xl lg:text-[32px] font-bold">$921.48</p>
        </div>
        <Image width="60" height="40" src="/images/logo.svg" />
      </section>
      <section className="bg-veryPaleOrange py-6 px-5 rounded-[10px] lg:rounded-[20px] w-full max-w-[540px]">
        <h2 className="text-darkBrown font-bold text-2xl lg:text-[32px] mb-[52px] md:mb-16">
          Spending - Last 7 days
        </h2>
        <div className="flex gap-3 lg:gap-[18px] items-end text-darkBrown">
          <div className="group relative w-[14%] flex flex-col items-center transition-all">
            <p className="hidden group-hover:block absolute bg-darkBrown text-white -top-12 py-2 px-1.5  rounded-[5px]">
              ${data[0].amount}
            </p>
            <div className="h-[50px] w-full rounded-[5px] bg-softRed group-hover:bg-[#FF9B86] cursor-pointer"></div>
            <p className="text-[12px] lg:text-[15px] text-mediumBrown mt-3 lg:mt-2">
              mon
            </p>
          </div>
          <div className="group relative w-[14%] flex flex-col items-center">
            <p className="hidden group-hover:block absolute bg-darkBrown text-white -top-12 py-2 px-1.5  rounded-[5px]">
              ${data[1].amount}
            </p>
            <div className="h-[100px] w-full rounded-[5px] bg-softRed group-hover:bg-[#FF9B86] cursor-pointer"></div>
            <p className="text-[12px] lg:text-[15px] text-mediumBrown mt-3 lg:mt-2">
              tue
            </p>
          </div>
          <div className="group relative w-[14%] flex flex-col items-center">
            <p className="hidden group-hover:block absolute bg-darkBrown text-white -top-12 py-2 px-1.5  rounded-[5px]">
              ${data[2].amount}
            </p>
            <div className="h-[150px] w-full rounded-[5px] bg-cyan group-hover:bg-[#B4E0E5] cursor-pointer"></div>
            <p className="text-[12px] lg:text-[15px] text-mediumBrown mt-3 lg:mt-2">
              wed
            </p>
          </div>
          <div className="group relative w-[14%] flex flex-col items-center">
            <p className="hidden group-hover:block absolute bg-darkBrown text-white -top-12 py-2 px-1.5  rounded-[5px]">
              ${data[3].amount}
            </p>
            <div className="h-[89px] w-full rounded-[5px] bg-softRed group-hover:bg-[#FF9B86] cursor-pointer"></div>
            <p className="text-[12px] lg:text-[15px] text-mediumBrown mt-3 lg:mt-2">
              thu
            </p>
          </div>
          <div className="group relative w-[14%] flex flex-col items-center">
            <p className="hidden group-hover:block absolute bg-darkBrown text-white -top-12 py-2 px-1.5  rounded-[5px]">
              ${data[4].amount}
            </p>
            <div className="h-[67px] w-full rounded-[5px] bg-softRed group-hover:bg-[#FF9B86] cursor-pointer"></div>
            <p className="text-[12px] lg:text-[15px] text-mediumBrown mt-3 lg:mt-2">
              fri
            </p>
          </div>
          <div className="group relative w-[14%] flex flex-col items-center">
            <p className="hidden group-hover:block absolute bg-darkBrown text-white -top-12 py-2 px-1.5  rounded-[5px]">
              ${data[5].amount}
            </p>
            <div className="h-[124px] w-full rounded-[5px] bg-softRed group-hover:bg-[#FF9B86] cursor-pointer"></div>
            <p className="text-[12px] lg:text-[15px] text-mediumBrown mt-3 lg:mt-2">
              sat
            </p>
          </div>
          <div className="group relative w-[14%] flex flex-col items-center">
            <p className="hidden group-hover:block absolute bg-darkBrown text-white -top-12 py-2 px-1.5  rounded-[5px]">
              ${data[6].amount}
            </p>
            <div className="h-[73px] w-full rounded-[5px] bg-softRed group-hover:bg-[#FF9B86] cursor-pointer"></div>
            <p className="text-[12px] lg:text-[15px] text-mediumBrown mt-3 lg:mt-2">
              sun
            </p>
          </div>
        </div>
        <div className="h-0.5 w-full bg-cream my-6 md:my-8"></div>
        <div className="w-full ">
          <p className="text-mediumBrown text-[15px] lg:text-[18px]">
            Total this month
          </p>
          <div className="w-full flex items-end justify-between">
            <p className="text-[30px] lg:text-[48px] font-bold ">$478.33</p>
            <div className="flex flex-col items-end">
              <p className="font-bold text-[15px] lg:text-[18px]">+2.4%</p>
              <p className="text-mediumBrown text-[15px] lg:text-[18px]">
                from last month
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
