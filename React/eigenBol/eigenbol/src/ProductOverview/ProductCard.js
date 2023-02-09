import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function ProductCard(props) {
  const product = props.product;
  const source = ["./", `${product.name}`, ".jpg"].join("");
  const alt = ["Picture of ", `${product.name}`].join("");
  const navigate = useNavigate();

  function handleDeleteClick(event) {
    console.log(event.target.value);
    props.setProducts(
      props.products.filter((p) => {
        return p.id !== product.id;
      })
    );
    navigate("/");
  }
  function handleShowDetails() {
    navigate(props.nav);
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={source} alt={alt} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Subtitle>{product.price}</Card.Subtitle>
          <Card.Text>{product.desc}</Card.Text>
          <Button variant="primary" onClick={handleDeleteClick}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleShowDetails}>
            {props.func}
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
export default ProductCard;
