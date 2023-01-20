import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from 'dayjs';
import { calculateBiorhytms } from "../lib/biorhytms";
import BiorhytmChart from "./BiorhytmChart";

function formatDate(isoString) {
    const day = dayjs(isoString);
    return day.format('D MMMM YYYY');
}

function BiorhytmCard(props) {

    const birthDate = props.birthDate;
    const targetDate = props.targetDate;
    const range = props.range;

    const formatedTargetDate = formatDate(props.targetDate); 
    const formatedBirthDate = formatDate(props.birthDate);
    
    let {physical, emotional, intellectual} = calculateBiorhytms(formatedBirthDate, formatedTargetDate);

    if (isNaN(physical)) {
        physical = 0.0
    }

    if (isNaN(emotional)) {
        emotional = 0.0
    }

    if (isNaN(intellectual)) {
        intellectual = 0.0
    }

    const physicalLineColor = 'green';
    const intellectualLineColor = 'red';
    const emotionalLineColor = 'blue';

    let physicalStyles = {
        color: physicalLineColor,
    };

    let intellectualStyles = {
        color: intellectualLineColor,
    };

    let emotionalStyles = {
        color: emotionalLineColor,
    };

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Results for {formatedTargetDate}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <BiorhytmChart birthDate={birthDate} targetDate={targetDate} range={range} physicalLineColor={physicalLineColor} intellectualLineColor={intellectualLineColor} emotionalLineColor={emotionalLineColor} />
    
                <p style={physicalStyles}>Physical: {physical} </p>
                <p style={emotionalStyles}>Emotional: {emotional}</p>
                <p style={intellectualStyles}>Intellectual: {intellectual}</p>
            </IonCardContent>
        </IonCard>
    );
}

export default BiorhytmCard;
