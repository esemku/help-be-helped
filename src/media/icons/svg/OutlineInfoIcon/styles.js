import { createStyles, makeStyles } from '@material-ui/core/styles'
import { customColors } from '../../../../styles'


export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& svg': {
        fill: customColors.colorWarning,
        width: '1rem'
      }
    },
  }),
)
