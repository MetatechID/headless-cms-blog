import React from "react";

const ProgramContent = () => {
  return (
    <div className="bg-systemBackground shadow-black-500/50 relative flex h-full w-full overflow-hidden rounded-2xl p-10 text-sm font-bold text-[#000] shadow-lg md:text-sm">
      <div className="w-64 flex-auto text-left">
        <div>LOGO</div>
        <div>descripsi program</div>
        <div>tujuan</div>
        <div>pencapaian</div>
      </div>
      <div className="w-64 flex-auto">content image</div>
    </div>
  );
};

export default ProgramContent;
