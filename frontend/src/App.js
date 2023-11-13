import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';
import Login from './components/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './action/User';
import AdminPanel from './components/AdminPanel/AdminPanel';
import Loading from './components/Loading';
import Timeline from './components/AdminPanel/Timeline';
import Youtube from './components/AdminPanel/Youtube';
import Projects from './components/AdminPanel/Projects';
import NotFound from './components/NotFound';

function App() {
  const dispatch = useDispatch()
  const { isAuthenticated } = useSelector((state) => state.login)
  const { loading,user } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch(getUser())
    dispatch(loadUser())
  }, [dispatch])
  return (
    loading ? <Loading /> : (
      <>
        <Router>
          <Header />

          <Routes>
            <Route path='/' element={<Home timeline={user.timeline} youtube={user.youtube} skills={user.skills}/>} />
            <Route path='/about' element={<About about={user.about}/>} />
            <Route path='/project' element={<Project projects={user.projects}/>} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/account' element={isAuthenticated ? <AdminPanel /> : <Login />} />
            <Route path='/admin/timeline' element={isAuthenticated ? <Timeline /> : <Login />} />
            <Route path='/admin/youtube' element={isAuthenticated ? <Youtube /> : <Login />} />
            <Route path='/admin/projects' element={isAuthenticated ? <Projects /> : <Login />} />
            <Route path='*' element={ <NotFound />} />
          </Routes>

          <Footer />
        </Router>
      </>
    )
  );
}

export default App;
