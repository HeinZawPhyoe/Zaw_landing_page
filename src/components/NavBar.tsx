import { IconArrowNarrowRight } from "@tabler/icons-react";

const NavBar = () => {
  return (
    <div className="flex justify-between py-5 m">
      <div className="">
        <h1 className="">LSP Uhamka</h1>
      </div>
      <div className="flex justify-between gap-5 ">
        <h1>Home</h1>
        <h1>Profile</h1>
        <h1>Sertifikasi</h1>
        <h1>informasi</h1>
      </div>
      <div className="flex border border-blue-500 gap-3 text-blue-500 rounded-xl px-4 py-2">
        <button>Log in</button>
        <IconArrowNarrowRight />
      </div>
    </div>
  );
};

export default NavBar;
