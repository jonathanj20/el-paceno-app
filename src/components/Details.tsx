import { MapPin, Clock8} from "lucide-react";

export default function Details(){
    return(
        <div className="p-5 lg:p-0 lg:w-[50%]">
            <div className="text-mainOrange flex gap-1.5">
                <h2>Dirección</h2>
                <MapPin />
            </div>
            <p className="text-lowGray">Lorem Ipsum is simply dummy text of theprinting and typesetting industry.</p>
            <div className="text-mainOrange flex gap-1.5 mt-5">
                <h2>Horario</h2>
                <Clock8 />
            </div>
            <p className="text-lowGray">8 AM a 3 PM </p>
        </div>
    )
}