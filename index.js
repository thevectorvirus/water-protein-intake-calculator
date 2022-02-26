    const getResult=()=>{
      let enter= document.getElementById('weightInput').value;
      let water = (enter/36).toFixed(2);
      let show=document.getElementById('showResult');

      if(enter==""){
        show.innerHTML="Please enter data";    
      }else{
        show.innerHTML=`You should take ${water}L of water and ${enter}g of protein per day`;
      }
    }
