const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="index.html">Mahi's Site</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="index.html">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="press.html">Press</a>
        </li>
      </ul>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <div className="d-none d-md-block col-md-3">
      <div className="border p-3 rounded bg-light">
        <strong>Sidebar</strong>
        <p>Extra navigation or announcements can go here.</p>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="border-top text-center p-3 mt-5">
      © {new Date().getFullYear()} Mahi's React Template 
    </footer>
  );
};

const Template = (props) => {
  return (
    <>
      <Navbar />
      <main className="container mt-4">
        <div className="row">
          <div className="col-12 col-md-9">{props.children}</div>
          <Sidebar />
        </div>
      </main>
      <Footer />
    </>
  );
};
