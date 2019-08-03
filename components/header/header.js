import Head from './head'
import Title from './title'
import PropTypes from "prop-types"
import theme from "../styles/theme"
const Header = ({ path, pageTitle, ogImage }) =>{
    return(
        <> 
        <Head title={pageTitle} ogImage={ogImage} />
        <header>
          <Title path={path} />
          {/* <Nav /> */}
        </header>
        <style jsx>{`
            header {
              padding: 1em 0;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-left: auto!important;
              margin-right: auto!important;
              max-width: ${theme.size.maxWidth}!important;

            }
          `}
        </style>
        </>
    )
}
Header.propTypes = {
    path: PropTypes.string,
    pageTitle: PropTypes.string,
    ogImage: PropTypes.string
  }
  
export default Header