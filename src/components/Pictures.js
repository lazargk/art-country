import Picture from "./Picture";
import "./Pictures.css";


import p0 from '../img/woking time/101030186_144100303889702_1567678096692958950_n.jpg'
import p1 from '../img/woking time/107325769_276916840053379_5319795344509848641_n.jpg'
import p2 from '../img/woking time/16110935_1461312247220959_299842563265789952_n.jpg'
import p3 from '../img/woking time/93109343_219701706031541_5418992514595971677_n.jpg'
import p4 from '../img/woking time/ckIvfQplzWc.jpg'
import p5 from '../img/woking time/DSC_0008.JPG'
import p6 from '../img/woking time/DSC_0015.JPG'
import p7 from '../img/woking time/DSC_0028.JPG'
import p8 from '../img/woking time/DSC_0031.JPG'

const Pictures = () => {
  return (
    <div className="pictures-container">
      <Picture p={p0}/>
      <Picture p={p1}/>
      <Picture p={p2}/>
      <Picture p={p3}/>
      <Picture p={p4}/>
      <Picture p={p5}/>
      <Picture p={p6}/>
      <Picture p={p7}/>
      <Picture p={p8}/>
    </div>
  );
};

export default Pictures;
