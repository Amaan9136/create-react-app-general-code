import { createContext, useState } from 'react';
import { SyncLoader } from 'react-spinners';

export const AppContext = createContext({
  appState: false,
  setAppState: () => {},
});

export const Loader = ({ message = "Loading..." }) => (
  <>
    <div className="transparent-background flex-col">
      <SyncLoader color="white" />
      <div className='mt-4'>{message}</div>
    </div>
  </>
);

export default function AppContextProvider({ children }) {
  const [appState, setAppState] = useState({
    model: {
      showModel: false,
      modelNeedInput: false,
      modelMsg: '',
      modelType: '',
    },
    loaderShow: false,
    calendar: {
      showCalendar: false,
      calendarDate: '',
    },
  });
  
  const AppContextValues = {
    appState,
    setAppState,
  };

  return (
    <AppContext.Provider value={AppContextValues}>
      {children}
    </AppContext.Provider>
  );
}
