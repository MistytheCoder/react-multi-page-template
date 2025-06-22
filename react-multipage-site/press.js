const App = () => {
  return (
    <Template>
      <h1 className="mb-4">Press & Media</h1>
      <p>This page showcases all the media and press mentions of Mahi’s projects.</p>
    </Template>
  );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />););
