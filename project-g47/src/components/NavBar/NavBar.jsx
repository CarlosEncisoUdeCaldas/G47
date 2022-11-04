import NavItems from "./NavItems";

const NavBar = () => {
  //array que hará el recorrido de los nav items
  const navItems = [
    {ruta: '/', icon: 'bi bi-house', title: 'Home'},
    {ruta: '/contador', icon: 'bi bi-plus-slash-minus', title: 'Contador'},
    {ruta: '/saludo', icon: 'bi bi-hand-thumbs-up', title:'Saludo' },
  ]

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* Funcion map que va a renderizar los items de la barra de navegacion */}
            <NavItems navItems={ navItems } />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
