import { createStyles, makeStyles } from '@material-ui/core/styles'
import { customSizes } from '../../../../styles'


export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer',
      height: '2.8rem',
      borderRadius: customSizes.radius,
      '&:hover': {
        backgroundColor: 'rgb(243, 246, 249)'
      }
    },
    signout: {
      display: 'flex',
      alignItems: 'center',
      color: 'rgb(181, 181, 195)'
    },
    hiSpan: {
      fontWeight: '600',
      color: 'rgb(126, 130, 153)'
    },
    letterDiv: {
      width: '35px',
      height: '35px',
      backgroundColor: 'rgb(201, 247, 245)',
      color: 'rgb(27, 197, 189)',
      borderRadius: customSizes.radius,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '16px',
      marginLeft: '.6rem'
    }
  }),
)
