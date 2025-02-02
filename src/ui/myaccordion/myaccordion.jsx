import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
const MyAccordion = ({ datas }) => {
    const [data, setData] = useState(datas);

    const handleToggleActive = () => {
        let activeNew = data.active === 1 ? 0 : 1;
        setData({ ...data, active: activeNew });
    }

    return (
        <div className={`w-full p-4 bg-[#fff] border-none rounded-2xl mb-3 group ${data.active === 1 ? 'is-active bg-white' : ''}`}>
            <div className="flex select-none items-center cursor-pointer text-[20px] leading-[1.6] mb-2" onClick={handleToggleActive}>
                <div className="w-full font-semibold">
                    {data.question}
                </div>
                <div className={`w-5 h-5 flex justify-center items-center text-[12px] rounded-full primary-gradient text-white`} >
                    <div className={`w-[16px] h-[16px] flex justify-center items-center  ${!data.active ? "bg-none" : "bg-white  text-[#34D4F2]"} rounded-full`}>
                        {!data.active ? <FaPlus /> : <FaMinus />}
                    </div>
                </div>
            </div>
            <div className="text-[16px] leading-[1.56] overflow-hidden duration-100 max-h-0 group-[.is-active]:max-h-[100px]">
                {data.answer}
            </div>
        </div>
    );
}
export default MyAccordion;