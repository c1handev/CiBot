import Link from "next/link";
import { Menu } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function Footer() {

    return (
        <>
            <footer className="py-10">
                <div className="pt-10 mx-auto">
                    <div className="lg:grid lg:grid-cols-6 gap-20">
                        <div className="col-span-3">
                            <div className="flex items-center space-x-5">
                                <img src="/img/logo2.png" className="rounded-full w-12" />
                                <p className="font-semibold text-xl text-white">CiBot</p>
                            </div>
                            <Menu as="div" className="relative mt-3 inline-block text-left">
                                <div>
                                    <Menu.Button className="flex z-1 items-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                                        <img
                                            src={`https://cdn.discordapp.com/attachments/1268990338467631146/1269593571384627311/images.png?ex=66b0a0a7&is=66af4f27&hm=c1eb3d10cb914856e43eac147c7c6a2480135cd98719ffe0fe8af99cbf1664cb&`}
                                            width="24"
                                            height="18"
                                            className="mr-2 h-4 rounded-sm"
                                        />
                                        Türkçe
                                        <ChevronDownIcon
                                            className="w-5 h-5 ml-2 -mr-1 transform rotate-180 text-violet-200 hover:text-violet-100"
                                            aria-hidden="true"
                                        />
                                    </Menu.Button>
                                </div>
                            </Menu>
                        
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Linkler</p>
                            <div>
                                <Link href="https://top.gg/bot/774043716797071371/vote">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        CiBot'a Oy Ver(daha gelmedi)
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <a href="https://discord.gg/ZcDprCrFTn" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    Destek Sunucusu
                                </a>
                            </div>
                            <div>
                                <a href="https://discord.com/api/oauth2/authorize?client_id=774043716797071371&permissions=277028620608&scope=applications.commands%20bot" target="_blank" className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    CiBot'u Sunucuna Davet Et
                                </a>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Sosyal</p>
                            <div>
                                <Link href="https://discord.gg/HfKcDcbj9m">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                    <i className={`fa-brands fa-discord`} /> Discord 
                                    </a>
                                </Link>
                            </div>
                            
                            <div>
                                <Link href="https://www.youtube.com/channel/UCLcM_luQ1ICDIBy1korAhnw">
                                    <a className="text-white/50 hover:text-red hover:underline transform duration-200">
                                    <i className={`fa-brands fa-youtube`} /> YouTube 
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <p className="text-white font-medium mt-3 sm:mt-0 sm:mb-3">Önemli</p>
                            <div>
                                <Link href="/tos">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                        Kullanım Şartları
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="/privacy">
                                    <a className="text-white/50 hover:text-white hover:underline transform duration-200">
                                         Gizlilik Politikası
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 grid content-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                        <p className="text-white text-center sm:text-left text-opacity-50">
                            {new Date().getFullYear()} &copy; CiBot
                        </p>
                        <div className="hidden md:flex items-center justify-center">
                                <p className={"text-xs text-orange-400"}>
                                    Bot Bakımda⏳
                                </p>
                        </div>
                        <p className="text-white text-center sm:text-right text-opacity-50">
                            {"maked by c1handev"}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
