import{cx as p,dd as C,j as t,af as y,ag as f}from"./index-cVx9Zqte.js";const b=a=>{const{onClose:l,onSuccess:o,open:r,username:e}=a,{enqueueSnackbar:c}=p(),{error:s,mutateAsync:i,reset:u,isLoading:d}=C(e),n=()=>{u(),l()},m=async()=>{await i(),c(`User ${e} has been deleted successfully.`,{variant:"success"}),o&&o(),n()};return t.jsxs(y,{actions:t.jsx(f,{primaryButtonProps:{label:"Delete",loading:d,onClick:m},secondaryButtonProps:{label:"Cancel",onClick:n},style:{padding:0}}),error:s==null?void 0:s[0].reason,onClose:n,open:r,title:"Confirm Deletion",children:["User ",e," will be permanently deleted. Are you sure?"]})};export{b as U};
