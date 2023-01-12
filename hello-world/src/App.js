import { IonApp, IonButton, IonIcon, IonToolbar, setupIonicReact, useIonToast, IonHeader, IonContent } from '@ionic/react';
import {play as playIcon} from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Custom styles css here*/
import './theme/variables.css';

setupIonicReact();

function App() {

  const [presentToast] = useIonToast();

  const handleClick = () => {
    console.log('cliqued');
    presentToast({
      message: 'Hello world top',
      duration: 1500,
      position: 'top',
    })
    presentToast({
      message: 'Hello world bottom',
      duration: 1500,
      position: 'bottom',
    })
  }

  //Basic layout of an ionic app
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <h1>My App</h1>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonButton color="primary" onClick={handleClick}>
          <IonIcon icon={playIcon} slot="start" />
          Click me
        </IonButton>
      </IonContent>
    </IonApp>
  );
}

export default App;
