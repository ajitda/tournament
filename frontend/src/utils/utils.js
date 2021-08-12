import { useAuth } from "../context/auth"
import heic2any from "heic2any";

export const brandBg = () =>{
    const {currentUser} = useAuth();
    let brandStyle = {};
   if (currentUser.user_info.brand && currentUser.user_info.brand.color){
        brandStyle = {
            backgroundColor : currentUser.user_info.brand.color
        } 
    } 
    return brandStyle;
}

export const convertHeicToJpg = async(fileName) => {
    const fileNameArr = fileName.name.split(".");
    const rfile = await heic2any({
            blob: fileName,
            toType: "image/jpeg",
            quality: 0.5,
        })
        .then(function (conversionResult) {
            //adding converted picture to the original <input type="file">
            let file = new File([conversionResult], fileNameArr[0]+".jpg",{type:"image/jpeg", lastModified:new Date().getTime()});
            return file;
        })
        .catch(function (x) {
            console.log(x.code);
            console.log(x.message);
        });
    return rfile;
}

export const convertToMinHour = (mins) =>{
    let hours = Math.floor(mins / 60);
    if (hours < 10) hours = '0'+hours.toString();
    let leftMins = (mins - (hours*60));
    if (leftMins < 10) leftMins = '0'+leftMins.toString();
    let times = hours+":"+leftMins;
    return times;
}