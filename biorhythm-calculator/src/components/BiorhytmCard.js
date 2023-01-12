import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from 'dayjs';
import { calculateBiorhytms } from "../lib/biorhytms";

function formatDate(isoString) {
    const day = dayjs(isoString);
    return day.format('D MMMM YYYY');
}

function BiorhytmCard(props) {

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

    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Results for {formatedTargetDate}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Physical: {physical} </p>
                <p>Emotional: {emotional}</p>
                <p>Intellectual: {intellectual}</p>
            </IonCardContent>
        </IonCard>
    );
}

export default BiorhytmCard;
