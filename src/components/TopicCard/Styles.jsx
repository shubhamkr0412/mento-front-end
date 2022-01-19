import { makeStyles } from '@mui/styles';
import { borderLeft } from '@mui/system';

const useStyles = makeStyles({
    cardStyle: {
        position: 'relative',

        border: '1px solid black',
        color: 'white',
        width: 'calc(33.333333% - 20px)',
        height: '60vh',
        marginLeft: '10px',
        marginRight: '10px',
        marginBottom: '30px',
        borderRadius: '12px',
        boxSizing: 'border-box',
        overflow: 'hidden',

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },

    backgroundImage: {
        zIndex: '0',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundImage: (props) => `url(${props.card_img})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'all 1s',
        '&:hover': {
            transform: 'scale(1.2)',
        },
    },

    playButton: {
        top: '33%',
        left: '69%',
        width: '80px',
        height: '80px',
        zIndex: '2',

        boxShadow: '1px 1px 5px grey',

        backgroundColor: 'white',
        color: '#F15340',
        borderRadius: '50px',
        '&:hover': {
            backgroundColor: 'white',
        },
    },

    slantedLine: {
        // backgroundColor: 'white',

        borderBottom: '110px solid white',
        borderLeft: '800px solid transparent',
        zIndex: '0',

        /* borderColor: 'yellow blue red green',
        borderStyle: 'solid',
        borderWidth: '0px 0px 200px 500px',
        height: '0px',
        width: '0px',
        marginBottom: '-20%',
        zIndex: '2', */

        /* width: '120%',
        marginLeft: '-10%',
        zIndex: '0',
        marginBottom: '-20%',
        paddingBottom: '150px',
        transform: 'rotateZ(-8deg)', */
    },

    topic: {
        backgroundColor: 'white',
        color: 'black',
        zIndex: '1',

        fontSize: '1.2em',
        fontWeight: 'bold',

        padding: '25px',
    },

    cardDetails: {
        backgroundColor: 'white',
        color: 'black',
        zIndex: '1',
        padding: '10px',

        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    mentorPhoto: {
        backgroundImage: (props) => `url(${props.card_img})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 0',
        borderRadius: '100%',
        width: '15%',
        height: '45px',
    },

    mentorDetails: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
    },

    mentorName: {
        fontSize: '0.9em',
        fontWeight: 'bold',
        alignItems: 'flex-start',
    },

    mentorDesg: {
        fontSize: '0.5454545455em',
        color: '#999999',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: 'calc(100% - 20px)',
        alignItems: 'flex-start',
    },

    videoCount: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '15%',
    },

    count: {
        fontSize: '0.9em',
        fontWeight: 'bold',
    },

    countText: {
        fontSize: '0.5454545455em',
        color: '#999999',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
});

export default useStyles;
