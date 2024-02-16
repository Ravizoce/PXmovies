import { ref } from "vue";
var BgImage = ref(''); 

const BGImageChanger = (value)=>{
  console.log('bg set');
  BgImage.value = value;
}

export {BgImage ,BGImageChanger};


