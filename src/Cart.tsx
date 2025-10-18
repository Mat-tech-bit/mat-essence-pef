import { Box, Typography } from "@mui/material"
import { product } from "./data"



const cart = () => {


  return (
    <div>
        <Box>
            
            <Typography>CART</Typography>
            <Box sx={{display: "flex", overflow: "hidden",}}>
                <Box
                component="img"
                src="/pef.jpg"
                height="50px"
                width="50px"
                alt="product-image"
                 />
                 <Box>
                 <Typography>{product.name}</Typography>
                 <Typography>${product.price}</Typography>
                 </Box>
            </Box>
            
        </Box>
    </div>
  )
}

export default cart