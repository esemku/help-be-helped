import { createStyles, makeStyles } from '@material-ui/core/styles'
import { customColors } from '../../../styles'


export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '4rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 1.6rem'
    },
    span: {
      color: 'rgb(126, 130, 153)',
      marginRight: '1rem',
      '&:hover': {
        color: customColors.colorBlue
      }
    },
    year: {
      color: 'rgb(181, 181, 195)'
    },
    brand: {
      color: customColors.colorBlue.colorLightBlack,
      marginLeft: '.5rem'
    }
  }),
)
