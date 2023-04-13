import { Image } from "@mui/icons-material";
import logo from "../../assests/footerImg.jpeg";
import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <>
            <div className="footerStyling">
                <div className="row">
                    <div className="col-md-3">
                        {/* <Image src={logo} objectFit="cover" layout="fill" alt="" /> */}
                        <Box
                            component="img"
                            sx={{
                                height: 450,
                                width: 400,
                                // maxHeight: { xs: 233, md: 167 },
                                // maxWidth: { xs: 350, md: 250 },
                                textAlign: 'center'
                            }}
                            alt="No Image."
                            src={logo}
                        />
                    </div>
                    <div className="col-md-3" >
                        <Typography variant="h5" className="footer-col-2">
                            OH YES, WE DID.THE LAMA PIZZA, WELL BAKED SLICE OF PIZZA.
                        </Typography>
                    </div>
                    <div className="col-md-3 footer-col-3">
                        <Typography variant="h6" style={{ color: 'orange' }} >FIND OUR RESTAURANTS</Typography><br />
                        <p >
                            1654 R. Don Road #304.
                            <br /> NewYork, 85022
                            <br /> (602) 867-1010
                        </p>
                        <p >
                            2356 K. Laquie Rd #235.
                            <br /> NewYork, 85022
                            <br /> (602) 867-1011
                        </p>
                        <p >
                            1614 E. Erwin St #104.
                            <br /> NewYork, 85022
                            <br /> (602) 867-1012
                        </p>
                        <p >
                            1614 W. Caroll St #125.
                            <br /> NewYork, 85022
                            <br /> (602) 867-1013
                        </p>
                    </div>
                    <div className="col-md-3 footer-col-3"  >
                        <Typography variant="h6" style={{ color: 'orange' }} >WORKING HOURS</Typography><br />
                        <p >
                            MONDAY UNTIL FRIDAY
                            <br /> 9:00 – 22:00
                        </p>
                        <p >
                            SATURDAY - SUNDAY
                            <br /> 12:00 – 24:00
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;