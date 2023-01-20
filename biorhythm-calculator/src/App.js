import { IonApp, IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonItem, IonLabel, IonList } from '@ionic/react';
import { useState } from 'react';
import BiorhytmCard from './components/BiorhytmCard';
import { useStoredState } from './hooks/useStoredState'

function App() {

  const currentDate = new Date();
  const dateStr = currentDate.toISOString().slice(0, 'yyyy-mm-dd'.length)

  const [birthDate, setBirthDate] = useStoredState('birthDate', '');
  const birthDatePlaceholder = "Your date of birth ..."
  const birthDateLabel = "Birth date";

  const [targetDate, setTargetDate] = useState(dateStr);
  const targetDatePlaceholder = "Your target date ..."
  const targetDateLabel = "Target date"

  const days = 15;

  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Byorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

        {Boolean(birthDate) && (
            <BiorhytmCard birthDate={birthDate} targetDate={targetDate} range={days}/>
        )}

        <IonList>
          <IonItem>
            <IonLabel position='stacked'>{birthDateLabel} : </IonLabel>
            <IonInput type="date" placeHolder={birthDatePlaceholder} value={birthDate} onIonChange={(event) => setBirthDate(event.detail.value)} />
          </IonItem>  

          <IonItem>
            <IonLabel position='stacked'>{targetDateLabel} : </IonLabel>
            <IonInput type="date" placeHolder={targetDatePlaceholder} value={targetDate} onIonChange={(event) => setTargetDate(event.detail.value)} />
          </IonItem> 
        </IonList>
      </IonContent>
    </IonApp>
  );
}

export default App;
