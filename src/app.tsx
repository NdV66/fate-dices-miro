import * as React from 'react';
import { createRoot } from 'react-dom/client';

import { RollPanel } from './page/RollPanel';

const App: React.FC = () => (
    <div className="wrapper">
        <RollPanel />
    </div>
);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
