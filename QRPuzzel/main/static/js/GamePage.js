var picture = new Map([["place_piece_1","0"], ["place_piece_2","0"], ["place_piece_3","0"],
                ["place_piece_4","0"], ["place_piece_5","0"], ["place_piece_6","0"],
                ["place_piece_7","0"], ["place_piece_8","0"], ["place_piece_9","0"], ])

document.addEventListener("click", function(div) {
  if (div.target.className=="place_piece") {
      var id_place = div.target.id;
      var checked = 0;
      var radio = document.getElementsByClassName('piece_up');
      for(var i = 0; i < radio.length; i++){
          if(radio[i].checked){
              checked = radio[i];
          }
      }
      document.getElementById(checked.id).checked = false;
      document.getElementById(checked.id).disabled = true;
      div.target.appendChild(document.getElementById(checked.id).parentElement);

      picture.set(id_place, checked.id);
  }

  if (div.target.parentElement.parentElement.parentElement.parentElement.className=="puzzle-field"){
      var id_place = div.target.parentElement.parentElement.parentElement.id
      picture.set(id_place, "0");
      div.target.parentElement.parentElement.querySelector('.piece_up').disabled = false;
      document.getElementById('puzzle-pieces').appendChild(div.target.parentElement.parentElement);

  }

  if(div.target.className == "Myimg"){
      div.target.parentElement.parentElement.querySelector('.piece_up').checked = true;
  }


  var flag = true;
  for(var i = 1; i <= picture.size; i++){
      if(picture.get('place_piece_'+i) != i){
           flag = false;
           break;
      }
  }
  if(flag){
      console.log('Вы выйграли');
  }

});