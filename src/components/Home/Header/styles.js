import { createStyles, makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      borderBottom: '1px solid #EBEDF3',
      height: '4rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    container: {
      margin: '0 1rem',
      display: 'flex',
      justifyContent: 'space-between'
    },
  }),
)
