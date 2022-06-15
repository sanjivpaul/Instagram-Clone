// import logo from "./logo.svg";
import "./App.css";
import Post from "./Components/Post";

function App() {
  return (
    <div className="app">

      {/* Header */}
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />
      </div>

      <h1>
        Hello cleaver programmer's lets build an instagram clone app with
        React🚀
      </h1>
      {/* posts */}
      <Post />
      {/* posts */}
    </div>
  );
}

export default App;
