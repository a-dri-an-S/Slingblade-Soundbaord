import './styles/pad-styles.css';

const Pad = ({ key, track }) => {
    return ( 
    <div className="sb-pad">
        <button
            className="sb-pad-btn" 
            key={key}
            type="button"
            value="track.name"
            onClick={track.handleClick}
        />
        <label className="sb-pad-label">{track.name}</label>
    </div>
        
    );
}
 
export default Pad;