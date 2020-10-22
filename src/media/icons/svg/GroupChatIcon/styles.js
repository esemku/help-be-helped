import { createStyles, makeStyles } from '@material-ui/core/styles'
import { customSizes } from '../../../../styles'


export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      height: '2.8rem',
      width: '2.8rem',
      margin: '0 .3rem',
      borderRadius: customSizes.radius,
      '&:hover': {
        backgroundColor: 'rgb(243, 246, 249)'
      },
      '& svg': {
        '& g [fill]': {
          fill: 'rgb(54, 153, 255)'
        }
      }
    },
  }),
)
