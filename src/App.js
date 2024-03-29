import './main.css';
import Header from './components/Header'
import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from "./assets/Desktop-ModelS.jpeg";
import Model3 from "./assets/Desktop-Model3.jpeg";
import ModelX from "./assets/Desktop-ModelX.jpeg";
import ModelY from "./assets/Desktop-ModelY.jpeg";
import SolarPanels from "./assets/Desktop-SolarPanels.jpeg";
import SolarRoof from "./assets/Desktop-SolarRoof.jpeg";
import Item from './components/Item';
function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__itemsContainer">
        <Item 
          title="Lowest Cost Solar Panels in America"
          desc="Money-back guarantee"
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnTxt='ORDER NOW'
          leftBtnLink=''
          rightBtnTxt="LEARN MORE"
          rightBtnLink=''
          twoButtons='true'
          first
        />
        <Item 
          title="Model S"
          desc="Starting at $69,420"
          descLink=''
          backgroundImg={ModelS}
          leftBtnLink=''
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title="Model 3"
          desc="Order Online for Touchless Delivery"
          descLink=''
          backgroundImg={Model3}
          leftBtnLink=''
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title="Model X"
          desc="Order Online for Touchless Delivery"
          descLink=''
          backgroundImg={ModelX}
          leftBtnLink=''
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title="Model Y"
          desc="Order Online for Touchless Delivery"
          descLink=''
          backgroundImg={ModelY}
          leftBtnLink=''
          leftBtnTxt='CUSTOM ORDER'
          rightBtnTxt='EXISTING INVENTORY'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title="Solar for New Roofs"
          desc="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnLink=''
          leftBtnTxt='ORDER NOW'
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item 
          title="Accessories"
          descLink=''
          backgroundImg={Accessories}
          leftBtnLink=''
          leftBtnTxt='SHOP NOW'
        />
      </div>
    </div>
  );
}

export default App;
