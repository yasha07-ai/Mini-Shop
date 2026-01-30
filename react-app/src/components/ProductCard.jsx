import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'

export default function ProductCard({p, onAdd}){
  return (
    <Card className="card-hover h-100">
      <CardMedia component="img" image={p.image} alt={p.title} className="product-img" />
      <CardContent>
        <Typography variant="subtitle1" gutterBottom>{p.title}</Typography>
        <Typography variant="body2" color="text.secondary">${p.price.toFixed(2)}</Typography>
      </CardContent>
      <CardActions>
        <Link to={`/product/${p.id}`} className="btn btn-outline-primary btn-sm">View</Link>
        <Button size="small" variant="contained" onClick={()=> onAdd(p.id)} style={{marginLeft:'auto'}}>Add</Button>
      </CardActions>
    </Card>
  )
}
