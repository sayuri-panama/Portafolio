import React, { useState } from "react";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import GitHubIcon from '@mui/icons-material/GitHub';
import BugReportIcon from '@mui/icons-material/BugReport';
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Button,
  IconButton,
  Dialog,
  List,
  ListItem,
  ListItemText,
  Drawer,
  ListItemButton,
  ListItemIcon
} from "@mui/material";
import { GitHub, LinkedIn, Work, ArrowDownward, Menu, Home, Info, ContactMail, Code } from "@mui/icons-material";
import metrobusImg from "./LEVANTAMIENTO.png";
import mobileAppImg from "./Imagen1.jpg";
import profilePic from "./say.JPG";

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenImage = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };


  return (
    <Container maxWidth="md" sx={{ textAlign: "center", minHeight: "100vh", position: "relative" }}>
      {/* Menú lateral */}
      <IconButton
        onClick={() => setMenuOpen(true)}
        sx={{
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 1000,
          color: "#fff",
          backgroundColor: "rgb(170, 125, 234)",
          '&:hover': {
            backgroundColor: "rgb(141, 123, 236)",
          }
        }}
      >
        <Menu fontSize="large" />
      </IconButton>

      {/* Menú Lateral */}
      <Drawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{
          width: 250,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 250,
            background: "linear-gradient(45deg,rgb(170, 125, 234),rgb(141, 123, 236))",
            color: "#fff",
            boxShadow: "2px 0px 10px rgba(0,0,0,0.2)",
            padding: 2,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "'Roboto', sans-serif",
            marginBottom: 4,
          }}
        >
          Menú
        </Typography>
        <List>
          {[
            { text: "Inicio", icon: <Home />, section: "inicio" },
            { text: "Sobre Mí", icon: <Info />, section: "sobremí" },
            { text: "Proyectos", icon: <Work />, section: "proyectos" },
            { text: "Habilidades", icon: <Code />, section: "habilidades" },
            { text: "Contacto", icon: <ContactMail />, section: "contacto" },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item.section)}>
                <ListItemIcon sx={{ color: "#fff", fontSize: "1.5rem" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.text} sx={{ color: "#fff", fontWeight: "bold", fontSize: "1.1rem" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

      </Drawer>

      {/* Inicio */}
      <Box id="inicio" sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box
          sx={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid white",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
            mb: 2,
          }}
        >
          <img src={profilePic} alt="Sayuri Verónica Panamá Segura" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        </Box>
        <Typography variant="h2" fontWeight="bold" sx={{ fontFamily: "Merriweather, serif" }}>
          Sayuri Veronica Panama Segura
        </Typography>

        <Typography variant="h3" color="white" sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "medium" }}>
          Desarrolladora Web | Frontend con Angular e Ionic
        </Typography>
        <IconButton
          onClick={() => scrollToSection("sobremí")}
          sx={{
            mt: 3,
            color: "white",
            animation: "bounce 2s infinite",
            fontSize: "3rem"
          }}
        >
          <ArrowDownward sx={{ fontSize: 80 }} />
        </IconButton>

      </Box>

      {/* Sobre Mí */}
      <Box id="sobremí" sx={{ minHeight: "100vh", py: 5 }}>
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="center"
        >

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <img
              src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWNkMHNkYWk0eGJ4aWtsODFoOWdvenI1cDV5b2o2NGs2NzA0MHp0YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/L8K62iTDkzGX6/giphy.gif"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Grid>


          <Grid
            item
            xs={12}
            md={6}
            sx={{
              textAlign: { xs: "center", md: "left" },
              padding: { xs: "center", md: "0" },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
                color: "#333",
                marginBottom: 2,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              Sobre Mí
            </Typography>
            <Typography
              variant="h6"
              color="textSecondary"
              sx={{
                fontFamily: "'Lato', sans-serif",
                fontWeight: "light",
                fontSize: { xs: "1rem", md: "1.2rem" },
                lineHeight: 1.6,
              }}
            >
              Ingeniera en Telemática recientemente egresada con un alto sentido de adaptación en los entornos en los que me desarrollo.
              Busco enfocar mi carrera profesional en tecnologías digitales que me apasionan, como bases de datos, QA Testing y desarrollo Front-end.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* Proyectos */}
      <Box id="proyectos" sx={{ minHeight: "100vh", py: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            color: "#333",
            marginBottom: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Proyectos
        </Typography>
        <Grid container spacing={3} mt={4} justifyContent="center">
          {/* Proyecto 1 */}
          <Grid item xs={12} md={6}>
            <Card
              onClick={() => handleOpenImage(metrobusImg)}
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={metrobusImg}
                alt="Plataforma Metrobus"
                sx={{ height: "200px", objectFit: "cover", borderRadius: "3px 3px 0 0" }}
              />
              <CardContent sx={{ textAlign: "center", backgroundColor: "#F3E5F5" }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  Plataforma de Gestión del Sistema de Metrobus
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  Una plataforma diseñada para optimizar el sistema de transporte público de la ciudad.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Proyecto 2 */}
          <Grid item xs={12} md={6}>
            <Card
              onClick={() => handleOpenImage(mobileAppImg)}
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={mobileAppImg}
                alt="App Móvil"
                sx={{ height: "200px", objectFit: "cover", borderRadius: "3px 3px 0 0" }}
              />
              <CardContent sx={{ textAlign: "center", backgroundColor: "#F3E5F5" }}>
                <Typography variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
                  Aplicación Móvil de Estimación de Transporte
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  Una app que ayuda a los usuarios a estimar el tiempo de espera en el transporte público.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <img src={selectedImage} alt="Vista ampliada" style={{ width: "100%", height: "auto", borderRadius: "5px" }} />
      </Dialog>

      {/* Habilidades */}
      <Box id="habilidades" sx={{ minHeight: "100vh", py: 5 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            color: "#333",
            marginBottom: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Mis Habilidades
        </Typography>
        <List sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          {[
            { skill: "Desarrollo Frontend (React, Angular, Ionic)", icon: <CodeIcon /> },
            { skill: "Bases de Datos (SQL, MariaDB)", icon: <StorageIcon /> },
            { skill: "Metodologías Ágiles (Scrum)", icon: <BuildIcon /> },
            { skill: "Control de Versiones (Git)", icon: <GitHubIcon /> },
            { skill: "Pruebas de Software y QA", icon: <BugReportIcon /> }
          ].map((item, index) => (
            <ListItem
              key={index}
              sx={{
                backgroundColor: "#ffffff",
                borderRadius: 2,
                boxShadow: 2,
                width: "80%",
                padding: "12px 16px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 6,
                  backgroundColor: "#f3e5f5",
                },
                display: "flex",
                alignItems: "center",
                gap: 2
              }}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.skill}
                sx={{ fontFamily: "'Lato', sans-serif", fontWeight: "500", fontSize: "1.1rem" }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      {/* Contacto */}
      <Box id="contacto" sx={{ minHeight: "100vh", py: 5, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center" }}>

        {/* Título */}
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
            color: "#333",
            marginBottom: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          Contacto
        </Typography>



        {/* Ubicación y Teléfono */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1, mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocationOnIcon color="primary" />
            <Typography>Monterrey, México</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon color="primary" />
            <Typography>+52 5624 6266 15</Typography>
          </Box>
        </Box>

        {/* Botón de correo */}
        <Button variant="contained" color="secondary" href="mailto:sayuri_ps@outlook.es">
          Envíame un correo
        </Button>

      </Box>


      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <img src={selectedImage} alt="Vista ampliada" style={{ width: "100%", height: "auto" }} />
      </Dialog>
    </Container>
  );
}
