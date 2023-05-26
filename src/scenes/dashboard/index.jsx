import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TABLEAU DE BORD" subtitle="Bienvenue sur votre tableau de bord de la campagne en cours" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}

       <Box className="lien"
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link to = {`/team`} style={{ textDecoration: "none" }} >
          <StatBox className = "./index.css"
            title="9"
            subtitle="Coopératives"
          
          />
          </Link>
        </Box>
       
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Link to = {`/`} style={{ textDecoration: "none" }} >
          <StatBox
            title="210T"
            subtitle="tonnage reçu"
           
          />
          </Link>

        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Link to = {`/`} style={{ textDecoration: "none" }} >

          <StatBox
            title="3500T"
            subtitle="tonnage en cours"

          />
          </Link>

        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
        <Link to = {`/`} style={{ textDecoration: "none" }} >

          <StatBox
            subtitle="Transactions"
          />
         </Link>

        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 7"
          gridRow="span 6"
          backgroundColor={colors.primary[400]}
        >
         <div className="App">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1017297.1807803435!2d-5.07052441180943!3d5.133135238828402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sla%20cote%20d&#39;ivoire%20et%20ses%20cooperatives%20agricoles!5e0!3m2!1sfr!2sci!4v1683905141065!5m2!1sfr!2sci" 
      width="1297" height="950" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Transactions recentes des pisteurs
            </Typography>
          </Box>
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              


              
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {transaction.date}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.time}
                </Typography>
              </Box>
              <Box
                backgroundColor={colors.greenAccent[500]}
                p="5px 10px"
                borderRadius="4px"
              >
                ${transaction.cost}
              </Box>



              
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
             Infos de la campagne en cours
          </Typography>
        </Box>
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
