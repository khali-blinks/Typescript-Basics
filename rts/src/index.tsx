import ReactDOM from "react-dom/client";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);
// This is a TypeScript non-null assertion operator (!). It tells TypeScript:
// "I'm sure this value will never be null/undefined, so don't complain about it."

const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
    </div>
  );
};

root.render(<App />);
