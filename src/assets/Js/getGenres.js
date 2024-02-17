import { ref } from "vue";
var BgImage = ref(''); 

var search = ref('');

const BGImageChanger = (value)=>{
  BgImage.value = value;
}
const SearchUpdater = (value)=>{
  search.value = value;
}

export {BgImage,search ,BGImageChanger,SearchUpdater};


