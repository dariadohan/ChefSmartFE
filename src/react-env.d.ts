declare module 'react-dom/client';
declare module 'react';

declare module 'react/jsx-runtime' {
    export default any;
}

declare module '*.png' {
    const value: string;
    export default value;
}
