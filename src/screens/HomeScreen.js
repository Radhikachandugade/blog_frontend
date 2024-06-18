import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Heading, Grid } from "@chakra-ui/react";
import { listBlogs } from "../actions/blogActions";

// import Product from "../components/Product";
// import { listProducts } from "../actions/productActions";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Product from "../components/Product";

const HomeScreen = () => {
  const dispatch = useDispatch();

  // const productList = useSelector((state) => state.productList);
  // const { loading, products, error } = productList;

  const blogList = useSelector((state) => state.blogList);
  const { loading, error, blogs } = blogList;

  useEffect(() => {
    dispatch(listBlogs());
  }, [dispatch]);

  return (
    <>
      // <div className={`bg-blue text-white p-4`}
      //   <h1 className={`text-2xl`}>Hello, tailwind css in react!</h1>
      //   <button className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded`}>Click Me!</button>
      // </div>
      <Heading as="h2" mb="8" fontSize="3xl">
        New Blogs ..
      </Heading>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message type="error">{error}</Message>
      ) : (
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr 1fr" }}
          gap="8"
        >
          {blogs?.map((Sproduct) => (
            <Product key={Sproduct._id} Oproduct={Sproduct} />
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;
