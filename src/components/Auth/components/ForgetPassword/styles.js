import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        btn: {
          borderRadius: '.42rem',
          fontWeight: 500,
          height: '3rem',
          width: '7rem',
          margin: '9.75px 13px',
          backgroundColor: 'rgb(54, 153, 255)',
          color: '#fff',
          '&:hover': {
            backgroundColor: 'rgb(44, 143, 246)'
          }
        },
    }),
);
