import { Box, Typography } from "@mui/material"



export const Home = () => {
    return (
        <>
            <div className="container" >
                <div className="row " >
                    <div className="col-md-4 text-center"></div>
                    <div className="col-md-4 text-center">
                        <Typography variant="h4" component="div" sx={{ textAlign: 'center' }}>
                            Pizza Factory
                        </Typography><br />
                        <Typography variant="paragraph" component="div"
                            //sx={{ textAlign: 'center', marginLeft: 50, marginRight: 50, color: "grey" }}
                            >
                            <i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic qui ducimus nihil quibusdam mollitia? Velit alias adipisci dolorum reprehenderit sequi veritatis nisi ullam, autem iure animi reiciendis at cupiditate ipsam.</i>
                        </Typography>

                    </div>

                </div>


            </div>

        </>
    )
}