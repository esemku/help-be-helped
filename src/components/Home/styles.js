import { createStyles, makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex'
    },
    container: {
      width: 'calc(100% - 16.5rem)'
    },
    content: {
      backgroundColor: 'rgb(238, 240, 248)',
      minHeight: 'calc(100vh - 4rem - 4rem)',
      padding: '1.5rem'
    },
  }),
)
