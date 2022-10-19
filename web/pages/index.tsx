import type { NextPage } from 'next'
import { useIndex } from '../src/hooks/pages/useIndex'
import List from '../src/components/List'
import { Box, Button, Dialog, DialogActions, Grid, Snackbar, TextField } from '@mui/material'

const Home: NextPage = () => {
  const {
    teachers,
    name,
    setName,
    email,
    setEmail,
    selectedTeacher,
    setSelectedTeacher,
    registerCourse,
    notification,
    setNotification
  } = useIndex()

  return (
    <>
      <Box sx={{
        backgroundColor: 'secondary.main'
      }}>
        <List
          teachers={teachers}
          onSelect={(teacher => setSelectedTeacher(teacher))}
        />
      </Box>

      <Dialog
        open={selectedTeacher !== null}
        onClose={() => setSelectedTeacher(null)}
        fullWidth={true}
        PaperProps={{
          sx: {
            p: 5
          }
        }}
      >
        <Grid
          container
          spacing={2}
        >
          <Grid item xs={12}>
            <TextField
              label="Digite o nome"
              type="text"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Digite o e-mail"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions
          sx={{
            mt: 5
          }}
        >
          <Button
            onClick={() => setSelectedTeacher(null)}
          >
            Cancelar
          </Button>
          <Button
            onClick={() => registerCourse()}
          >
            Marcar
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        message={notification}
        open={notification.length > 0}
        autoHideDuration={2500}
        onClose={() => setNotification('')}
      />
    </>
  )
}

export default Home
