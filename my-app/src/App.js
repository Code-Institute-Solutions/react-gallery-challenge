import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarSimple from './components/NavBarSimple';
import NavBarForm from './components/NavBarForm'
import Content from './components/Content';
import ComponentHooks from './components/ComponentHooks';
import ContentAPI from './components/ContentAPI';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      {/* <NavBarSimple /> */}
      <NavBarForm />
      <Sidebar />
      {/* <Content /> */}
      {/* <ComponentHooks /> */}
      <ContentAPIHooks />
    </div>
  );
}

export default App;
