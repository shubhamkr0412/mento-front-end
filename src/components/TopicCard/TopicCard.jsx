import React from 'react';

import useStyles from './Styles';
import { Box, Button, Typography, Card } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const TopicCard = ({
    topic: { card_img, desg, heading, name, total_count },
}) => {
    const props = {
        card_img,
    };
    const classes = useStyles(props);

    return (
        <Card className={classes.cardStyle}>
            <Box className={classes.backgroundImage}></Box>
            <Button className={classes.playButton}>
                <PlayArrowIcon color='white' fontSize='large' />
            </Button>
            <Box className={classes.slantedLine}>SlantedLine</Box>
            <Typography
                className={classes.topic}
                variant='h5'
                component='h5'
                align='left'
            >
                {heading}
            </Typography>
            <Box className={classes.cardDetails}>
                <Box>PHOTO</Box>
                <Box className={classes.mentorDetails}>
                    <Typography>{name}</Typography>
                    <Typography>{desg}</Typography>
                </Box>
                <Box className={classes.videoCount}>
                    <Typography>{total_count}</Typography>
                    <Typography>VIDEOS</Typography>
                </Box>
            </Box>
        </Card>
    );
};

export default TopicCard;
