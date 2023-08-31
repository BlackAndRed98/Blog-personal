import { connect } from "react-redux";
import { motion } from "framer-motion";

function Layout({ children }) {
  // Usar desestructuración para acceder a "children"
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      {children}
    </motion.div>
  );
}

const mapStateToProps = (state) => {
  return {
    // Aquí debes mapear propiedades del estado a propiedades del componente
    // Por ejemplo: propName: state.someProperty
  };
};

export default connect(mapStateToProps, {})(Layout);
