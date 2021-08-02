
import Product from "../../component/product/Product"
import { data }  from "../../data/Data"
import "./Home.css"


const Home = () => {
  return (
    <section className="home">
      <div className="home__products">
        {data.map((product, index)=>{

        return(

            <Product key={index} wholeProduct={product} imageURL={product.imageURL} name={product.name} price={product.price} key={index} assured={product.companyAssured} isNew={product.isNewProduct}/>
        )})}
      </div>
    </section>
  )
}


export default (Home)
