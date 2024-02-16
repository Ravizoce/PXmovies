import { ref } from "vue";
var BgImage = ref('src/assets/bg.b54fb72f.jpg'); 

const BGImageChanger = (value)=>{
  BgImage.value = value;
}

export {BgImage ,BGImageChanger};


