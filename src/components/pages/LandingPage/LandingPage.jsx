import { useNavigate } from 'react-router-dom';
import Navbar from '../../fragments/Navbar/Navbar';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <main className="my-[100px] flex flex-col items-center">
        <div className="flex flex-col gap-6">
          <h1 className="font-cormorant text-[64px]">
            Welcome to Decentralized Voting Application
          </h1>
          <button
            onClick={() => navigate('/list-voter')}
            className="w-[176px] h-[66px] rounded-[20px] bg-[#D6C955] font-hind text-[24px] font-semibold flex items-center justify-center active:scale-90 transition-all duration-200"
          >
            Get Started
          </button>
        </div>
        <div className="flex flex-col items-center gap-[50px]">
          <h1 className="text-[30px] font-semibold font-hind">
            Your Voice Your Vote
          </h1>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2">
              <div className="size-[15px] rounded-full bg-[#87B89A]"></div>
              <h1 className="text-[24px] font-hind">Simple</h1>
            </div>
            <div className="flex items-center gap-2">
              <div className="size-[15px] rounded-full bg-[#879DB8]"></div>
              <h1 className="text-[24px] font-hind">Effective</h1>
            </div>
          </div>
          <div className="flex gap-[52px] items-center">
            <div className="w-[231px] h-[257px] rounded-[20px] bg-gradient-to-b from-[#99D1B0] to-card flex items-center justify-center flex-col gap-[42px]">
              <img src="/circle.png" alt="" />
              <h1 className="font-hind text-[20px] font-medium">Easy To Use</h1>
            </div>
            <div className="w-[231px] h-[257px] rounded-[20px] bg-gradient-to-b from-[#CAA4D8] to-card2 flex items-center justify-center flex-col gap-[42px]">
              <img src="/pie-chart.png" alt="" />
              <h1 className="font-hind text-[20px] font-medium">Easy To Use</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LandingPage;
