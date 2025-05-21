import { motion } from 'framer-motion'

export default function Product() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <h1>Product Details</h1>
      <p>This is the product details page. Here you can see more information about the product.</p>
    </motion.div>
  );
}