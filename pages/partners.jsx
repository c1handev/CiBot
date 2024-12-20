
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Partnerler
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.com/oauth2/authorize?client_id=972564795846983750&permissions=8&integration_type=0&scope=bot">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/1215354169842475060/1268940374932717680/log.png?ex=66ae4051&is=66aceed1&hm=1edb57f4b8e137613d897a37b405c65769ff56a4f1f38c7193e94e64a8a5f96d&" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Botrex</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      Sunucunu Tamamen Türkçe Olan Ve Doğrulanmış Olan Botrex İle Güzelleştirmeye Ne Dersin?
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                            <div className="flex flex-col justify-center text-white rounded">
            <a href="merloagalarspor.com">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/attachments/1269709170697965648/1310858683546206308/1732603243802.png?ex=6746bfc8&is=67456e48&hm=02535ecf87e440811a5c8a7b5544800d18a2975d6267282b3c829a9fc8e6e790&" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">MerLo Agalarspor</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                   MerLo Agalarspor Spor Kulübü
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
