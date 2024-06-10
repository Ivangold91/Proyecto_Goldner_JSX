import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const ItemListContainerComponent = ({products}) => {
  return (
    products.map( (product) => {
      return (
        <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Link to={`/item/${product.id}`}>Ir al detalle</Link>
        </Card.Body>
      </Card>
      )
    })
  )
}

export default ItemListContainerComponent