import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import leftClick from "../Images/mouseLeftClick.png";
import rightClick from "../Images/mouseRightClick.png";
import mineTutorialPic from "../Images/mineTutorialPic.png";

import { Help } from "@material-ui/icons";
import { Card } from "@material-ui/core";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";

const HtmlTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 250,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const InstructionCard = withStyles((theme) => ({
  card: {
    padding: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
}))(Card);

function StyledSelector(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
      }}
    >
      {/* HELP ICON */}
      <div>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography variant="h5" color="inherit">
                Como jogar
              </Typography>
              <div>
                <Grid
                  container
                  direction="row"
                  justify="flex"
                  alignItems="center"
                  style={{ padding: 0 }}
                >
                  <InstructionCard square>
                    <img style={{ width: 100 }} src={leftClick} />
                    <Typography style={{ padding: 20 }} color="inherit">
                      {
                        "Clique com o botão esquerdo do mouse para selecionar o campo"
                      }
                    </Typography>
                  </InstructionCard>

                  <InstructionCard square>
                    <img style={{ width: 100 }} src={rightClick} />
                    <Typography style={{ padding: 20 }} color="inherit">
                      {
                        "Clique com o botão direito do mouse para marcar uma bandeira "
                      }
                    </Typography>
                  </InstructionCard>
                </Grid>
              </div>
            </React.Fragment>
          }
        >
          <Button>
            <Help color="secondary" fontSize="large" />
          </Button>
        </HtmlTooltip>
      </div>

      {/* HOW TO PLAY */}
      <div>
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography variant="h5" color="inherit">
                Regras:
              </Typography>
              <div>
                <InstructionCard square>
                  <img style={{ width: 100 }} src={mineTutorialPic} />
                  <Typography style={{ padding: 20 }} color="inherit">
                    {
                      "Cada número N significa que são N número de bombas💣 nas células vizinhas! TOME CUIDADO !"
                    }
                  </Typography>
                  <Typography style={{ padding: 20 }} color="inherit">
                    {
                      "Comece revelando células aleatoriamente e tente sinalizar⛳️ Todas as Minas!"
                    }
                  </Typography>
                </InstructionCard>
              </div>
            </React.Fragment>
          }
        >
          <Button>
            <BubbleChartIcon color="secondary" fontSize="large" />
          </Button>
        </HtmlTooltip>
      </div>
    </div>
  );
}

export default StyledSelector;
