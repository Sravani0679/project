import './App.scss';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
   <>
    <Navbar/>
    <Card/>
    <div className='wrapper'>
   <Dashboard image="https://miro.medium.com/max/1400/1*14NgZjywc9Ip0B2UVc01Aw.jpeg" alt="meditation" title="Journal" desc="Write" btn="Open" url=""/>
   <Dashboard image="https://img.freepik.com/premium-vector/black-boy-meditating-lotus-pose-gymnastic-yoga-meditation-children_254685-1058.jpg" alt="meditation" title="Relax" desc="Take a moment to relax and do nothing" btn="Open" url="./components/Relax.js" />
   <Dashboard image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_M6SzMy82SMHPAcWvpDIZoTiPKYXvhxnswA&usqp=CAU" alt="meditation" title="Daily Check-in" desc="free writing" btn="Open"/>
   <Dashboard image="https://us.123rf.com/450wm/noneshco/noneshco2003/noneshco200300008/noneshco200300008.jpg?ver=6" alt="meditation" title="Activity" desc="Activity" btn="Open"/>
  
   </div>
    </>
  );
}

export default App;
