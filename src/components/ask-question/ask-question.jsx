import { useState } from "react"

// eslint-disable-next-line react/prop-types
const AskQuestion = ({ img, srcSet }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    return (
        <div id="ask" className="ask-bg py-[58px] my-[20px] text-white rounded-[40px] max-[975px]:pt-[250px]">
            <div className="site-container flex relative ask-bg-con">
                <div className="ask-form w-[575px] flex flex-col gap-4 max-[1110px]:w-[450px]  max-[975px]:w-full">
                    <h3 className="font-soraSemibold text-[52px] max-[840px]:text-[42px] max-[700px]:text-[32px]">Savollaringiz <span className="bg-white py-1 px-3.5 rounded-3xl"><span className="gradient-text">bormi?</span></span></h3>
                    <p className="font-sora text-[20px] max-[840px]:text-[18px] max-[700px]:text-[16px]">Ma’lumotlaringizni to’ldiring, tez orada operatorlarimiz siz bilan bog’lanishadi</p>

                    <form className="w-full flex flex-col gap-4 text-[20px] max-[975px]:grid max-[975px]:grid-cols-4 max-[700px]:text-[16px]">
                        <input type="text" placeholder="Ism familya" className="bg-white placeholder:text-black py-4 px-7 text-black outline-none border-none rounded-[50px] w-full max-[975px]:col-span-2 max-[640px]:col-span-4" />
                        <label className="bg-white flex items-center gap-6  py-4 px-7 text-black rounded-[50px] w-full max-[975px]:col-span-2 max-[975px]:gap-8 max-[640px]:col-span-4">
                            <span className="flex items-center gap-5">
                                <img src="/assets/uzb-flag.png" alt="" srcSet="/assets/uzb-flag.png 1x, /assets/uzb-flag@2x.png 2x" />
                                <span>+998</span>
                            </span>
                            <input type="text" placeholder="99 123 45 67" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className=" outline-none border-none w-full" />
                        </label>
                        <button type="submit" className="cursor-pointer py-[16px] px-8 flex justify-center items-center w-full border border-white font-semibold rounded-[50px] bg-transparent transition duration-200 hover:bg-white hover:text-[#6edcec] max-[975px]:col-span-2 max-[975px]:col-start-2 max-[640px]:col-span-4 ">Ma’lumotlarni jo’natish</button>
                    </form>
                </div>
                <img src={img} alt="" width={533} srcSet={`${img} 1x, ${srcSet} 2x`} className="absolute top-[-118px] right-0 max-[1500px]:right-[30px] max-[1200px]:w-[480px] max-[1200px]:top-[-75px] max-[1135px]:w-[450px] max-[1110px]:top-[-15px] max-[975px]:w-[300px] max-[975px]:top-[-350px] max-[975px]:left-[50%] max-[975px]:translate-x-[-50%]" />
            </div>
        </div>
    )
}

export default AskQuestion