// Note the corrected import statement


function Header() {
  return (
    <header className="app-header">
      <img src={`${process.env.PUBLIC_URL}/The React Quiz App/logo512.png`} alt="React logo" />
      <h1>The React Quiz</h1>
    </header>
   
  );
}

export default Header;

