const HomeHero = () => {
    return (
        <div className="hero py-6">
            <div className="site-container">
                <div className="hero-bg w-full py-10 px-8 rounded-[40px] text-white max-[415px]:px-4 max-[415px]:py-8 max-[300px]:px-2 ">
                    <h1 className="hero-title font-semibold text-[59px] text-center mb-4 leading-[1.2] max-[840px]:text-[48px] max-[840px]:mb-[10px] max-[700px]:text-[32px] max-[415px]:text-[28px] max-[340px]:text-[24px] max-[300px]:text-[20px]">KIMYO VA BIOLOGIYAGA <span className="bg-white py-1 px-3.5 rounded-3xl"><span className="gradient-text">IXTISOSLASHGAN</span></span> O’QUV MARKAZ</h1>
                    <span className="w-[630px] block text-center mx-auto mb-8 max-[840px]:mb-[20px] max-[840px]:w-[85%] max-[415px]:w-full">
                        <p className="hero__description text-2xl max-[840px]:text-[18px] max-[700px]:text-[16px]">
                            Kimyo va biologiyaga ixtisoslashgan O’zbekistondagi eng katta o’quv markazda o’qish uchun ariza qoldiring
                        </p>
                    </span>
                    <button className="px-[78px] py-4 bg-white text-[18px] font-semibold leading-[1.5] cursor-pointer rounded-[50px] mx-auto block transition duration-300 hover:-translate-y-1 max-[840px]:text-[16px] max-[700px]:text-[14px] max-[700px]:px-[58px] max-[700px]:py-[14px]"><span className="gradient-text">Ariza qoldirish</span></button>
                </div>
            </div>
        </div>
    )
}

export default HomeHero