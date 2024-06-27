import React from "react";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useDataLayerValue } from "./DataLayer";
import SongRow from "./SongRow";
function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();
  return (
    <div className="body--main">
      <div className="body">
        <Header spotify={spotify} />
        <div className="body__info">
          {/* <img
            src="https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/lRQFNq3gzpxYtOF9E0lD-EAYBKEcWU75DafU3psrxZTxZSHWcEEWTzSYMERD3r1UDEooJwT7br29fZ31HqQ59UiB5sZCeTY_1e_b0YBVYZU=/NDU6NjE6NzFUNTAtNzAtNA=="
            alt=""
          /> */}
          <img src={discover_weekly?.images[0].url} alt="coverpage" />
          <div className="body__infoText">
            <strong>PLaylist</strong>
            <h2>{discover_weekly?.name}</h2>
            <p>{discover_weekly?.description}</p>
          </div>
        </div>
        <div className="body__songs">
          <div className="body__icons">
            <PlayCircleFilledWhiteIcon className="body__shuffle" />
            <AddCircleOutlineIcon fontSize="large" />
            <MoreHorizIcon />
          </div>
          {/* list of songs */}
          {discover_weekly?.tracks.items.map((item) => (
            <SongRow track={item.track} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Body;
