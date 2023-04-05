import { Box, Button, Card, Grid, List, ListItemText, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { VegetarianList, NonVegetarianList, vegToppings, NonVegToppings, sides, crusts } from './MenuList'
import { AddShoppingCartOutlined, Image } from "@mui/icons-material"


export const Menu = () => {
    return (
        <>
            <div className="container">
                <Typography variant="h4">Vegetarian Pizza:</Typography><br />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ textAlign: 'center' }}>
                    {
                        VegetarianList.map((item, index) => {
                            return (
                                <>
                                    <Grid item xs={2} sm={4} md={4} key={index}  >
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
                                            <Typography variant='h5' sx={{ textAlign: 'center' }} > {item.name}</Typography>
                                            <br />

                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Size</TableCell>
                                                        <TableCell>Price</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>Regular</TableCell>
                                                        <TableCell>Rs.{item.price.Regular}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Medium</TableCell>
                                                        <TableCell>Rs.{item.price.Medium}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Large</TableCell>
                                                        <TableCell>Rs.{item.price.Large}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table><br />
                                            <Button variant="contained" endIcon={<AddShoppingCartOutlined />}>Add To Cart</Button>
                                        </Card>
                                    </Grid>
                                </>

                            )
                        })
                    }


                </Grid>
                <br />
                <Typography variant="h4">NON - Vegetarian Pizza:</Typography><br />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ textAlign: 'center' }}>
                    {
                        NonVegetarianList.map((item, index) => {
                            return (
                                <>
                                    <Grid item xs={2} sm={4} md={4} key={index}  >
                                        <Card sx={{ boxShadow: 10, padding: 2 }}>
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
                                            <Typography variant='h5' sx={{ textAlign: 'center' }} > {item.name}</Typography>
                                            <br />

                                            <Table aria-label="simple table">
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>Size</TableCell>
                                                        <TableCell>Price</TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>Regular</TableCell>
                                                        <TableCell>Rs.{item.price.Regular}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Medium</TableCell>
                                                        <TableCell>Rs.{item.price.Medium}</TableCell>
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>Large</TableCell>
                                                        <TableCell>Rs.{item.price.Large}</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table><br />
                                            <Button variant="contained" endIcon={<AddShoppingCartOutlined />}>Add To Cart</Button>
                                        </Card>
                                    </Grid>
                                </>

                            )
                        })
                    }
                </Grid><br />

                <Card sx={{ boxShadow: 8, padding: 2, width:"50%" }}>
                    <Typography variant="h4">Type of crust</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Types</TableCell>
                                <TableCell>Buy</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                crusts.map((item,i) => {
                                    return(
                                        <>
                                            <TableRow>
                                                <TableCell>{item}</TableCell>
                                                <TableCell><Button variant="contained" endIcon={<AddShoppingCartOutlined />}>Add To Cart</Button></TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })
                            }                        
                        </TableBody>                   
                    </Table>
                </Card><br />


                <Typography variant='h4'  >Extra Toppings</Typography><br/>

                <Grid container  columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                    <Grid item xs={6}>
                        <Card sx={{ boxShadow: 10, padding: 2 }}>
                            <Typography variant='h4' >Veg Toppings:</Typography><br />

                            <Grid item xs={6} sm={2} md={6}  >
                                <Table sx={{ width: "100%" }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Buy</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            vegToppings.map((item, index) => {
                                                return (
                                                    <>
                                                        <TableRow>
                                                            <TableCell>{item.name}</TableCell>
                                                            <TableCell>Rs.{item.price}</TableCell>
                                                            <TableCell sx={{minWidth:200}}><Button variant="contained" endIcon={<AddShoppingCartOutlined />}>Add To Cart</Button></TableCell>
                                                        </TableRow>
                                                    </>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </Grid>

                        </Card>
                    </Grid>


                    <Grid item xs={6}>
                        <Card sx={{ boxShadow: 10, padding: 2 }}>
                            <Typography variant='h4' >NonVeg Toppings:</Typography><br />

                            <Grid item xs={6} sm={2} md={6} >
                                <Table >
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell>Price</TableCell>
                                            <TableCell>Buy</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            NonVegToppings.map((item, index) => {
                                                return (
                                                    <>
                                                        <TableRow>
                                                            <TableCell sx={{minWidth:150}}>{item.name}</TableCell>
                                                            <TableCell>Rs.{item.price}</TableCell>
                                                            <TableCell sx={{minWidth:200}}><Button variant="contained" endIcon={<AddShoppingCartOutlined />}>Add To Cart</Button></TableCell>
                                                        </TableRow>
                                                    </>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </Grid>

                        </Card>
                    </Grid>
                </Grid><br />


                <Card sx={{ boxShadow: 10, padding: 2, width: "50%" }}>
                    <Typography variant='h4' >Sides:</Typography><br />
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Price</TableCell>
                                <TableCell>Buy</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                sides.map((item, index) => {
                                    return (
                                        <>
                                            <TableRow>
                                                <TableCell>{item.name}</TableCell>
                                                <TableCell>Rs.{item.price}</TableCell>
                                                <TableCell><Button variant="contained" endIcon={<AddShoppingCartOutlined />}>Add To Cart</Button></TableCell>
                                            </TableRow>
                                        </>
                                    )
                                })
                            }
                            <TableRow>

                            </TableRow>
                        </TableBody>
                    </Table>
                </Card>
            </div>
        </>
    )
}