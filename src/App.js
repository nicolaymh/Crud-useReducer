import CrudApp from './components/CrudApp';
import PersonasProvider from './context/PersonasProvider';

const App = () => {
    return (
        <PersonasProvider>
            <CrudApp />
        </PersonasProvider>
    );
};

export default App;
