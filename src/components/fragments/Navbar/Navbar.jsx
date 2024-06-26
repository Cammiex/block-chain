import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const currentPage = location.pathname.split('/');

  return (
    <header className="w-full h-[123px] flex justify-between items-center px-[61px]">
      <h1 className="font-cormorant text-[40px] font-bold italic">
        Vote Today
      </h1>
      <div className="flex items-center gap-[46px] text-[32px] font-sans">
        <h1
          onClick={() => navigate('/')}
          aria-current={currentPage.includes('home') ? 'page' : undefined}
          className="transition-all duration-100 cursor-pointer hover:font-bold active:scale-95 aria-[current=page]:font-bold"
        >
          Home
        </h1>
        <h1
          onClick={() => navigate('/vote')}
          aria-current={currentPage.includes('vote') ? 'page' : undefined}
          className="transition-all duration-100 cursor-pointer hover:font-bold active:scale-95 aria-[current=page]:font-bold"
        >
          Vote
        </h1>
        <h1
          onClick={() => navigate('/list-voter')}
          aria-current={currentPage.includes('list-voter') ? 'page' : undefined}
          className="transition-all duration-100 cursor-pointer hover:font-bold active:scale-95 aria-[current=page]:font-bold"
        >
          List Voters
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
