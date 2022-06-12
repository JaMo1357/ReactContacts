import logo from '../logo.svg';

function Header() {
  return (
    <header className="flex flex-row justify-center items-center w-full h-9 bg-slate-500">
      <img src={logo} className="h-8 animate-spin-slow" alt="logo" />
      <h3 className="text-azure">Contacts</h3>  
    </header>
  );
}

export default Header