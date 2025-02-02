const EduSystem = () => {
    return (
        <div className="pt-[140px] pb-[180px] bg-[url(/assets/edusystem-bg.svg)] bg-no-repeat bg-right-bottom max-[840px]:pt-[40px] max-[840px]:pb-[100px]">
            <div className="site-container flex flex-col ">
                <h2 className="about__title text-[64px] uppercase font-semibold text-center mb-6 max-[840px]:text-[48px] max-[840px]:mb-4 max-[700px]:text-[32px] max-[700px]:mb-2">
                    <span className="gradient-text">O’QUV</span> TIZIMI
                </h2>

                <div className="grid grid-cols-2 gap-2 mb-6">
                    <div className='w-full primary-gradient rounded-3xl p-6 col-span-1 max-[975px]:col-span-2'>
                        <span className="flex justify-center items-center w-16 h-16 bg-white rounded-2xl mb-4"><img src='/assets/people.svg' alt="" /></span>
                        <div className="font-semibold inline-block relative before:absolute before:block before:w-[320px] before:h-[55px] before:bg-white before:-inset-1 before:rounded-tr-[16px] before:rounded-br-[16px] before:left-[-25px] max-[840px]:before:w-[270px] max-[840px]:before:h-[47px] max-[410px]:before:w-[230px] max-[410px]:before:h-[41px]">
                            <h4 className="relative text-[#008cda] uppercase mb-3 text-[32px] max-[840px]:text-[26px] max-[410px]:text-[22px]">Dastur haqida</h4>
                        </div>
                        <p className="text-[24px] leading-[1.5] text-white mb-[12px] font-medium max-[840px]:text-[20px] max-[700px]:text-[16px]">Colba ta&apos;lim markazi muqobili bo&apos;lmagan mualliflik o&apos;quv dasturi va metodikasiga ega.
                        </p>
                        <p className="text-[24px] leading-[1.5] text-white mb-[12px] font-medium max-[840px]:text-[20px] max-[700px]:text-[16px]">Bu dastur Colba asoschisi Doniyor Nasriddinovning ko&apos;p yillik izlanishlari va tajribasi asosida tuzilgan bo&apos;lib, tabiiy fanlarni juda oson usulda tushuntirilishi va murakkab masalalarga juda qisqa yechimlar va formulalari borligi bilan ajralib turadi</p>
                    </div>
                    <div className='w-full bg-[linear-gradient(_165deg,_#007E72_0%,#4DE4A7_50%,_#95FCD2)] rounded-3xl p-6 col-span-1 max-[975px]:col-span-2'>
                        <span className="flex justify-center items-center w-16 h-16 bg-white rounded-2xl mb-4"><img src='/assets/e-learning.svg' alt="" /></span>
                        <div className="font-semibold inline-block relative before:absolute before:block before:w-[440px] before:h-[55px] before:bg-white before:-inset-1 before:rounded-tr-[16px] before:rounded-br-[16px] before:left-[-25px] max-[840px]:before:w-[375px] max-[840px]:before:h-[47px] max-[410px]:before:w-[320px] max-[410px]:before:h-[41px]">
                            <h4 className="relative text-[#007E72] uppercase mb-3 text-[32px] max-[840px]:text-[26px] max-[410px]:text-[22px]">Dasturning afz
                                alligi</h4>
                        </div>
                        <p className="text-[24px] leading-[1.5] text-white mb-[12px] font-medium max-[840px]:text-[20px] max-[700px]:text-[16px]">Ushbu ta’lim dasturi tabiiy fanlar yaxshi rivojlangan Turkiya, Ozarbayjon kabi davlatlar tajribasidan foydalanib ishlab chiqilgan.
                        </p>
                        <p className="text-[24px] leading-[1.5] text-white mb-[12px] font-medium max-[840px]:text-[20px] max-[700px]:text-[16px]">Dasturning afzalliklaridan biri o’rganish nisbatan osonligi va shu tufayli o&apos;quvchilarda qiyinchilik minimum darajaga tushadi va qiziqish ortadi va o’zlashtirish darajasi baland bo&apos;ladi.</p>
                    </div>
                </div>

                <a href="#" className="gradient-btn self-center">Batafsil</a>
            </div>
        </div>
    )
}

export default EduSystem