import Pad from './Pad';
import "./styles/grid-styles.css";

const GridPads = ({ tracks }) => {
    return ( 
        <div className="pads-grid">
            {tracks.map((track, i) => {
                return <Pad key={i} track={track}/>
            })}
        </div>
    );
}
 
export default GridPads;