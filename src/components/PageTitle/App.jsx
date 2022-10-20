// import { Children } from "react";


export const App = ({children}) => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30,
        marginBottom: 100,
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
      {children}
    </div>
  );
};
