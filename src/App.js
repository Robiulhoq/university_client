import Dashboard from "./Components/Dashboard/Dashboard";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AllCourse from "./Components/AllCourse/AllCourse";
import Assinment from "./Components/Assinment/Assinment";
import Class from "./Components/Class/Class";
import SubmitAssinment from "./Components/SubmitAssinment/SubmitAssinment";
import Login from "./Components/UserAuth/Login";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivatedRoute/PrivateRouter";
import TeacherAuth from "./Components/UserAuth/TeacherAuth";
import TDashboard from "./TeacherComponents/TDashboard";
import TCourse from "./TeacherComponents/TCourse";
import TAssinment from "./TeacherComponents/TAssinment";
import TClass from "./TeacherComponents/TClass";
import TSubmitAssinment from "./TeacherComponents/TSubmitAssinment";
export  const LoginContext = createContext()
function App() {
  const [login, setLogin] = useState({
        name: '',
        email: ''
  });
  console.log(login);
  return(
    <LoginContext.Provider value={[login, setLogin]}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/allcourse" element={<PrivateRoute><AllCourse/></PrivateRoute>} />
        <Route path="/assinment" element={<PrivateRoute><Assinment/></PrivateRoute>} />
        <Route path="/class" element={<PrivateRoute><Class/></PrivateRoute>} />
        <Route path="/submitassinment" element={<PrivateRoute><SubmitAssinment/></PrivateRoute>} />
        <Route path="/login/teacher" element={<TeacherAuth/>}/>
        <Route path="/teacher/dashboard" element={<PrivateRoute><TDashboard/></PrivateRoute>}/>
        <Route path="/teacher/course" element={<PrivateRoute><TCourse/></PrivateRoute>}/>
        <Route path="/teacher/assinment" element={<PrivateRoute><TAssinment/></PrivateRoute>}/>
        <Route path="/teacher/class" element={<PrivateRoute><TClass/></PrivateRoute>}/>
        <Route path="/teacher/submitassinment" element={<PrivateRoute><TSubmitAssinment/></PrivateRoute>}/>
      </Routes>

    </BrowserRouter>
    </LoginContext.Provider>

  );
}

export default App;
