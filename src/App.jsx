import './App.less';
import { Suspense } from 'react';
import { Navigate, Routes, Route} from 'react-router-dom'
import routes from './routes'
import Loading from './components/Loading/Loading'
import Nav from './components/Nav/Nav'
import { BackTop } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';


function App() {
  // const element = useRoutes(routes);
  // console.log(element);
  return (
    <div className="App" style={{height: '100%', position: 'relative'}}>
      <Nav />
      <div className="main">
        {/* 注册路由 */}
        {/* {element} */}
        <Routes>
          <Route path="/" element={<Navigate to="home"/>}></Route>
          {
            routes.map((item, index) => {
              return (
                <Route key={index} path={item.path} element={
                  <Suspense fallback={<Loading/>}>
                    {item.element}
                  </Suspense>
                }/>
              )
            })
          }
        </Routes>
        {/* 返回顶部 */}
        <BackTop visibilityHeight={200}>
          <div className='top'>
           <CaretUpOutlined />
          </div>
        </BackTop>
      </div>
    </div>
  );
}

export default App;
