import { Box, Button, Card, Dialog, DialogContent, DialogTitle, FormControlLabel, Grid, IconButton, Radio, RadioGroup, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import {  NonVegetarianList, NonVegToppings, crusts } from './MenuList'
import { AddShoppingCartOutlined } from "@mui/icons-material"
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from "react";



const NonVegetarianPizza = () => {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = useState('')
    
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmitCart = (e) => {
        e.preventDefault();
        console.log("cart")
    }
    
    return (
        <>
            <div className="container">
                <Typography variant="h4">NON - Vegetarian Pizza:</Typography><br />
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ textAlign: 'center' }}>
                    {
                        NonVegetarianList.map((item, index) => {
                            return (
                                <>
                                    <Grid item xs={2} sm={4} md={4} key={index} className="menuStyling" >
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
                                            <Button variant="contained" onClick={handleClickOpen} >Order Now</Button>
                                        </Card>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid><br />
            </div>
          

            <Dialog open={open} onClose={handleClose}>
                <DialogTitle  className='dialogTitle'>
                <Typography variant='h5' sx={{color:'orange'}}>Type of crust</Typography>
                    <IconButton onClick={handleClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={(e, val)=>[console.log(val),setValue(val)]}
        value={value}
      >
        {
            crusts.map((item, i) => {
                return (
                    <>
                        <FormControlLabel value={item} control={<Radio />} label={item} />
        
                    </>
                )
            })
        }
      </RadioGroup><br/>

      <Grid item xs={6}>
                            <Typography variant='h5' sx={{color:'orange'}} >NonVegetarian Toppings:</Typography><br />

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
                                                            <TableCell sx={{ minWidth: 150 }}>{item.name}</TableCell>
                                                            <TableCell>Rs.{item.price}</TableCell>
                                                            <TableCell sx={{ minWidth: 200 }}><Button variant="contained">Order Now</Button></TableCell>
                                                        </TableRow>
                                                    </>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            </Grid>
                            </Grid><br/>
                            <Button variant="contained" onClick={handleSubmitCart} sx={{marginLeft:'150px'}} endIcon={<AddShoppingCartOutlined />}>Add To Cart</Button>
                </DialogContent>
            </Dialog>
        </>
    )
}
export default NonVegetarianPizza;