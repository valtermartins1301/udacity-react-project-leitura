const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 2,
    minHeight: '71vh',
  },
  container: {
    padding: theme.spacing.unit,
  },
});

export default styles;
