import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, TextField, Typography, Box, Button } from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required(),
    password: yup.string().required(),
  })
  .required();

const Home = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setFocus,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(watch("password"));

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Login blog de receitas
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="outlined-basic"
          label="Digite seu email"
          variant="outlined"
          {...register("email")}
          className="input"
          sx={{
            width: 1,
            my: 2,
            borderRadius: 1,
          }}
        />
        <Typography sx={{ color: "info.main" }}>
          {errors.email?.type === "required" && "Digite um email"}
        </Typography>

        <TextField
          id="outlined-basic"
          label="Digite sua senha"
          variant="outlined"
          type="password"
          className="input"
          {...register("password")}
          sx={{
            width: 1,
            my: 2,
            bgcolor: "error.light",
            borderRadius: 1,
          }}
        />
        <Typography sx={{ color: "info.main" }}>
          {errors.password?.type === "required" && "Senha é obrigatória"}
        </Typography>

        <Box className="checkbox">
          <Input type="checkbox" {...register("term")} />
          <Typography>Manter logado</Typography>
        </Box>

        <Button
          variant="contained"
          type="submit"
          className="button"
          sx={{ width: 1, mt: 4, borderRadius: 1 }}
        >
          Logar
        </Button>

        <Button
          variant="outlined"
          className="button"
          sx={{ width: 1, mt: 4, borderRadius: 1 }}
          onClick={() => {
            reset({
              email: "",
              password: "",
              term: "",
            });
          }}
        >
          Limpar campos
        </Button>
      </form>
    </Box>
  );
};

export default Home;
