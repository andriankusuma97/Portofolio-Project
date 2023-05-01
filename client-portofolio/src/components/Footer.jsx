function Footer() {
  return (
    <footer className="w-full border-t-1 border-solid mt-10 border-slate-800 bg-slate-100 font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <div className="flex items-center justify-between p-5 mx-10 lg:flex-row">
        <span>{new Date().getFullYear()} © All Rights Reserved</span>
        <span> 🚀 By Akusuma Code ♡ 🚀 </span>
        <span>
          Date: {new Date().getUTCDate()}/{new Date().getMonth()}/
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
