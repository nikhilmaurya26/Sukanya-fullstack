import { proxy } from "valtio";

const state = proxy({
    intro : true,
    color: '#C6605D',
    isLogoTexture:true,

});

export default state