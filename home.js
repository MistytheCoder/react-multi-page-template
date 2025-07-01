const App = () => {
  return (
    <Template>
      <h1 className="mb-4">Welcome to Mahi's React Page</h1>
      <p>This is the homepage built using a custom React + Babel template.</p>
    </Template>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
