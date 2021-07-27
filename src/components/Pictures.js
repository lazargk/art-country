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
import p9 from '../img/woking time/DSC_0043.JPG'
import p10 from '../img/woking time/DSC_0123.JPG'
import p11 from '../img/woking time/DSC_0176.JPG'
import p12 from '../img/woking time/DSC_0178.JPG'
import p13 from '../img/woking time/DSC_0223.JPG'
import p14 from '../img/woking time/dx4I76Yse4I.jpg'
import p15 from '../img/woking time/LX1Nw75o0Pw.jpg'
import p16 from '../img/woking time/SFdAm5kRDlg.jpg'
import p17 from '../img/woking time/U3QZNp0IB3c.jpg'

const Pictures = (imgArr) => {
  

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
      <Picture p={p9}/>
      <Picture p={p10}/>
      <Picture p={p11}/>
      <Picture p={p12}/>
      <Picture p={p13}/>
      <Picture p={p14}/>
      <Picture p={p15}/>
      <Picture p={p16}/>
      <Picture p={p17}/>
    </div>
  );
};

export default Pictures;