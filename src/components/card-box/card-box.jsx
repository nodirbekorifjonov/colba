// eslint-disable-next-line react/prop-types
const CardBox = ({ icon, title, description, background = 'bg-[rgba(132,212,255,0.5)]', color = '#008CDA', type }) => {

    return (
        <div className={`w-full ${background} rounded-3xl p-6 h-full`}>
            <span className="flex justify-center items-center w-16 h-16 bg-white rounded-2xl mb-4"><img src={icon} alt="" /></span>
            <h4 className={`font-semibold  uppercase mb-3 ${type === 'advantages' ? 'text-[32px] max-[840px]:text-[26px]' : "text-[80px] max-[840px]:text-[48px]"}`} style={{ color }}>{title}</h4>
            <p className="text-[16px] leading-[1.5] font-medium max-[700px]:text-[14px]">{description}</p>
        </div>
    )
}

export default CardBox