"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useLogin from "@/hooks/useLogin";
import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import { AccountCircle, LockClockOutlined, PersonPinCircle } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const LoginModel = () => {
  const loginModel = useLogin();

  return (
    <div>
      <Modal
        open={loginModel.isOpen ?? false}
        onClose={() => loginModel.setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            variant="h4"
            component="h4">
            Welcome back
          </Typography>
          <Grid
            container
            py={3}
            gap={3}>
            <Grid
              item
              xs={12}>
              <TextField
                label="UserName"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockClockOutlined />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
            </Grid>
            <Grid
              item
              xs={12}>
              <Button
                variant="contained"
                fullWidth>
                LOGIN
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default LoginModel;
