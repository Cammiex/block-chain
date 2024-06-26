import { useState } from 'react';
import Navbar from '../../fragments/Navbar/Navbar';
import Swal from 'sweetalert2';

const ListVotersPage = () => {
  const [connect, setConnect] = useState(false);
  const [name, setName] = useState('');
  const [openList, setOpenList] = useState(false);

  const handleSubmitCandidate = () => {
    if (!connect) {
      Swal.fire('Connect Metamask first!', '', 'warning');
      return;
    }
    if (!name) {
      Swal.fire('Insert the name first!', '', 'warning');
      return;
    }

    Swal.fire('Candidate successfully added!', '', 'success');
    console.log(name);
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
          <h1 className="text-[32px]">Add candidate here!</h1>
          <div className="flex items-center gap-5">
            <input
              type="text"
              name=""
              id=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name of candidate"
              className="w-[590px] h-[57px] rounded-[6px] border px-3 text-[24px] border-black"
            />
            <button
              onClick={handleSubmitCandidate}
              className="px-4 py-2 size-fit bg-button text-white text-[30px] rounded-[6px] active:scale-95 transition-all duration-200"
            >
              Add
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[707px] mt-[54px]">
          {' '}
          <h1 className="text-[32px]">List of candidates</h1>
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
            <h1 className="text-[20px]">Task updated</h1>
            <table className="w-full table-fixed max-w-[1071px] text-center border-collapse border border-slate-500">
              <thead>
                <tr>
                  <th className="py-5 border border-slate-600 w-[224px]">
                    Index
                  </th>
                  <th className="py-5 border border-slate-600 w-[421px]">
                    Candidate Name
                  </th>
                  <th className="py-5 border border-slate-600 w-[421px]">
                    Number of Votes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-5 border border-slate-600">1</td>
                  <td className="py-5 border border-slate-600">
                    George R.R Martin
                  </td>
                  <td className="py-5 border border-slate-600">1</td>
                </tr>
                <tr>
                  <td className="py-5 border border-slate-600">2</td>
                  <td className="py-5 border border-slate-600">Markus Suzak</td>
                  <td className="py-5 border border-slate-600">0</td>
                </tr>
                <tr>
                  <td className="py-5 border border-slate-600">3</td>
                  <td className="py-5 border border-slate-600">
                    Ankur Warikoo
                  </td>
                  <td className="py-5 border border-slate-600">0</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          ''
        )}
      </main>
    </>
  );
};

export default ListVotersPage;
