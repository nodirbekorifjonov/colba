import { BsFacebook, BsInstagram, BsTelegram } from "react-icons/bs"

const Footer = () => {
    return (
        <footer className="primary-gradient rounded-t-[40px] py-[56px] mt-[120px]">
            <div className="site-container flex justify-between text-white max-[885px]:flex-col max-[885px]:items-center max-[885px]:text-center max-[885px]:gap-6">
                <div className="w-[388px] leading-[1.25] max-[885px]:w-full max-[885px]:flex max-[885px]:flex-col max-[885px]:items-center max-[885px]:gap-3">
                    <img src="/assets/footer-logo.svg" alt="" width={160} className="mb-6 max-[885px]:m-0" />
                    <h3 className="font-semibold text-[32px] max-[715px]:text-[24px]">Biz bilan o’zingizga qulay tarzda bog’laning</h3>
                </div>
                <div className="footer-info flex gap-[48px] max-[1155px]:flex-col max-[885px]:flex-row max-[885px]:justify-between max-[885px]:w-[90%] max-[715px]:w-full max-[715px]:flex-col-reverse">
                    <div className="relative overflow-hidden">
                        <iframe src="https://yandex.uz/map-widget/v1/?ll=69.217292%2C41.332327&mode=search&oid=239030332211&ol=biz&sctx=ZAAAAAgBEAAaKAoSCcueBDbnUVFAERGPxMvTp0RAEhIJ%2BWcG8YEd1z8RdJgvL8A%2BxD8iBgABAgMEBSgKOABA31BIAWoCdXqdAc3MzD2gAQCoAQC9AZxyGk7CAQaz1sW6%2BgaCAgVjb2xiYYoCAJICAJoCDGRlc2t0b3AtbWFwcw%3D%3D&sll=69.217292%2C41.332327&sspn=0.014586%2C0.006386&text=colba&utm_campaign=desktop&utm_medium=search&utm_source=maps&z=16.63"
                            width="382"
                            height="160"
                            allowFullScreen
                            className="relative rounded-3xl border-none bg-transparent m-0 p-0 max-[715px]:w-full max-[715px]:h-[300px]"
                        >
                        </iframe>
                    </div>
                    <div className="footer-contacts flex flex-col gap-12 max-[1155px]:flex-row max-[885px]:flex-col max-[885px]:gap-8 max-[715px]:flex-row max-[715px]:justify-evenly max-[715px]:flex-wrap">
                        <div>
                            <p className="mb-[8px] leading-[1.5]">Telefon:</p>
                            <a href="tel:+998935842939" className="font-bold text-[18px]">+998 93 584 29 39</a>
                        </div>
                        <div>
                            <p className="mb-[8px] leading-[1.5]">Ijtimoiy tarmoqlar:</p>
                            <ul className="flex gap-6 max-[885px]:justify-center">
                                <li>
                                    <a href="#" className="text-white block text-2xl transition duration-200 hover:-translate-y-1.5"><BsTelegram /></a>
                                </li>
                                <li>
                                    <a href="#" className="text-white block text-2xl transition duration-200 hover:-translate-y-1.5"><BsFacebook /></a>
                                </li>
                                <li>
                                    <a href="#" className="text-white block text-2xl transition duration-200 hover:-translate-y-1.5"><BsInstagram /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer