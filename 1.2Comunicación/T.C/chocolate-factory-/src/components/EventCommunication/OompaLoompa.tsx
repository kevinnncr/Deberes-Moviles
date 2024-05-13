import {FC} from "react";
import './OompaLoompa.css';

interface OompaLoompaProps {
    orders: string;
    onOrderChange: () => void;
}
interface Ompaloompacomun{
    mensaje : string;
    onMensajeChange: ()=> void;
}

// OompaLoompa is the child component that receives the event handler via props
export const OompaLoompaEvent: FC<OompaLoompaProps> = ({ orders, onOrderChange }) => {
  
    return (<div className="backgroundOompaLoompa">
        <h1 className="oompaLoompa">{orders}</h1>
        <button onClick={onOrderChange}>Change Orders</button>
        <button onClick={onOrderChange}>peticion</button>

        <h1>Oompa Loompa Working... 👷🏻‍♀️⚒️👷🏻‍♀️⚒️👷🏻‍♀️⚒️</h1>
    </div>);
};
export const OompaLompaComunucation: FC<Ompaloompacomun>=({mensaje, onMensajeChange})=>{
    return(<div className='communication'>
        <button onClick={onMensajeChange}>peticion</button>

    <h1 className="ompalumbacom">{mensaje}</h1>
    </div>)

}
//tres botones que muestren el ciclo de vida 