import {createUseStyles} from 'react-jss'

export const stylesInput = createUseStyles({
    boxContent:{
        height: '100%',
        padding: '20px 40px'
    },
    inputCheckbox:{
        display: 'flex',
        '& div':{
            margin: '0 10px'
        }
    },
    inputs:{
        display: 'flex',
    },
    input50:{
        width: '50%',
        height: 40,
        display: 'flex',
        padding: '10px',
        justifyContent: 'space-between',
        '& input':{
            borderRadius: 3,
            border: '1px solid #d4d4d4',
            width: '48%',
            padding: '10px'
        }
    },
    input100:{
        width: '50%',
        height: 40,
        display: 'flex',
        padding: '10px',
        '& input':{
            borderRadius: 3,
            border: '1px solid #d4d4d4',
            width: '100%',
            padding: '10px'
        }
    },
    inputCustom:{
        width: '50%',
        height: 40,
        display: 'flex',
        padding: '10px',
        '& input:first-child':{
            width: '70%',
            borderRadius: '3px 0px 0px 3px',
            border: '1px solid #d4d4d4',
            padding: '10px'
        },
        '& input':{
            width: '30%',
            borderRadius: '0px 3px 3px 0px',
            border: '1px solid #d4d4d4',
            padding: '10px'
        }
    },
    footer:{
        display: 'flex',
        margin: '0 10px',
        '& p':{
            color: '#b30202',
            fontWeight: 'bold'
        }
    },
    buttonsFooter:{
        marginLeft: 'auto',
        width: '50%',
        '& button':{
            backgroundColor: 'transparent',
            border: 0,
            cursor: 'pointer',
            margin: '0 20px',
            color: 'gray'
        },
        '& button:last-child':{
            backgroundColor: 'red',
            width: '70%',
            padding: '10px 50px',
            cursor: 'pointer',
            color: 'white',
            fontWeight: 'bold',
            margin: '0'
        }
    }
})