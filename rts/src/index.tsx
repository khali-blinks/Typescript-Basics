import ReactDOM from "react-dom/client";
import { GuestList } from "./state/GuestList";
import UserSearch from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);
// This is a TypeScript non-null assertion operator (!). It tells TypeScript:
// "I'm sure this value will never be null/undefined, so don't complain about it."

const App = () => {
  return (
    <div>
      <GuestList/>
      <UserSearch/>
      <EventComponent/>
    </div>
  );
};

root.render(<App />);
// ReactDOM.render(<App />, el);
// ReactDOM.render is the old way of rendering a React component to the DOM.
// ReactDOM.createRoot is the new way of rendering a React component to the DOM.
