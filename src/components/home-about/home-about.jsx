const HomeAbout = () => {
    return (
        <div className="home-about py-[76px]  bg-[url(/assets/about-bg-arrow.svg)] bg-no-repeat bg-[bottom_-40px_left_560px] max-[1470px]:bg-[bottom_-40px_left_520px] max-[1400px]:bg-[bottom_-50px_left_490px] max-[1300px]:bg-[bottom_-50px_left_460px] max-[1187px]:bg-none max-[1187px]:py-8 max-[700px]:py-4">
            <div className="site-container flex gap-10 justify-between max-[1187px]:flex-col">
                <div className="about__info">
                    <h2 className="about__title text-[64px] font-semibold mb-6 max-[840px]:text-[48px] max-[840px]:mb-4 max-[700px]:text-[32px] max-[700px]:mb-2">Biz <span className="gradient-text">haqimizda</span></h2>
                    <p className="about__description text-[21px] leading-[1.45] mb-[32px] max-[840px]:text-[18px] max-[840px]:mb-[24px] max-[700px]:text-[16px] max-[700px]:mb-[20px]">Colba ta&apos;lim markazi - 2010 vil o&apos;z faoliyatini boshlagan va hozirgi kunda kimyo va biologiyaga ixtisoslashgan O&apos;zbekistondagi eng katta o&apos;quv markaz. <br /> <br /> Markazimiz tabiiy fanlarga ixtisoslashgan va 2018-yildan boshlab majburiy fanlarni (Matematika, Tarix, Ona tili) ham o&apos;qitib kelmoqda. Colba Ta&apos;lim Markazining Toshkent shahrida 2 ta filiali mavjud..</p>

                    <h4 className="font-semibold text-[28px] -tracking-[2%] mb-4 max-[840px]:text-[24px] max-[700px]:text-[20px]">Chuqurlashtirilgan fanlar</h4>
                    <div className="about-btns font-semibold flex gap-4 flex-wrap">
                        <button className="px-[81px] py-[16px] bg-[rgba(132,212,255,0.5)] text-[#008CDA] rounded-3xl max-[700px]:px-[64px] max-[700px]:py-[14px]">Kimyo</button>
                        <button className="px-[81px] py-[16px] bg-[rgba(135,116,243,0.12)] text-[#3A2E83] rounded-3xl max-[700px]:px-[64px] max-[700px]:py-[14px]">Biologiya</button>
                    </div>
                </div>
                <img src="/assets/about-img.png" alt="" srcSet="/assets/about-img.png 1x, /assets/about-img@2x.png 2x" />
            </div>
        </div>
    )
}

export default HomeAbout