import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height:"361px",
        marginBottom:"31px",
        border:"1px solid #ddd"
    },
    media: {
        height: 225,
        width: "75%",
        margin:"auto"
    },
});

const ProductCol = ({ product }) => {

    const classes = useStyles();

    const { img, pName, forWhom, price, offerPrice } = product;

    return (
        <div className="col-md-3">
            <div>
                <div>
                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={`${classes.media} img-fluid`}
                                image={img}
                                title={pName}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="p" component="p">
                                    {pName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   {forWhom}
                                </Typography>
                                <Typography variant="body3" color="textSecondary" component="h6">
                                   BDT: {price}
                                </Typography>
                                <Typography variant="body4" color="textSecondary" component="h6">
                                   <div className="d-flex justify-content-between">
                                   <del>BDT: {offerPrice}</del>
                                   <p>34% off</p>
                                   </div>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProductCol;