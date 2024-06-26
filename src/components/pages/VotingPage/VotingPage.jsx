import Swal from 'sweetalert2';
import Navbar from '../../fragments/Navbar/Navbar';
import { useState } from 'react';

const VotingPage = () => {
  const [connect, setConnect] = useState(false);
  const [index, setIndex] = useState('');
  const [openList, setOpenList] = useState(false);

  const handleSubmitCandidate = () => {
    if (!connect) {
      Swal.fire('Connect Metamask first!', '', 'warning');
      return;
    }
    if (!index) {
      Swal.fire('Insert the index first!', '', 'warning');
      return;
    }

    Swal.fire('Voting success!', '', 'success');
    console.log(index);
  };

  const handleOpenList = () => {
    if (!connect) {
      Swal.fire('Connect Metamask first!', '', 'warning');
      return;
    }

    setOpenList(!openList);
  };

  return (
    <>
      {' '}
      <Navbar />
      <main className="my-[100px] flex flex-col items-center">
        <button
          onClick={() => setConnect(!connect)}
          className="w-fit h-[79px] px-4 rounded-[5px] text-white text-[30px] bg-button active:scale-95 transition-all duration-200"
        >
          {connect ? 'Connected' : 'Connect Metamask'}
        </button>
        {connect ? (
          <h1 className="mt-7 text-[20px]">Metamask connected</h1>
        ) : (
          ''
        )}

        <div className="flex flex-col gap-2 mt-[124px]">
          <h1 className="text-[32px]">Vote here!</h1>
          <div className="flex items-center gap-5">
            <input
              type="text"
              name=""
              id=""
              value={index}
              onChange={(e) => setIndex(e.target.value)}
              placeholder="Add candidate index"
              className="w-[590px] h-[57px] rounded-[6px] border px-3 text-[24px] border-black"
            />
            <button
              onClick={handleSubmitCandidate}
              className="px-4 py-2 size-fit bg-button text-white text-[30px] rounded-[6px] active:scale-95 transition-all duration-200"
            >
              Add
            </button>
          </div>
          <h1 className="text-[20px]">
            Please wait, adding a vote to the smart contract
          </h1>
        </div>
        <div className="flex flex-col gap-4 w-[707px] mt-[54px]">
          {' '}
          <h1 className="text-[32px]">Check voting status</h1>
          <button
            onClick={handleOpenList}
            className="w-[86px] h-[60px] bg-button text-white text-[30px] rounded-[6px] active:scale-95 transition-all duration-200"
          >
            <h1
              className={
                openList
                  ? 'rotate-180 transition-all duration-300'
                  : 'rotate-0 transition-all duration-300'
              }
            >
              {' '}
              &gt;
            </h1>
          </button>
        </div>
        {openList ? (
          <div className="flex flex-col items-center w-full mt-[43px] gap-[43px]">
            <h1 className="text-[20px] text-[#FF0000]">
              Voting is currently open
            </h1>
            <h1 className="text-[20px] text-[#FF0000]">
              Remaining time [number] seconds
            </h1>
          </div>
        ) : (
          ''
        )}
      </main>
    </>
  );
};

export default VotingPage;
