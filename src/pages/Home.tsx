import controle from '../assets/controle-xbox.png';
import farcry from '../assets/farcry.png';
import fifa from '../assets/fifa.png';
import forza from '../assets/forza.png';
import LogoXbox from '../assets/logo-xbox.svg';
import minecraft from '../assets/minecraft.png';
import xbox from '../assets/xbox.png';
import FAQAccordion from '../components/FAQ';
import Navigation from '../components/Navigation';


export default function Home() {
    return (
        <div className="font-inter min-h-screen flex flex-col items-center w-full bg-[#0D100C] text-white">
            <div className='flex flex-col md:flex-row items-center w-full max-w-[1216px] mb-6 md:mb-0 md:pt-6 px-6 md:px-8'>
                <nav aria-label="Navegação principal" className=" w-full flex-col md:flex-row font-inter flex items-center mb-8 md:mb-0 pt-6 md:pt-0 justify-start">
                    <img src={LogoXbox} alt="Logo" className="w-[70px] mb-6 md:mb-0" />
                    <Navigation />
                </nav>
                <button aria-label="Ver disponibilidade" className="bg-[#9BF00B] text-[#0C0C0C] max-w-[312px] md:max-w-[196px] w-full py-3 font-semibold text-[12px] leading-none tracking-[0.01em] uppercase hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-[#9BF00B] hover:text-[#FFFFFF] transition">
                    VER DISPONIBILIDADE
                </button>
            </div>
            <main className='flex flex-col items-center w-full pt-[48px] lg:pt-[112px]'>
                <h1 className="font-inter mb-2 font-semibold text-[36px] md:text-[48px] lg:text-[72px] md:mb-4 leading-[115%] text-white text-center">
                    Xbox series X
                </h1>

                <h2 className="font-inter font-bold text-[16px] md:text-[18px] lg:text-[24px] mb-8 md:mb-3 lg:mb-12 leading-[100%] tracking-[5%] uppercase text-[#9BF00B]">
                    pedido antecipado
                </h2>

                <img src={xbox} alt="Console Xbox Series X" loading="lazy" className="max-w-[1224px] w-full" />

                <div className="pt-12 px-6 md:px-8 flex flex-col md:flex-row items-center w-full lg:max-w-[1216px]">
                    <div className="flex flex-col items-center w-full md:items-start">
                        <h3 className="font-inter font-semibold text-[24px] md:text-[32px] lg:text-[64px] mb-6 leading-[130%] text-center">
                            <span className="text-[#9BF00B]">Desempenho</span><br />aperfeiçoado
                        </h3>
                        <p className="font-inter font-medium text-[14px] md:text-[16px] lg:text-[24px] md:max-w-[299px] lg:max-w-[570px] leading-[140%] text-[#C0C0C0] text-center md:text-left">
                            O controle sem fio Xbox traz um design elegante, conforto refinado e compartilhamento instantâneo para um favorito comum.
                        </p>
                    </div>
                    <img src={controle} alt="Controle sem fio Xbox" loading="lazy" className="max-w-[207px] md:max-w-[280px] lg:max-w-[500px] mt-12 mb-12 w-full" />
                </div>

                <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 items-center w-full py-16 lg:py-24 px-6 md:px-8 gap-10 lg:px-0 lg:gap-0">
                    <img src={fifa} alt="Capa do jogo FIFA" loading="lazy" className='w-full' />
                    <img src={forza} alt="Capa do jogo Forza" loading="lazy" className='w-full' />
                    <img src={farcry} alt="Capa do jogo Far Cry" loading="lazy" className='w-full' />
                    <img src={minecraft} alt="Capa do jogo Minecraft" loading="lazy" className='w-full' />
                </div>


                <FAQAccordion />


            </main>
            <footer role="contentinfo" className="w-full flex items-center justify-between px-6 py-6 lg:max-w-[1216px]">
                <img src={LogoXbox} alt="Logo" className="w-[70px] mb-6 md:mb-0 md:w-[83px] lg:w-[146px]" />
                <p className="font-inter font-normal text-[12px] leading-[150%] text-[#777777]">
                    <span className="lg:mr-14">© Microsoft 2022</span>
                    <br className="block lg:hidden" />
                    <span className="hidden lg:inline"> </span>
                    Todos os direitos reservados
                </p>
            </footer>

        </div>
    )
}
