import { Box, Button, Card, Grid, Typography } from "@mui/material"
import { sides } from './MenuList'
import { AddShoppingCartOutlined } from "@mui/icons-material"

const Sides = () => {
    return(
        <>
          <div className="container">
          <Typography variant="h4">Sides:</Typography><br />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ textAlign: 'center' }}>
                    {
                        sides.map((item, index) => {
                            return (
                                <>
                                    <Grid item xs={2} sm={4} md={4} key={index}  className="menuStyling" >
                                        <Card sx={{ boxShadow: 8, padding: 2 }}>
                                            <Box
                                                component="img"
                                                sx={{
                                                    height: 133,
                                                    width: 350,
                                                    maxHeight: { xs: 233, md: 167 },
                                                    maxWidth: { xs: 350, md: 250 },
                                                    textAlign: 'center'
                                                }}
                                                alt="No Image."
                                                src={item.image}
                                            /><br /><br />
                                            <Typography variant='h5' sx={{ textAlign: 'center' }} > {item.name}</Typography><br/>
                                            <Typography variant='h5' sx={{ textAlign: 'center', color:'red' }} > Rs.{item.price}</Typography>
                                            <br />
                                            <Button variant="contained" endIcon={<AddShoppingCartOutlined />}>Add To Cart</Button>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
            </div>
        </>
    )
}
export default Sides