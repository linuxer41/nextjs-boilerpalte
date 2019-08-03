import theme from "../styles/theme"
const Container = ({ children }) => (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container{
            /* max-width: 45rem; */
            margin: 0 auto;
            padding: 0;
            align-items: center;
            justify-content: center;
            display: block;
            margin-left: auto!important;
            margin-right: auto!important;
            max-width: ${theme.size.maxWidth}!important;
        }
      `}</style>
    </>
  );
  
  export default Container;